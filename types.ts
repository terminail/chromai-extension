// types.ts - Data structures for API monitoring

// === INJECT-RELATED INTERFACES ===

/**
 * Base interface for all inject script messages
 */
export interface InjectMessageBase {
  type: StreamingMessageType;
  service: string;
  url: string;
  injectId: string;  // Use injectId for clarity and to avoid ambiguity
  timestamp: number;
  source: 'xhr' | 'fetch';
}

/**
 * Generic request payload interface
 */
export interface RequestPayload {
  [key: string]: any;
}

/**
 * Specific request payload interface for Doubao service
 */
export interface DoubaoRequestPayload extends RequestPayload {
  messages?: DoubaoMessage[];
  client_meta?: any;
  option?: any;
  ext?: any;
}

export interface DoubaoMessage {
  local_message_id?: string;
  content_block?: DoubaoContentBlock[];
  content?: string;
  message_status?: number;
}

export interface DoubaoContentBlock {
  block_type?: number;
  content?: {
    text_block?: {
      text?: string;
      icon_url?: string;
      icon_url_dark?: string;
    };
    pc_event_block?: string;
  };
  block_id?: string;
  parent_id?: string;
  meta_info?: any[];
  append_fields?: any[];
}

/**
 * Specific request payload interface for DeepSeek service
 */
export interface DeepSeekRequestPayload extends RequestPayload {
  messages?: DeepSeekMessage[];
  prompt?: string;
  option?: any;
}

export interface DeepSeekMessage {
  role?: string;
  content?: string;
}

/**
 * Message sent when a streaming request is started from inject script
 */
export interface InjectStreamingRequestStartedMessage extends InjectMessageBase {
  type: StreamingMessageType.STREAMING_STARTED;
  requestBody?: any;
  question: string;  // Renamed from questionContent to question
}

/**
 * Message sent when streaming chunk data is received from inject script
 */
export interface InjectStreamingChunkMessage extends InjectMessageBase {
  type: StreamingMessageType.STREAMING_CHUNK;
  data: {
    rawChunk: string;
  };
}

/**
 * Message sent when streaming is completed from inject script
 */
export interface InjectStreamingCompletedMessage extends InjectMessageBase {
  type: StreamingMessageType.STREAMING_COMPLETED;
  data: {
    // No additional fields needed as url, injectId, and timestamp are in the base interface
  };
}

// === CONTENT-SCRIPT RELATED INTERFACES ===

/**
 * Base interface for all content script messages
 */
export interface ContentMessageBase extends InjectMessageBase {
  tabId?: number;
}

/**
 * Message sent when a streaming request is started from content script
 */
export interface ContentStreamingStartedMessage extends ContentMessageBase {
  type: StreamingMessageType.STREAMING_STARTED;
  requestBody?: any;
  question: string;  // Renamed from questionContent to question
}

/**
 * Message sent when streaming raw data is received from content script
 */
export interface ContentStreamingChunkMessage extends ContentMessageBase {
  type: StreamingMessageType.STREAMING_CHUNK;
  data: {
    rawChunk: string;
  };
}

/**
 * Message sent when streaming is completed from content script
 */
export interface ContentStreamingCompletedMessage extends ContentMessageBase {
  type: StreamingMessageType.STREAMING_COMPLETED;
  data: {
    // No additional fields needed as url, injectId, and timestamp are in the base interface
  };
}

// === STREAM-SERVER RELATED INTERFACES ===

/**
 * Base interface for all streaming data messages sent to the server
 */
export interface StreamingMessageBase {
  type: StreamingMessageType;
  injectId: string;
  timestamp?: string;
}

/**
 * Streaming request started message sent to the server
 */
export interface StreamingStartedMessage extends StreamingMessageBase {
  type: StreamingMessageType.STREAMING_STARTED;
  service: string;
  url: string;
  question: string;
  source: 'xhr' | 'fetch';
}

/**
 * Streaming data update message sent to the server
 */
export interface StreamingChunkMessage extends StreamingMessageBase {
  type: StreamingMessageType.STREAMING_CHUNK;
  service: string;
  url: string;
  text: string;
  source: 'xhr' | 'fetch';
}

/**
 * Streaming completed message sent to the server
 */
export interface StreamingCompletedMessage extends StreamingMessageBase {
  type: StreamingMessageType.STREAMING_COMPLETED;
}

/**
 * Represents a recorded API call with question and answer content
 */
export interface ApiCallRecord {
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

/**
 * HTTP response data message sent to the server
 */
export interface HttpResponseData extends StreamingMessageBase {
  type: StreamingMessageType.STREAMING_COMPLETED;  // Fixed to use enum instead of hardcoded string
  record: ApiCallRecord;
}

/**
 * Represents a monitored service
 */
export interface MonitoredService {
  name: string;
  baseUrl: string;
  apiEndpoint: string;
  requestPatterns: string[];
  responsePatterns: string[];
}

/**
 * Service worker state
 */
export interface MonitorState {
  isMonitoring: boolean;
  apiRecords: ApiCallRecord[];
  activeServices: Map<string, MonitoredService>;
  lastUpdated: number;
}

/**
 * Interface for monitored service configuration
 */
export interface MonitoredServiceConfig {
  name: string;
  baseUrl: string;
  requestPatterns: string[];
  apiPatterns?: RegExp[];
  serviceName?: string;
}

/**
 * Enum for streaming message types shared across components
 */
export enum StreamingMessageType {
  STREAMING_STARTED = 'STREAMING_STARTED',
  STREAMING_CHUNK = 'STREAMING_CHUNK',
  STREAMING_COMPLETED = 'STREAMING_COMPLETED'
}

/**
 * Interface for website-specific streaming handlers
 * Ensures all service handlers implement the same functions for consistency
 * These handlers prepare messages to be sent to the stream-server
 */
export interface StreamingServiceHandler {
  /**
   * Handle streaming request started message for this service
   * @param message The streaming request started message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingStarted(message: ContentStreamingStartedMessage): StreamingStartedMessage;
  
  /**
   * Handle streaming chunk data message for this service
   * @param message The streaming chunk data message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingChunk(message: ContentStreamingChunkMessage): StreamingChunkMessage | StreamingChunkMessage[];
  
  /**
   * Handle streaming completed message for this service
   * @param message The streaming completed message
   * @returns Processed message data for unified streaming to the server
   */
  handleStreamingCompleted(message: ContentStreamingCompletedMessage): StreamingCompletedMessage;
}
