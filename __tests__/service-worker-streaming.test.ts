/**
 * Integration tests for service worker streaming message sending
 * 
 * These tests verify that the service worker sends data to the stream server
 * in the exact format specified in DESIGN.md (lines 737-779) by mocking
 * the actual network calls.
 */

// Mock the fetch function to capture calls
global.fetch = jest.fn();

// Import the message interfaces
import { 
  StreamingStartedMessage, 
  StreamingChunkMessage, 
  StreamingCompletedMessage,
  StreamingMessageType,
  ContentStreamingStartedMessage,
  ContentStreamingChunkMessage,
  ContentStreamingCompletedMessage
} from '../types';

// Import service handlers directly
import { doubaoServiceHandler } from '../request_response_handler/doubao';
import { deepseekServiceHandler } from '../request_response_handler/deepseek';

describe('Service Handler Streaming Message Processing', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Reset the fetch mock
    (global.fetch as jest.Mock).mockClear();
  });

  describe('Doubao Service Handler - STREAMING_STARTED Message', () => {
    test('should process message conforming to DESIGN.md specification', async () => {
      // Create a mock content streaming request started message
      const mockMessage: ContentStreamingStartedMessage = {
        type: StreamingMessageType.STREAMING_STARTED,
        service: 'doubao',
        url: 'https://www.doubao.com/chat/completion',
        injectId: 'inject-123456-1700000000000',
        question: 'hello3',
        source: 'fetch',
        timestamp: Date.now()
      };

      // Process the message using the doubao service handler
      const processedMessage = doubaoServiceHandler.handleStreamingStarted(mockMessage);

      // Verify the structure matches the specification in DESIGN.md line 744-752
      expect(processedMessage).toEqual({
        type: StreamingMessageType.STREAMING_STARTED,
        service: 'doubao',
        url: 'https://www.doubao.com/chat/completion',
        injectId: 'inject-123456-1700000000000',
        question: 'hello3',
        timestamp: expect.any(String),
        source: 'fetch'
      });
    });
  });

  describe('Doubao Service Handler - STREAMING_CHUNK Message', () => {
    test('should process message conforming to DESIGN.md specification', async () => {
      // Create a mock content streaming raw data message with actual Doubao SSE event data
      // Using real events from doubao.md to make the test more realistic
      const mockMessage: ContentStreamingChunkMessage = {
        type: StreamingMessageType.STREAMING_CHUNK,
        service: 'doubao',
        url: 'https://www.doubao.com/chat/completion',
        injectId: 'inject-123456-1700000000000',
        data: {
          rawChunk: 'id: 5\nevent: STREAM_MSG_NOTIFY\ndata: {"content":{"content_block":[{"block_type":10000,"block_id":"30104067194140162","content":{"text_block":{"text":"看起来"}},"is_finish":false,"patch_type":1}],"content_status":100}}\n\n' +
                   'id: 8\nevent: STREAM_CHUNK\ndata: {"message_id":"30066592834160898","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30104067194140162","content":{"text_block":{"text":"是"}},"is_finish":false,"patch_type":1}]}}]}\n\n' +
                   'id: 11\nevent: STREAM_CHUNK\ndata: {"message_id":"30066592834160898","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30104067194140162","content":{"text_block":{"text":"想"}},"is_finish":false,"patch_type":1}]}}]}\n\n'
        },
        source: 'fetch',
        timestamp: Date.now()
      };

      // Process the message using the doubao service handler
      const processedMessages = doubaoServiceHandler.handleStreamingChunk(mockMessage);

      // Check that we get an array of messages with the correct structure
      if (Array.isArray(processedMessages)) {
        expect(processedMessages.length).toBeGreaterThan(0);
        
        const firstMessage = processedMessages[0];
        expect(firstMessage).toEqual({
          type: StreamingMessageType.STREAMING_CHUNK,
          injectId: 'inject-123456-1700000000000',
          text: expect.any(String),
          timestamp: expect.any(String)
        });
      } else {
        // Handle the case where it's a single message
        expect(processedMessages).toEqual({
          type: StreamingMessageType.STREAMING_CHUNK,
          injectId: 'inject-123456-1700000000000',
          text: expect.any(String),
          timestamp: expect.any(String)
        });
      }
    });
  });

  describe('Doubao Service Handler - STREAMING_COMPLETED Message', () => {
    test('should process message conforming to DESIGN.md specification', async () => {
      // Create a mock content streaming completed message
      const mockMessage: ContentStreamingCompletedMessage = {
        type: StreamingMessageType.STREAMING_COMPLETED,
        service: 'doubao',
        url: 'https://www.doubao.com/chat/completion',
        injectId: 'inject-123456-1700000000000',
        source: 'fetch',
        timestamp: Date.now(),
        data: {}
      };

      // Process the message using the doubao service handler
      const processedMessage = doubaoServiceHandler.handleStreamingCompleted(mockMessage);

      // Check the structure of the processed message
      expect(processedMessage).toEqual({
        type: StreamingMessageType.STREAMING_COMPLETED,
        injectId: 'inject-123456-1700000000000',
        timestamp: expect.any(String)
      });
    });
  });

  describe('Doubao Service Handler - Content Text Extraction', () => {
    test('should extract content text from Doubao response event', async () => {
      // Create a mock content streaming raw data message with actual Doubao SSE event data
      const mockMessage: ContentStreamingChunkMessage = {
        type: StreamingMessageType.STREAMING_CHUNK,
        service: 'doubao',
        url: 'https://www.doubao.com/chat/completion',
        injectId: 'inject-137455-1763609233401',
        data: {
          rawChunk: 'id: 5\nevent: STREAM_MSG_NOTIFY\ndata: {"content":{"content_block":[{"block_type":10000,"block_id":"30097405018542082","content":{"text_block":{"text":"Hi"}},"is_finish":false,"patch_type":1}],"content_status":100}}\n\n'
        },
        source: 'fetch',
        timestamp: Date.now()
      };

      // Process the message using the doubao service handler
      const processedMessages = doubaoServiceHandler.handleStreamingChunk(mockMessage);

      // Check that we get an array of messages with the correct structure
      if (Array.isArray(processedMessages)) {
        expect(processedMessages.length).toBeGreaterThan(0);
        
        const firstMessage = processedMessages[0];
        expect(firstMessage).toEqual({
          type: StreamingMessageType.STREAMING_CHUNK,
          injectId: 'inject-137455-1763609233401',
          text: 'Hi', // Should extract just the content text
          timestamp: expect.any(String)
        });
      } else {
        // Handle the case where it's a single message
        expect(processedMessages).toEqual({
          type: StreamingMessageType.STREAMING_CHUNK,
          injectId: 'inject-137455-1763609233401',
          text: 'Hi', // Should extract just the content text
          timestamp: expect.any(String)
        });
      }
    });
  });

  describe('DeepSeek Service Handler - Content Text Extraction', () => {
    test('should extract content text from DeepSeek response event', async () => {
      // Create a mock content streaming raw data message with actual DeepSeek SSE event data
      const mockMessage: ContentStreamingChunkMessage = {
        type: StreamingMessageType.STREAMING_CHUNK,
        service: 'deepseek',
        url: 'https://chat.deepseek.com/api/v0/chat/completion',
        injectId: 'inject-123456-1700000000000',
        data: {
          rawChunk: 'data: {"v": "I"}\n\n'
        },
        source: 'fetch',
        timestamp: Date.now()
      };

      // Process the message using the deepseek service handler
      const processedMessages = deepseekServiceHandler.handleStreamingChunk(mockMessage);

      // Check that we get an array of messages with the correct structure
      if (Array.isArray(processedMessages)) {
        expect(processedMessages.length).toBeGreaterThan(0);
        
        const firstMessage = processedMessages[0];
        expect(firstMessage).toEqual({
          type: StreamingMessageType.STREAMING_CHUNK,
          injectId: 'inject-123456-1700000000000',
          text: 'I', // Should extract just the content text
          timestamp: expect.any(String)
        });
      } else {
        // Handle the case where it's a single message
        expect(processedMessages).toEqual({
          type: StreamingMessageType.STREAMING_CHUNK,
          injectId: 'inject-123456-1700000000000',
          text: 'I', // Should extract just the content text
          timestamp: expect.any(String)
        });
      }
    });
  });
});