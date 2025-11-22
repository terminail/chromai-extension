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

// Find the Doubao configuration in the centralized config
const doubaoConfig = monitoredServices.find(service => service.name === 'Doubao')!;

// Convert string patterns to RegExp for API pattern matching
const apiPatterns = doubaoConfig.requestPatterns?.map(pattern => new RegExp(pattern)) || [];

// Track active Doubao conversations
const activeConversations = new Map<string, boolean>();

// Export the service handler
export const doubaoServiceHandler: StreamingServiceHandler = {
  /**
   * Handle Doubao streaming request started message
   * Service-specific handler that matches the signature of handleStreamingStarted in service-worker.ts
   * @param message The streaming request started message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingStarted(message: ContentStreamingStartedMessage): StreamingStartedMessage {
    // Doubao-specific processing (handles legacy endpoint)
    console.log('🔵 [DOUBAO] Handling STREAMING_STARTED message for legacy endpoint');
    
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
      console.warn('🔵 [DOUBAO] Error extracting question content:', e);
    }
    
    console.log('🔵 [DOUBAO] Extracted question content:', question);
    
    // Mark conversation as active
    activeConversations.set(message.injectId, true);
    
    // Prepare and return the exact message that will be sent to the streaming server
    return {
      type: StreamingMessageType.STREAMING_STARTED,
      service: 'doubao',
      url: message.url,
      injectId: message.injectId,
      question: question,
      timestamp: new Date().toISOString(),
      source: message.source
    };
  },

  /**
   * Handle Doubao streaming chunk data message
   * Service-specific handler that matches the signature of handleStreamingChunk in service-worker.ts
   * @param message The streaming chunk data message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingChunk(message: ContentStreamingChunkMessage): StreamingChunkMessage | StreamingChunkMessage[] {
    // Doubao-specific processing for chunk data (handles legacy endpoint)
    console.log('🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint');
    
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
      service: 'doubao',
      url: message.url,
      injectId: message.injectId,
      source: message.source
    });
  },

  /**
   * Handle Doubao streaming completed message
   * Service-specific handler that matches the signature of handleStreamingCompleted in service-worker.ts
   * @param message The streaming completed message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingCompleted(message: ContentStreamingCompletedMessage): StreamingCompletedMessage {
    // Doubao-specific processing for completion (handles legacy endpoint)
    console.log('🔵 [DOUBAO] Handling STREAMING_COMPLETED message for legacy endpoint');
    
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
 * Extract question content from Doubao request payload
 * @param requestBody The raw request body
 * @returns The extracted question content
 */
function extractQuestionContentFromDoubaoPayload(requestBody: any): string {
  let question = 'Unknown question';
  
  try {
    let bodyJson: DoubaoRequestPayload;
    
    if (typeof requestBody === 'string') {
      bodyJson = JSON.parse(requestBody);
    } else if (typeof requestBody === 'object') {
      bodyJson = requestBody;
    } else {
      return question;
    }
    
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
        }
      }
    }
  } catch (e) {
    console.warn('🔵 [DOUBAO] Error extracting question content from payload:', e);
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
  console.log('🔵 [DOUBAO] processSseEvents called with:', JSON.stringify(eventData, null, 2));
  
  const messagesToSend: any[] = [];
  
  try {
    // Parse the raw chunk to extract individual SSE events
    const events = parseSSEEvents(eventData.rawChunk);
    console.log('🔵 [DOUBAO] Parsed events:', events);
    
    // Process each event
    for (const event of events) {
      console.log(`🔵 [${eventData.service.toUpperCase()}] Processing event:`, event);
      
      // Check if this event should be sent based on service-specific logic
      if (potentialShouldSendDoubaoSseEvent(event)) {
        console.log(`🔵 [${eventData.service.toUpperCase()}] Event should be sent`);
        
        // Parse individual SSE event to extract id, event, and data fields
        const parsedEvent: ParsedSSEEvent = parseIndividualSSEEvent(event);
        
        // Parse the SSE event to extract just the content text
        let contentText = event; // Default to full event if parsing fails
        
        try {
          // Parse the JSON data field to extract content text based on event type
          if (parsedEvent.data) {
            console.log(`🔵 [${eventData.service.toUpperCase()}] Raw data field:`, parsedEvent.data);
            
            // Handle specific event types that need to be sent to stream server
            if (parsedEvent.event === 'STREAM_MSG_NOTIFY') {
              // Extract text and send as chunk message
              const contentText = parseStreamMsgNotifyMessage(parsedEvent.data);
              if (contentText !== undefined && contentText !== null && contentText !== '') {
                messagesToSend.push({
                  type: StreamingMessageType.STREAMING_CHUNK,
                  injectId: eventData.injectId,
                  text: contentText,
                  timestamp: new Date().toISOString()
                });
                console.log('🔵 [DOUBAO] Added STREAMING_CHUNK message for STREAM_MSG_NOTIFY');
              }
            } else if (parsedEvent.event === 'STREAM_CHUNK') {
              // Extract text from content.text_block.text and send as chunk message
              const contentText = parseStreamChunkMessage(parsedEvent.data);
              // Only send messages with actual content (but allow spaces)
              if (contentText !== undefined && contentText !== null && contentText !== '') {
                  messagesToSend.push({
                  type: StreamingMessageType.STREAMING_CHUNK,
                  injectId: eventData.injectId,
                  text: contentText,
                  timestamp: new Date().toISOString()
                });
                console.log('🔵 [DOUBAO] Added STREAMING_CHUNK message for STREAM_CHUNK');
              }
            } else if (parsedEvent.event === 'SSE_REPLY_END') {
              // Send as completed message to stream server
              try {
                const dataJson = JSON.parse(parsedEvent.data);
                
                // If we have a valid end_type, this is a completion event
                if (dataJson.end_type !== undefined) {
                  // Send STREAMING_COMPLETED message to indicate the stream has ended
                  const completedMessage: StreamingCompletedMessage = {
                    type: StreamingMessageType.STREAMING_COMPLETED,
                    injectId: eventData.injectId,
                    timestamp: new Date().toISOString()
                  };
                  
                  messagesToSend.push(completedMessage);
                  console.log('🔵 [DOUBAO] Added STREAMING_COMPLETED message for SSE_REPLY_END');
                }
              } catch (parseError) {
                console.warn('🔵 [DOUBAO] Error parsing SSE_REPLY_END data:', parseError);
              }
            }
            // All other events (including SSE_ACK) are ignored
          }
        } catch (parseError) {
          console.warn('🔵 [DOUBAO] Error parsing SSE event data for content extraction:', parseError);
        }
        
        console.log('🔵 [DOUBAO] Final content text:', contentText);
        
        console.log('🔵 [DOUBAO] Added message to send queue');
      } else {
        console.log('🔵 [DOUBAO] Event should NOT be sent');
      }
    }
  } catch (error) {
    console.error('🔵 [DOUBAO] Error processing SSE events:', error);
  }
  
  console.log('🔵 [DOUBAO] Messages to send:', JSON.stringify(messagesToSend, null, 2));
  
  return messagesToSend;
}

