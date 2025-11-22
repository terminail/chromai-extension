# Chrome Extension Chromai

This Chrome extension monitors API communications for specific URLs and records question content, question time, answer content, and answer time. The extension uses a service worker to monitor specific API endpoints for multiple AI services including DeepSeek and Doubao.

## Quick Start
```bash
$ npm install
$ npm run build

$ clear; cd /d/git/chromai-extension; python server/forward-server.py

$ clear; cd /d/git/chromai-extension; python server/forward-client.py
```

## Features

- Monitors HTTP/HTTPS API requests to specific endpoints
- Records question content and timestamp when a request is made
- Records answer content and timestamp when a response is received
- Supports multiple AI service providers with dedicated monitor files
- Modular architecture with separate monitor files for each service
- TypeScript implementation with well-defined data structures
- Popup interface to view and manage recorded API calls
- Special handling for streaming responses (SSE)
- External API access via HTTP REST API and WebSocket
- Real-time streaming data capture and forwarding

## Project Structure

```
chrome-extmonitor/
├── README.md
├── package.json               # NPM package configuration
├── tsconfig.json              # TypeScript configuration
├── manifest.json              # Extension manifest file
├── service-worker.ts          # Main service worker entry point
├── content-script.ts          # Content script for page data capture
├── inject.ts                  # Script injected into web pages for API monitoring
├── popup.html                 # Popup UI HTML
├── popup.ts                   # Popup UI JavaScript
├── build.ts                   # Build script
├── types.ts                   # TypeScript interfaces and types
├── config.ts                  # Configuration for monitored services
├── request_response_handler/  # Individual request/response handler implementations
│   ├── deepseek.ts            # DeepSeek API handler
│   ├── doubao.ts              # Doubao API handler
│   ├── doubao_samantha.ts     # Doubao Samantha API handler
│   └── utils/                 # Utility functions for parsing
│       └── json-deepparser.ts # Deep JSON parsing utility
└── __tests__/                 # Test files
    ├── deepseek.test.ts
    ├── doubao.test.ts
    ├── doubao-samantha.test.ts
    └── ...                    # Other test files

Server components (in server/ directory):
├── server/forward-server.py        # Forwarding server for real-time data (Python)
├── server/forward-client.py        # Client that saves streaming data to files (Python)
├── server/requirements.txt          # Python dependencies for streaming server
```

## Architecture

The extension follows a clear unidirectional data flow architecture with three distinct components:

### Core Component Roles

1. **Inject Script** ([inject.ts](inject.ts)) - **Interceptor**:
   - Runs in the webpage context
   - Intercepts API calls and streaming data at the source
   - Captures request/response data in real-time
   - Sends messages to Content Script using `window.postMessage`

2. **Content Script** ([content-script.ts](content-script.ts)) - **Bridge**:
   - Runs in the page context but has access to Chrome APIs
   - Acts as a communication bridge between the webpage (inject.ts) and the service worker
   - Receives messages from Inject Script via `window.addEventListener('message')`
   - Forwards messages to Service Worker using `chrome.runtime.sendMessage`

3. **Service Worker** ([service-worker.ts](service-worker.ts)) - **Delegator and Forwarder**:
   - Runs in the background with Chrome extension privileges
   - Delegates processing to service-specific handlers (deepseek.ts, doubao.ts)
   - Forwards unified messages to the external streaming server
   - Manages data storage and coordination

```
graph TB
    subgraph "External Applications"
        WebSocketClient["WebSocket Client"]
    end

    subgraph "Forwarding Server (Port 3002)"
        HTTPPost["HTTP POST Endpoint"]
        WebSocketBroadcast["WebSocket Broadcast"]
    end

    subgraph "Chrome Extension"
        subgraph "Web Page"
            InjectScript["Inject Script"]
        end
        
        subgraph "Page Context"
            ContentScript["Content Script"]
        end
        
        subgraph "Background"
            ServiceWorker["Service Worker"]
        end
    end

    WebSocketClient <--> WebSocketBroadcast
    HTTPPost <--> WebSocketBroadcast
    InjectScript --> ContentScript
    ContentScript --> ServiceWorker
    ServiceWorker --> HTTPPost
```

### Component Interactions

The Chrome extension components work together in a strict unidirectional flow:

1. **Inject Script** ([inject.ts](inject.ts)): 
   - Injected directly into web pages
   - Overrides `fetch` and `XMLHttpRequest` to intercept API calls
   - Captures streaming response chunks in real-time
   - Sends messages to Content Script using `window.postMessage`

