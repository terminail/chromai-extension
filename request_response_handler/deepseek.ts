import { 
  ApiCallRecord, 
  MonitoredServiceConfig, 
  StreamingServiceHandler, 
  DeepSeekRequestPayload, 
  StreamingMessageType,
  ContentStreamingStartedMessage,
  StreamingStartedMessage,
  ContentStreamingChunkMessage,
  StreamingChunkMessage,
  ContentStreamingCompletedMessage,
  StreamingCompletedMessage
} from '../types.js';
import { monitoredServices } from '../config.js';
import { deepParseJSON } from '../utils/json-deepparser.js';

// Interface for parsed SSE event (defined locally since each website has different formats)
interface ParsedSSEEvent {
  id?: string;
  event?: string;
  data?: string;
}

// Find the DeepSeek configuration in the centralized config
const deepseekConfig = monitoredServices.find(service => service.name === 'DeepSeek')!;

// Convert string patterns to RegExp for API pattern matching
const apiPatterns = deepseekConfig.requestPatterns?.map(pattern => new RegExp(pattern)) || [];

// Export the service handler
export const deepseekServiceHandler: StreamingServiceHandler = {
  /**
   * Handle DeepSeek streaming request started message
   * Service-specific handler that matches the signature of handleStreamingStarted in service-worker.ts
   * @param message The streaming request started message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingStarted(message: ContentStreamingStartedMessage): StreamingStartedMessage {
    // DeepSeek-specific processing
    console.log('🔵 [DEEPSK] Handling STREAMING_STARTED message');
    
    // Extract question content from request body if available
    let question = 'Unknown question';
    try {
      if (message.requestBody) {
        question = extractQuestionContentFromDeepSeekPayload(message.requestBody);
      }
    } catch (e) {
      console.warn('🔵 [DEEPSK] Error extracting question content:', e);
    }
    
    console.log('🔵 [DEEPSK] Extracted question content:', question);
    
    // Prepare and return the exact message that will be sent to the streaming server
    return {
      type: StreamingMessageType.STREAMING_STARTED,
      service: 'deepseek',
      url: message.url,
      injectId: message.injectId,
      question: question,
      timestamp: new Date().toISOString(),
      source: message.source
    };
  },

  /**
   * Handle DeepSeek streaming chunk data message
   * Service-specific handler that matches the signature of handleStreamingChunk in service-worker.ts
   * @param message The streaming chunk data message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingChunk(message: ContentStreamingChunkMessage): StreamingChunkMessage | StreamingChunkMessage[] {
    // DeepSeek-specific processing for chunk data
    console.log('🔵 [DEEPSK] Handling STREAMING_CHUNK message');
    
    // Add DeepSeek-specific metadata or processing
    const processedMessage = {
      ...message,
      service: 'deepseek',
      // Add any DeepSeek-specific processing here
      processedTimestamp: new Date().toISOString(),
      // DeepSeek-specific validation or transformation can be added here
      validation: {
        serviceType: 'DeepSeek',
        protocol: 'SSE',
        expectedFormat: 'text/event-stream'
      }
    };
    
    // Process SSE events and return messages to send
    return processSseEvents({
      rawChunk: processedMessage.data?.rawChunk || '',
      service: processedMessage.service,
      url: processedMessage.url,
      injectId: processedMessage.injectId,
      source: processedMessage.source
    });
  },

  /**
   * Handle DeepSeek streaming completed message
   * Service-specific handler that matches the signature of handleStreamingCompleted in service-worker.ts
   * @param message The streaming completed message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingCompleted(message: ContentStreamingCompletedMessage): StreamingCompletedMessage {
    // DeepSeek-specific processing for completion
    console.log('🔵 [DEEPSK] Handling STREAMING_COMPLETED message');
    
    // Prepare and return the exact message that will be sent to the streaming server
    return {
      type: StreamingMessageType.STREAMING_COMPLETED,
      injectId: message.injectId,
      timestamp: new Date().toISOString()
    };
  }
};

/**
 * Extract question content from DeepSeek request payload
 * @param requestBody The raw request body
 * @returns The extracted question content
 */
function extractQuestionContentFromDeepSeekPayload(requestBody: any): string {
  let question = 'Unknown question';
  
  try {
    // Use deepParseJSON to handle nested JSON structures
    let requestPayloadJson: DeepSeekRequestPayload = deepParseJSON(requestBody);
    
    // Extract the question from the prompt field
    if (requestPayloadJson.prompt && typeof requestPayloadJson.prompt === 'string') {
      question = requestPayloadJson.prompt;
    } 
    // Fallback to messages array format if prompt field is not found
    else if (requestPayloadJson.messages && Array.isArray(requestPayloadJson.messages)) {
      // Get the last message which should be the user's question
      const lastMessage = requestPayloadJson.messages[requestPayloadJson.messages.length - 1];
      if (lastMessage && lastMessage.content) {
        question = lastMessage.content;
      }
    }
  } catch (e) {
    console.warn('🔵 [DEEPSK] Error extracting question content from payload:', e);
  }
  
  return question;
}

/**
 * Process SSE events and return messages to send to the streaming server
 * This is an internal helper function, not part of the public interface
 * @param eventData The raw SSE event data
 * @returns Array of messages to send to the streaming server
 */
function processSseEvents(eventData: { 
  rawChunk: string; 
  service: string; 
  url: string; 
  injectId: string; 
  source: string 
}): any[] {
  console.log('🔵 [DEEPSK] processSseEvents called with:', JSON.stringify(eventData, null, 2));
  
  const messagesToSend: any[] = [];
  
  try {
    // Parse the raw chunk to extract individual SSE events
    const events = parseSSEEvents(eventData.rawChunk);
    console.log('🔵 [DEEPSK] Parsed events:', events);
    
    // Process each event
    for (const event of events) {
      console.log('🔵 [DEEPSK] Processing event:', event);
      
      // Parse individual SSE event to extract id, event, and data fields
      const parsedEvent: ParsedSSEEvent = parseIndividualSSEEvent(event);
      
      // Check if this event should be sent based on service-specific logic
      if (shouldSendDeepSeekSseEvent(event)) {
        console.log('🔵 [DEEPSK] Event should be sent');
        
        // Parse the SSE event to extract just the content text
        let contentText = event; // Default to full event if parsing fails
        
        try {
          // Parse the JSON data field to extract content text
          if (parsedEvent.data) {
            console.log('🔵 [DEEPSK] Raw data field:', parsedEvent.data);
            
            const dataJson = JSON.parse(parsedEvent.data);
            console.log('🔵 [DEEPSK] Parsed data JSON:', JSON.stringify(dataJson, null, 2));
            
            // Handle DeepSeek's complex response structure
            if (dataJson.v !== undefined) {
              if (typeof dataJson.v === 'string') {
                // Simple string content - extract directly
                contentText = dataJson.v;
                console.log('🔵 [DEEPSK] Extracted string content:', contentText);
              } else if (Array.isArray(dataJson.v)) {
                // Array of operations - look for content-related operations
                let hasContent = false;
                for (const item of dataJson.v) {
                  // Skip if this marks the end of conversation
                  if (item.v === 'FINISHED' && item.p === 'status') {
                    hasContent = false;
                    break;
                  }
                  
                  // Handle complex array structures like the one with fragments
                  if (item.p && item.p.includes('fragments') && Array.isArray(item.v)) {
                    // Handle nested content in fragments array
                    for (const fragment of item.v) {
                      if (fragment.content !== undefined) {
                        contentText = fragment.content;
                        hasContent = true;
                        console.log('🔵 [DEEPSK] Extracted content from fragment:', contentText);
                        break;
                      }
                    }
                    if (hasContent) break;
                  }
                  // Handle the complex structure with nested arrays that contains "Hello"
                  else if (Array.isArray(item.v) && item.v.length > 0) {
                    // Look for content in the nested array
                    for (const subItem of item.v) {
                      if (subItem.content !== undefined) {
                        contentText = subItem.content;
                        hasContent = true;
                        console.log('🔵 [DEEPSK] Extracted content from nested array:', contentText);
                        break;
                      }
                    }
                    if (hasContent) break;
                  }
                  // Extract content if present directly
                  else if (item.v !== undefined && item.p && item.p.includes('content')) {
                    contentText = item.v;
                    hasContent = true;
                    console.log('🔵 [DEEPSK] Extracted content from item.v:', contentText);
                    break;
                  }
                  // Handle append operations
                  else if (item.v !== undefined && typeof item.v === 'string') {
                    contentText = item.v;
                    hasContent = true;
                    console.log('🔵 [DEEPSK] Extracted string content from item.v:', contentText);
                    break;
                  }
                }
                
                // If no content was found in the array, don't send this event
                if (!hasContent) {
                  console.log('🔵 [DEEPSK] No content found in array, skipping event');
                  continue;
                }
              } else if (typeof dataJson.v === 'object' && dataJson.v !== null) {
                // Object - check if it has content-related fields
                if (dataJson.v.fragments && Array.isArray(dataJson.v.fragments)) {
                  // This is a metadata object, skip it
                  console.log('🔵 [DEEPSK] Skipping metadata object with fragments');
                  continue;
                } else if (dataJson.v.content !== undefined) {
                  // Extract content if present
                  contentText = dataJson.v.content;
                  console.log('🔵 [DEEPSK] Extracted content from v.content:', contentText);
                } else {
                  // For other object structures, keep the full event data
                  contentText = event;
                  console.log('🔵 [DEEPSK] Keeping full event data for object');
                }
              }
            }
          }
        } catch (parseError) {
          console.warn('🔵 [DEEPSK] Error parsing SSE event data for content extraction:', parseError);
          // Keep the full event data as fallback
        }
        
        console.log('🔵 [DEEPSK] Final content text:', contentText);
        
        // Only send non-empty content
        // For DeepSeek, even space characters are meaningful content
        if (contentText !== undefined && contentText !== null && contentText !== '') {
          // Create the simplified message that will be sent to the streaming server
          // According to DESIGN.md lines 754-764, only these fields are needed
          messagesToSend.push({
            type: StreamingMessageType.STREAMING_CHUNK,
            injectId: eventData.injectId,
            text: contentText,
            timestamp: new Date().toISOString()
          });
          
          console.log('🔵 [DEEPSK] Added message to send queue');
        } else {
          console.log('🔵 [DEEPSK] Skipping empty content');
        }
      } else {
        console.log('🔵 [DEEPSK] Event should NOT be sent');
      }
    }
  } catch (error) {
    console.error('🔵 [DEEPSK] Error processing SSE events:', error);
  }
  
  console.log('🔵 [DEEPSK] Messages to send:', JSON.stringify(messagesToSend, null, 2));
  
  return messagesToSend;
}

/**
 * Process a DeepSeek API request
 * @param details Chrome webRequest details
 * @returns ApiCallRecord with question content and timestamp
 */
export function processDeepSeekRequest(details: chrome.webRequest.WebRequestBodyDetails): ApiCallRecord | null {
  try {
    const url = details.url;
    const method = details.method;
    
    // Check if this is a DeepSeek API endpoint
    const isTargetApi = apiPatterns.some(pattern => pattern.test(url));
    if (!isTargetApi) {
      return null;
    }
    
    console.log('Processing DeepSeek request:', url, 'Method:', method);
    
    // Extract question content from request body
    let question: string | null = null;
    if (details.requestBody) {
      console.log('Request body details:', details.requestBody);
      
      // Try different ways to access the request body
      if (details.requestBody.raw && details.requestBody.raw.length > 0) {
        // Try to decode the request body
        try {
          const bodyData = details.requestBody.raw[0].bytes;
          if (bodyData) {
            const decoder = new TextDecoder('utf-8');
            const bodyString = decoder.decode(bodyData);
            console.log('Decoded request body:', bodyString.substring(0, 200) + '...');
            
            // Parse the JSON to extract the actual question
            try {
              // Use deepParseJSON to handle nested JSON structures
              const bodyJson = deepParseJSON(bodyString);
              console.log('Parsed request body JSON:', bodyJson);
              
              // Extract the question from the prompt field
              if (bodyJson.prompt && typeof bodyJson.prompt === 'string') {
                question = bodyJson.prompt;
                console.log('Extracted question content from prompt field:', question);
              } 
              // Fallback to messages array format if prompt field is not found
              else if (bodyJson.messages && Array.isArray(bodyJson.messages)) {
                // Get the last message which should be the user's question
                const lastMessage = bodyJson.messages[bodyJson.messages.length - 1];
                if (lastMessage && lastMessage.content) {
                  question = lastMessage.content;
                  console.log('Extracted question content from messages array:', question);
                }
              }
            } catch (parseError) {
              console.log('Failed to parse request body as JSON, storing raw body');
              // If JSON parsing fails, store the raw body
              question = bodyString;
            }
          }
        } catch (e) {
          console.error('Error decoding DeepSeek request body:', e);
        }
      } else if (details.requestBody.formData) {
        // Handle form data
        console.log('Request has form data:', details.requestBody.formData);
        question = JSON.stringify(details.requestBody.formData);
      } else if (details.requestBody.error) {
        // Handle error
        console.log('Request body error:', details.requestBody.error);
        question = `Error: ${details.requestBody.error}`;
      }
    } else {
      console.log('No request body found for:', url);
    }
    
    return {
      id: `${details.requestId}-${Date.now()}`,
      url: url,
      method: method,
      question: question,
      questionTime: new Date().toISOString(),
      answerContent: null,
      answerTime: '',
      service: deepseekConfig.serviceName || deepseekConfig.name,
      protocol: 'SSE' // Streaming response
    };
  } catch (error) {
    console.error('Error processing DeepSeek request:', error);
    return null;
  }
}

/**
 * Process a DeepSeek API response
 * @param details Chrome webRequest response details
 * @param existingRecord Existing API call record to update
 * @returns Updated ApiCallRecord with answer content and timestamp
 */
export function processDeepSeekResponse(
  details: chrome.webRequest.WebResponseCacheDetails,
  existingRecord: ApiCallRecord
): ApiCallRecord | null {
  try {
    // Update the existing record with response data
    const updatedRecord = { ...existingRecord };
    
    // Set response timestamp
    updatedRecord.answerTime = new Date().toISOString();
    updatedRecord.statusCode = details.statusCode;
    
    // Check if this is a streaming response (SSE)
    if (details.responseHeaders) {
      updatedRecord.responseHeaders = {};
      let isStreaming = false;
      
      details.responseHeaders.forEach(header => {
        updatedRecord.responseHeaders![header.name] = header.value || '';
        // Check for streaming content type
        if (header.name.toLowerCase() === 'content-type' && 
            header.value && 
            header.value.includes('text/event-stream')) {
          isStreaming = true;
        }
      });
      
      // For streaming responses, we initialize answerContent as empty string
      // so that streaming data can be accumulated
      if (isStreaming) {
        updatedRecord.answerContent = updatedRecord.answerContent || '';
      }
    }
    
    return updatedRecord;
  } catch (error) {
    console.error('Error processing DeepSeek response:', error);
    return null;
  }
}

/**
 * Process streaming data chunks for DeepSeek API
 * @param url The URL of the streaming endpoint
 * @param data The streaming data chunk
 * @param existingRecord Existing API call record to update
 * @returns Updated ApiCallRecord with streaming information
 */
export function processDeepSeekResponseStreamingData(
  url: string,
  data: string,
  existingRecord: ApiCallRecord
): ApiCallRecord | null {
  try {
    // Update the existing record with streaming data
    const updatedRecord = { ...existingRecord };
    
    // Initialize answerContent if it doesn't exist
    if (!updatedRecord.answerContent) {
      updatedRecord.answerContent = '';
    }
    
    // For SSE streaming, we parse the data according to SSE format
    // SSE data comes in the format: "event: ...\ndata: ...\n\n"
    // We want to filter out metadata events and only keep the actual content data
    const lines = data.split('\n');
    let currentEvent = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for event type
      if (line.startsWith('event: ')) {
        currentEvent = line.substring(7).trim(); // Remove 'event: ' prefix
        continue;
      }
      
      // Process data lines
      if (line.startsWith('data: ')) {
        const jsonData = line.substring(6); // Remove 'data: ' prefix
        
        // Skip [DONE] messages
        if (jsonData.trim() === '[DONE]') {
          continue;
        }
        
        // Skip metadata events like 'ready' and 'update_session'
        if (currentEvent === 'ready' || currentEvent === 'update_session' || currentEvent === 'finish' || currentEvent === 'close' || currentEvent === 'title') {
          continue;
        }
        
        // Process actual content data
        try {
          // Use deepParseJSON to handle nested JSON structures
          const parsed = deepParseJSON(jsonData);
          if (parsed.choices && parsed.choices[0] && parsed.choices[0].delta) {
            const content = parsed.choices[0].delta.content;
            if (content) {
              updatedRecord.answerContent += content;
            }
          } else if (parsed.v && typeof parsed.v === 'string') {
            // Handle the fragmented content format used by DeepSeek
            updatedRecord.answerContent += parsed.v;
          } else if (Array.isArray(parsed.v)) {
            // Handle batch updates
            for (const item of parsed.v) {
              if (item.v && typeof item.v === 'string' && item.p && item.p.includes('content')) {
                updatedRecord.answerContent += item.v;
              }
            }
          }
        } catch (e) {
          // If not valid JSON, skip it (this is likely metadata)
          console.log('Skipping non-JSON SSE data:', line);
        }
      }
    }
    
    return updatedRecord;
  } catch (error) {
    console.error('Error processing DeepSeek streaming data:', error);
    return null;
  }
}

