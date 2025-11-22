import { doubaoSamanthaServiceHandler } from '../request_response_handler/doubao_samantha.js';
import { 
  StreamingMessageType,
  ContentStreamingStartedMessage,
  ContentStreamingChunkMessage,
  ContentStreamingCompletedMessage
} from '../types.js';

// Test data from request-response-20251121.md
const requestPayload = {
  "messages": [{
    "content": "{\"text\":\"hello1\"}",
    "content_type": 2001,
    "attachments": [],
    "references": []
  }],
  "completion_option": {
    "is_regen": false,
    "with_suggest": true,
    "need_create_conversation": true,
    "launch_stage": 1,
    "is_replace": false,
    "is_delete": false,
    "message_from": 0,
    "action_bar_skill_id": 0,
    "use_deep_think": false,
    "use_auto_cot": false,
    "resend_for_regen": false,
    "enable_commerce_credit": false,
    "event_id": "0"
  },
  "evaluate_option": {
    "web_ab_params": ""
  },
  "conversation_id": "0",
  "local_conversation_id": "local_1381142239817711",
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc"
};

const responsePayload = `data: {"event_data":"{\\"message_id\\":\\"30264898682237954\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"message_index\\":1,\\"conversation_type\\":5}","event_id":"0","event_type":2002}

data: {"event_data":"{\\"type\\":\\"seed_intention\\",\\"seed_intention\\":{\\"intention\\":\\"seed_main\\",\\"detail\\":\\"default\\",\\"seed_agent_name\\":\\"Agent-Chat\\",\\"intention_detail_dict\\":\\"{\\\\\\"origin_plugin_name\\\\\\":\\\\\\"无\\\\\\",\\\\\\"origin_plugin_name_generalized\\\\\\":\\\\\\"无\\\\\\",\\\\\\"plugin_name\\\\\\":\\\\\\"无\\\\\\",\\\\\\"plugin_name_generalized\\\\\\":\\\\\\"无\\\\\\",\\"rich_media_intent\\":\\\\\\"0\\\\\\",\\\\\\"browsing_intention\\\\\\":\\\\\\"-1\\\\\\",\\\\\\"complex_browsing_intent\\\\\\":\\\\\\"0\\\\\\",\\\\\\"creation_knowledge_intent\\\\\\":\\\\\\"其他\\\\\\",\\\\\\"creation_detail_intent\\\\\\":\\\\\\"未知\\\\\\",\\\\\\"deep_think_intent\\\\\\":\\\\\\"0\\\\\\",\\\\\\"vlm_intent\\\\\\":\\\\\\"False\\\\\\"}\\"}}","event_id":"1","event_type":2010}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{\\\\\\"text\\\\\\":\\\\\\"Hello\\\\\\"}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"2","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{\\\\\\"text\\\\\\":\\\\\\" there! 😊 Did you mean to\\\\\\"}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"3","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{\\\\\\"text\\\\\\":\\\\\\" say \\\\\\\\\\"hello\\\\\\\\\\" (with a\\\\\\"}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"4","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{\\\\\\"text\\\\\\":\\\\\\" typo) or is \\\\\\\\\\"hello\\\\\\"}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"5","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{\\\\\\"text\\\\\\":\\\\\\"1\\\\\\\\\\" a specific message?\\\\\\"}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"6","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{\\\\\\"text\\\\\\":\\\\\\" Feel free to share what you want to talk\\\\\\"}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"7","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{\\\\\\"text\\\\\\":\\\\\\" about—I’m here to chat,\\\\\\"}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"8","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{\\\\\\"text\\\\\\":\\\\\\" help, or answer any questions!\\\\\\"}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"9","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\"{}\\",\\"id\\":\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":1,\\"is_finish\\":true,\\"has_suggest\\":true,\\"message_action_bar\\":{},\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\",\\"tts_content\\":\\"Hello there! 😊 Did you mean to say \\\\\\"hello\\\\\\" (with a typo) or is \\\\\\"hello1\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\"}","event_id":"10","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2002,\\"content\\":\\"{\\\\\\"suggest\\\\\\":\\\\\\"How are you today?\\\\\\",\\\\\\"suggestions\\\\\\":[\\\\\\"How are you today?\\\\\\"]}\\",\\"id\\":\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":1,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"11","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2002,\\"content\\":\\"{\\\\\\"suggest\\\\\\":\\\\\\"What can you do?\\\\\\",\\\\\\"suggestions\\\\\\":[\\\\\\"What can you do?\\\\\\"]}\\",\\"id\\":\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":1,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"12","event_type":2001}

data: {"event_data":"{\\"message\\":{\\"content_type\\":2002,\\"content\\":\\"{\\\\\\"suggest\\\\\\":\\\\\\"Can you tell me a joke?\\\\\\",\\\\\\"suggestions\\\\\\":[\\\\\\"Can you tell me a joke?\\\\\\"]}\\",\\"id\\":\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\"},\\"message_id\\":\\"30264898682238466\\",\\"local_message_id\\":\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\",\\"conversation_id\\":\\"30272893581535746\\",\\"local_conversation_id\\":\\"local_1381142239817711\\",\\"section_id\\":\\"30272893581536002\\",\\"reply_id\\":\\"30264898682237954\\",\\"is_delta\\":true,\\"status\\":1,\\"is_finish\\":true,\\"has_suggest\\":true,\\"message_action_bar\\":{},\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\",\\"tts_content\\":\\"Hello there! 😊 Did you mean to say \\\\\\"hello\\\\\\" (with a typo) or is \\\\\\"hello1\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\"}","event_id":"13","event_type":2001}

data: {"event_data":"{}","event_id":"14","event_type":2003}`;

