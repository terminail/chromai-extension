service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_STARTED
service-worker.js:99 🔵 [SERVICE] Handling STREAMING_STARTED message
deepseek.js:9 🔵 [DEEPSK] Handling STREAMING_STARTED message
deepseek.js:19 🔵 [DEEPSK] Extracted question content: hello2
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_STARTED
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_STARTED",
  "service": "deepseek",
  "url": "/api/v0/chat/completion",
  "injectId": "inject-263418-1763729668486",
  "question": "hello2",
  "timestamp": "2025-11-21T12:54:28.488Z",
  "source": "xhr"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_COMPLETED
service-worker.js:110 🔵 [SERVICE] Handling STREAMING_COMPLETED message
deepseek.js:51 🔵 [DEEPSK] Handling STREAMING_COMPLETED message
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_COMPLETED
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_COMPLETED",
  "injectId": "inject-263418-1763729668486",
  "timestamp": "2025-11-21T12:54:34.302Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
