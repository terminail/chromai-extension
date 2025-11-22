import { deepseekServiceHandler } from '../request_response_handler/deepseek.js';
import { 
  StreamingMessageType,
  ContentStreamingStartedMessage,
  ContentStreamingChunkMessage,
  ContentStreamingCompletedMessage
} from '../types.js';

// Test data from request-response-20251121.md
const deepseekChatRequestPayload = {
  "chat_session_id": "76dbca88-9fb6-4a75-b208-decb5d232d62",
  "parent_message_id": null,
  "prompt": "hello2",
  "ref_file_ids": [],
  "thinking_enabled": false,
  "search_enabled": false,
  "client_stream_id": "20251121-dbe846a257814b7f"
};

const deepseekChatResponsePayload = `event: ready
data: {"request_message_id":1,"response_message_id":2}

event: update_session
data: {"updated_at":1763704812.950139}

data: {"v": {"response": {"message_id": 2, "parent_id": 1, "model": "", "role": "ASSISTANT", "thinking_enabled": false, "ban_edit": false, "ban_regenerate": false, "status": "WIP", "accumulated_token_usage": null, "files": [], "inserted_at": 1763704812.917, "search_enabled": false, "feedback": null, "has_pending_fragment": true, "auto_continue": false, "conversation_mode": "DEFAULT", "fragments": []}}}

data: {"v": "Hello"}

data: {"v": "!"}

data: {"v": " 👋"}

data: {"v": " \\n\\n"}

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

data: {"v": "!"}

data: {"v": "\\n\\n"}

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

const expectedUserQuestion = "hello2";

describe('DeepSeek Integration Test', () => {
  test('should process complete streaming flow correctly', () => {
    // Simulate STREAMING_STARTED message from inject.ts → content-script.ts → service-worker
    const contentStreamingStartedMessage: ContentStreamingStartedMessage = {
      type: StreamingMessageType.STREAMING_STARTED,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id-123456',
      requestBody: JSON.stringify(deepseekChatRequestPayload),
      question: expectedUserQuestion,
      source: 'xhr',
      timestamp: Date.now()
    };

    // Process the STREAMING_STARTED message through the service handler
    const processedStartedMessage = deepseekServiceHandler.handleStreamingStarted(contentStreamingStartedMessage);
    
    // Verify the processed STREAMING_STARTED message
    expect(processedStartedMessage.type).toBe(StreamingMessageType.STREAMING_STARTED);
    expect(processedStartedMessage.service).toBe('deepseek');
    expect(processedStartedMessage.url).toBe('https://chat.deepseek.com/api/v0/chat/completion');
    expect(processedStartedMessage.injectId).toBe('test-inject-id-123456');
    expect(processedStartedMessage.question).toBe(expectedUserQuestion);
    expect(processedStartedMessage.source).toBe('xhr');
    expect(processedStartedMessage.timestamp).toBeDefined();

    // Simulate STREAMING_CHUNK messages from inject.ts → content-script.ts → service-worker
    const contentStreamingChunkMessage: ContentStreamingChunkMessage = {
      type: StreamingMessageType.STREAMING_CHUNK,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id-123456',
      data: {
        rawChunk: deepseekChatResponsePayload
      },
      source: 'xhr',
      timestamp: Date.now()
    };

    // Process the STREAMING_CHUNK message through the service handler
    const processedChunkMessages = deepseekServiceHandler.handleStreamingChunk(contentStreamingChunkMessage);
    
    // Verify that we got an array of messages
    expect(Array.isArray(processedChunkMessages)).toBe(true);
    
    // Check that we have content messages
    const contentMessages = Array.isArray(processedChunkMessages) ? processedChunkMessages.filter((result: any) => 
      result.type === StreamingMessageType.STREAMING_CHUNK && 
      result.text && 
      result.text.trim() !== ''
    ) : [];
    
    // Verify we have content messages
    expect(contentMessages.length).toBeGreaterThan(0);

    // Simulate STREAMING_COMPLETED message from inject.ts → content-script.ts → service-worker
    const contentStreamingCompletedMessage: ContentStreamingCompletedMessage = {
      type: StreamingMessageType.STREAMING_COMPLETED,
      service: 'deepseek',
      url: 'https://chat.deepseek.com/api/v0/chat/completion',
      injectId: 'test-inject-id-123456',
      source: 'xhr',
      timestamp: Date.now(),
      data: {}
    };

    // Process the STREAMING_COMPLETED message through the service handler
    const processedCompletedMessage = deepseekServiceHandler.handleStreamingCompleted(contentStreamingCompletedMessage);
    
    // Verify the processed STREAMING_COMPLETED message
    expect(processedCompletedMessage.type).toBe(StreamingMessageType.STREAMING_COMPLETED);
    expect(processedCompletedMessage.injectId).toBe('test-inject-id-123456');
    expect(processedCompletedMessage.timestamp).toBeDefined();
  });
});