2. **Content Script** ([content-script.ts](content-script.ts)):
   - Runs in the context of web pages with extension privileges
   - Receives messages from Inject Script via `window.addEventListener('message')`
   - Adds tab context information to messages
   - Forwards messages to Service Worker using `chrome.runtime.sendMessage`

3. **Service Worker** ([service-worker.ts](service-worker.ts)):
   - Runs in the background with full extension privileges
   - Listens for messages from Content Script via `chrome.runtime.onMessage`
   - Processes API requests/responses using WebRequest API
   - Manages data storage and coordination
   - Sends real-time data to external Forwarding Server

### Improved Architecture

The extension now follows an enhanced modular architecture with improved separation of concerns:

1. **Service-Specific Handler Modules**: Each service-specific handler module ([request_response_handler/deepseek.ts](request_response_handler/deepseek.ts), [request_response_handler/doubao.ts](request_response_handler/doubao.ts)) handles its own SSE chunk processing, including:
   - Service-specific request/response parsing
   - Streaming data chunk processing and content extraction
   - Event filtering logic for that specific service

2. **Service Worker Coordination**: The service worker focuses on high-level coordination tasks:
   - Importing and managing handler modules
   - Setting up webRequest listeners
   - Coordinating data flow between components
   - Forwarding processed data to the external server

3. **Extensibility**: This architecture makes it easier to add new services in the future by simply creating a new handler module that follows the same pattern.

## Finalized Data Flow

```
1. User interacts with AI services (DeepSeek, Doubao) in browser
2. Inject Script ([inject.ts](inject.ts)) overrides fetch/XHR and intercepts API requests
3. Inject Script captures streaming response chunks and generates messages
4. Content Script ([content-script.ts](content-script.ts)) receives messages from Inject Script and adds tab context
5. Content Script forwards messages to Service Worker ([service-worker.ts](service-worker.ts))
6. Service Worker receives messages from Content Script and delegates to service-specific handlers
7. Service-specific handlers process requests/responses and extract streaming data
8. Service Worker stores data in memory for popup UI access
9. Service Worker forwards real-time data to Forwarding Server ([server/forward-server.py](server/forward-server.py)) via HTTP POST
10. Forwarding Server broadcasts data to all connected WebSocket clients
11. Forwarding Client ([server/forward-client.py](server/forward-client.py)) receives data and automatically saves to service-specific JSON files in streaming_data/ directory
12. Service-specific files created: streaming_data/deepseek.json, streaming_data/doubao.json, etc.
```

Components:
1. **Inject Script** ([inject.ts](inject.ts)): Overrides browser APIs to capture requests/responses in real-time and sends messages to Content Script
2. **Content Script** ([content-script.ts](content-script.ts)): Relays messages between Inject Script and Service Worker with tab context
3. **Service Worker** ([service-worker.ts](service-worker.ts)): Processes data, manages in-memory storage, and sends to forwarding server
4. **Forwarding Server**: Receives data via HTTP POST and broadcasts to WebSocket clients in real-time
5. **External Applications**: Connect via WebSocket to receive real-time streaming data

## Data Structure

The extension uses well-defined TypeScript interfaces for handling API monitoring data:

```
interface ApiCallRecord {
  id: string;
  url: string;
  method: string;
  question: string | null;  // Renamed from questionContent to question
  questionTime: string; // ISO timestamp
  answerContent: string | null;
  answerTime: string; // ISO timestamp
  statusCode?: number;
  error?: string;
  service: string;
  protocol: 'HTTP' | 'SSE' | 'WebSocket';
  headers?: Record<string, string>;
  responseHeaders?: Record<string, string>;
}

interface MonitorConfig {
  serviceName: string;
  targetUrls: string[];
  apiPatterns: RegExp[];
}

interface MonitorState {
  isMonitoring: boolean;
  apiRecords: ApiCallRecord[];
  activeServices: Map<string, MonitoredService>;
  lastUpdated: number;
}
```

### Design Rules for Q&A Pair Linking

For question/answer pairs with EventStream events, the extension follows these design rules to ensure proper linking:

1. **ID Pattern**: Each Q&A pair is identified by a combination of tab ID and request ID to distinguish between multiple tabs for the same website
2. **Sequence Guarantee**: In one tab, question and answer events are guaranteed to be in sequence
3. **Tab Isolation**: Tab ID is used to ensure proper separation of event streams from different tabs
4. **Consistent ID Generation**: Both webRequest listeners and inject script use consistent ID formats:
   - WebRequest listeners: `${requestId}-${timestamp}`
   - Inject script: `inject-${randomId}-${timestamp}`

