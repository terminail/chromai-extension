// content-script.ts - Content script to capture API data from web pages

// Add a very obvious console message to verify injection
console.log('=== CONTENT SCRIPT INJECTED ===');
console.log('=== CONTENT SCRIPT INJECTED ===');
console.log('=== CONTENT SCRIPT INJECTED ===');

// Log the current window location
console.log('Content script: Window location:', window.location.href);

// Keep track of whether we've logged the context invalidation message
let hasLoggedContextInvalidation = false;

// Track active streams
let activeStreams = new Map<string, any>();

// Get the tab ID for this content script
let tabId: number | null = null;
chrome.runtime.sendMessage({ type: 'GET_TAB_ID' }, (response) => {
  if (response && response.tabId) {
    tabId = response.tabId;
    console.log('🟢 [CONTENT] Tab ID:', tabId);
  }
});

// Keep track of connection state
let port: chrome.runtime.Port | null = null;
let isPortConnected = false;

// Establish a persistent connection to the background script
function connectToBackground(): void {
  try {
    // Check if extension context is still valid before attempting to connect
    if (typeof chrome === 'undefined' || !chrome.runtime) {
      if (!hasLoggedContextInvalidation) {
        console.log('🟢 [CONTENT] Extension context is not valid, skipping connection attempt');
        hasLoggedContextInvalidation = true;
      }
      return;
    }
    
    // Check if the extension is still installed and context is valid
    if (!chrome.runtime.connect) {
      if (!hasLoggedContextInvalidation) {
        console.log('🟢 [CONTENT] Extension context invalidated, skipping connection attempt');
        hasLoggedContextInvalidation = true;
      }
      isPortConnected = false;
      return;
    }
    
    if (port) {
      port.disconnect();
    }
    
    port = chrome.runtime.connect({ name: 'content-script' });
    isPortConnected = true;
    
    port.onDisconnect.addListener(() => {
      console.log('🟢 [CONTENT] Port disconnected');
      isPortConnected = false;
      // Check if the disconnect was due to context invalidation
      if (chrome.runtime.lastError) {
        console.log('🟢 [CONTENT] Port disconnected due to context invalidation');
        hasLoggedContextInvalidation = false;
      }
    });
    
    console.log('🟢 [CONTENT] Connected to background script via port');
    hasLoggedContextInvalidation = false; // Reset the flag on successful connection
  } catch (error) {
    // Check if this is a context invalidated error
    if (error && typeof error === 'object' && 'message' in error && 
        typeof (error as any).message === 'string' && 
        (error as any).message.includes('Extension context invalidated')) {
      if (!hasLoggedContextInvalidation) {
        console.log('🟢 [CONTENT] Extension context invalidated, cannot connect to background');
        hasLoggedContextInvalidation = true;
      }
    } else {
      console.error('🟢 [CONTENT] Error connecting to background:', error);
    }
    isPortConnected = false;
  }
}

// Initialize the connection
connectToBackground();

/**
 * Listen for messages from injected script and forward to service worker
 * 
 * Messages received from inject.ts:
 * 1. STREAMING_STARTED - When a streaming request is initiated
 *    - Contains: service, url, injectId, requestBody, question, timestamp  // Updated from questionContent to question
 * 2. STREAMING_CHUNK - Raw streaming data chunks
 *    - Contains: service, url, injectId, timestamp, data (url, rawChunk, injectId, source, timestamp)
 * 3. STREAMING_COMPLETED - When streaming is completed
 *    - Contains: service, url, injectId, timestamp, data (url, injectId, timestamp)
 */