/**
 * Process a Doubao API request
 * @param details Chrome webRequest details
 * @returns ApiCallRecord with question content and timestamp
 */
export function processDoubaoRequest(details: chrome.webRequest.WebRequestBodyDetails): ApiCallRecord | null {
  try {
    const url = details.url;
    const method = details.method;
    
    // Check if this is a Doubao API endpoint
    const isTargetApi = apiPatterns.some(pattern => pattern.test(url));
    if (!isTargetApi) {
      return null;
    }
    
    console.log('Processing Doubao request:', url, 'Method:', method);
    
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
              const bodyJson = JSON.parse(bodyString);
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
          console.error('Error decoding Doubao request body:', e);
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
      service: doubaoConfig.serviceName || doubaoConfig.name,
      protocol: 'SSE' // Streaming response
    };
  } catch (error) {
    console.error('Error processing Doubao request:', error);
    return null;
  }
}

/**
 * Process a Doubao API response
 * @param details Chrome webRequest response details
 * @param existingRecord Existing API call record to update
 * @returns Updated ApiCallRecord with answer content and timestamp
 */
export function processDoubaoResponse(
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
    console.error('Error processing Doubao response:', error);
    return null;
  }
}

/**
 * Process streaming data chunks for Doubao API
 * @param url The URL of the streaming endpoint
 * * @param data The streaming data chunk
 * @param existingRecord Existing API call record to update
 * @returns Updated ApiCallRecord with streaming information
 */
