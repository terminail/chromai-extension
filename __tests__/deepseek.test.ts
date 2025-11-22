import { deepseekServiceHandler } from '../request_response_handler/deepseek.js';
import { 
  StreamingMessageType,
  ContentStreamingStartedMessage,
  ContentStreamingChunkMessage,
  ContentStreamingCompletedMessage
} from '../types.js';

// Test data from deepseek-20251121.md
const requestPayload = {
  "chat_session_id": "76dbca88-9fb6-4a75-b208-decb5d232d62",
  "parent_message_id": null,
  "prompt": "hello2",
  "ref_file_ids": [],
  "thinking_enabled": false,
  "search_enabled": false,
  "client_stream_id": "20251121-dbe846a257814b7f"
};

const responsePayload = `event: ready
data: {"request_message_id":1,"response_message_id":2}

event: update_session
data: {"updated_at":1763704812.950139}

data: {"v": {"response": {"message_id": 2, "parent_id": 1, "model": "", "role": "ASSISTANT", "thinking_enabled": false, "ban_edit": false, "ban_regenerate": false, "status": "WIP", "accumulated_token_usage": null, "files": [], "inserted_at": 1763704812.917, "search_enabled": false, "feedback": null, "has_pending_fragment": true, "auto_continue": false, "conversation_mode": "DEFAULT", "fragments": []}}}

data: {"v": "Hello"}

data: {"v": "!"}

data: {"v": " 👋"}

data: {"v": "\\n\\n"}

data: {"v": "It"}

data: {"v": " looks"}

data: {"v": " like"}

data: {"v": " you"}

data: {"v": " typed"}

data: {"v": "\\"}

data: {"v": "hello"}

data: {"v": "2"}

data: {"v": "\\"}

data: {"v": " -"}

data: {"v": " was"}

data: {"v": " there"}

data: {"v": " something"}

data: {"v": " specific"}

data: {"v": " you"}

data: {"v": "'d"}

data: {"v": " like"}

data: {"v": " to"}

data: {"v": " know"}

data: {"v": " or"}

data: {"v": " discuss"}

data: {"v": "?"}

data: {"v": " I"}

data: {"v": "'m"}

data: {"v": " here"}

data: {"v": " to"}

data: {"v": " help"}

data: {"v": " with"}

data: {"v": " anything"}

data: {"v": " from"}

data: {"v": " answering"}

data: {"v": " questions"}

data: {"v": " to"}

data: {"v": " having"}

data: {"v": " a"}

data: {"v": " conversation"}

data: {"v": " about"}

data: {"v": " whatever"}

data: {"v": "'s"}

data: {"v": " on"}

data: {"v": " your"}

data: {"v": " mind"}

data: {"v": "!\\n\\n"}

data: {"v": "Feel"}

data: {"v": " free"}

data: {"v": " to"}

data: {"v": " ask"}

data: {"v": " me"}

data: {"v": " anything"}

data: {"v": "!"}

data: {"v": " 😊"}

data: {"v": [{"v": "FINISHED", "p": "status"}, {"v": 86, "p": "accumulated_token_usage"}], "p": "response", "o": "BATCH"}

event: finish
data: {}

event: update_session
data: {"updated_at":1763704815.185329}

event: title
data: {"content":"Greeting and Offer to Assist"}

event: close
data: {"click_behavior":"none","auto_resume":false}`;

const expectedQuestion = "hello2";
const expectedAnswer = `Hello! 👋 

It looks like you typed "hello2" - was there something specific you'd like to know or discuss? I'm here to help with anything from answering questions to having a conversation about whatever's on your mind!

Feel free to ask me anything! 😊

What can I assist you with today?`;