window.addEventListener('message', (event: MessageEvent) => {
  
  console.log('🟢 [CONTENT] addEventListener message', event.data.type);

  if (event.source !== window){
    console.log('🟢 [CONTENT] Message source is not window, ignoring');
    return;
  }
  
  // Handle messages from the injected script
  if (event.data.type === 'STREAMING_STARTED' || 
      event.data.type === 'STREAMING_CHUNK' || 
      event.data.type === 'STREAMING_COMPLETED') {
    
    console.log('🟢 [CONTENT] Received message from injected script:', event.data.type);
    
    // Add tab ID to the message if we have it
    if (tabId !== null) {
      event.data.tabId = tabId;
    }
    
    // Track stream activity
    if (event.data.type === 'STREAMING_STARTED') {
      activeStreams.set(event.data.injectId, {
        url: event.data.url,
        service: event.data.service,
        startTime: Date.now()
      });
      console.log('🟢 [CONTENT] Stream started:', event.data.url);
    } else if (event.data.type === 'STREAMING_COMPLETED') {
      activeStreams.delete(event.data.data?.url);
      console.log('🟢 [CONTENT] Stream ended:', event.data.data?.url);
    }

    // Try to send via port first
    if (isPortConnected && port) {
      try {
        port.postMessage(event.data);
        console.log('🟢 [CONTENT] Message sent via port:', event.data.type);
        return;
      } catch (error) {
        // Check if this is a context invalidated error
        if (error && typeof error === 'object' && 'message' in error && 
            typeof (error as any).message === 'string' && 
            (error as any).message.includes('Extension context invalidated')) {
          if (!hasLoggedContextInvalidation) {
            console.log('🟢 [CONTENT] Extension context invalidated, cannot send via port');
            hasLoggedContextInvalidation = true;
          }
        } else {
          console.error('🟢 [CONTENT] Error sending via port:', error);
        }
        isPortConnected = false;
        port = null; // Clear the port reference
      }
    }
    
    // Fallback to sendMessage if port is not available
    try {
      // Check if extension context is still valid
      if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.sendMessage) {
        if (!hasLoggedContextInvalidation) {
          console.log('🟢 [CONTENT] Extension context is no longer valid, cannot send message');
          hasLoggedContextInvalidation = true;
        }
        return;
      }
      
      // Reset the context invalidation flag if context is valid
      hasLoggedContextInvalidation = false;
      
      // Forward to service worker
      console.log('🟢 [CONTENT] Forwarding message to service worker:', event.data.type);
      chrome.runtime.sendMessage(event.data, (response) => {
        if (chrome.runtime.lastError) {
          // Check if this is a context invalidated error
          if (chrome.runtime.lastError.message && 
              chrome.runtime.lastError.message.includes('Extension context invalidated')) {
            if (!hasLoggedContextInvalidation) {
              console.log('🟢 [CONTENT] Extension context invalidated during sendMessage');
              hasLoggedContextInvalidation = true;
            }
          } else {
            console.error('🟢 [CONTENT] Error sending message to service worker:', chrome.runtime.lastError.message);
          }
          // Don't log the full error as it might contain sensitive information
        } else {
          console.log('🟢 [CONTENT] Message forwarded to service worker successfully');
        }
      });
    } catch (error) {
      // Check if this is a context invalidated error
      if (error && typeof error === 'object' && 'message' in error && 
          typeof (error as any).message === 'string' && 
          (error as any).message.includes('Extension context invalidated')) {
        if (!hasLoggedContextInvalidation) {
          console.log('🟢 [CONTENT] Extension context invalidated, cannot send message');
          hasLoggedContextInvalidation = true;
        }
      } else {
        console.error('🟢 [CONTENT] Error sending message:', error);
      }
      
      // Try to reconnect only if it's not a context invalidation error
      if (!hasLoggedContextInvalidation) {
        console.log('🟢 [CONTENT] Attempting to reconnect to background');
        connectToBackground();
      }
    }
  }
});

/**
 * Inject monitoring script into page context
 */
function injectMonitoringScript(): void {
  console.log('🟢 [CONTENT] Injecting monitoring script');
  try {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('inject.js');
    script.onload = function() {
      console.log('🟢 [CONTENT] inject.js script loaded successfully');
      // Remove the script element after loading
      script.remove();
    };
    script.onerror = function() {
      console.error('🟢 [CONTENT] Failed to load inject.js script');
    };
    (document.head || document.documentElement).appendChild(script);
    console.log('🟢 [CONTENT] inject.js script injection requested');
  } catch (error) {
    console.error('🟢 [CONTENT] Error injecting monitoring script:', error);
  }
}

// Initialize
console.log('🟢 [CONTENT] Initializing');
injectMonitoringScript();

console.log('API Monitor Content Script loaded');
console.log('=== CONTENT SCRIPT LOADED ===');
console.log('=== CONTENT SCRIPT LOADED ===');
console.log('=== CONTENT SCRIPT LOADED ===');