/**
 * Parse SSE events from a chunk of data
 * @param chunk The raw data chunk
 * @returns Array of individual SSE events
 */
export function parseSSEEvents(chunk: string): string[] {
  // Split the chunk by double newlines to get individual events
  const events = chunk.split('\n\n');
  
  // Filter out empty events
  return events.filter(event => event.trim() !== '');
}

/**
 * Parse individual SSE event to extract id, event, and data fields
 * @param event The SSE event string
 * @returns Parsed event object with id, event, and data fields
 */
export function parseIndividualSSEEvent(event: string): ParsedSSEEvent {
  const lines = event.split('\n');
  const parsed: ParsedSSEEvent = {};
  
  for (const line of lines) {
    if (line.startsWith('id: ')) {
      parsed.id = line.substring(4);
    } else if (line.startsWith('event: ')) {
      parsed.event = line.substring(7);
    } else if (line.startsWith('data: ')) {
      parsed.data = line.substring(6);
    }
  }
  
  return parsed;
}

/**
 * Determine if an SSE event should be sent to the streaming server
 * @param data The raw SSE chunk data
 * @returns true if the event should be sent, false if it should be filtered out
 */
export function shouldSendDeepSeekSseEvent(data: string): boolean {
  // For DeepSeek, we want to filter out metadata events and only send content events
  try {
    // Parse the SSE data to check if it's a metadata event
    const lines = data.split('\n');
    let currentEvent = '';
    let currentData = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for event type
      if (line.startsWith('event: ')) {
        currentEvent = line.substring(7).trim(); // Remove 'event: ' prefix
      } else if (line.startsWith('data: ')) {
        currentData = line.substring(6).trim(); // Remove 'data: ' prefix
      }
    }
    
    // Filter out specific events that are purely metadata
    if (currentEvent === 'ready' || currentEvent === 'update_session' || currentEvent === 'finish' || currentEvent === 'title' || currentEvent === 'close') {
      return false;
    }
    
    // Filter out data that is clearly metadata
    if (currentData) {
      try {
        // Use deepParseJSON to handle nested JSON structures
        const dataJson = deepParseJSON(currentData);
        
        // Filter out metadata objects that don't contain content
        if (dataJson.request_message_id !== undefined || 
            dataJson.response_message_id !== undefined || 
            dataJson.updated_at !== undefined) {
          // These are pure metadata events, filter them out
          return false;
        }
        
        // Allow events with simple string content (these are content events)
        if (typeof dataJson === 'string') {
          // For DeepSeek, even space characters are meaningful content
          return dataJson !== undefined && dataJson !== null;
        }
        
        // Allow events with 'v' field that contains actual content
        if (dataJson.v !== undefined) {
          // If v is a simple string, it's content
          if (typeof dataJson.v === 'string') {
            // For DeepSeek, even space characters are meaningful content
            return dataJson.v !== undefined && dataJson.v !== null;
          }
          // If v is an array, check if it contains content
          else if (Array.isArray(dataJson.v)) {
            // Check if any item in the array contains content
            for (const item of dataJson.v) {
              // Skip FINISHED status updates
              if (item.v === 'FINISHED' && item.p === 'status') {
                continue;
              }
              // If item has content or is a simple string value, it's content
              if ((item.v !== undefined && typeof item.v === 'string') || 
                  (item.content !== undefined && typeof item.content === 'string')) {
                return true;
              }
              // Handle nested arrays with content (like the complex structure with "你好")
              if (Array.isArray(item.v) && item.v.length > 0) {
                for (const subItem of item.v) {
                  if (subItem.content !== undefined && typeof subItem.content === 'string') {
                    return true;
                  }
                }
              }
            }
            // If we only found FINISHED status or no content, filter it out
            return false;
          }
          // If v is an object, check if it contains content-related fields
          else if (typeof dataJson.v === 'object' && dataJson.v !== null) {
            // If it has fragments with content, it's a content event
            if (dataJson.v.fragments !== undefined) {
              return true;
            }
            // If it has content field, it's a content event
            if (dataJson.v.content !== undefined) {
              return true;
            }
            // Otherwise, it's likely metadata, filter it out
            return false;
          }
        }
        
        // Filter out empty data
        if (currentData === '{}' || currentData.trim() === '') {
          return false;
        }
      } catch (e) {
        // If we can't parse the data, check if it's non-empty
        return currentData.trim() !== '';
      }
    }
    
    // Send all other non-empty events
    return currentData.trim() !== '';
  } catch (error) {
    console.error('🔵 [DEEPSK] Error checking if event should be sent:', error);
    // If there's an error in parsing, send the event to be safe
    return true;
  }
}
