import { 
  ApiCallRecord, 
  MonitoredServiceConfig, 
  StreamingServiceHandler, 
  DoubaoRequestPayload, 
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

// Find the Doubao Samantha configuration in the centralized config
const doubaoSamanthaConfig = monitoredServices.find(service => service.name === 'Doubao Samantha')!;

// Convert string patterns to RegExp for API pattern matching
const apiPatterns = doubaoSamanthaConfig.requestPatterns?.map(pattern => new RegExp(pattern)) || [];

// Track active Doubao Samantha conversations
const activeConversations = new Map<string, boolean>();

// Export the service handler
export const doubaoSamanthaServiceHandler: StreamingServiceHandler = {
  /**
   * Handle Doubao Samantha streaming request started message
   * Service-specific handler that matches the signature of handleStreamingStarted in service-worker.ts
   * @param message The streaming request started message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingStarted(message: ContentStreamingStartedMessage): StreamingStartedMessage {
    // Doubao Samantha-specific processing (handles legacy endpoint)
    console.log('🔵 [DOUBAO_SAM] Handling STREAMING_STARTED message for legacy endpoint');
    
    // Extract question content from request body if available
    let question = message.question || 'Unknown question';
    try {
      if (message.requestBody) {
        const extractedQuestion = extractQuestionContentFromDoubaoPayload(message.requestBody);
        if (extractedQuestion !== 'Unknown question') {
          question = extractedQuestion;
        }
      }
    } catch (e) {
      console.warn('🔵 [DOUBAO_SAM] Error extracting question content:', e);
    }
    
    console.log('🔵 [DOUBAO_SAM] Extracted question content:', question);
    
    // Mark conversation as active
    activeConversations.set(message.injectId, true);
    
    // Prepare and return the exact message that will be sent to the streaming server
    return {
      type: StreamingMessageType.STREAMING_STARTED,
      service: 'doubao_samantha',
      url: message.url,
      injectId: message.injectId,
      question: question,
      timestamp: new Date().toISOString(),
      source: message.source
    };
  },

  /**
   * Handle Doubao Samantha streaming chunk data message
   * Service-specific handler that matches the signature of handleStreamingChunk in service-worker.ts
   * @param message The streaming chunk data message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingChunk(message: ContentStreamingChunkMessage): StreamingChunkMessage | StreamingChunkMessage[] {
    // Doubao Samantha-specific processing for chunk data (handles legacy endpoint)
    console.log('🔵 [DOUBAO_SAM] Handling STREAMING_CHUNK message for legacy endpoint');
    
    // For the actual Doubao streaming data, the raw SSE data is in the 'text' field
    // But for test data, it might be in 'data.rawChunk'
    let rawChunk = '';
    // Check if this is a special case where the data is in the text field
    // This is a workaround for the Doubao handler which sometimes uses a different structure
    if ('text' in message && typeof (message as any).text === 'string') {
      // This is the format used in doubao.json
      rawChunk = (message as any).text;
    } else if (message.data?.rawChunk) {
      // This is the format used in tests and standard interface
      rawChunk = message.data.rawChunk;
    }
    
    // Process SSE events and return messages to send
    return processSseEvents({
      rawChunk: rawChunk,
      service: 'doubao_samantha',
      url: message.url,
      injectId: message.injectId,
      source: message.source
    });
  },

  /**
   * Handle Doubao Samantha streaming completed message
   * Service-specific handler that matches the signature of handleStreamingCompleted in service-worker.ts
   * @param message The streaming completed message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingCompleted(message: ContentStreamingCompletedMessage): StreamingCompletedMessage {
    // Doubao Samantha-specific processing for completion (handles legacy endpoint)
    console.log('🔵 [DOUBAO_SAM] Handling STREAMING_COMPLETED message for legacy endpoint');
    
    // Mark conversation as inactive
    activeConversations.delete(message.injectId);
    
    // Prepare and return the exact message that will be sent to the streaming server
    return {
      type: StreamingMessageType.STREAMING_COMPLETED,
      injectId: message.injectId,
      timestamp: new Date().toISOString()
    };
  }
};

/**
 * Extract question content from Doubao Samantha request payload
 * @param requestBody The raw request body
 * @returns The extracted question content
 */
function extractQuestionContentFromDoubaoPayload(requestBody: any): string {
  let question = 'Unknown question';
  
  try {
    // Use deepParseJSON to handle nested JSON structures
    let bodyJson: DoubaoRequestPayload = deepParseJSON(requestBody);
    
    // Extract the question from the messages array format used by Doubao
    if (bodyJson.messages && Array.isArray(bodyJson.messages) && bodyJson.messages.length > 0) {
      // Get the last message which should be the user's question
      const lastMessage = bodyJson.messages[bodyJson.messages.length - 1];
      if (lastMessage && lastMessage.content_block && Array.isArray(lastMessage.content_block)) {
        // Extract text from content blocks
        let fullQuestion = '';
        for (const block of lastMessage.content_block) {
          if (block.content && block.content.text_block && block.content.text_block.text) {
            fullQuestion += block.content.text_block.text;
          }
        }
        if (fullQuestion) {
          question = fullQuestion;
        }
      } else if (lastMessage && lastMessage.content) {
        // Doubao content is a JSON string, need to parse it
        try {
          const contentJson = deepParseJSON(lastMessage.content);
          if (contentJson.text) {
            question = contentJson.text;
          }
        } catch (contentParseError) {
          // If content is not JSON, use it as is
          question = lastMessage.content;
          console.log('Extracted question content as raw string:', question);
        }
      }
    }
  } catch (e) {
    console.warn('🔵 [DOUBAO_SAMANTHA] Error extracting question content from payload:', e);
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
  console.log(`🔵 [${eventData.service.toUpperCase()}] processSseEvents called with:`, JSON.stringify(eventData, null, 2));
  
  const messagesToSend: any[] = [];
  
  try {
    // Parse the raw chunk to extract individual SSE events
    const events = parseSSEEvents(eventData.rawChunk);
    console.log(`🔵 [${eventData.service.toUpperCase()}] Parsed events:`, events);
    
    // Process each event
    for (const event of events) {
      console.log(`🔵 [${eventData.service.toUpperCase()}] Processing event:`, event);
      
      // Check if this event should be sent based on service-specific logic
      // We need to check the raw event data, not the parsed event
      if (shouldSendDoubaoSamanthaSseEvent(event)) {
        console.log(`🔵 [${eventData.service.toUpperCase()}] Event should be sent`);
        
        // Parse individual SSE event to extract id, event, and data fields
        const parsedEvent: ParsedSSEEvent = parseIndividualSSEEvent(event);
        console.log(`🔵 [${eventData.service.toUpperCase()}] Parsed event:`, JSON.stringify(parsedEvent, null, 2));
        
        // Parse the SSE event to extract just the content text
        let contentText = event; // Default to full event if parsing fails
        
        try {
          // Parse the JSON data field to extract content text based on event type
          if (parsedEvent.data) {
            console.log(`🔵 [${eventData.service.toUpperCase()}] Raw data field:`, parsedEvent.data);
            try {
              // Use deepParseJSON to handle nested JSON structures
              const dataJson = deepParseJSON(parsedEvent.data);
              console.log(`🔵 [${eventData.service.toUpperCase()}] Parsed data JSON:`, JSON.stringify(dataJson, null, 2));
              
              // Handle the Doubao event structure from doubao.json
              // The actual content is nested within event_data as a JSON string
              if (dataJson.event_data) {
                console.log(`🔵 [${eventData.service.toUpperCase()}] Found event_data field:`, dataJson.event_data);
                try {
                  // Use deepParseJSON to handle nested JSON structures
                  const eventDataJson = deepParseJSON(dataJson.event_data);
                  console.log(`🔵 [${eventData.service.toUpperCase()}] Parsed event_data JSON:`, JSON.stringify(eventDataJson, null, 2));
                  
                  // Handle different types of event_data structures
                  if (eventDataJson.message && eventDataJson.message.content) {
                    console.log(`🔵 [${eventData.service.toUpperCase()}] Found message content:`, eventDataJson.message.content);
                    
                    // Parse the content field which is a JSON string
                    try {
                      // Use deepParseJSON to handle nested JSON structures
                      const contentJson = deepParseJSON(eventDataJson.message.content);
                      console.log(`🔵 [${eventData.service.toUpperCase()}] Parsed content JSON:`, JSON.stringify(contentJson, null, 2));
                      
                      if (contentJson.text) {
                        contentText = contentJson.text;
                        console.log(`🔵 [${eventData.service.toUpperCase()}] Extracted text content:`, contentText);
                      }
                    } catch (contentParseError) {
                      // If content is not JSON, try to unescape it and parse again
                      console.log(`🔵 [${eventData.service.toUpperCase()}] Content parsing failed, trying to unescape:`, contentParseError);
                      try {
                        // Try to unescape the content and parse it again
                        const unescapedContent = eventDataJson.message.content;
                        console.log(`🔵 [${eventData.service.toUpperCase()}] Unescaped content:`, unescapedContent);
                        
                        // Use deepParseJSON to handle nested JSON structures
                        const contentJson = deepParseJSON(unescapedContent);
                        console.log(`🔵 [${eventData.service.toUpperCase()}] Parsed unescaped content JSON:`, JSON.stringify(contentJson, null, 2));
                        
                        if (contentJson.text) {
                          contentText = contentJson.text;
                          console.log(`🔵 [${eventData.service.toUpperCase()}] Extracted text content:`, contentText);
                        }
                      } catch (unescapedParseError) {
                        // If content is still not JSON, try a more aggressive approach to extract text
                        console.log(`🔵 [${eventData.service.toUpperCase()}] Unescaped parsing failed, trying aggressive extraction:`, unescapedParseError);
                        
                        // For complex nested JSON with quotes, try a specialized approach
                        try {
                          // Look for the text field pattern directly in the content string
                          // Handle the specific case of deeply nested escaping
                          const contentStr = eventDataJson.message.content;
                          
                          // Try to extract text content using a more targeted regex
                          const textMatch = contentStr.match(/"text"\s*:\s*"((?:\\.|[^"])*)"/);
                          if (textMatch && textMatch[1]) {
                            let extractedText = textMatch[1];
                            console.log(`🔵 [${eventData.service.toUpperCase()}] Raw extracted text:`, extractedText);
                            
                            // Apply iterative unescaping for deeply nested JSON strings
                            let previousText;
                            let rounds = 0;
                            do {
                              previousText = extractedText;
                              try {
                                // Try to parse as JSON string to unescape
                                extractedText = JSON.parse('"' + previousText + '"');
                                rounds++;
                                console.log(`🔵 [${eventData.service.toUpperCase()}] After unescaping round ${rounds}:`, extractedText);
                              } catch (e) {
                                // If parsing fails, we've reached the final unescaped form
                                console.log(`🔵 [${eventData.service.toUpperCase()}] Unescaping failed at round ${rounds}:`, (e as Error).message);
                                break;
                              }
                              // Prevent infinite loops
                            } while (extractedText !== previousText && rounds < 10);
                            
                            contentText = extractedText;
                            console.log(`🔵 [${eventData.service.toUpperCase()}] Final extracted text content:`, contentText);
                          } else {
                            // If regex extraction fails, use the content as is
                            contentText = eventDataJson.message.content;
                            console.log(`🔵 [${eventData.service.toUpperCase()}] Using content as string (regex failed):`, contentText);
                          }
                        } catch (specializedError) {
                          // If all else fails, use the content as is
                          contentText = eventDataJson.message.content;
                          console.log(`🔵 [${eventData.service.toUpperCase()}] Using content as string (specialized approach failed):`, contentText);
                        }
                      }
                    }
                  } else if (dataJson.type === 'seed_intention' && dataJson.seed_intention) {
                    // Handle seed_intention events - these don't contain response content
                    // Skip these as they're metadata
                    console.log(`🔵 [${eventData.service.toUpperCase()}] Skipping seed_intention event`);
                    continue;
                  }
                } catch (eventDataParseError) {
                  console.warn(`🔵 [${eventData.service.toUpperCase()}] Error parsing event_data JSON:`, eventDataParseError);
                  // Keep the full event data as fallback
                }
              }
              // Handle the previous structure for backward compatibility
              else if (parsedEvent.event === 'FULL_MSG_NOTIFY' && dataJson.message && dataJson.message.content_block) {
                // Extract text from content blocks in FULL_MSG_NOTIFY
                for (const block of dataJson.message.content_block) {
                  if (block.content && block.content.text_block && block.content.text_block.text) {
                    contentText = block.content.text_block.text;
                    break;
                  }
                }
              } else if (parsedEvent.event === 'STREAM_MSG_NOTIFY' && dataJson.content && dataJson.content.content_block) {
                // Extract text from content blocks in STREAM_MSG_NOTIFY
                for (const block of dataJson.content.content_block) {
                  if (block.content && block.content.text_block && block.content.text_block.text) {
                    contentText = block.content.text_block.text;
                    break;
                  }
                }
              } else if (parsedEvent.event === 'STREAM_CHUNK' && dataJson.patch_op && Array.isArray(dataJson.patch_op)) {
                // Extract text from patch operations in STREAM_CHUNK
                for (const op of dataJson.patch_op) {
                  if (op.patch_value && op.patch_value.content_block && Array.isArray(op.patch_value.content_block)) {
                    for (const block of op.patch_value.content_block) {
                      if (block.content && block.content.text_block && block.content.text_block.text) {
                        if (contentText === event) {
                          // First content, replace the default
                          contentText = block.content.text_block.text;
                        } else {
                          // Append additional content
                          contentText += block.content.text_block.text;
                        }
                      }
                    }
                  }
                }
              } else if (dataJson.content && dataJson.content.content_block && Array.isArray(dataJson.content.content_block)) {
                // Generic handling for content.content_block structure
                for (const block of dataJson.content.content_block) {
                  if (block.content && block.content.text_block && block.content.text_block.text) {
                    contentText = block.content.text_block.text;
                    break;
                  }
                }
              }
            } catch (parseError) {
              console.warn(`🔵 [${eventData.service.toUpperCase()}] Error parsing SSE event data for content extraction:`, parseError);
              // Keep the full event data as fallback
            }
          }
        } catch (parseError) {
          console.warn(`🔵 [${eventData.service.toUpperCase()}] Error parsing SSE event data for content extraction:`, parseError);
          // Keep the full event data as fallback
        }
        
        console.log(`🔵 [${eventData.service.toUpperCase()}] Final content text:`, contentText);
        
        // Create the simplified message that will be sent to the streaming server
        // According to DESIGN.md lines 754-764, only these fields are needed
        messagesToSend.push({
          type: StreamingMessageType.STREAMING_CHUNK,
          injectId: eventData.injectId,
          text: contentText,
          timestamp: new Date().toISOString()
        });
        
        console.log(`🔵 [${eventData.service.toUpperCase()}] Added message to send queue`);
      } else {
        console.log(`🔵 [${eventData.service.toUpperCase()}] Event should NOT be sent`);
      }
    }
  } catch (error) {
    console.error(`🔵 [${eventData.service.toUpperCase()}] Error processing SSE events:`, error);
  }
  
  console.log(`🔵 [${eventData.service.toUpperCase()}] Messages to send:`, JSON.stringify(messagesToSend, null, 2));
  
  return messagesToSend;
}

/**
 * Process a Doubao Samantha API request
 * @param details Chrome webRequest details
 * @returns ApiCallRecord with question content and timestamp
 */
export function processDoubaoSamanthaRequest(details: chrome.webRequest.WebRequestBodyDetails): ApiCallRecord | null {
  try {
    const url = details.url;
    const method = details.method;
    
    // Check if this is a Doubao Samantha API endpoint
    const isTargetApi = apiPatterns.some(pattern => pattern.test(url));
    if (!isTargetApi) {
      return null;
    }
    
    console.log('Processing Doubao Samantha request:', url, 'Method:', method);
    
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
              
              // Extract the question from the messages array format used by Doubao
              if (bodyJson.messages && Array.isArray(bodyJson.messages) && bodyJson.messages.length > 0) {
                // Get the last message which should be the user's question
                const lastMessage = bodyJson.messages[bodyJson.messages.length - 1];
                if (lastMessage && lastMessage.content_block && Array.isArray(lastMessage.content_block)) {
                  // Extract text from content blocks
                  let fullQuestion = '';
                  for (const block of lastMessage.content_block) {
                    if (block.content && block.content.text_block && block.content.text_block.text) {
                      fullQuestion += block.content.text_block.text;
                    }
                  }
                  if (fullQuestion) {
                    question = fullQuestion;
                    console.log('Extracted question content from content blocks:', question);
                  }
                } else if (lastMessage && lastMessage.content) {
                  // Doubao content is a JSON string, need to parse it
                  try {
                    // Use deepParseJSON to handle nested JSON structures
                    const contentJson = deepParseJSON(lastMessage.content);
                    if (contentJson.text) {
                      question = contentJson.text;
                      console.log('Extracted question content from messages array:', question);
                    }
                  } catch (contentParseError) {
                    // If content is not JSON, use it as is
                    question = lastMessage.content;
                    console.log('Extracted question content as raw string:', question);
                  }
                }
              }
              // Fallback to prompt field if messages array is not found
              else if (bodyJson.prompt && typeof bodyJson.prompt === 'string') {
                question = bodyJson.prompt;
                console.log('Extracted question content from prompt field:', question);
              }
            } catch (parseError) {
              console.log('Failed to parse request body as JSON, storing raw body');
              // If JSON parsing fails, store the raw body
              question = bodyString;
            }
          }
        } catch (e) {
          console.error('Error decoding Doubao Samantha request body:', e);
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
      service: doubaoSamanthaConfig.serviceName || doubaoSamanthaConfig.name,
      protocol: 'SSE' // Streaming response
    };
  } catch (error) {
    console.error('Error processing Doubao Samantha request:', error);
    return null;
  }
}