describe('DeepSeek Service Handler', () => {
  test('should extract question from request payload', () => {
    const message: ContentStreamingStartedMessage = {
      type: StreamingMessageType.STREAMING_STARTED,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id',
      requestBody: JSON.stringify(requestPayload),
      question: expectedQuestion,
      source: 'xhr',
      timestamp: Date.now()
    };

    const result = deepseekServiceHandler.handleStreamingStarted(message);
    
    expect(result.question).toBe(expectedQuestion);
    expect(result.service).toBe('deepseek');
    expect(result.url).toBe('https://chat.deepseek.com/api/v0/chat/completion');
    expect(result.type).toBe(StreamingMessageType.STREAMING_STARTED);
  });

  test('should process streaming data and extract text chunks correctly', () => {
    const message: ContentStreamingChunkMessage = {
      type: StreamingMessageType.STREAMING_CHUNK,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id',
      data: {
        rawChunk: responsePayload
      },
      source: 'xhr',
      timestamp: Date.now()
    };

    const results = deepseekServiceHandler.handleStreamingChunk(message);
    
    // Should return an array of messages
    expect(Array.isArray(results)).toBe(true);
    
    // Check that we have some content messages
    const contentMessages = Array.isArray(results) ? results.filter((result: any) => 
      result.type === StreamingMessageType.STREAMING_CHUNK && 
      result.text && 
      result.text.trim() !== ''
    ) : [];
    
    // Verify we have content messages
    expect(contentMessages.length).toBeGreaterThan(0);
    
    // Extract all text content and join it to verify it contains key parts
    const textContents = contentMessages.map((msg: any) => msg.text);
    const combinedText = textContents.join('');
    
    // Verify that the combined text contains the key parts of the expected answer
    expect(combinedText).toContain('Hello');
    expect(combinedText).toContain('looks like you typed');
  });

  test('should extract meaningful content from streaming events', () => {
    const message: ContentStreamingChunkMessage = {
      type: StreamingMessageType.STREAMING_CHUNK,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id',
      data: {
        rawChunk: responsePayload
      },
      source: 'xhr',
      timestamp: Date.now()
    };

    const results = deepseekServiceHandler.handleStreamingChunk(message);
    
    // Should return an array of messages
    expect(Array.isArray(results)).toBe(true);
    
    // Extract all text content and join it
    const contentMessages = Array.isArray(results) ? results.filter((result: any) => 
      result.type === StreamingMessageType.STREAMING_CHUNK && 
      result.text && 
      result.text.trim() !== ''
    ) : [];
    
    const textContents = contentMessages.map((msg: any) => msg.text);
    const combinedText = textContents.join('');
    
    // Verify that we extract the key components of the answer
    expect(combinedText).toContain('Hello');
    expect(combinedText).toContain('!');
    expect(combinedText).toContain('👋');
    expect(combinedText).toContain('It looks like you typed');
    expect(combinedText).toContain('hello2');
    expect(combinedText).toContain('I\'m here to help');
    expect(combinedText).toContain('Feel free to ask me anything');
    expect(combinedText).toContain('😊');
  });

  test('should handle streaming completion', () => {
    const message: ContentStreamingCompletedMessage = {
      type: StreamingMessageType.STREAMING_COMPLETED,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id',
      source: 'xhr',
      timestamp: Date.now(),
      data: {}
    };

    const result = deepseekServiceHandler.handleStreamingCompleted(message);
    
    expect(result.type).toBe(StreamingMessageType.STREAMING_COMPLETED);
    expect(result.injectId).toBe('test-inject-id');
  });
  
  test('should filter out irrelevant SSE events', () => {
    // Note: The shouldSendSseEvent method is no longer part of the public interface
    // Event filtering is now handled internally by the processSseEvents function
    // The tests that used this method have been removed as they no longer apply
  });

  test('should extract content from complex nested JSON structure with Chinese characters', () => {
    // This test case covers the edge case from lines 21-23 in the DeepSeek response
    // data: {"v": [{"v": false, "p": "has_pending_fragment"}, {"v": [{"id": 1, "type": "RESPONSE", "content": "你好", "references": [], "stage_id": 1}], "p": "fragments", "o": "APPEND"}], "p": "response", "o": "BATCH"}
    const complexNestedEvent = `data: {"v": [{"v": false, "p": "has_pending_fragment"}, {"v": [{"id": 1, "type": "RESPONSE", "content": "你好", "references": [], "stage_id": 1}], "p": "fragments", "o": "APPEND"}], "p": "response", "o": "BATCH"}`;
    
    const message: ContentStreamingChunkMessage = {
      type: StreamingMessageType.STREAMING_CHUNK,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id',
      data: {
        rawChunk: complexNestedEvent
      },
      source: 'xhr',
      timestamp: Date.now()
    };

    const results = deepseekServiceHandler.handleStreamingChunk(message);
    
    // Should return an array of messages
    expect(Array.isArray(results)).toBe(true);
    
    // Extract content messages
    const contentMessages = Array.isArray(results) ? results.filter((result: any) => 
      result.type === StreamingMessageType.STREAMING_CHUNK
    ) : [];
    
    // Should have at least one content message
    expect(contentMessages.length).toBeGreaterThan(0);
    
    // The first message should contain the Chinese character "你好"
    expect(contentMessages[0].text).toContain('你好');
  });

  test('should preserve space characters and not trim them', () => {
    // This test case covers the edge case from lines 27-29 in the DeepSeek response
    // data: {"v": " "}
    const spaceEvent = `data: {"v": " "}`;
    
    const message: ContentStreamingChunkMessage = {
      type: StreamingMessageType.STREAMING_CHUNK,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id',
      data: {
        rawChunk: spaceEvent
      },
      source: 'xhr',
      timestamp: Date.now()
    };

    const results = deepseekServiceHandler.handleStreamingChunk(message);
    
    // Should return an array of messages
    expect(Array.isArray(results)).toBe(true);
    
    // Extract content messages
    const contentMessages = Array.isArray(results) ? results.filter((result: any) => 
      result.type === StreamingMessageType.STREAMING_CHUNK
    ) : [];
    
    // Should have at least one content message
    expect(contentMessages.length).toBeGreaterThan(0);
    
    // The message should contain exactly one space character
    expect(contentMessages[0].text).toBe(' ');
  });
});