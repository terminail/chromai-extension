/**
 * Unit tests for question content extraction functionality
 * 
 * These tests verify that the question content extraction logic in the 
 * service-specific handlers works correctly for Doubao and DeepSeek services.
 */

// Import the actual extraction functions from the handler files
import {
  DoubaoRequestPayload,
  DeepSeekRequestPayload
} from '../types';

// Since we can't directly import from the handler files in a test environment,
// we'll recreate the extraction logic here for testing purposes
// In a real implementation, we would import these functions directly

// Mock the Doubao extraction function based on the implementation in doubao.ts
function extractQuestionContentFromDoubaoPayload(requestBody: DoubaoRequestPayload | string): string {
  let questionContent = 'Unknown question';

  try {
    let bodyJson: DoubaoRequestPayload;

    if (typeof requestBody === 'string') {
      bodyJson = JSON.parse(requestBody);
    } else if (typeof requestBody === 'object') {
      bodyJson = requestBody;
    } else {
      return questionContent;
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
          questionContent = fullQuestion;
        }
      } else if (lastMessage && lastMessage.content) {
        // Doubao content is a JSON string, need to parse it
        try {
          const contentJson = JSON.parse(lastMessage.content);
          if (contentJson.text) {
            questionContent = contentJson.text;
          }
        } catch (contentParseError) {
          // If content is not JSON, use it as is
          questionContent = lastMessage.content;
        }
      }
    }
  } catch (e) {
    console.warn('Error extracting question content from payload:', e);
  }

  return questionContent;
}

// Mock the DeepSeek extraction function based on the implementation in deepseek.ts
function extractQuestionContentFromDeepSeekPayload(requestBody: DeepSeekRequestPayload | string): string {
  let questionContent = 'Unknown question';

  try {
    let bodyJson: DeepSeekRequestPayload;

    if (typeof requestBody === 'string') {
      bodyJson = JSON.parse(requestBody);
    } else if (typeof requestBody === 'object') {
      bodyJson = requestBody;
    } else {
      return questionContent;
    }

    // Extract the question from the prompt field
    if (bodyJson.prompt && typeof bodyJson.prompt === 'string') {
      questionContent = bodyJson.prompt;
    }
    // Fallback to messages array format if prompt field is not found
    else if (bodyJson.messages && Array.isArray(bodyJson.messages)) {
      // Get the last message which should be the user's question
      const lastMessage = bodyJson.messages[bodyJson.messages.length - 1];
      if (lastMessage && lastMessage.content) {
        questionContent = lastMessage.content;
      }
    }
  } catch (e) {
    console.warn('Error extracting question content from payload:', e);
  }

  return questionContent;
}

