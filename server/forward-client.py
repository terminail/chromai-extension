#!/usr/bin/env python3
"""
WebSocket client to receive data from the forward-server

This client connects to the forward-server's WebSocket endpoint and receives
real-time data broadcasts from the Chrome extension. It automatically saves
all received data to service-specific JSON files when STREAMING_STARTED messages
are received.
"""

import asyncio
import json
import websockets
import logging
import time
from datetime import datetime
from typing import Dict, Any, List, Optional
import argparse
import os

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger("forward-client")

# Server configuration
SERVER_HOST = "localhost"
SERVER_PORT = 3002
WEBSOCKET_URI = f"ws://{SERVER_HOST}:{SERVER_PORT}/ws"

class ServiceDataRecorder:
    """Class to record streaming data to service-specific JSON files"""
    
    def __init__(self):
        self.service_files: Dict[str, List[Dict[Any, Any]]] = {}
        self.start_time: Optional[float] = None
        self.last_save_time: float = time.time()
        self.save_interval: int = 3  # Save every 3 seconds
        self.current_service: Optional[str] = None  # Track the current active service
        
    def start_recording(self):
        """Start recording by setting the start time"""
        self.start_time = time.time()
        
    def add_data(self, data: Dict[Any, Any]):
        """Add data to the collection and save to service-specific file"""
        # Filter out PONG messages as they're just keep-alive messages
        msg_type = data.get("type", "")
        if msg_type == "PONG":
            return
            
        # Extract service from STREAMING_STARTED messages
        if msg_type == "STREAMING_STARTED":
            # For STREAMING_STARTED messages, service is at the top level
            service = data.get("service", "unknown")
            
            # Create or recreate service-specific file when STREAMING_STARTED is received
            if service:
                service_file = f"{service}.json"
                # Recreate the file (clear previous data)
                self.service_files[service_file] = []
                self.current_service = service  # Track the current active service
                logger.info(f"Created/recreated service file: {service_file}")
                
                # Add the STREAMING_STARTED message to the service file
                self.service_files[service_file].append(data)
        else:
            # For other message types, use the current active service
            if self.current_service:
                service_file = f"{self.current_service}.json"
                
                # Initialize the service file if it doesn't exist
                if service_file not in self.service_files:
                    self.service_files[service_file] = []
                
                # Add the raw data as-is without any transformation
                self.service_files[service_file].append(data)
            else:
                # If no current service, check if the message has a service field
                service = data.get("service", "unknown")
                service_file = f"{service}.json"
                
                # Initialize the service file if it doesn't exist
                if service_file not in self.service_files:
                    self.service_files[service_file] = []
                
                # Add the raw data as-is without any transformation
                self.service_files[service_file].append(data)
    
    async def save_service_data(self):
        """Save collected data to service-specific JSON files"""
        for service_file, data in self.service_files.items():
            if data:  # Only save if there's data
                try:
                    # Sort data by timestamp to ensure chronological order
                    # Handle cases where timestamp might be missing
                    def get_timestamp(item):
                        # Try to get timestamp from the item
                        timestamp = item.get('timestamp')
                        if timestamp:
                            # Convert ISO format timestamp to comparable value
                            try:
                                # For ISO format timestamps like "2025-11-22T01:08:46.432Z"
                                return datetime.fromisoformat(timestamp.replace('Z', '+00:00'))
                            except:
                                # If parsing fails, return the string as-is
                                return timestamp
                        # If no timestamp, use a default value that will sort to the end
                        return datetime.max
                    
                    # Sort the data by timestamp
                    sorted_data = sorted(data, key=get_timestamp)
                    
                    with open(f"streaming_data/{service_file}", 'w', encoding='utf-8') as f:
                        json.dump(sorted_data, f, indent=2, ensure_ascii=False)
                    logger.info(f"Data saved to streaming_data/{service_file}")
                    logger.info(f"Total records saved for {service_file}: {len(sorted_data)}")
                except Exception as e:
                    logger.error(f"Error saving data to {service_file}: {e}")
    
    async def periodic_save(self):
        """Periodically save data based on save interval"""
        current_time = time.time()
        if current_time - self.last_save_time >= self.save_interval:
            await self.save_service_data()
            self.last_save_time = time.time()

