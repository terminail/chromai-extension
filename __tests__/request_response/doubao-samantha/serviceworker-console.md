service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_STARTED
service-worker.js:99 🔵 [SERVICE] Handling STREAMING_STARTED message
doubao_samantha.js:10 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_STARTED message
doubao_samantha.js:20 🔵 [DOUBAO_SAMANTHA] Extracted question content: hello1
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_STARTED
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_STARTED",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "question": "hello1",
  "timestamp": "2025-11-21T05:27:23.153Z",
  "source": "fetch"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message_id\\\":\\\"30264898682237954\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"message_index\\\":1,\\\"conversation_type\\\":5}\",\"event_id\":\"0\",\"event_type\":2002}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message_id\\":\\"30264898682…tion_type\\":5}","event_id":"0","event_type":2002}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message_id\":\"30264898682237954\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"message_index\":1,\"conversation_type\":5}","event_id":"0","event_type":2002}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message_id\\\":\\\"30264898682237954\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"message_index\\\":1,\\\"conversation_type\\\":5}\",\"event_id\":\"0\",\"event_type\":2002}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message_id\":\"30264898682237954\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"message_index\":1,\"conversation_type\":5}","event_id":"0","event_type":2002}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message_id": 30264898682237950,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "message_index": 1,
    "conversation_type": 5
  },
  "event_id": 0,
  "event_type": 2002
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message_id: 30264898682237950, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', section_id: 30272893581536000, …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message_id": 30264898682237950,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "message_index": 1,
  "conversation_type": 5
}
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text: data: {"event_data":"{\"message_id\":\"30264898682237954\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"message_index\":1,\"conversation_type\":5}","event_id":"0","event_type":2002}
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "data: {\"event_data\":\"{\\\"message_id\\\":\\\"30264898682237954\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"message_index\\\":1,\\\"conversation_type\\\":5}\",\"event_id\":\"0\",\"event_type\":2002}",
    "timestamp": "2025-11-21T05:27:23.811Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "data: {\"event_data\":\"{\\\"message_id\\\":\\\"30264898682237954\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"message_index\\\":1,\\\"conversation_type\\\":5}\",\"event_id\":\"0\",\"event_type\":2002}",
  "timestamp": "2025-11-21T05:27:23.811Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"type\\\":\\\"seed_intention\\\",\\\"seed_intention\\\":{\\\"intention\\\":\\\"seed_main\\\",\\\"detail\\\":\\\"default\\\",\\\"seed_agent_name\\\":\\\"Agent-Chat\\\",\\\"intention_detail_dict\\\":\\\"{\\\\\\\"origin_plugin_name\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"origin_plugin_name_generalized\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"plugin_name\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"plugin_name_generalized\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"rich_media_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"browsing_intention\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"complex_browsing_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"creation_knowledge_intent\\\\\\\":\\\\\\\"其他\\\\\\\",\\\\\\\"creation_detail_intent\\\\\\\":\\\\\\\"未知\\\\\\\",\\\\\\\"deep_think_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"vlm_intent\\\\\\\":\\\\\\\"False\\\\\\\"}\\\"}}\",\"event_id\":\"1\",\"event_type\":2010}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"type\\":\\"seed_intention\\",…False\\\\\\"}\\"}}","event_id":"1","event_type":2010}']
 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"type\":\"seed_intention\",\"seed_intention\":{\"intention\":\"seed_main\",\"detail\":\"default\",\"seed_agent_name\":\"Agent-Chat\",\"intention_detail_dict\":\"{\\\"origin_plugin_name\\\":\\\"无\\\",\\\"origin_plugin_name_generalized\\\":\\\"无\\\",\\\"plugin_name\\\":\\\"无\\\",\\\"plugin_name_generalized\\\":\\\"无\\\",\\\"rich_media_intent\\\":\\\"0\\\",\\\"browsing_intention\\\":\\\"-1\\\",\\\"complex_browsing_intent\\\":\\\"0\\\",\\\"creation_knowledge_intent\\\":\\\"其他\\\",\\\"creation_detail_intent\\\":\\\"未知\\\",\\\"deep_think_intent\\\":\\\"0\\\",\\\"vlm_intent\\\":\\\"False\\\"}\"}}","event_id":"1","event_type":2010}
 🔵 [DOUBAO_SAMANTHA] Event should be sent
 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"type\\\":\\\"seed_intention\\\",\\\"seed_intention\\\":{\\\"intention\\\":\\\"seed_main\\\",\\\"detail\\\":\\\"default\\\",\\\"seed_agent_name\\\":\\\"Agent-Chat\\\",\\\"intention_detail_dict\\\":\\\"{\\\\\\\"origin_plugin_name\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"origin_plugin_name_generalized\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"plugin_name\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"plugin_name_generalized\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"rich_media_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"browsing_intention\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"complex_browsing_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"creation_knowledge_intent\\\\\\\":\\\\\\\"其他\\\\\\\",\\\\\\\"creation_detail_intent\\\\\\\":\\\\\\\"未知\\\\\\\",\\\\\\\"deep_think_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"vlm_intent\\\\\\\":\\\\\\\"False\\\\\\\"}\\\"}}\",\"event_id\":\"1\",\"event_type\":2010}"
}
 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"type\":\"seed_intention\",\"seed_intention\":{\"intention\":\"seed_main\",\"detail\":\"default\",\"seed_agent_name\":\"Agent-Chat\",\"intention_detail_dict\":\"{\\\"origin_plugin_name\\\":\\\"无\\\",\\\"origin_plugin_name_generalized\\\":\\\"无\\\",\\\"plugin_name\\\":\\\"无\\\",\\\"plugin_name_generalized\\\":\\\"无\\\",\\\"rich_media_intent\\\":\\\"0\\\",\\\"browsing_intention\\\":\\\"-1\\\",\\\"complex_browsing_intent\\\":\\\"0\\\",\\\"creation_knowledge_intent\\\":\\\"其他\\\",\\\"creation_detail_intent\\\":\\\"未知\\\",\\\"deep_think_intent\\\":\\\"0\\\",\\\"vlm_intent\\\":\\\"False\\\"}\"}}","event_id":"1","event_type":2010}
 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "type": "seed_intention",
    "seed_intention": {
      "intention": "seed_main",
      "detail": "default",
      "seed_agent_name": "Agent-Chat",
      "intention_detail_dict": {
        "origin_plugin_name": "无",
        "origin_plugin_name_generalized": "无",
        "plugin_name": "无",
        "plugin_name_generalized": "无",
        "rich_media_intent": 0,
        "browsing_intention": -1,
        "complex_browsing_intent": 0,
        "creation_knowledge_intent": "其他",
        "creation_detail_intent": "未知",
        "deep_think_intent": 0,
        "vlm_intent": "False"
      }
    }
  },
  "event_id": 1,
  "event_type": 2010
}
 🔵 [DOUBAO_SAMANTHA] Found event_data field: {type: 'seed_intention', seed_intention: {…}}
 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "type": "seed_intention",
  "seed_intention": {
    "intention": "seed_main",
    "detail": "default",
    "seed_agent_name": "Agent-Chat",
    "intention_detail_dict": {
      "origin_plugin_name": "无",
      "origin_plugin_name_generalized": "无",
      "plugin_name": "无",
      "plugin_name_generalized": "无",
      "rich_media_intent": 0,
      "browsing_intention": -1,
      "complex_browsing_intent": 0,
      "creation_knowledge_intent": "其他",
      "creation_detail_intent": "未知",
      "deep_think_intent": 0,
      "vlm_intent": "False"
    }
  }
}
 🔵 [DOUBAO_SAMANTHA] Final content text: data: {"event_data":"{\"type\":\"seed_intention\",\"seed_intention\":{\"intention\":\"seed_main\",\"detail\":\"default\",\"seed_agent_name\":\"Agent-Chat\",\"intention_detail_dict\":\"{\\\"origin_plugin_name\\\":\\\"无\\\",\\\"origin_plugin_name_generalized\\\":\\\"无\\\",\\\"plugin_name\\\":\\\"无\\\",\\\"plugin_name_generalized\\\":\\\"无\\\",\\\"rich_media_intent\\\":\\\"0\\\",\\\"browsing_intention\\\":\\\"-1\\\",\\\"complex_browsing_intent\\\":\\\"0\\\",\\\"creation_knowledge_intent\\\":\\\"其他\\\",\\\"creation_detail_intent\\\":\\\"未知\\\",\\\"deep_think_intent\\\":\\\"0\\\",\\\"vlm_intent\\\":\\\"False\\\"}\"}}","event_id":"1","event_type":2010}
 🔵 [DOUBAO_SAMANTHA] Added message to send queue
 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "data: {\"event_data\":\"{\\\"type\\\":\\\"seed_intention\\\",\\\"seed_intention\\\":{\\\"intention\\\":\\\"seed_main\\\",\\\"detail\\\":\\\"default\\\",\\\"seed_agent_name\\\":\\\"Agent-Chat\\\",\\\"intention_detail_dict\\\":\\\"{\\\\\\\"origin_plugin_name\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"origin_plugin_name_generalized\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"plugin_name\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"plugin_name_generalized\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"rich_media_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"browsing_intention\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"complex_browsing_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"creation_knowledge_intent\\\\\\\":\\\\\\\"其他\\\\\\\",\\\\\\\"creation_detail_intent\\\\\\\":\\\\\\\"未知\\\\\\\",\\\\\\\"deep_think_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"vlm_intent\\\\\\\":\\\\\\\"False\\\\\\\"}\\\"}}\",\"event_id\":\"1\",\"event_type\":2010}",
    "timestamp": "2025-11-21T05:27:24.399Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "data: {\"event_data\":\"{\\\"type\\\":\\\"seed_intention\\\",\\\"seed_intention\\\":{\\\"intention\\\":\\\"seed_main\\\",\\\"detail\\\":\\\"default\\\",\\\"seed_agent_name\\\":\\\"Agent-Chat\\\",\\\"intention_detail_dict\\\":\\\"{\\\\\\\"origin_plugin_name\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"origin_plugin_name_generalized\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"plugin_name\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"plugin_name_generalized\\\\\\\":\\\\\\\"无\\\\\\\",\\\\\\\"rich_media_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"browsing_intention\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"complex_browsing_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"creation_knowledge_intent\\\\\\\":\\\\\\\"其他\\\\\\\",\\\\\\\"creation_detail_intent\\\\\\\":\\\\\\\"未知\\\\\\\",\\\\\\\"deep_think_intent\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"vlm_intent\\\\\\\":\\\\\\\"False\\\\\\\"}\\\"}}\",\"event_id\":\"1\",\"event_type\":2010}",
  "timestamp": "2025-11-21T05:27:24.399Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\"Hello\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"2\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…99411103781\\"}","event_id":"2","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\"Hello\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"2","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\"Hello\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"2\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\"Hello\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"2","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {
        "text": "Hello"
      },
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 4,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 2,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {
      "text": "Hello"
    },
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 4,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {text: 'Hello'}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "text": "Hello"
}
doubao_samantha.js:129 🔵 [DOUBAO_SAMANTHA] Extracted text content: Hello
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text: Hello
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "Hello",
    "timestamp": "2025-11-21T05:27:24.928Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "Hello",
  "timestamp": "2025-11-21T05:27:24.928Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" there! 😊 Did you mean to\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"3\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…99411103781\\"}","event_id":"3","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" there! 😊 Did you mean to\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"3","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" there! 😊 Did you mean to\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"3\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" there! 😊 Did you mean to\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"3","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {
        "text": " there! 😊 Did you mean to"
      },
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 4,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 3,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {
      "text": " there! 😊 Did you mean to"
    },
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 4,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {text: ' there! 😊 Did you mean to'}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "text": " there! 😊 Did you mean to"
}
doubao_samantha.js:129 🔵 [DOUBAO_SAMANTHA] Extracted text content:  there! 😊 Did you mean to
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text:  there! 😊 Did you mean to
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": " there! 😊 Did you mean to",
    "timestamp": "2025-11-21T05:27:25.028Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": " there! 😊 Did you mean to",
  "timestamp": "2025-11-21T05:27:25.028Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" say \\\\\\\\\\\\\\\"hello\\\\\\\\\\\\\\\" (with a\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"4\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…99411103781\\"}","event_id":"4","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" say \\\\\\\"hello\\\\\\\" (with a\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"4","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" say \\\\\\\\\\\\\\\"hello\\\\\\\\\\\\\\\" (with a\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"4\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" say \\\\\\\"hello\\\\\\\" (with a\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"4","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {
        "text": " say \"hello\" (with a"
      },
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 4,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 4,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {
      "text": " say \"hello\" (with a"
    },
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 4,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {text: ' say "hello" (with a'}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "text": " say \"hello\" (with a"
}
doubao_samantha.js:129 🔵 [DOUBAO_SAMANTHA] Extracted text content:  say "hello" (with a
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text:  say "hello" (with a
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": " say \"hello\" (with a",
    "timestamp": "2025-11-21T05:27:25.172Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": " say \"hello\" (with a",
  "timestamp": "2025-11-21T05:27:25.172Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" typo) or is \\\\\\\\\\\\\\\"hello\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"5\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…99411103781\\"}","event_id":"5","event_type":2001}']
 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" typo) or is \\\\\\\"hello\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"5","event_type":2001}
 🔵 [DOUBAO_SAMANTHA] Event should be sent
 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" typo) or is \\\\\\\\\\\\\\\"hello\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"5\",\"event_type\":2001}"
}
 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" typo) or is \\\\\\\"hello\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"5","event_type":2001}
 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {
        "text": " typo) or is \"hello"
      },
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 4,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 5,
  "event_type": 2001
}
 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {
      "text": " typo) or is \"hello"
    },
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 4,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
 🔵 [DOUBAO_SAMANTHA] Found message content: {text: ' typo) or is "hello'}
 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "text": " typo) or is \"hello"
}
 🔵 [DOUBAO_SAMANTHA] Extracted text content:  typo) or is "hello
 🔵 [DOUBAO_SAMANTHA] Final content text:  typo) or is "hello
 🔵 [DOUBAO_SAMANTHA] Added message to send queue
 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": " typo) or is \"hello",
    "timestamp": "2025-11-21T05:27:25.392Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": " typo) or is \"hello",
  "timestamp": "2025-11-21T05:27:25.392Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\"1\\\\\\\\\\\\\\\" a specific message?\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"6\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…99411103781\\"}","event_id":"6","event_type":2001}']
 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\"1\\\\\\\" a specific message?\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"6","event_type":2001}
 🔵 [DOUBAO_SAMANTHA] Event should be sent
 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\"1\\\\\\\\\\\\\\\" a specific message?\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"6\",\"event_type\":2001}"
}
 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\"1\\\\\\\" a specific message?\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"6","event_type":2001}
 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {
        "text": "1\" a specific message?"
      },
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 4,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 6,
  "event_type": 2001
}
 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {
      "text": "1\" a specific message?"
    },
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 4,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
 🔵 [DOUBAO_SAMANTHA] Found message content: {text: '1" a specific message?'}
 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "text": "1\" a specific message?"
}
 🔵 [DOUBAO_SAMANTHA] Extracted text content: 1" a specific message?
 🔵 [DOUBAO_SAMANTHA] Final content text: 1" a specific message?
 🔵 [DOUBAO_SAMANTHA] Added message to send queue
 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "1\" a specific message?",
    "timestamp": "2025-11-21T05:27:25.446Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "1\" a specific message?",
  "timestamp": "2025-11-21T05:27:25.446Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" Feel free to share what you want to talk\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"7\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…99411103781\\"}","event_id":"7","event_type":2001}']
 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" Feel free to share what you want to talk\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"7","event_type":2001}
 🔵 [DOUBAO_SAMANTHA] Event should be sent
 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" Feel free to share what you want to talk\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"7\",\"event_type\":2001}"
}
 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" Feel free to share what you want to talk\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"7","event_type":2001}
 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {
        "text": " Feel free to share what you want to talk"
      },
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 4,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 7,
  "event_type": 2001
}
 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {
      "text": " Feel free to share what you want to talk"
    },
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 4,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
 🔵 [DOUBAO_SAMANTHA] Found message content: {text: ' Feel free to share what you want to talk'}
 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "text": " Feel free to share what you want to talk"
}
 🔵 [DOUBAO_SAMANTHA] Extracted text content:  Feel free to share what you want to talk
 🔵 [DOUBAO_SAMANTHA] Final content text:  Feel free to share what you want to talk
 🔵 [DOUBAO_SAMANTHA] Added message to send queue
 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": " Feel free to share what you want to talk",
    "timestamp": "2025-11-21T05:27:25.553Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": " Feel free to share what you want to talk",
  "timestamp": "2025-11-21T05:27:25.553Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" about—I’m here to chat,\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"8\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…99411103781\\"}","event_id":"8","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" about—I’m here to chat,\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"8","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" about—I’m here to chat,\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"8\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" about—I’m here to chat,\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"8","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {
        "text": " about—I’m here to chat,"
      },
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 4,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 8,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {
      "text": " about—I’m here to chat,"
    },
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 4,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {text: ' about—I’m here to chat,'}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "text": " about—I’m here to chat,"
}
doubao_samantha.js:129 🔵 [DOUBAO_SAMANTHA] Extracted text content:  about—I’m here to chat,
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text:  about—I’m here to chat,
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": " about—I’m here to chat,",
    "timestamp": "2025-11-21T05:27:25.757Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": " about—I’m here to chat,",
  "timestamp": "2025-11-21T05:27:25.757Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" help, or answer any questions!\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"9\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…99411103781\\"}","event_id":"9","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" help, or answer any questions!\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"9","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{\\\\\\\"text\\\\\\\":\\\\\\\" help, or answer any questions!\\\\\\\"}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":4,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"9\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{\\\"text\\\":\\\" help, or answer any questions!\\\"}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":4,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"9","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {
        "text": " help, or answer any questions!"
      },
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 4,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 9,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {
      "text": " help, or answer any questions!"
    },
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 4,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {text: ' help, or answer any questions!'}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "text": " help, or answer any questions!"
}
doubao_samantha.js:129 🔵 [DOUBAO_SAMANTHA] Extracted text content:  help, or answer any questions!
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text:  help, or answer any questions!
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": " help, or answer any questions!",
    "timestamp": "2025-11-21T05:27:25.782Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": " help, or answer any questions!",
  "timestamp": "2025-11-21T05:27:25.782Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"is_finish\\\":true,\\\"has_suggest\\\":true,\\\"message_action_bar\\\":{},\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"tts_content\\\":\\\"Hello there! 😊 Did you mean to say \\\\\\\"hello\\\\\\\" (with a typo) or is \\\\\\\"hello1\\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\\"}\",\"event_id\":\"10\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…questions!\\"}","event_id":"10","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"is_finish\":true,\"has_suggest\":true,\"message_action_bar\":{},\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\",\"tts_content\":\"Hello there! 😊 Did you mean to say \\\"hello\\\" (with a typo) or is \\\"hello1\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\"}","event_id":"10","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"is_finish\\\":true,\\\"has_suggest\\\":true,\\\"message_action_bar\\\":{},\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"tts_content\\\":\\\"Hello there! 😊 Did you mean to say \\\\\\\"hello\\\\\\\" (with a typo) or is \\\\\\\"hello1\\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\\"}\",\"event_id\":\"10\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"is_finish\":true,\"has_suggest\":true,\"message_action_bar\":{},\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\",\"tts_content\":\"Hello there! 😊 Did you mean to say \\\"hello\\\" (with a typo) or is \\\"hello1\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\"}","event_id":"10","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2001,
      "content": {},
      "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 1,
    "is_finish": true,
    "has_suggest": true,
    "message_action_bar": {},
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000,
    "tts_content": "Hello there! 😊 Did you mean to say \"hello\" (with a typo) or is \"hello1\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!"
  },
  "event_id": 10,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2001,
    "content": {},
    "id": "7b9bd125-b4bf-4f56-a845-dc09aba11efa"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 1,
  "is_finish": true,
  "has_suggest": true,
  "message_action_bar": {},
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000,
  "tts_content": "Hello there! 😊 Did you mean to say \"hello\" (with a typo) or is \"hello1\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!"
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {}
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text: data: {"event_data":"{\"message\":{\"content_type\":2001,\"content\":\"{}\",\"id\":\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"is_finish\":true,\"has_suggest\":true,\"message_action_bar\":{},\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\",\"tts_content\":\"Hello there! 😊 Did you mean to say \\\"hello\\\" (with a typo) or is \\\"hello1\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\"}","event_id":"10","event_type":2001}
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"is_finish\\\":true,\\\"has_suggest\\\":true,\\\"message_action_bar\\\":{},\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"tts_content\\\":\\\"Hello there! 😊 Did you mean to say \\\\\\\"hello\\\\\\\" (with a typo) or is \\\\\\\"hello1\\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\\"}\",\"event_id\":\"10\",\"event_type\":2001}",
    "timestamp": "2025-11-21T05:27:25.984Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2001,\\\"content\\\":\\\"{}\\\",\\\"id\\\":\\\"7b9bd125-b4bf-4f56-a845-dc09aba11efa\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"is_finish\\\":true,\\\"has_suggest\\\":true,\\\"message_action_bar\\\":{},\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"tts_content\\\":\\\"Hello there! 😊 Did you mean to say \\\\\\\"hello\\\\\\\" (with a typo) or is \\\\\\\"hello1\\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\\"}\",\"event_id\":\"10\",\"event_type\":2001}",
  "timestamp": "2025-11-21T05:27:25.984Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"How are you today?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"How are you today?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"11\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…9411103781\\"}","event_id":"11","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"How are you today?\\\",\\\"suggestions\\\":[\\\"How are you today?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"11","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"How are you today?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"How are you today?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"11\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"How are you today?\\\",\\\"suggestions\\\":[\\\"How are you today?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"11","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2002,
      "content": {
        "suggest": "How are you today?",
        "suggestions": [
          "How are you today?"
        ]
      },
      "id": "889d19e2-7a4f-4a1e-847d-34cc57f15c22"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 1,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 11,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2002,
    "content": {
      "suggest": "How are you today?",
      "suggestions": [
        "How are you today?"
      ]
    },
    "id": "889d19e2-7a4f-4a1e-847d-34cc57f15c22"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 1,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {suggest: 'How are you today?', suggestions: Array(1)}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "suggest": "How are you today?",
  "suggestions": [
    "How are you today?"
  ]
}
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text: data: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"How are you today?\\\",\\\"suggestions\\\":[\\\"How are you today?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"11","event_type":2001}
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"How are you today?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"How are you today?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"11\",\"event_type\":2001}",
    "timestamp": "2025-11-21T05:27:27.152Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"How are you today?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"How are you today?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"11\",\"event_type\":2001}",
  "timestamp": "2025-11-21T05:27:27.152Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"What can you do?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"What can you do?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"12\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…9411103781\\"}","event_id":"12","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"What can you do?\\\",\\\"suggestions\\\":[\\\"What can you do?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"12","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"What can you do?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"What can you do?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"12\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"What can you do?\\\",\\\"suggestions\\\":[\\\"What can you do?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"12","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2002,
      "content": {
        "suggest": "What can you do?",
        "suggestions": [
          "What can you do?"
        ]
      },
      "id": "889d19e2-7a4f-4a1e-847d-34cc57f15c22"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 1,
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000
  },
  "event_id": 12,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2002,
    "content": {
      "suggest": "What can you do?",
      "suggestions": [
        "What can you do?"
      ]
    },
    "id": "889d19e2-7a4f-4a1e-847d-34cc57f15c22"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 1,
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {suggest: 'What can you do?', suggestions: Array(1)}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "suggest": "What can you do?",
  "suggestions": [
    "What can you do?"
  ]
}
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text: data: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"What can you do?\\\",\\\"suggestions\\\":[\\\"What can you do?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\"}","event_id":"12","event_type":2001}
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"What can you do?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"What can you do?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"12\",\"event_type\":2001}",
    "timestamp": "2025-11-21T05:27:27.394Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"What can you do?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"What can you do?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\"}\",\"event_id\":\"12\",\"event_type\":2001}",
  "timestamp": "2025-11-21T05:27:27.394Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"Can you tell me a joke?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"Can you tell me a joke?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"is_finish\\\":true,\\\"has_suggest\\\":true,\\\"message_action_bar\\\":{},\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"tts_content\\\":\\\"Hello there! 😊 Did you mean to say \\\\\\\"hello\\\\\\\" (with a typo) or is \\\\\\\"hello1\\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\\"}\",\"event_id\":\"13\",\"event_type\":2001}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{\\"message\\":{\\"content_type\\…questions!\\"}","event_id":"13","event_type":2001}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"Can you tell me a joke?\\\",\\\"suggestions\\\":[\\\"Can you tell me a joke?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"is_finish\":true,\"has_suggest\":true,\"message_action_bar\":{},\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\",\"tts_content\":\"Hello there! 😊 Did you mean to say \\\"hello\\\" (with a typo) or is \\\"hello1\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\"}","event_id":"13","event_type":2001}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"Can you tell me a joke?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"Can you tell me a joke?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"is_finish\\\":true,\\\"has_suggest\\\":true,\\\"message_action_bar\\\":{},\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"tts_content\\\":\\\"Hello there! 😊 Did you mean to say \\\\\\\"hello\\\\\\\" (with a typo) or is \\\\\\\"hello1\\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\\"}\",\"event_id\":\"13\",\"event_type\":2001}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"Can you tell me a joke?\\\",\\\"suggestions\\\":[\\\"Can you tell me a joke?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"is_finish\":true,\"has_suggest\":true,\"message_action_bar\":{},\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\",\"tts_content\":\"Hello there! 😊 Did you mean to say \\\"hello\\\" (with a typo) or is \\\"hello1\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\"}","event_id":"13","event_type":2001}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {
    "message": {
      "content_type": 2002,
      "content": {
        "suggest": "Can you tell me a joke?",
        "suggestions": [
          "Can you tell me a joke?"
        ]
      },
      "id": "889d19e2-7a4f-4a1e-847d-34cc57f15c22"
    },
    "message_id": 30264898682238464,
    "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
    "conversation_id": 30272893581535744,
    "local_conversation_id": "local_1381142239817711",
    "section_id": 30272893581536000,
    "reply_id": 30264898682237950,
    "is_delta": true,
    "status": 1,
    "is_finish": true,
    "has_suggest": true,
    "message_action_bar": {},
    "input_content_type": 2001,
    "message_index": 2,
    "bot_id": 7338286299411104000,
    "tts_content": "Hello there! 😊 Did you mean to say \"hello\" (with a typo) or is \"hello1\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!"
  },
  "event_id": 13,
  "event_type": 2001
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {message: {…}, message_id: 30264898682238464, local_message_id: 'c1e503c0-c69a-11f0-a880-c56c80360dcc', conversation_id: 30272893581535744, local_conversation_id: 'local_1381142239817711', …}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {
  "message": {
    "content_type": 2002,
    "content": {
      "suggest": "Can you tell me a joke?",
      "suggestions": [
        "Can you tell me a joke?"
      ]
    },
    "id": "889d19e2-7a4f-4a1e-847d-34cc57f15c22"
  },
  "message_id": 30264898682238464,
  "local_message_id": "c1e503c0-c69a-11f0-a880-c56c80360dcc",
  "conversation_id": 30272893581535744,
  "local_conversation_id": "local_1381142239817711",
  "section_id": 30272893581536000,
  "reply_id": 30264898682237950,
  "is_delta": true,
  "status": 1,
  "is_finish": true,
  "has_suggest": true,
  "message_action_bar": {},
  "input_content_type": 2001,
  "message_index": 2,
  "bot_id": 7338286299411104000,
  "tts_content": "Hello there! 😊 Did you mean to say \"hello\" (with a typo) or is \"hello1\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!"
}
doubao_samantha.js:123 🔵 [DOUBAO_SAMANTHA] Found message content: {suggest: 'Can you tell me a joke?', suggestions: Array(1)}
doubao_samantha.js:126 🔵 [DOUBAO_SAMANTHA] Parsed content JSON: {
  "suggest": "Can you tell me a joke?",
  "suggestions": [
    "Can you tell me a joke?"
  ]
}
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text: data: {"event_data":"{\"message\":{\"content_type\":2002,\"content\":\"{\\\"suggest\\\":\\\"Can you tell me a joke?\\\",\\\"suggestions\\\":[\\\"Can you tell me a joke?\\\"]}\",\"id\":\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\"},\"message_id\":\"30264898682238466\",\"local_message_id\":\"c1e503c0-c69a-11f0-a880-c56c80360dcc\",\"conversation_id\":\"30272893581535746\",\"local_conversation_id\":\"local_1381142239817711\",\"section_id\":\"30272893581536002\",\"reply_id\":\"30264898682237954\",\"is_delta\":true,\"status\":1,\"is_finish\":true,\"has_suggest\":true,\"message_action_bar\":{},\"input_content_type\":2001,\"message_index\":2,\"bot_id\":\"7338286299411103781\",\"tts_content\":\"Hello there! 😊 Did you mean to say \\\"hello\\\" (with a typo) or is \\\"hello1\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\"}","event_id":"13","event_type":2001}
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"Can you tell me a joke?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"Can you tell me a joke?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"is_finish\\\":true,\\\"has_suggest\\\":true,\\\"message_action_bar\\\":{},\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"tts_content\\\":\\\"Hello there! 😊 Did you mean to say \\\\\\\"hello\\\\\\\" (with a typo) or is \\\\\\\"hello1\\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\\"}\",\"event_id\":\"13\",\"event_type\":2001}",
    "timestamp": "2025-11-21T05:27:27.797Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "data: {\"event_data\":\"{\\\"message\\\":{\\\"content_type\\\":2002,\\\"content\\\":\\\"{\\\\\\\"suggest\\\\\\\":\\\\\\\"Can you tell me a joke?\\\\\\\",\\\\\\\"suggestions\\\\\\\":[\\\\\\\"Can you tell me a joke?\\\\\\\"]}\\\",\\\"id\\\":\\\"889d19e2-7a4f-4a1e-847d-34cc57f15c22\\\"},\\\"message_id\\\":\\\"30264898682238466\\\",\\\"local_message_id\\\":\\\"c1e503c0-c69a-11f0-a880-c56c80360dcc\\\",\\\"conversation_id\\\":\\\"30272893581535746\\\",\\\"local_conversation_id\\\":\\\"local_1381142239817711\\\",\\\"section_id\\\":\\\"30272893581536002\\\",\\\"reply_id\\\":\\\"30264898682237954\\\",\\\"is_delta\\\":true,\\\"status\\\":1,\\\"is_finish\\\":true,\\\"has_suggest\\\":true,\\\"message_action_bar\\\":{},\\\"input_content_type\\\":2001,\\\"message_index\\\":2,\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"tts_content\\\":\\\"Hello there! 😊 Did you mean to say \\\\\\\"hello\\\\\\\" (with a typo) or is \\\\\\\"hello1\\\\\\\" a specific message? Feel free to share what you want to talk about—I’m here to chat, help, or answer any questions!\\\"}\",\"event_id\":\"13\",\"event_type\":2001}",
  "timestamp": "2025-11-21T05:27:27.797Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO_SAMANTHA] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao_samantha', url: 'https://www.doubao.com/samantha/chat/completion?ai…nIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4', injectId: 'inject-524722-1763702843126', data: {…}, …}
doubao_samantha.js:33 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_CHUNK message
doubao_samantha.js:99 🔵 [DOUBAO_SAMANTHA] processSseEvents called with: {
  "rawChunk": "data: {\"event_data\":\"{}\",\"event_id\":\"14\",\"event_type\":2003}\n\n",
  "service": "doubao_samantha",
  "url": "https://www.doubao.com/samantha/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8f4vbs_gBQc5rOZ_TmNv_4egn_BOmC_6UwVIb9E4mGe&language=zh&pc_version=2.45.4&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=500d5e1f-c9e7-4cc2-9240-1509c515bc64&msToken=3DW3nj6AA6P3NSFA03uoO6xPgbMZIWuiMxbPgwE1kZvMBTMBgqrdkVcYlydrow7ROMkmwkldgaCPm0aMHXC8vsKfamzvJUwwaVCYVnPNEKOngviTiEMQEQ933pqRFy__n3TXvYIbGZa4exNQK15gYBBXaIK_YEtrQJL97gH1pmfm3Rftc0NBlQ%3D%3D&a_bogus=m74RD7yjdZW5edMtmcQmCA35MzSMNB8ypBTQRN359KzhOw0PyQloMNZdaNENVKvU3YksheAHkjGkYfxG0SvQlI1pwmhDuO4fJGQI98soh1HsY4kgIpRECfbEqJ-CUAsYO%2Fdri-i1AUUnIoc3pHKZA%2FFyS%2Ftq5KbMTNPfdV4l7xgBg-iY9nVRCag4",
  "injectId": "inject-524722-1763702843126",
  "source": "fetch"
}
doubao_samantha.js:103 🔵 [DOUBAO_SAMANTHA] Parsed events: ['data: {"event_data":"{}","event_id":"14","event_type":2003}']
doubao_samantha.js:105 🔵 [DOUBAO_SAMANTHA] Processing event: data: {"event_data":"{}","event_id":"14","event_type":2003}
doubao_samantha.js:107 🔵 [DOUBAO_SAMANTHA] Event should be sent
doubao_samantha.js:109 🔵 [DOUBAO_SAMANTHA] Parsed event: {
  "data": "{\"event_data\":\"{}\",\"event_id\":\"14\",\"event_type\":2003}"
}
doubao_samantha.js:113 🔵 [DOUBAO_SAMANTHA] Raw data field: {"event_data":"{}","event_id":"14","event_type":2003}
doubao_samantha.js:116 🔵 [DOUBAO_SAMANTHA] Parsed data JSON: {
  "event_data": {},
  "event_id": 14,
  "event_type": 2003
}
doubao_samantha.js:118 🔵 [DOUBAO_SAMANTHA] Found event_data field: {}
doubao_samantha.js:121 🔵 [DOUBAO_SAMANTHA] Parsed event_data JSON: {}
doubao_samantha.js:239 🔵 [DOUBAO_SAMANTHA] Final content text: data: {"event_data":"{}","event_id":"14","event_type":2003}
doubao_samantha.js:246 🔵 [DOUBAO_SAMANTHA] Added message to send queue
doubao_samantha.js:256 🔵 [DOUBAO_SAMANTHA] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-524722-1763702843126",
    "text": "data: {\"event_data\":\"{}\",\"event_id\":\"14\",\"event_type\":2003}",
    "timestamp": "2025-11-21T05:27:30.121Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-524722-1763702843126",
  "text": "data: {\"event_data\":\"{}\",\"event_id\":\"14\",\"event_type\":2003}",
  "timestamp": "2025-11-21T05:27:30.121Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_COMPLETED
service-worker.js:110 🔵 [SERVICE] Handling STREAMING_COMPLETED message
doubao_samantha.js:50 🔵 [DOUBAO_SAMANTHA] Handling STREAMING_COMPLETED message
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_COMPLETED
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_COMPLETED",
  "injectId": "inject-524722-1763702843126",
  "timestamp": "2025-11-21T05:27:30.129Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
