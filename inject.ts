// inject.ts - Injected script to capture API streaming data from web pages
// This script runs in the page context and monitors XHR/fetch requests to AI services
//
// Security Note: All window.postMessage() calls use the default target origin of "/"
// which restricts messages to same-origin targets only, providing security by default.

(function () {
  'use strict';

  console.log(`🔴 [INJECT] Initializing API monitoring in ${window.location.hostname}`);

  // Track active streams
  let activeStreams = new Map<string, any>();
  let isMonitoring = false;

  // Enum for streaming message types shared across components
  enum StreamingMessageType {
    STREAMING_STARTED = 'STREAMING_STARTED',
    STREAMING_CHUNK = 'STREAMING_CHUNK',
    STREAMING_COMPLETED = 'STREAMING_COMPLETED'
  }

  // Generated TypeScript interfaces for message types (since we can't import from types.ts)
  // These interfaces are generated from types.ts by build.ts and placed in dist/inject-interfaces.ts
  // DO NOT EDIT MANUALLY - edit types.ts and run 'npm run build' instead
  // START GENERATED INTERFACES
  interface InjectMessageBase {
    type: StreamingMessageType;
    service: string;
    url: string;
    injectId: string;  // Use injectId for clarity and to avoid ambiguity
    timestamp: number;
    source: 'xhr' | 'fetch';
  }

  interface InjectStreamingRequestStartedMessage extends InjectMessageBase {
    type: StreamingMessageType.STREAMING_STARTED;
    requestBody?: any;
    question: string;  // Renamed from questionContent to question
  }

  interface InjectStreamingChunkDataMessage extends InjectMessageBase {
    type: StreamingMessageType.STREAMING_CHUNK;
    data: {
      rawChunk: string;
    };
  }

  interface InjectStreamingCompletedDataMessage extends InjectMessageBase {
    type: StreamingMessageType.STREAMING_COMPLETED;
    data: {
      // No additional fields needed as url, injectId, and timestamp are in the base interface
    };
  }
  // END GENERATED INTERFACES

  // Service configuration for determining what to intercept
  // This configuration is generated from config.ts by build.ts and placed in dist/monitored-services.ts
  // DO NOT EDIT MANUALLY - edit config.ts and run 'npm run build' instead
  // START GENERATED CONFIG
  interface MonitoredServiceConfig {
    name: string;
    baseUrl: string;
    requestPatterns: string[];
    serviceName?: string;
  }

  // Define the services we want to monitor
  // This configuration is generated from config.ts by build.ts
  const monitoredServices: MonitoredServiceConfig[] = [
    {
      name: 'DeepSeek',
      serviceName: 'deepseek',
      baseUrl: 'chat.deepseek.com',
      requestPatterns: [
        'https://chat.deepseek.com/api/v0/chat/completion*'
      ]
    },
    {
      name: 'Doubao',
      serviceName: 'doubao',
      baseUrl: 'www.doubao.com',
      requestPatterns: [
        'https://www.doubao.com/api/v3/chat/completions*',
        'https://www.doubao.com/api/v3/completions*',
        'https://www.doubao.com/chat/completion*'
      ]
    },
    {
      name: 'Doubao Samantha',
      serviceName: 'doubao_samantha',
      baseUrl: 'www.doubao.com',
      requestPatterns: [
        'https://www.doubao.com/samantha/chat/completion*'
      ]
    }
  ];
  // END GENERATED CONFIG

  // Generate a consistent base record ID for inject script
  function generateInjectId(): string {
    const requestId = `inject-${Math.floor(Math.random() * 1000000)}`;
    return `${requestId}-${Date.now()}`;
  }

  // Start monitoring when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startMonitoring);
  } else {
    startMonitoring();
  }

  function startMonitoring() {
    if (isMonitoring) return;
    isMonitoring = true;

    // Override fetch to detect EventStream requests
    proxyFetch();

    // Override XMLHttpRequest to detect streaming requests
    proxyXMLHttpRequest();

    // Optional: Add if you need WebSocket monitoring
    // See proxyWebSockets() in config.ts
    
    // Optional: Add if you need EventSource monitoring  
    // See proxyEventSource() in config.ts

    console.log('🔴 [INJECT] API monitoring injected and active');
  }

  // Override fetch to detect EventStream requests
  function proxyFetch() {
    const originalFetch = window.fetch;

    window.fetch = function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;

      // Check if this might be a streaming request
      if (isStreamingEndpointForRequestPatterns(url)) {
        console.log(`🔴 [INJECT] Fetch streaming request detected: ${url}`);

        // Notify about potential stream start and get injectId
        const injectId = notifyStreamStart(url, init?.body, 'fetch');

        return originalFetch.call(this, input, init).then(response => {
          const responseUrl = response.url || url;
          const contentType = response.headers.get('content-type');
          const isSSE = contentType && contentType.includes('text/event-stream');

          // Process streaming responses
          if (isStreamingEndpointForRequestPatterns(responseUrl) && isSSE) {
            console.log(`🔴 [INJECT] Fetch SSE stream detected: ${responseUrl}`);
            processSSEStream(response.clone(), injectId);
          }

          return response;
        });
      }

      return originalFetch.call(this, input, init);
    };
  }

  // Override XMLHttpRequest to detect streaming requests
  function proxyXMLHttpRequest() {
    const originalXHR = window.XMLHttpRequest;

    // Create custom XMLHttpRequest constructor
    function CustomXMLHttpRequest(): XMLHttpRequest {
      const xhr = new originalXHR();
      const originalOpen = xhr.open;
      const originalSend = xhr.send;

      let url: string = '';
      let method: string = 'GET';
      let requestBody: any;
      let isStreamingRequest = false;

      xhr.open = function (methodParam: string, urlParam: string | URL, async: boolean = true, username?: string | null, password?: string | null): void {
        method = methodParam;
        url = typeof urlParam === 'string' ? urlParam : urlParam.toString();

        console.log(`🔴 [INJECT] XHR open called with URL: ${url}`);

        // Check if this might be a streaming request
        if (isStreamingEndpointForRequestPatterns(url)) {
          console.log(`🔴 [INJECT] XHR Streaming request detected in open: ${url}`);
          isStreamingRequest = true;
        }

        return originalOpen.call(this, methodParam, urlParam, async, username, password);
      };

      xhr.send = function (body: any): void {
        requestBody = body;

        // If this is a streaming request, notify about stream start and set up monitoring
        if (isStreamingRequest) {
          console.log(`🔴 [INJECT] Notifying stream start for: ${url}`);
          const injectId = notifyStreamStart(url, requestBody, 'xhr');
          console.log(`🔴 [INJECT] Setting up streaming monitoring for: ${url}`);
          monitorXHRStreaming(xhr, injectId);
        }

        return originalSend.call(this, body);
      };

      return xhr;
    }

    // Apply the XHR override
    // @ts-ignore
    window.XMLHttpRequest = CustomXMLHttpRequest;
  }

  // Check if URL is a streaming endpoint by comparing against service request patterns
  // This function checks if the given URL matches any of the configured service patterns
  // defined in config.ts (e.g., 'https://chat.deepseek.com/api/v0/chat/completion*' for DeepSeek)
  function isStreamingEndpointForRequestPatterns(url: string): boolean {
    // Convert relative URLs to absolute URLs using the current page's origin
    let absoluteUrl = url;
    if (url.startsWith('/')) {
      // For relative URLs, prepend the current origin
      absoluteUrl = window.location.origin + url;
    }
    
    // Check each monitored service
    for (const service of monitoredServices) {
      // Check if the absolute URL contains the service's base URL
      if (absoluteUrl.includes(service.baseUrl)) {
        // Check if the URL matches any of the service's request patterns
        // Compares against service.requestPatterns from config.ts
        for (const pattern of service.requestPatterns) {
          // Handle wildcard patterns
          if (pattern.endsWith('*')) {
            const prefix = pattern.slice(0, -1); // Remove the '*'
            // Check both the absolute URL and the original URL (for relative URLs)
            if (absoluteUrl.startsWith(prefix) || url.startsWith(prefix)) {
              return true;
            }
          } else {
            // Exact match
            if (absoluteUrl === pattern || url === pattern) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  // Notify about stream start
  // Sends STREAMING_STARTED message to content-script.ts
  function notifyStreamStart(url: string, requestBody: any, source: 'xhr' | 'fetch'): string {
    const injectId = generateInjectId();
    const service = getServiceFromUrl(url);
    
    // Pass the raw request body to be processed by service-specific handlers
    // Set a placeholder for question - will be extracted by service handlers
    const question = 'Unknown question';

    console.log(`🔴 [INJECT] STREAM STARTED - InjectId: ${injectId}`);

    // Store complete context with injectId
    activeStreams.set(injectId, {
      url: url,
      service: service,
      startTime: Date.now(),
      requestBody: requestBody
    });

    // Notify content script about streaming request using explicit type annotation
    // Message type: STREAMING_STARTED
    const message: InjectStreamingRequestStartedMessage = {
      type: StreamingMessageType.STREAMING_STARTED,
      service: service,
      url: url,
      injectId: injectId,  // Use injectId for clarity and to avoid ambiguity
      requestBody: requestBody,
      question: question,
      timestamp: Date.now(),
      source: source
    };

    // Send message to content-script.ts
    window.postMessage(message);

    return injectId;
  }

  // Monitor XHR streaming data using onprogress for real-time data
  // Sends STREAMING_CHUNK messages to content-script.ts
  function monitorXHRStreaming(xhr: any, injectId: string) {
    const streamInfo = activeStreams.get(injectId);
    if (!streamInfo) {
      console.error(`🔴 [INJECT] No stream info found for injectId: ${injectId}`);
      return;
    }

    const { url, service } = streamInfo;
    let buffer = '';

    console.log(`🔴 [INJECT] Starting XHR streaming monitoring for injectId: ${injectId}`);

    // Use onprogress for real-time data chunks
    xhr.onprogress = function (event: ProgressEvent) {
      try {
        const currentResponseText = xhr.responseText;

        // Only process new data since last time
        if (currentResponseText.length > buffer.length) {
          const newData = currentResponseText.slice(buffer.length);
          buffer = currentResponseText;

          console.log(`🔴 [INJECT] XHR data chunk for ${injectId}, length: ${newData.length}`);

          // Forward raw chunk to content-script for processing using explicit type annotation
          // Message type: STREAMING_CHUNK
          const message: InjectStreamingChunkDataMessage = {
            type: StreamingMessageType.STREAMING_CHUNK,
            service: service,
            url: url,
            injectId: injectId,  // Use injectId for clarity and to avoid ambiguity
            data: {
              rawChunk: newData
            },
            timestamp: Date.now(),
            source: 'xhr'
          };

          // Send message to content-script.ts
          window.postMessage(message);
        }
      } catch (e) {
        console.warn('🔴 [INJECT] Error in XHR onprogress:', e);
      }
    };

    // Use onreadystatechange only for completion
    const originalOnReadyStateChange = xhr.onreadystatechange;
    xhr.onreadystatechange = function () {
      // Only handle completion
      if (xhr.readyState === 4) {
        console.log(`🔴 [INJECT] XHR streaming completed for injectId: ${injectId}`);

        // Send completion message using explicit type annotation
        // Message type: STREAMING_COMPLETED
        const message: InjectStreamingCompletedDataMessage = {
          type: StreamingMessageType.STREAMING_COMPLETED,
          service: service,
          url: url,
          injectId: injectId,  // Use injectId for clarity and to avoid ambiguity
          timestamp: Date.now(),
          source: 'xhr',
          data: {}
        };

        // Send message to content-script.ts
        window.postMessage(message);

        // Clean up only on normal completion
        activeStreams.delete(injectId);
      }

      // Call original onreadystatechange if it exists
      if (originalOnReadyStateChange) {
        // @ts-ignore
        originalOnReadyStateChange.apply(this, arguments as any);
      }
    };
  }


  // Process SSE stream using proper Streams API
  // Sends STREAMING_CHUNK and STREAMING_COMPLETED messages to content-script.ts
  function processSSEStream(response: Response, injectId: string): void {
    const streamInfo = activeStreams.get(injectId);
    if (!streamInfo) {
      console.error(`🔴 [INJECT] No stream info found for injectId: ${injectId}`);
      return;
    }

    const { url, service } = streamInfo;
    const reader = response.body?.getReader();

    if (!reader) {
      console.error(`🔴 [INJECT] No reader available for stream: ${url}`);
      return;
    }

    const decoder = new TextDecoder();

    console.log(`🔴 [INJECT] Starting SSE stream processing for injectId: ${injectId}`);

    const processStream = async () => {
      try {
        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            console.log(`🔴 [INJECT] SSE stream completed for injectId: ${injectId}`);

            // Send completion message using explicit type annotation
            // Message type: STREAMING_COMPLETED
            const message: InjectStreamingCompletedDataMessage = {
              type: StreamingMessageType.STREAMING_COMPLETED,
              service: service,
              url: url,
              injectId: injectId,  // Use injectId for clarity and to avoid ambiguity
              timestamp: Date.now(),
              source: 'fetch',
              data: {}
            };

            // Send message to content-script.ts
            window.postMessage(message);

            // Clean up only on normal completion
            activeStreams.delete(injectId);
            break;
          }

          // Process the chunk
          const chunk = decoder.decode(value, { stream: true });
          console.log(`🔴 [INJECT] SSE data chunk for ${injectId}, length: ${chunk.length}`);

          // Forward raw chunk to content-script for processing using explicit type annotation
          // Message type: STREAMING_CHUNK
          const message: InjectStreamingChunkDataMessage = {
            type: StreamingMessageType.STREAMING_CHUNK,
            service: service,
            url: url,
            injectId: injectId,
            data: {
              rawChunk: chunk
            },
            timestamp: Date.now(),
            source: 'fetch'
          };

          // Send message to content-script.ts
          // A target origin can be specified using the targetOrigin member of options.
          // If not provided, it defaults to "/". This default restricts the message to same-origin targets only.
          window.postMessage(message);
        }
      } catch (error) {
        console.error(`🔴 [INJECT] Error processing SSE stream for injectId: ${injectId}`, error);

        // Only remove from activeStreams on error if we're certain the stream is finished
        // Errors might be temporary, and the stream could continue or be cleaned up through other mechanisms
        // Let the normal completion flow handle the cleanup!
      }
    };

    processStream();
  }


  /**
   * Proxy WebSocket connections for monitoring
   * Note: This is typically NOT needed for AI chat APIs which use HTTP streaming
   */
  function proxyWebSockets(): void {
    // Placeholder for WebSocket monitoring implementation
    // Uncomment and implement if you specifically need to monitor WebSocket connections
    /*
    const originalWebSocket = window.WebSocket;
    
    // @ts-ignore
    window.WebSocket = function(url: string, protocols?: string | string[]) {
      console.log('🔴 [INJECT] WebSocket connection attempt to:', url);
      
      // Create the WebSocket instance
      const ws = new originalWebSocket(url, protocols);
      
      // Add monitoring hooks
      const originalSend = ws.send;
      ws.send = function(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
        console.log('🔴 [INJECT] WebSocket send:', data);
        // Forward to monitoring system if needed
        return originalSend.call(this, data);
      };
      
      return ws;
    };
    */
  }

  /**
   * Proxy EventSource connections for monitoring
   * Note: This is typically NOT needed as fetch/XHR interception covers SSE
   */
  function proxyEventSource(): void {
    // Placeholder for EventSource monitoring implementation
    // Uncomment and implement if you specifically need to monitor EventSource connections
    /*
    const originalEventSource = window.EventSource;
    
    // @ts-ignore
    window.EventSource = function(url: string, eventSourceInitDict?: EventSourceInit) {
      console.log('🔴 [INJECT] EventSource connection attempt to:', url);
      
      // Create the EventSource instance
      const es = new originalEventSource(url, eventSourceInitDict);
      
      // Add monitoring hooks if needed
      return es;
    };
    */
  }

  // Determine service based on URL
  function getServiceFromUrl(url: string): string {
    // Convert relative URLs to absolute URLs using the current page's origin
    let absoluteUrl = url;
    if (url.startsWith('/')) {
      // For relative URLs, prepend the current origin
      absoluteUrl = window.location.origin + url;
    }
    
    // Check each monitored service
    for (const service of monitoredServices) {
      // Check if the absolute URL contains the service's base URL
      if (absoluteUrl.includes(service.baseUrl)) {
        // Check if the URL matches any of the service's request patterns
        // Compares against service.requestPatterns from config.ts
        for (const pattern of service.requestPatterns) {
          // Handle wildcard patterns
          if (pattern.endsWith('*')) {
            const prefix = pattern.slice(0, -1); // Remove the '*'
            // Check both the absolute URL and the original URL (for relative URLs)
            if (absoluteUrl.startsWith(prefix) || url.startsWith(prefix)) {
              // Return the service name as defined in the configuration
              return service.serviceName || service.name.toLowerCase();
            }
          } else {
            // Exact match
            if (absoluteUrl === pattern || url === pattern) {
              // Return the service name as defined in the configuration
              return service.serviceName || service.name.toLowerCase();
            }
          }
        }
      }
    }

    return 'unknown';
  }

  
  console.log('🔴 [INJECT] Script injection completed');
})();