This approach ensures that Q&A pairs are correctly linked regardless of which tab they originate from, and that events from different tabs don't get mixed together.

## Monitor Implementation

Each handler file in the [request_response_handler/](request_response_handler/) directory is responsible for handling a specific service:

1. **DeepSeek Handler** ([request_response_handler/deepseek.ts](request_response_handler/deepseek.ts)):
   - Monitors `chat.deepseek.com/api/v0/chat/completion` only
   - Tracks question/answer pairs for DeepSeek API
   - Handles streaming responses (SSE) from the API
   - Captures and processes streaming data chunks
   - Correctly extracts content from complex nested JSON structures including Chinese characters and space characters

2. **Doubao Handler** ([request_response_handler/doubao.ts](request_response_handler/doubao.ts)):
   - Monitors Doubao API endpoints
   - Tracks question/answer pairs for Doubao service
   - Handles different response formats from various Doubao endpoints
   - Properly filters SSE events to only send relevant content to the streaming server

3. **Doubao Samantha Handler** ([request_response_handler/doubao_samantha.ts](request_response_handler/doubao_samantha.ts)):
   - Monitors Doubao Samantha API endpoints (`/samantha/chat/completion`)
   - Handles specialized response formats for the Samantha service
   - Implements service-specific parsing logic

## Service Worker

The [service-worker.ts](service-worker.ts) file serves as the main entry point that:
- Imports all handler modules
- Sets up webRequest listeners
- Processes API calls and records data
- Manages the monitoring state
- Handles communication with the popup UI
- Processes streaming data from content script
- Sends real-time data to external forwarding server

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the extension: `npm run build`
4. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` directory (`d:/git/terminail/chrome-extmonitor/dist`)

## Usage

Once installed, the extension will automatically monitor API calls to the configured endpoints. 

To view the recorded data:
1. Click on the extension icon in the Chrome toolbar
2. The popup will display all recorded API calls with questions and answers
3. Use the controls to toggle monitoring or clear records

Data is stored in memory within the service worker and is accessible to the popup UI.

## External API Access

The extension provides external access to the monitoring data through the Forwarding Server:

### Real-time Streaming via WebSocket

Start the forwarding server:
```bash
npm run fastapi
```

The forwarding server runs on port 3002 and provides:
- HTTP POST endpoint at `http://localhost:3002/stream` for the extension to send data
- WebSocket server at `ws://localhost:3002/ws` for external programs to receive real-time streaming data

### Using the WebSocket Streaming API

To consume real-time streaming data from DeepSeek:

1. **Connect to the WebSocket server**:
   ```javascript
   const ws = new WebSocket('ws://localhost:3002/ws');
   ```

2. **Handle incoming messages**:
   ```javascript
   ws.onmessage = function(event) {
     const message = JSON.parse(event.data);
     
     switch (message.type) {
       case 'WELCOME':
         console.log('Connected to forwarding server');
         break;
         
       case 'STREAMING_STARTED':
         console.log('New streaming request started:', message.record.url);
         break;
         
       case 'STREAMING_CHUNK':
         console.log('Streaming data update:');
         console.log('  URL:', message.record.url);
         console.log('  Service:', message.record.service);
         console.log('  Chunk:', message.chunk);
         // Process the streaming chunk immediately
         processStreamingChunk(message.chunk);
         break;

       default:
         console.log('Unknown message type:', message.type);
     }
   };
   ```

3. **Send ping to keep connection alive** (optional):
   ```javascript
   ws.onopen = function() {
     // Send ping every 30 seconds to keep connection alive
     setInterval(() => {
       ws.send(JSON.stringify({ type: 'PING' }));
     }, 30000);
   };
   ```

### Python WebSocket Client Example