export function processDoubaoResponseStreamingData(
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
          const parsed = JSON.parse(jsonData);
          
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
    console.error('Error processing Doubao streaming data:', error);
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
 * Helper function to check if a string is not empty
 * @param contentText The string to check
 * @returns true if the string is not undefined, null, or empty
 */
function isNotEmpty(contentText: string | undefined | null): boolean {
  return contentText !== undefined && contentText !== null && contentText !== '';
}

/**
 * Parse STREAM_MSG_NOTIFY event data to extract text content
 * @param data The raw data field from the SSE event
 * @returns The extracted text content or empty string if none found
 */
function parseStreamMsgNotifyMessage(data: string): string {
  try {
    const dataJson = JSON.parse(data);
    console.log('🔵 [DOUBAO] Parsed STREAM_MSG_NOTIFY data:', JSON.stringify(dataJson, null, 2));
    
    if (dataJson.content && dataJson.content.content_block && Array.isArray(dataJson.content.content_block)) {
      for (const block of dataJson.content.content_block) {
        if (block.content && block.content.text_block && block.content.text_block.text) {
          const text = block.content.text_block.text;
          console.log('🔵 [DOUBAO] Extracted text from STREAM_MSG_NOTIFY:', text);
          return text;
        }
      }
    }
  } catch (e: any) {
    console.log('🔵 [DOUBAO] Failed to parse STREAM_MSG_NOTIFY data:', e);
    // Try to extract text using a more robust approach
    try {
      // Look for the text pattern in the raw data
      const textMatch = data.match(/"text":"([^"]*?)"/);
      if (textMatch && textMatch[1]) {
        console.log('🔵 [DOUBAO] Extracted text from STREAM_MSG_NOTIFY using regex:', textMatch[1]);
        return textMatch[1];
      }
    } catch (regexError) {
      console.log('🔵 [DOUBAO] Failed to extract text using regex:', regexError);
    }
  }
  
  return '';
}

/**
 * Parse STREAM_CHUNK event data to extract text content
 * @param data The raw data field from the SSE event
 * @returns The extracted text content or empty string if none found
 */
function parseStreamChunkMessage(data: string): string {
  try {
    const dataJson = JSON.parse(data);
    console.log('🔵 [DOUBAO] Parsed STREAM_CHUNK data:', JSON.stringify(dataJson, null, 2));
    
    if (dataJson.patch_op && Array.isArray(dataJson.patch_op)) {
      let contentText = '';
      // Extract text from patch operations in STREAM_CHUNK
      for (const op of dataJson.patch_op) {
        if (op.patch_value && op.patch_value.content_block && Array.isArray(op.patch_value.content_block)) {
          for (const block of op.patch_value.content_block) {
            if (block.content && block.content.text_block && block.content.text_block.text) {
              if (contentText === '') {
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
      return contentText;
    }
  } catch (e: any) {
    console.log('🔵 [DOUBAO] Failed to parse STREAM_CHUNK data:', e);
    // Try to extract text using a more robust approach for malformed JSON
    try {
      // Look for the text pattern in the raw data
      const textMatch = data.match(/"text":"([^"]*?)"/);
      if (textMatch && textMatch[1]) {
        console.log('🔵 [DOUBAO] Extracted text from STREAM_CHUNK using regex:', textMatch[1]);
        return textMatch[1];
      }
    } catch (regexError) {
      console.log('🔵 [DOUBAO] Failed to extract text using regex:', regexError);
    }
  }
  
  return '';
}

/**
 * Pre-guard function to determine if an SSE event should be considered for processing (potential send)
 * This is not the final decision - the actual decision is made in processSseEvents after content extraction
 * @param data The raw SSE chunk data
 * @returns true if the event should be considered for processing (potential send), false if it should be filtered out
 */
export function potentialShouldSendDoubaoSseEvent(data: string): boolean {
  try {
    // Parse the SSE data to check the event type
    const lines = data.split('\n');
    let eventType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for event type
      if (line.startsWith('event: ')) {
        eventType = line.substring(7).trim(); // Remove 'event: ' prefix
        break;
      }
    }
    
    // Only send specific event types
    if (eventType === 'SSE_REPLY_END' || eventType === 'STREAM_MSG_NOTIFY' || eventType === 'STREAM_CHUNK') {
      return true;
    } 
    
    // All other event types should be filtered out
    return false;
  } catch (error) {
    console.error('Error checking if Doubao event should be sent:', error);
    // If there's an error in parsing, don't send the event to be safe
    return false;
  }
}