async def handle_message(message: str, recorder: ServiceDataRecorder):
    """Process incoming messages from the server"""
    try:
        data = json.loads(message)
        msg_type = data.get("type", "UNKNOWN")
        
        # Add data to recorder
        recorder.add_data(data)
        
        logger.info(f"Received message type: {msg_type}")
        
        # Log basic information for all message types without specific handling
        if msg_type == "WELCOME":
            logger.info(f"Connected to server: {data.get('message', '')}")
        elif msg_type == "PONG":
            logger.info("Received PONG response from server")
        else:
            # For all other message types, just log that we received them
            logger.info(f"Processed message of type: {msg_type}")
            
    except json.JSONDecodeError:
        logger.error(f"Failed to parse JSON message: {message}")
    except Exception as e:
        logger.error(f"Error processing message: {e}")

async def send_ping(websocket):
    """Send periodic ping messages to keep connection alive"""
    while True:
        try:
            await websocket.send(json.dumps({"type": "PING"}))
            logger.debug("Sent PING message")
            await asyncio.sleep(30)  # Send ping every 30 seconds
        except Exception as e:
            logger.error(f"Error sending PING: {e}")
            break

def clean_streaming_data_directory():
    """Create streaming_data directory if it doesn't exist"""
    try:
        os.makedirs("streaming_data", exist_ok=True)
        logger.info("Created/verified streaming_data directory")
    except Exception as e:
        logger.error(f"Error creating streaming_data directory: {e}")

async def connect_to_server():
    """Connect to the forward-server and handle messages"""
    logger.info(f"Connecting to WebSocket server at {WEBSOCKET_URI}")
    
    # Create streaming_data directory
    clean_streaming_data_directory()
    
    # Initialize recorder - always create it now
    recorder = ServiceDataRecorder()
    recorder.start_recording()
    
    try:
        async with websockets.connect(WEBSOCKET_URI) as websocket:
            logger.info("Connected to server successfully")
            
            # Start ping task
            ping_task = asyncio.create_task(send_ping(websocket))
            
            # Handle incoming messages
            try:
                async for message in websocket:
                    # Convert message to string if needed
                    message_str = message if isinstance(message, str) else message.decode('utf-8')
                    await handle_message(message_str, recorder)
                    
                    # Periodically save data
                    await recorder.periodic_save()
            except websockets.exceptions.ConnectionClosed:
                logger.info("Connection closed by server")
            except Exception as e:
                logger.error(f"Error receiving messages: {e}")
            finally:
                ping_task.cancel()
                # Save recorded data
                await recorder.save_service_data()
                
    except websockets.exceptions.InvalidURI:
        logger.error(f"Invalid WebSocket URI: {WEBSOCKET_URI}")
    except websockets.exceptions.InvalidHandshake:
        logger.error("Invalid handshake with server")
    except Exception as e:
        logger.error(f"Failed to connect to server: {e}")

async def main():
    """Main entry point"""
    # Parse command line arguments (keep for backward compatibility but ignore --record)
    parser = argparse.ArgumentParser(description="Forward client to receive streaming data from Chrome extension")
    parser.add_argument("--record", "-r", type=str, help="Record streaming data to JSON file (deprecated - now automatic)")
    args = parser.parse_args()
    
    logger.info("Starting WebSocket client")
    logger.info("Make sure the forward-server is running before starting this client")
    
    if args.record:
        logger.info("Note: --record argument is deprecated. Recording is now automatic based on service type.")
    
    try:
        await connect_to_server()
    except KeyboardInterrupt:
        logger.info("Client stopped by user")
    except Exception as e:
        logger.error(f"Client error: {e}")

if __name__ == "__main__":
    asyncio.run(main())