```
import websocket
import json
import threading

def on_message(ws, message):
    data = json.loads(message)
    
    if data.get('type') == 'WELCOME':
        print('Connected to forwarding server')
    elif data.get('type') == 'STREAMING_CHUNK':
        print(f"Streaming chunk received: {data.get('chunk')}")
        # Process the streaming chunk immediately
        process_streaming_chunk(data.get('chunk'))

def on_error(ws, error):
    print(f"WebSocket error: {error}")

def on_close(ws, close_status_code, close_msg):
    print("Disconnected from forwarding server")

def on_open(ws):
    print("Connected to forwarding server")

# Connect to the forwarding server
ws = websocket.WebSocketApp("ws://localhost:3002/ws",
                            on_open=on_open,
                            on_message=on_message,
                            on_error=on_error,
                            on_close=on_close)

# Run in a separate thread
wst = threading.Thread(target=ws.run_forever)
wst.daemon = True
wst.start()

# Keep the main thread alive
try:
    while True:
        pass
except KeyboardInterrupt:
    ws.close()
```

### Message Types

The WebSocket server sends the following message types:

1. **WELCOME**: Sent when a client first connects
   ```json
   {
     "type": "WELCOME",
     "message": "Connected to forwarding server"
   }
   ```

2. **STREAMING_STARTED**: Sent when a new streaming request is initiated
    ```json
    {
      "type": "STREAMING_STARTED",
      "service": "doubao",
      "url": "https://www.doubao.com/api/v3/chat/completions",
      "injectId": "inject-123456-1700000000000",
      "requestBody": {
        // Request payload
      },
      "question": "What is the weather today?",  // Renamed from questionContent to question
      "timestamp": 1700000000000,
      "source": "fetch"
    }
    ```

 3. **STREAMING_CHUNK**: Sent for each chunk of streaming data received
    ```json
    {
      "type": "STREAMING_CHUNK",
      "service": "doubao",
      "url": "https://www.doubao.com/api/v3/chat/completions",
      "injectId": "inject-123456-1700000000000",
      "timestamp": 1700000000100,
      "source": "fetch",
      "data": {
        "rawChunk": "data: {\"id\":\"chatcmpl-123\",\"object\":\"chat.completion.chunk\",...}\n\n"
      }
    }
    ```

4. **PONG**: Sent in response to a PING message
   ```json
   {
     "type": "PONG"
   }
   ```

#### Example Record

```
{
  "type": "STREAMING_STARTED",
  "record": {
    "id": "inject-12345-1700000000000",
    "url": "https://www.doubao.com/samantha/chat/completion",
    "method": "POST",
    "question": "What is the weather today?",  // Renamed from questionContent to question
    "questionTime": "2023-11-15T10:00:00.000Z",
    "answerContent": "",
    "answerTime": "2023-11-15T10:00:00.000Z",
    "service": "doubao",
    "protocol": "SSE",
    "source": "fetch"
  },
  "question_id": "inject-12345-1700000000000"
}
```

## Extension Permissions

The extension requires the following permissions:
- `webRequest`: To intercept and monitor API requests
- `storage`: To save monitoring data
- `activeTab`: To interact with the current tab
- Host permissions for the target API domains

## Development

To add a new monitor for a different service:

1. Create a new file in the [request_response_handler/](request_response_handler/) directory (e.g., [request_response_handler/newservice.ts](request_response_handler/newservice.ts))
2. Implement the monitoring logic for the specific service
3. Export the necessary functions and configuration
4. Import and register the monitor in [service-worker.ts](service-worker.ts)
5. Add the service configuration to [config.ts](config.ts)
6. Create corresponding test files in the [__tests__/](__tests__) directory

## Building

To build the extension:

```bash
npm install
npm run build
```

This will compile all TypeScript files to JavaScript in the `dist/` directory.

For development, you can use the watch mode:

```bash
npm run watch
```

## Running the Python Forwarding Server

To run the Python forwarding server:

1. Install the required Python dependencies:
   ```bash
   pip install -r server/requirements.txt
   ```

2. Run the Python forwarding server directly with Python:
   ```bash   
   $ clear; cd /d/git/chromai-extension; python server/forward-server.py

   $ clear; cd /d/git/chromai-extension; python server/forward-client.py
   ```

The Python forwarding server provides:
- Receives HTTP POST requests at `/stream` endpoint from the extension
- Broadcasts data to all connected WebSocket clients
- Handles WebSocket connections with ping/pong functionality
- Supports CORS for cross-origin requests

### Python WebSocket Client Example

A Python client example is included in `server/forward-client.py` that demonstrates how to connect to the forwarding server and receive real-time data:

```bash
python server/forward-client.py
```

The client will:
- Connect to the WebSocket endpoint at `ws://localhost:3002/ws`
- Receive real-time data broadcasts from the Chrome extension
- Automatically send PING messages to maintain the connection
- Log incoming data to the console
