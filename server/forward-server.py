#!/usr/bin/env python3
"""
forward-server.py - Bridge server that logs data from Chrome extension and broadcasts to WebSocket clients

This server acts as a bridge between the Chrome extension and external applications:
1. Receives data from the extension via HTTP POST
2. Logs all received data for debugging
3. Broadcasts received data to all connected WebSocket clients
"""

import json
import logging
import os
import uvicorn
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request, HTTPException
from fastapi.responses import JSONResponse, PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import Set, Dict, Any
import traceback

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger("forward-server")

# Store connected WebSocket clients
clients: Set[WebSocket] = set()

# Port for the server (default to 3002)
PORT = int(os.environ.get("PORT", 3002))

# Create FastAPI app
app = FastAPI(title="Chrome Extension Bridge Server")

# Add CORS middleware to allow requests from the extension
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", response_class=PlainTextResponse)
async def root():
    """Root endpoint - simple health check"""
    return "Chrome Extension Bridge Server - Ready to receive data from extension"

@app.post("/stream")
async def handle_extension_data(request: Request):
    """
    Handle data forwarded from the Chrome extension service worker
    
    This endpoint receives both streaming data and regular HTTP data from the extension,
    logs it for debugging, and broadcasts it to all connected WebSocket clients.
    """
    try:
        # Read the request body
        body = await request.body()
        data = json.loads(body.decode('utf-8'))
        
        # Log the received data for debugging
        logger.info(f"=== RECEIVED DATA FROM EXTENSION ===")
        logger.info(f"Data type: {data.get('type', 'UNKNOWN')}")
        logger.info(f"Full data: {json.dumps(data, indent=2)}")
        logger.info("=" * 40)
        
        # Broadcast to all WebSocket clients
        await broadcast_to_clients(data)
        
        return JSONResponse({"success": True})
    except json.JSONDecodeError as e:
        logger.error(f"Invalid JSON received: {e}")
        raise HTTPException(status_code=400, detail="Invalid JSON")
    except Exception as e:
        logger.error(f"Error processing extension data: {e}")
        logger.error(traceback.format_exc())
        raise HTTPException(status_code=500, detail="Internal server error")

@app.websocket("/ws")
async def websocket_handler(websocket: WebSocket):
    """Handle WebSocket connections from external applications"""
    await websocket.accept()
    logger.info("New WebSocket client connected")
    clients.add(websocket)
    
    # Send welcome message
    try:
        await websocket.send_text(json.dumps({"type": "WELCOME", "message": "Connected to bridge server"}))
    except Exception as e:
        logger.error(f"Error sending welcome message: {e}")
        clients.discard(websocket)
        return
    
    try:
        while True:
            # Handle messages from client (keep-alive ping/pong)
            data = await websocket.receive_text()
            try:
                parsed_data = json.loads(data)
                logger.debug(f"Received message from client: {parsed_data}")
                
                # Handle ping messages
                if parsed_data.get("type") == "PING":
                    await websocket.send_text(json.dumps({"type": "PONG"}))
            except json.JSONDecodeError:
                logger.warning("Invalid JSON message from client")
            except Exception as e:
                logger.error(f"Error processing client message: {e}")
    except WebSocketDisconnect:
        logger.info("WebSocket client disconnected")
    except Exception as e:
        logger.error(f"WebSocket error: {e}")
    finally:
        clients.discard(websocket)

async def broadcast_to_clients(data: Dict[str, Any]) -> None:
    """Broadcast data to all connected WebSocket clients"""
    if not clients:
        logger.debug("No WebSocket clients connected, skipping broadcast")
        return
    
    message = json.dumps(data)
    disconnected_clients = []
    
    for client in clients:
        try:
            await client.send_text(message)
            logger.debug(f"Broadcast data to WebSocket client")
        except Exception as e:
            logger.error(f"Error broadcasting to client: {e}")
            disconnected_clients.append(client)
    
    # Remove disconnected clients
    for client in disconnected_clients:
        clients.discard(client)

@app.exception_handler(404)
async def not_found_handler(request, exc):
    """Handle all other requests"""
    return JSONResponse({"error": "Not found"}, status_code=404)

if __name__ == "__main__":
    logger.info(f"Starting Chrome Extension Bridge Server on port {PORT}")
    logger.info("Endpoints:")
    logger.info(f"  POST http://localhost:{PORT}/stream - Receive data from extension")
    logger.info(f"  WebSocket ws://localhost:{PORT}/ws - Connect external applications")
    
    # Run the server
    uvicorn.run(
        "forward-server:app",
        host="localhost",
        port=PORT,
        log_level="info",
        reload=False
    )