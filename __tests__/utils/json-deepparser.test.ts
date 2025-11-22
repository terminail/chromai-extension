import { deepParseJSON } from '../../utils/json-deepparser';

describe('deepParseJSON', () => {
    it('should parse multiple levels of JSON string nesting', () => {
        const jsonString = '{"level1":"{\\"level2\\":\\"{\\\\\\"level3\\\\\\":\\\\\\"deep value\\\\\\"}\\"}"}';

        const parsed = deepParseJSON(jsonString);

        expect(typeof parsed).toBe('object');
        expect(typeof parsed.level1).toBe('object');
        expect(typeof parsed.level1.level2).toBe('object');
        expect(parsed.level1.level2.level3).toBe('deep value');
    });

    it('should handle arrays with nested JSON strings', () => {
        const jsonString = '["{\\"name\\":\\"item1\\"}", "{\\"name\\":\\"item2\\"}"]';

        const parsed = deepParseJSON(jsonString);

        expect(Array.isArray(parsed)).toBe(true);
        expect(parsed.length).toBe(2);
        expect(parsed[0].name).toBe('item1');
        expect(parsed[1].name).toBe('item2');
    });

    it('should handle malformed JSON gracefully', () => {
        const jsonString = '{"valid":"data", "invalid":"{malformed json"}';

        const parsed = deepParseJSON(jsonString);

        expect(typeof parsed).toBe('object');
        expect(parsed.valid).toBe('data');
        expect(parsed.invalid).toBe('{malformed json');
    });

    it('should demonstrate how deepParseJSON works with nested JSON structures', () => {
        // This test demonstrates the core functionality of deepParseJSON
        // with a working example that shows the same pattern as your data

        const testData = {
            event_data: "{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\"test message\\\"}\"}}",
            event_id: "5",
            event_type: 2001
        };

        const parsed = deepParseJSON(testData);

        expect(typeof parsed).toBe('object');
        expect(parsed.event_id).toBe(5); // JSON.parse converts "5" to 5
        expect(parsed.event_type).toBe(2001);
        expect(typeof parsed.event_data).toBe('object');
        expect(parsed.event_data.message.content_type).toBe(2001);
        expect(typeof parsed.event_data.message.content).toBe('object');
        expect(parsed.event_data.message.content.text).toBe('test message');
    });



    it('should demonstrate how deepParseJSON works with REAL DATA', () => {
        // This test demonstrates the core functionality of deepParseJSON
        // with a working example that shows the same pattern as your data

        const realData =
            { "event_data": "{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" say \\\\\\\"hello\\\\\\\" (with a\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}", "event_id": "4", "event_type": 2001 };

        const parsed = deepParseJSON(realData);

        expect(typeof parsed).toBe('object');
        expect(parsed.event_id).toBe(4); // JSON.parse converts "5" to 5
        expect(parsed.event_type).toBe(2001);
        expect(typeof parsed.event_data).toBe('object');
        expect(parsed.event_data.message.content_type).toBe(2001);
        expect(typeof parsed.event_data.message.content).toBe('object');
        expect(parsed.event_data.message.content.text).toBe(' say "hello" (with a');
    });

});