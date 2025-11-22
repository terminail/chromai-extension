Yes, JavaScript has built-in JSON decoding! You can use `JSON.parse()` to convert that JSON string into a JavaScript object.

Here's how to decode your string:

```javascript
const jsonString = `{"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\\"{\\\\\\"text\\\\\\":\\\\\\\" \\\\\\\\\\\"hello\\\\\\\\\\\" (with\\\"}\",\\"id\\":\\"d0daaa17-8123-43e1-a44e-a7373c4663e5\\"},\\"message_id\\":\\"30241246944760322\\",\\"local_message_id\\":\\"7ceb71c0-c67a-11f0-92e8-d95968d1d72c\\",\\"conversation_id\\":\\"30250227047382274\\",\\"local_conversation_id\\":\\"local_1241289749163902\\",\\"section_id\\":\\"30250227047382530\\",\\"reply_id\\":\\"30241246944760066\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"5","event_type":2001}`;

try {
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);
  
  // If you need to parse the nested event_data as well:
  if (jsonObject.event_data) {
    jsonObject.event_data = JSON.parse(jsonObject.event_data);
    
    // And parse the nested content if needed:
    if (jsonObject.event_data.message && jsonObject.event_data.message.content) {
      jsonObject.event_data.message.content = JSON.parse(jsonObject.event_data.message.content);
    }
  }
  
  console.log('Fully parsed object:', jsonObject);
  
} catch (error) {
  console.error('Error parsing JSON:', error);
}
```

For a more robust solution that handles all the nested JSON strings, you can create a recursive parser:

```javascript
function deepParseJSON(obj) {
  if (typeof obj === 'string') {
    try {
      return deepParseJSON(JSON.parse(obj));
    } catch (e) {
      return obj;
    }
  } else if (Array.isArray(obj)) {
    return obj.map(deepParseJSON);
  } else if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const key in obj) {
      result[key] = deepParseJSON(obj[key]);
    }
    return result;
  }
  return obj;
}

// Usage:
const jsonString = `{"event_data":"{\\"message\\":{\\"content_type\\":2001,\\"content\\":\\\"{\\\\\\"text\\\\\\":\\\\\\\" \\\\\\\\\\\"hello\\\\\\\\\\\" (with\\\"}\",\\"id\\":\\"d0daaa17-8123-43e1-a44e-a7373c4663e5\\"},\\"message_id\\":\\"30241246944760322\\",\\"local_message_id\\":\\"7ceb71c0-c67a-11f0-92e8-d95968d1d72c\\",\\"conversation_id\\":\\"30250227047382274\\",\\"local_conversation_id\\":\\"local_1241289749163902\\",\\"section_id\\":\\"30250227047382530\\",\\"reply_id\\":\\"30241246944760066\\",\\"is_delta\\":true,\\"status\\":4,\\"input_content_type\\":2001,\\"message_index\\":2,\\"bot_id\\":\\"7338286299411103781\\"}","event_id":"5","event_type":2001}`;

try {
  const parsed = deepParseJSON(jsonString);
  console.log(parsed);
} catch (error) {
  console.error('Error parsing JSON:', error);
}
```

The key points:
- Use `JSON.parse()` for the main decoding
- The string contains multiple levels of nested JSON strings that need to be parsed separately
- Always wrap in try-catch to handle potential parsing errors
- The recursive approach automatically handles all nested JSON strings

After parsing, you'll have a proper JavaScript object that you can access like:
```javascript
console.log(parsed.event_data.message.content.text); // " \"hello\" (with"
```