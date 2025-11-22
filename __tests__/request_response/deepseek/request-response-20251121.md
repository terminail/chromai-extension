# DeepSeek Request/Response 

## Request URL

https://chat.deepseek.com/api/v0/chat/completion


## Request Payload

{"chat_session_id":"d213f7b1-0aa7-47a2-a6cf-3b4910a66b3a","parent_message_id":null,"prompt":"hello6","ref_file_ids":[],"thinking_enabled":false,"search_enabled":false,"client_stream_id":"20251122-a966ea999de140c5"}

## Response Payload

event: ready
data: {"request_message_id":1,"response_message_id":2}

event: update_session
data: {"updated_at":1763793566.476625}

data: {"v": {"response": {"message_id": 2, "parent_id": 1, "model": "", "role": "ASSISTANT", "thinking_enabled": false, "ban_edit": false, "ban_regenerate": false, "status": "WIP", "accumulated_token_usage": null, "files": [], "inserted_at": 1763793566.445, "search_enabled": false, "feedback": null, "has_pending_fragment": true, "auto_continue": false, "conversation_mode": "DEFAULT", "fragments": []}}}

data: {"v": [{"v": false, "p": "has_pending_fragment"}, {"v": [{"id": 1, "type": "RESPONSE", "content": "你好", "references": [], "stage_id": 1}], "p": "fragments", "o": "APPEND"}], "p": "response", "o": "BATCH"}

data: {"v": "！", "p": "response/fragments/0/content", "o": "APPEND"}

data: {"v": "😊"}

data: {"v": " "}

data: {"v": "看起来"}

data: {"v": "你"}

data: {"v": "可能是"}

data: {"v": "想"}

data: {"v": "测试"}

data: {"v": "一下"}

data: {"v": "我的"}

data: {"v": "反应"}

data: {"v": "，"}

data: {"v": "或者"}

data: {"v": "不小心"}

data: {"v": "发送"}

data: {"v": "了"}

data: {"v": "“"}

data: {"v": "hello"}

data: {"v": "6"}

data: {"v": "”"}

data: {"v": "这个"}

data: {"v": "信息"}

data: {"v": "？\n\n"}

data: {"v": "无论如何"}

data: {"v": "，"}

data: {"v": "我"}

data: {"v": "都很"}

data: {"v": "高兴"}

data: {"v": "和你"}

data: {"v": "打招呼"}

data: {"v": "！"}

data: {"v": "我是"}

data: {"v": "Deep"}

data: {"v": "Se"}

data: {"v": "ek"}

data: {"v": "，"}

data: {"v": "一个"}

data: {"v": "热"}

data: {"v": "心的"}

data: {"v": "AI"}

data: {"v": "助手"}

data: {"v": "，"}

data: {"v": "随时"}

data: {"v": "准备"}

data: {"v": "帮助你"}

data: {"v": "解答"}

data: {"v": "问题"}

data: {"v": "、"}

data: {"v": "聊天"}

data: {"v": "或者"}

data: {"v": "协助"}

data: {"v": "你"}

data: {"v": "完成"}

data: {"v": "各种"}

data: {"v": "任务"}

data: {"v": "。\n\n"}

data: {"v": "有什么"}

data: {"v": "我可以"}

data: {"v": "帮"}

data: {"v": "你的"}

data: {"v": "吗"}

data: {"v": "？"}

data: {"v": "无论是"}

data: {"v": "学习"}

data: {"v": "、"}

data: {"v": "工作"}

data: {"v": "、"}

data: {"v": "生活"}

data: {"v": "上的"}

data: {"v": "问题"}

data: {"v": "，"}

data: {"v": "还是"}

data: {"v": "只是想"}

data: {"v": "聊"}

data: {"v": "聊天"}

data: {"v": "，"}

data: {"v": "我"}

data: {"v": "都很"}

data: {"v": "乐意"}

data: {"v": "与你"}

data: {"v": "交流"}

data: {"v": "！"}

data: {"v": "✨"}

data: {"v": [{"v": "FINISHED", "p": "status"}, {"v": 115, "p": "accumulated_token_usage"}], "p": "response", "o": "BATCH"}

event: finish
data: {}

event: update_session
data: {"updated_at":1763793569.404758}

event: title
data: {"content":"User Greets AI Assistant for Testing"}

event: close
data: {"click_behavior":"none","auto_resume":false}



## Expected Extraction Result 
Question: hello6
Answer: 你好！😊 看起来你可能是想测试一下我的反应，或者不小心发送了“hello6”这个信息？

无论如何，我都很高兴和你打招呼！我是DeepSeek，一个热心的AI助手，随时准备帮助你解答问题、聊天或者协助你完成各种任务。

有什么我可以帮你的吗？无论是学习、工作、生活上的问题，还是只是想聊聊天，我都很乐意与你交流！✨