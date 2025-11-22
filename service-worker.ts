// service-worker.ts - Background service worker for API monitoring

import { 
  ApiCallRecord, 
  MonitorState, 
  ContentStreamingStartedMessage,
  ContentStreamingChunkMessage,
  ContentStreamingCompletedMessage,
  StreamingMessageType,
  StreamingMessageBase,
  StreamingStartedMessage,
  StreamingChunkMessage,
  StreamingCompletedMessage,
  HttpResponseData,
} from './types.js';

import { 
  deepseekServiceHandler
} from './request_response_handler/deepseek.js';

import { 
  doubaoServiceHandler
} from './request_response_handler/doubao.js';

// Import the new Doubao Samantha handler
import { 
  doubaoSamanthaServiceHandler
} from './request_response_handler/doubao_samantha.js';

// Import the shared service configuration
import { monitoredServices } from './config.js';

// Map service names to their handlers
const serviceHandlers: { [key: string]: import('./types.js').StreamingServiceHandler } = {
  'deepseek': deepseekServiceHandler,
  'doubao': doubaoServiceHandler,
  'doubao_samantha': doubaoSamanthaServiceHandler
};

/**
 * Global state for the monitor
 */
let monitorState: MonitorState = {
  isMonitoring: true,
  apiRecords: [],
  activeServices: new Map(), // Keep empty as we're not using it in the current unidirectional data flow pattern
  lastUpdated: Date.now()
};
 

// Initialize monitor when extension is installed or started
chrome.runtime.onInstalled.addListener(() => {
  console.log('🔵 [SERVICE] Extension installed');
});

chrome.runtime.onStartup.addListener(() => {
  console.log('🔵 [SERVICE] Extension started');
});


// Listen for connections from content scripts via persistent port connection
// This is the primary method for receiving streaming messages from content script
chrome.runtime.onConnect.addListener((port) => {
  console.log('🔵 [SERVICE] Content script connected:', port.name);
  
  port.onMessage.addListener((message) => {
    console.log('🔵 [SERVICE] Received message via port:', message.type);
    
    // Handle messages from content script via port using switch statement for consistency
    switch (message.type) {
      case StreamingMessageType.STREAMING_STARTED:
        handleStreamingStarted(message);
        break;
        
      case StreamingMessageType.STREAMING_CHUNK:
        handleStreamingChunk(message);
        break;
        
      case StreamingMessageType.STREAMING_COMPLETED:
        handleStreamingCompleted(message);
        break;
        
      default:
        console.log('🔵 [SERVICE] Unknown message type via port:', message.type);
    }
  });
  
  port.onDisconnect.addListener(() => {
    console.log('🔵 [SERVICE] Content script disconnected');
  });
});

// Listen for one-time messages from content script
// This is an alternative method for receiving non-streaming messages from content script
// Note: Only one communication method (port-based or message-based) is typically active at a time
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('🔵 [SERVICE] Received message:', message.type);
  
  // Handle all message types using switch statement for consistency
  switch (message.type) {
    case StreamingMessageType.STREAMING_STARTED:
      handleStreamingStarted(message);
      break;
      
    case StreamingMessageType.STREAMING_CHUNK:
      handleStreamingChunk(message);
      break;
      
    case StreamingMessageType.STREAMING_COMPLETED:
      handleStreamingCompleted(message);
      break;
      
    case 'GET_API_RECORDS':
      sendResponse({ records: getApiRecords() });
      break;
      
    case 'CLEAR_API_RECORDS':
      clearApiRecords().then(() => {
        sendResponse({ success: true });
      });
      return true;
      
    case 'TOGGLE_MONITORING':
      toggleMonitoring().then((isMonitoring) => {
        sendResponse({ isMonitoring });
      });
      return true;
      
    default:
      console.log('🔵 [SERVICE] Unknown message type:', message.type);
  }
});

/**
 * Handle streaming raw data message by routing to appropriate service handler
 * @param message The streaming raw data message
 */
async function handleStreamingChunk(message: ContentStreamingChunkMessage): Promise<void> {
  console.log(`🔄 [${message.service.toUpperCase()}] Received STREAMING_CHUNK message:`, message);
  
  try {
    // Get the appropriate service handler
    const serviceHandler = serviceHandlers[message.service];
    if (!serviceHandler) {
      console.warn(`⚠️  No service handler found for ${message.service}`);
      return;
    }
    
    // Let the service-specific handler process the message and return messages to send
    const messagesToSend = serviceHandler.handleStreamingChunk(message);
    
    // Send the processed messages to the stream server
    if (Array.isArray(messagesToSend)) {
      for (const msg of messagesToSend) {
        await sendStreamingDataToServer(msg);
      }
    } else {
      await sendStreamingDataToServer(messagesToSend);
    }
  } catch (error) {
    console.error(`❌ Error handling STREAMING_CHUNK message for ${message.service}:`, error);
  }
}

/**
 * Save monitor data to Chrome storage
 */
async function saveMonitorData(): Promise<void> {
  // Removed persistent storage saving
  console.log('🔵 [SERVICE] Persistent storage saving disabled');
}

/**
 * Handle streaming request started message
 */
function handleStreamingStarted(message: ContentStreamingStartedMessage): void {
  console.log('🔵 [SERVICE] Handling STREAMING_STARTED message');
  
  // Delegate to service-specific handler based on the service type
  const serviceHandler = serviceHandlers[message.service];
  if (serviceHandler) {
    const processedMessage = serviceHandler.handleStreamingStarted(message);
    
    // Send the processed message to the streaming server
    sendStreamingDataToServer(processedMessage);
  } else {
    console.warn('🔵 [SERVICE] No handler found for service:', message.service);
  }
}

/**
 * Handle streaming completed message
 */
function handleStreamingCompleted(message: ContentStreamingCompletedMessage): void {
  console.log('🔵 [SERVICE] Handling STREAMING_COMPLETED message');
  
  // Delegate to service-specific handler based on the service type
  const serviceHandler = serviceHandlers[message.service];
  if (serviceHandler) {
    const processedMessage = serviceHandler.handleStreamingCompleted(message);
    
    // Send the processed message to the streaming server
    sendStreamingDataToServer(processedMessage);
  } else {
    console.warn('🔵 [SERVICE] No handler found for service:', message.service);
  }
}

/**
 * Send streaming data to external HTTP server
 */
async function sendStreamingDataToServer(data: StreamingMessageBase | StreamingStartedMessage | StreamingCompletedMessage | StreamingChunkMessage | HttpResponseData): Promise<void> {
  console.log('🔵 [SERVICE] Sending data to streaming server:', data.type);
  console.log('🔵 [SERVICE] Data being sent:', JSON.stringify(data, null, 2));
  
  try {
    const response = await fetch('http://localhost:3002/stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    console.log('🔵 [SERVICE] Streaming server response:', response.status);
    
    if (!response.ok) {
      console.error('🔵 [SERVICE] Failed to send streaming data to server:', response.status);
    }
  } catch (error) {
    console.error('🔵 [SERVICE] Error sending streaming data to server:', error);
  }
}

// Get all recorded API calls
function getApiRecords(): ApiCallRecord[] {
  return [...monitorState.apiRecords];
}

// Clear all recorded API calls
async function clearApiRecords(): Promise<void> {
  monitorState.apiRecords = [];
  await saveMonitorData();
}

// Toggle monitoring state
async function toggleMonitoring(): Promise<boolean> {
  monitorState.isMonitoring = !monitorState.isMonitoring;
  await saveMonitorData();
  return monitorState.isMonitoring;
}