const expectedQuestion = "hello1";
const expectedAnswer = `Hello there! 😊 Did you mean to say "hello" (with a typo) or is "hello1" a specific message? Feel free to share what you want to talk about—I'm here to chat, help, or answer any questions!`;

describe('Doubao Samantha Integration Test', () => {
  test('should process complete streaming flow correctly', () => {
    // Simulate STREAMING_STARTED message from inject.ts → content-script.ts → service-worker
    const streamingStartedMessage: ContentStreamingStartedMessage = {
      type: StreamingMessageType.STREAMING_STARTED,
      service: 'doubao_samantha',
      url: 'https://www.doubao.com/samantha/chat/completion',
      injectId: 'test-inject-id-789012',
      requestBody: JSON.stringify(requestPayload),
      question: expectedQuestion,
      source: 'fetch',
      timestamp: Date.now()
    };

    // Process the STREAMING_STARTED message through the service handler
    const processedStartedMessage = doubaoSamanthaServiceHandler.handleStreamingStarted(streamingStartedMessage);
    
    // Verify the processed STREAMING_STARTED message
    expect(processedStartedMessage.type).toBe(StreamingMessageType.STREAMING_STARTED);
    expect(processedStartedMessage.service).toBe('doubao_samantha');
    expect(processedStartedMessage.url).toBe('https://www.doubao.com/samantha/chat/completion');
    expect(processedStartedMessage.injectId).toBe('test-inject-id-789012');
    expect(processedStartedMessage.question).toBe(expectedQuestion);
    expect(processedStartedMessage.source).toBe('fetch');
    expect(processedStartedMessage.timestamp).toBeDefined();

    // Simulate STREAMING_CHUNK messages from inject.ts → content-script.ts → service-worker
    const streamingChunkMessage: ContentStreamingChunkMessage = {
      type: StreamingMessageType.STREAMING_CHUNK,
      service: 'doubao_samantha',
      url: 'https://www.doubao.com/samantha/chat/completion',
      injectId: 'test-inject-id-789012',
      data: {
        rawChunk: responsePayload
      },
      source: 'fetch',
      timestamp: Date.now()
    };

    // Process the STREAMING_CHUNK message through the service handler
    const processedChunkMessages = doubaoSamanthaServiceHandler.handleStreamingChunk(streamingChunkMessage);
    
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
    const streamingCompletedMessage: ContentStreamingCompletedMessage = {
      type: StreamingMessageType.STREAMING_COMPLETED,
      service: 'doubao_samantha',
      url: 'https://www.doubao.com/samantha/chat/completion',
      injectId: 'test-inject-id-789012',
      source: 'fetch',
      timestamp: Date.now(),
      data: {}
    };

    // Process the STREAMING_COMPLETED message through the service handler
    const processedCompletedMessage = doubaoSamanthaServiceHandler.handleStreamingCompleted(streamingCompletedMessage);
    
    // Verify the processed STREAMING_COMPLETED message
    expect(processedCompletedMessage.type).toBe(StreamingMessageType.STREAMING_COMPLETED);
    expect(processedCompletedMessage.injectId).toBe('test-inject-id-789012');
    expect(processedCompletedMessage.timestamp).toBeDefined();
  });

  test('should filter out metadata events correctly', () => {
    // Note: The shouldSendSseEvent method is no longer part of the public interface
    // Event filtering is now handled internally by the processSseEvents function
    // The tests that used this method have been removed as they no longer apply
  });

  test('should extract key content chunks', () => {
    // Note: The shouldSendSseEvent method is no longer part of the public interface
    // Event filtering is now handled internally by the processSseEvents function
    // The tests that used this method have been removed as they no longer apply
  });
});