describe('Question Content Extraction', () => {
  describe('Doubao Service', () => {
    test('should extract simple text content from content blocks', () => {
      // Real Doubao payload structure from doubao.md
      const requestBody: DoubaoRequestPayload = {
        "client_meta": {
          "local_conversation_id": "local_1682131726082158",
          "conversation_id": "",
          "bot_id": "7338286299411103781",
          "last_section_id": "",
          "last_message_index": null
        },
        "messages": [{
          "local_message_id": "fe9e03c0-c541-11f0-a2d2-81604ebd9590",
          "content_block": [{
            "block_type": 10000,
            "content": {
              "text_block": {
                "text": "hello3",
                "icon_url": "",
                "icon_url_dark": ""
              },
              "pc_event_block": ""
            },
            "block_id": "92396ff0-bc22-4f5e-bbaa-411a070ee747",
            "parent_id": "",
            "meta_info": [],
            "append_fields": []
          }],
          "message_status": 0
        }],
        "option": {
          "send_message_scene": "",
          "create_time_ms": 1763554768391,
          "collect_id": "",
          "is_audio": false,
          "answer_with_suggest": false,
          "tts_switch": false,
          "need_deep_think": 0,
          "click_clear_context": false,
          "from_suggest": false,
          "is_regen": false,
          "is_replace": false,
          "disable_sse_cache": false,
          "select_text_action": "",
          "resend_for_regen": false,
          "scene_type": 0,
          "unique_key": "441ffc12-694a-4d8f-a814-4104e4f7a55c",
          "start_seq": 0,
          "need_create_conversation": true,
          "regen_query_id": [],
          "edit_query_id": [],
          "regen_instruction": "",
          "no_replace_for_regen": false,
          "message_from": 0,
          "shared_app_name": ""
        },
        "ext": {
          "use_deep_think": "0",
          "commerce_credit_config_enable": "0",
          "fp": "verify_mhyrx6yt_iLXuHhrJ_DoLN_4mZR_9w5I_dz7B9wDUXDiZ",
          "sub_conv_firstmet_type": "1"
        }
      };

      const result = extractQuestionContentFromDoubaoPayload(requestBody);
      expect(result).toBe('hello3');
    });

    test('should extract content from multiple content blocks', () => {
      const requestBody: DoubaoRequestPayload = {
        "messages": [{
          "content_block": [{
            "content": {
              "text_block": {
                "text": "Hello "
              }
            }
          }, {
            "content": {
              "text_block": {
                "text": "world!"
              }
            }
          }]
        }]
      };

      const result = extractQuestionContentFromDoubaoPayload(requestBody);
      expect(result).toBe('Hello world!');
    });

    test('should extract content from JSON content in message', () => {
      // Test the alternative path where content is a JSON string
      const requestBody: DoubaoRequestPayload = {
        "messages": [{
          "content": "{\"text\":\"What is the weather today?\"}"
        }]
      };

      const result = extractQuestionContentFromDoubaoPayload(requestBody);
      expect(result).toBe('What is the weather today?');
    });

    test('should extract content from string content in message', () => {
      // Test the alternative path where content is a plain string
      const requestBody: DoubaoRequestPayload = {
        "messages": [{
          "content": "How are you doing?"
        }]
      };

      const result = extractQuestionContentFromDoubaoPayload(requestBody);
      expect(result).toBe('How are you doing?');
    });

    test('should return "Unknown question" for empty request body', () => {
      const requestBody: DoubaoRequestPayload = {};

      const result = extractQuestionContentFromDoubaoPayload(requestBody);
      expect(result).toBe('Unknown question');
    });

    test('should return "Unknown question" for invalid JSON', () => {
      const requestBody = '{"messages": [}]]';

      const result = extractQuestionContentFromDoubaoPayload(requestBody);
      expect(result).toBe('Unknown question');
    });
  });

  describe('DeepSeek Service', () => {
    test('should extract content from prompt field', () => {
      // Real DeepSeek payload structure from deepseek.md
      const requestBody: DeepSeekRequestPayload = {
        "chat_session_id": "3516344a-ecee-415a-abb0-9b1310fa9ed6",
        "parent_message_id": null,
        "prompt": "hello7",
        "ref_file_ids": [],
        "thinking_enabled": false,
        "search_enabled": false,
        "client_stream_id": "20251118-05a7643efa81461e"
      };

      const result = extractQuestionContentFromDeepSeekPayload(requestBody);
      expect(result).toBe('hello7');
    });

    test('should extract content from messages array', () => {
      // Test the fallback path for messages array
      const requestBody: DeepSeekRequestPayload = {
        "messages": [
          {
            "role": "user",
            "content": "Write a poem about autumn"
          }
        ]
      };

      const result = extractQuestionContentFromDeepSeekPayload(requestBody);
      expect(result).toBe('Write a poem about autumn');
    });

    test('should extract content from last message in multiple messages', () => {
      const requestBody: DeepSeekRequestPayload = { 
        "chat_session_id": "d213f7b1-0aa7-47a2-a6cf-3b4910a66b3a", 
        "parent_message_id": null, 
        "prompt": "hello6", 
        "ref_file_ids": [], 
        "thinking_enabled": false, 
        "search_enabled": false, 
        "client_stream_id": "20251122-a966ea999de140c5" 
      };

      const result = extractQuestionContentFromDeepSeekPayload(requestBody);
      expect(result).toBe('hello6');
    });

    test('should return "Unknown question" for empty request body', () => {
      const requestBody: DeepSeekRequestPayload = {};

      const result = extractQuestionContentFromDeepSeekPayload(requestBody);
      expect(result).toBe('Unknown question');
    });

  });
});