/**
 * Process a Doubao Samantha API response
 * @param details Chrome webRequest response details
 * @param existingRecord Existing API call record to update
 * @returns Updated ApiCallRecord with answer content and timestamp
 */
export function processDoubaoSamanthaResponse(
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
    console.error('Error processing Doubao Samantha response:', error);
    return null;
  }
}

/**
 * Process streaming data chunks for Doubao Samantha API
 * @param url The URL of the streaming endpoint
 * @param data The streaming data chunk
 * @param existingRecord Existing API call record to update
 * @returns Updated ApiCallRecord with streaming information
 */
export function processDoubaoSamanthaResponseStreamingData(
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
    // SSE data comes in the format: "data: ...\n\n"
    const lines = data.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Process data lines
      if (line.startsWith('data: ')) {
        const jsonData = line.substring(6); // Remove 'data: ' prefix
        
        // Skip [DONE] messages
        if (jsonData.trim() === '[DONE]') {
          continue;
        }
        
        // Skip empty data
        if (jsonData.trim() === '{}' || jsonData.trim() === '') {
          continue;
        }
        
        // Process actual content data
        try {
          // Use deepParseJSON to handle nested JSON structures
          const parsed = deepParseJSON(jsonData);
          
          // For Doubao, extract content from the actual data structure
          // Check for content in content_block
          if (parsed.content && parsed.content.content_block && Array.isArray(parsed.content.content_block)) {
            for (const block of parsed.content.content_block) {
              if (block.content && block.content.text_block && block.content.text_block.text) {
                updatedRecord.answerContent += block.content.text_block.text;
              }
            }
          }
          // Check for content in patch_op
          else if (parsed.patch_op && Array.isArray(parsed.patch_op)) {
            for (const op of parsed.patch_op) {
              if (op.patch_value && op.patch_value.content_block && Array.isArray(op.patch_value.content_block)) {
                for (const block of op.patch_value.content_block) {
                  if (block.content && block.content.text_block && block.content.text_block.text) {
                    updatedRecord.answerContent += block.content.text_block.text;
                  }
                }
              }
            }
          }
          // Check for content in message
          else if (parsed.message && parsed.message.content_block && Array.isArray(parsed.message.content_block)) {
            for (const block of parsed.message.content_block) {
              if (block.content && block.content.text_block && block.content.text_block.text) {
                updatedRecord.answerContent += block.content.text_block.text;
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
    console.error('Error processing Doubao Samantha streaming data:', error);
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
export function shouldSendDoubaoSamanthaSseEvent(data: string): boolean {
  try {
    // For Doubao Samantha, we only send events with event_type 2001 and non-empty text
    if (data.startsWith('data: ')) {
      const jsonData = data.substring(6); // Remove 'data: ' prefix
      
      // Skip empty data
      if (jsonData.trim() === '{}' || jsonData.trim() === '') {
        return false;
      }
      
      // Skip [DONE] messages
      if (jsonData.trim() === '[DONE]') {
        return false;
      }
      
      // Parse the JSON data
      const dataObj = JSON.parse(jsonData);
      
      // Check if event_type is 2001
      if (dataObj.event_type === 2001) {
        // Check if event_data exists and has message content with non-empty text
        if (dataObj.event_data) {
          try {
            const eventDataObj = JSON.parse(dataObj.event_data);
            if (eventDataObj.message && eventDataObj.message.content) {
              try {
                const contentObj = JSON.parse(eventDataObj.message.content);
                // Only send if text is not empty
                if (contentObj.text && contentObj.text.trim() !== '') {
                  return true;
                }
              } catch (contentParseError) {
                // If content is not valid JSON, check if it's a non-empty string
                if (typeof eventDataObj.message.content === 'string' && 
                    eventDataObj.message.content.trim() !== '' && 
                    eventDataObj.message.content !== '{}') {
                  return true;
                }
              }
            }
          } catch (eventDataParseError) {
            // If event_data is not valid JSON, we can't process it
            return false;
          }
        }
      }
    }
    
    // All other events should be filtered out
    return false;
  } catch (error) {
    console.error('Error checking if Doubao event should be sent:', error);
    // If there's an error in parsing, don't send the event
    return false;
  }
}
