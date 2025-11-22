service-worker.js:17 🔵 [SERVICE] Extension installed
service-worker.js:45 🔵 [SERVICE] Received message: GET_TAB_ID
service-worker.js:70 🔵 [SERVICE] Unknown message type: GET_TAB_ID
service-worker.js:23 🔵 [SERVICE] Content script connected: content-script
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_STARTED
service-worker.js:99 🔵 [SERVICE] Handling STREAMING_STARTED message
doubao.js:9 🔵 [DOUBAO] Handling STREAMING_STARTED message for legacy endpoint
doubao.js:22 🔵 [DOUBAO] Extracted question content: hello222
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_STARTED
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_STARTED",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "question": "hello222",
  "timestamp": "2025-11-21T09:54:27.346Z",
  "source": "fetch"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 0\nevent: SSE_HEARTBEAT\ndata: {}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 0\nevent: SSE_HEARTBEAT\ndata: {}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 0
event: SSE_HEARTBEAT
data: {}
doubao.js:213 🔵 [DOUBAO] Event should NOT be sent
doubao.js:220 🔵 [DOUBAO] Messages to send: []
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 0\nevent: SSE_ACK\ndata: {\"query_list\":[{\"question_id\":\"30292449831368194\",\"local_message_id\":\"11284e40-c6c0-11f0-9112-3d8b4fc41586\",\"message_index\":6}],\"ack_client_meta\":{\"conversation_id\":\"30303300814870018\",\"conversation_type\":3,\"section_id\":\"30303300814870274\"},\"timeout_conf\":{\"answer_first_pending_time\":180000,\"packet_interval_time\":120000}}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 0\nevent: SSE_ACK\ndata: {"query_list":[{"questi…ding_time":180000,"packet_interval_time":120000}}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 0
event: SSE_ACK
data: {"query_list":[{"question_id":"30292449831368194","local_message_id":"11284e40-c6c0-11f0-9112-3d8b4fc41586","message_index":6}],"ack_client_meta":{"conversation_id":"30303300814870018","conversation_type":3,"section_id":"30303300814870274"},"timeout_conf":{"answer_first_pending_time":180000,"packet_interval_time":120000}}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"query_list":[{"question_id":"30292449831368194","local_message_id":"11284e40-c6c0-11f0-9112-3d8b4fc41586","message_index":6}],"ack_client_meta":{"conversation_id":"30303300814870018","conversation_type":3,"section_id":"30303300814870274"},"timeout_conf":{"answer_first_pending_time":180000,"packet_interval_time":120000}}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "query_list": [
    {
      "question_id": "30292449831368194",
      "local_message_id": "11284e40-c6c0-11f0-9112-3d8b4fc41586",
      "message_index": 6
    }
  ],
  "ack_client_meta": {
    "conversation_id": "30303300814870018",
    "conversation_type": 3,
    "section_id": "30303300814870274"
  },
  "timeout_conf": {
    "answer_first_pending_time": 180000,
    "packet_interval_time": 120000
  }
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 0
event: SSE_ACK
data: {"query_list":[{"question_id":"30292449831368194","local_message_id":"11284e40-c6c0-11f0-9112-3d8b4fc41586","message_index":6}],"ack_client_meta":{"conversation_id":"30303300814870018","conversation_type":3,"section_id":"30303300814870274"},"timeout_conf":{"answer_first_pending_time":180000,"packet_interval_time":120000}}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 0\nevent: SSE_ACK\ndata: {\"query_list\":[{\"question_id\":\"30292449831368194\",\"local_message_id\":\"11284e40-c6c0-11f0-9112-3d8b4fc41586\",\"message_index\":6}],\"ack_client_meta\":{\"conversation_id\":\"30303300814870018\",\"conversation_type\":3,\"section_id\":\"30303300814870274\"},\"timeout_conf\":{\"answer_first_pending_time\":180000,\"packet_interval_time\":120000}}",
    "timestamp": "2025-11-21T09:54:27.566Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 0\nevent: SSE_ACK\ndata: {\"query_list\":[{\"question_id\":\"30292449831368194\",\"local_message_id\":\"11284e40-c6c0-11f0-9112-3d8b4fc41586\",\"message_index\":6}],\"ack_client_meta\":{\"conversation_id\":\"30303300814870018\",\"conversation_type\":3,\"section_id\":\"30303300814870274\"},\"timeout_conf\":{\"answer_first_pending_time\":180000,\"packet_interval_time\":120000}}",
  "timestamp": "2025-11-21T09:54:27.566Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 1\nevent: FULL_MSG_NOTIFY\ndata: {\"message\":{\"conversation_id\":\"30303300814870018\",\"message_id\":\"30292449831368194\",\"message_body_version\":1,\"sender_id\":\"204977496917593\",\"user_type\":1,\"content_type\":9999,\"content\":\"[{\\\"block_type\\\":10000,\\\"block_id\\\":\\\"4b8018b9-f8d2-442c-83b7-417dc87d94b1\\\",\\\"content\\\":{\\\"text_block\\\":{\\\"text\\\":\\\"hello222\\\"}}}]\",\"index_in_conv\":6,\"create_time\":1763718867,\"biz_content_type\":\"\",\"sec_sender\":\"MS4wLjABAAAA_mIkL4JTsuOYub4RdexBfQgVhqaHFqFdSV6Bc7c0ups\",\"content_block\":[{\"block_type\":10000,\"block_id\":\"4b8018b9-f8d2-442c-83b7-417dc87d94b1\",\"content\":{\"text_block\":{\"text\":\"hello222\"}},\"is_finish\":false}],\"tts_content\":\"\",\"update_time\":1763718867,\"ext\":{\"input_skill\":\"{\\\"skill_id\\\":\\\"0\\\",\\\"skill_type\\\":0}\",\"inner_env\":\"prod\",\"sub_conv_firstmet_type\":\"0\",\"ugc_voice_id\":\"104\",\"inner_app_id\":\"497858\",\"inner_msg_lang_exemption\":\"false\",\"archive_state\":\"mask_init\",\"old_content_type\":\"1\",\"inner_cluster\":\"default\",\"message_from\":\"InputBox\",\"bot_id\":\"7338286299411103781\",\"reply_unique_key\":\"02f0ba6e-f2f5-4615-bc3f-046c51e407a3\",\"inner_pc_version\":\"2.46.0\",\"llm_model_type\":\"38\",\"fp\":\"verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf\",\"inner_libra_versions\":\"9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14673657,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14738709,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14828924,14852777,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14675542,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097\",\"inner_user_ip\":\"120.239.245.233\",\"chat_next\":\"1\",\"cot_switch\":\"0\",\"inner_region\":\"CN\",\"inner_msg_lang_display_code\":\"en\",\"inner_log_id\":\"20251121175427276038F8F53B0E97F3C8\",\"chat_ability\":\"{}\",\"bot_source\":\"BotStudio\",\"inner_real_app_id\":\"497858\",\"inner_tt_wid\":\"7572934182482757163\",\"enc_strategy\":\"in_place\",\"inner_samantha_web\":\"true\",\"speaker_id\":\"zh_female_wenroutaozi_uranus_bigtts\",\"use_content_block\":\"1\",\"model_type\":\"38\",\"group\":\"1763718867\",\"client_report_scene\":\"gui\",\"inner_did\":\"7572934182482757163\",\"inner_tea_uuid\":\"7572934252993824292\",\"commerce_credit_config_enable\":\"0\",\"inner_is_tour\":\"false\",\"inner_msg_lang_confidence\":\"1\",\"inner_msg_lang_code\":\"en\",\"inner_platform\":\"web\",\"inner_version_name\":\"\",\"memory_reflect\":\"1\",\"inner_flow_app_variant\":\"doubao\",\"update_version_code\":\"0\",\"chat_history_count\":\"2\",\"user_question_round\":\"2\",\"chat_id\":\"30292449831368194\",\"use_deep_think\":\"0\",\"inner_terminal_app_id\":\"497858\"},\"local_message_id\":\"11284e40-c6c0-11f0-9112-3d8b4fc41586\",\"section_id\":\"30303300814870274\",\"bot_reply_message_id\":\"0\",\"fetch_token\":\"30292449831368194\"},\"message_attr\":{\"badge_count\":6,\"read_badge_count\":6,\"read_conv_version\":1763718867504205,\"pre_read_conv_version\":1763718557609178}}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 1\nevent: FULL_MSG_NOTIFY\ndata: {"message":{"co…504205,"pre_read_conv_version":1763718557609178}}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 1
event: FULL_MSG_NOTIFY
data: {"message":{"conversation_id":"30303300814870018","message_id":"30292449831368194","message_body_version":1,"sender_id":"204977496917593","user_type":1,"content_type":9999,"content":"[{\"block_type\":10000,\"block_id\":\"4b8018b9-f8d2-442c-83b7-417dc87d94b1\",\"content\":{\"text_block\":{\"text\":\"hello222\"}}}]","index_in_conv":6,"create_time":1763718867,"biz_content_type":"","sec_sender":"MS4wLjABAAAA_mIkL4JTsuOYub4RdexBfQgVhqaHFqFdSV6Bc7c0ups","content_block":[{"block_type":10000,"block_id":"4b8018b9-f8d2-442c-83b7-417dc87d94b1","content":{"text_block":{"text":"hello222"}},"is_finish":false}],"tts_content":"","update_time":1763718867,"ext":{"input_skill":"{\"skill_id\":\"0\",\"skill_type\":0}","inner_env":"prod","sub_conv_firstmet_type":"0","ugc_voice_id":"104","inner_app_id":"497858","inner_msg_lang_exemption":"false","archive_state":"mask_init","old_content_type":"1","inner_cluster":"default","message_from":"InputBox","bot_id":"7338286299411103781","reply_unique_key":"02f0ba6e-f2f5-4615-bc3f-046c51e407a3","inner_pc_version":"2.46.0","llm_model_type":"38","fp":"verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf","inner_libra_versions":"9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14673657,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14738709,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14828924,14852777,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14675542,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097","inner_user_ip":"120.239.245.233","chat_next":"1","cot_switch":"0","inner_region":"CN","inner_msg_lang_display_code":"en","inner_log_id":"20251121175427276038F8F53B0E97F3C8","chat_ability":"{}","bot_source":"BotStudio","inner_real_app_id":"497858","inner_tt_wid":"7572934182482757163","enc_strategy":"in_place","inner_samantha_web":"true","speaker_id":"zh_female_wenroutaozi_uranus_bigtts","use_content_block":"1","model_type":"38","group":"1763718867","client_report_scene":"gui","inner_did":"7572934182482757163","inner_tea_uuid":"7572934252993824292","commerce_credit_config_enable":"0","inner_is_tour":"false","inner_msg_lang_confidence":"1","inner_msg_lang_code":"en","inner_platform":"web","inner_version_name":"","memory_reflect":"1","inner_flow_app_variant":"doubao","update_version_code":"0","chat_history_count":"2","user_question_round":"2","chat_id":"30292449831368194","use_deep_think":"0","inner_terminal_app_id":"497858"},"local_message_id":"11284e40-c6c0-11f0-9112-3d8b4fc41586","section_id":"30303300814870274","bot_reply_message_id":"0","fetch_token":"30292449831368194"},"message_attr":{"badge_count":6,"read_badge_count":6,"read_conv_version":1763718867504205,"pre_read_conv_version":1763718557609178}}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message":{"conversation_id":"30303300814870018","message_id":"30292449831368194","message_body_version":1,"sender_id":"204977496917593","user_type":1,"content_type":9999,"content":"[{\"block_type\":10000,\"block_id\":\"4b8018b9-f8d2-442c-83b7-417dc87d94b1\",\"content\":{\"text_block\":{\"text\":\"hello222\"}}}]","index_in_conv":6,"create_time":1763718867,"biz_content_type":"","sec_sender":"MS4wLjABAAAA_mIkL4JTsuOYub4RdexBfQgVhqaHFqFdSV6Bc7c0ups","content_block":[{"block_type":10000,"block_id":"4b8018b9-f8d2-442c-83b7-417dc87d94b1","content":{"text_block":{"text":"hello222"}},"is_finish":false}],"tts_content":"","update_time":1763718867,"ext":{"input_skill":"{\"skill_id\":\"0\",\"skill_type\":0}","inner_env":"prod","sub_conv_firstmet_type":"0","ugc_voice_id":"104","inner_app_id":"497858","inner_msg_lang_exemption":"false","archive_state":"mask_init","old_content_type":"1","inner_cluster":"default","message_from":"InputBox","bot_id":"7338286299411103781","reply_unique_key":"02f0ba6e-f2f5-4615-bc3f-046c51e407a3","inner_pc_version":"2.46.0","llm_model_type":"38","fp":"verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf","inner_libra_versions":"9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14673657,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14738709,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14828924,14852777,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14675542,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097","inner_user_ip":"120.239.245.233","chat_next":"1","cot_switch":"0","inner_region":"CN","inner_msg_lang_display_code":"en","inner_log_id":"20251121175427276038F8F53B0E97F3C8","chat_ability":"{}","bot_source":"BotStudio","inner_real_app_id":"497858","inner_tt_wid":"7572934182482757163","enc_strategy":"in_place","inner_samantha_web":"true","speaker_id":"zh_female_wenroutaozi_uranus_bigtts","use_content_block":"1","model_type":"38","group":"1763718867","client_report_scene":"gui","inner_did":"7572934182482757163","inner_tea_uuid":"7572934252993824292","commerce_credit_config_enable":"0","inner_is_tour":"false","inner_msg_lang_confidence":"1","inner_msg_lang_code":"en","inner_platform":"web","inner_version_name":"","memory_reflect":"1","inner_flow_app_variant":"doubao","update_version_code":"0","chat_history_count":"2","user_question_round":"2","chat_id":"30292449831368194","use_deep_think":"0","inner_terminal_app_id":"497858"},"local_message_id":"11284e40-c6c0-11f0-9112-3d8b4fc41586","section_id":"30303300814870274","bot_reply_message_id":"0","fetch_token":"30292449831368194"},"message_attr":{"badge_count":6,"read_badge_count":6,"read_conv_version":1763718867504205,"pre_read_conv_version":1763718557609178}}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message": {
    "conversation_id": "30303300814870018",
    "message_id": "30292449831368194",
    "message_body_version": 1,
    "sender_id": "204977496917593",
    "user_type": 1,
    "content_type": 9999,
    "content": "[{\"block_type\":10000,\"block_id\":\"4b8018b9-f8d2-442c-83b7-417dc87d94b1\",\"content\":{\"text_block\":{\"text\":\"hello222\"}}}]",
    "index_in_conv": 6,
    "create_time": 1763718867,
    "biz_content_type": "",
    "sec_sender": "MS4wLjABAAAA_mIkL4JTsuOYub4RdexBfQgVhqaHFqFdSV6Bc7c0ups",
    "content_block": [
      {
        "block_type": 10000,
        "block_id": "4b8018b9-f8d2-442c-83b7-417dc87d94b1",
        "content": {
          "text_block": {
            "text": "hello222"
          }
        },
        "is_finish": false
      }
    ],
    "tts_content": "",
    "update_time": 1763718867,
    "ext": {
      "input_skill": "{\"skill_id\":\"0\",\"skill_type\":0}",
      "inner_env": "prod",
      "sub_conv_firstmet_type": "0",
      "ugc_voice_id": "104",
      "inner_app_id": "497858",
      "inner_msg_lang_exemption": "false",
      "archive_state": "mask_init",
      "old_content_type": "1",
      "inner_cluster": "default",
      "message_from": "InputBox",
      "bot_id": "7338286299411103781",
      "reply_unique_key": "02f0ba6e-f2f5-4615-bc3f-046c51e407a3",
      "inner_pc_version": "2.46.0",
      "llm_model_type": "38",
      "fp": "verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf",
      "inner_libra_versions": "9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14673657,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14738709,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14828924,14852777,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14675542,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097",
      "inner_user_ip": "120.239.245.233",
      "chat_next": "1",
      "cot_switch": "0",
      "inner_region": "CN",
      "inner_msg_lang_display_code": "en",
      "inner_log_id": "20251121175427276038F8F53B0E97F3C8",
      "chat_ability": "{}",
      "bot_source": "BotStudio",
      "inner_real_app_id": "497858",
      "inner_tt_wid": "7572934182482757163",
      "enc_strategy": "in_place",
      "inner_samantha_web": "true",
      "speaker_id": "zh_female_wenroutaozi_uranus_bigtts",
      "use_content_block": "1",
      "model_type": "38",
      "group": "1763718867",
      "client_report_scene": "gui",
      "inner_did": "7572934182482757163",
      "inner_tea_uuid": "7572934252993824292",
      "commerce_credit_config_enable": "0",
      "inner_is_tour": "false",
      "inner_msg_lang_confidence": "1",
      "inner_msg_lang_code": "en",
      "inner_platform": "web",
      "inner_version_name": "",
      "memory_reflect": "1",
      "inner_flow_app_variant": "doubao",
      "update_version_code": "0",
      "chat_history_count": "2",
      "user_question_round": "2",
      "chat_id": "30292449831368194",
      "use_deep_think": "0",
      "inner_terminal_app_id": "497858"
    },
    "local_message_id": "11284e40-c6c0-11f0-9112-3d8b4fc41586",
    "section_id": "30303300814870274",
    "bot_reply_message_id": "0",
    "fetch_token": "30292449831368194"
  },
  "message_attr": {
    "badge_count": 6,
    "read_badge_count": 6,
    "read_conv_version": 1763718867504205,
    "pre_read_conv_version": 1763718557609178
  }
}
doubao.js:203 🔵 [DOUBAO] Final content text: hello222
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "hello222",
    "timestamp": "2025-11-21T09:54:27.580Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "hello222",
  "timestamp": "2025-11-21T09:54:27.580Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 5\nevent: STREAM_MSG_NOTIFY\ndata: {\"content\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\"Hi\"}},\"is_finish\":false,\"patch_type\":1}],\"content_status\":100,\"ext\":{\"update_version_code\":\"0\",\"use_content_block\":\"1\",\"auto_create_creation_asset\":\"0\",\"inner_libra_versions\":\"9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14673657,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14738709,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14828924,14852777,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14675542,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097\",\"inner_platform\":\"web\",\"inner_samantha_web\":\"true\",\"inner_tea_uuid\":\"7572934252993824292\",\"llm_model_type\":\"38\",\"model_id\":\"38\",\"old_content_type\":\"1\",\"inner_real_app_id\":\"497858\",\"inner_version_name\":\"\",\"llm_intention\":\"seed_main\",\"model_type\":\"38\",\"reply_unique_key\":\"02f0ba6e-f2f5-4615-bc3f-046c51e407a3\",\"review_scenario_id\":\"4085066754\",\"user_question_round\":\"2\",\"client_report_scene\":\"gui\",\"cot_switch\":\"0\",\"inner_is_tour\":\"false\",\"inner_tt_wid\":\"7572934182482757163\",\"agent_intention_detail\":\"default\",\"inner_app_id\":\"497858\",\"inner_did\":\"7572934182482757163\",\"inner_msg_lang_display_code\":\"en\",\"inner_pc_version\":\"2.46.0\",\"seed_intention\":\"seed_main\",\"agent_intention\":\"seed_main\",\"before_content_type\":\"1\",\"chat_id\":\"30292449831368194\",\"inner_msg_lang_confidence\":\"1\",\"inner_user_ip\":\"120.239.245.233\",\"llm_intention_detail_dict\":\"{\\\"plugin_intention\\\":\\\"\\\",\\\"plugin_generalize_intention\\\":\\\"无\\\",\\\"vlm_intention\\\":\\\"false\\\",\\\"browsing_intention\\\":\\\"-1\\\",\\\"rich_media_intention\\\":\\\"0\\\",\\\"branch_intention\\\":\\\"Branch-Other\\\",\\\"creation_detail_intention\\\":\\\"\\\",\\\"deep_think_intention\\\":\\\"0\\\",\\\"freshness\\\":\\\"false\\\",\\\"valid\\\":true,\\\"plugin_name\\\":\\\"\\\",\\\"plugin_name_generalized\\\":\\\"无\\\",\\\"origin_plugin_name\\\":\\\"<[Branch-Other]>\\\"}\",\"agent_name\":\"豆包\",\"auto_create_creation\":\"1\",\"bot_state\":\"{\\\"bot_id\\\":\\\"7338286299411103781\\\",\\\"bot_name\\\":\\\"豆包\\\",\\\"agent_name\\\":\\\"豆包\\\",\\\"agent_id\\\":\\\"19457456070409730\\\"}\",\"chat_ability\":\"{}\",\"chat_next\":\"1\",\"inner_env\":\"prod\",\"inner_msg_lang_exemption\":\"false\",\"input_skill\":\"{\\\"skill_id\\\":\\\"0\\\",\\\"skill_type\\\":0}\",\"inner_cluster\":\"default\",\"inner_flow_app_variant\":\"doubao\",\"inner_region\":\"CN\",\"llm_intention_detail\":\"default\",\"seed_agent_name\":\"Agent-Chat\",\"tea_tags_time_cost\":\"{\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"19457456070409730\\\",\\\"agent_name\\\":\\\"豆包\\\"}\",\"tts\":\"\",\"agent_id\":\"19457456070409730\",\"inner_log_id\":\"20251121175427276038F8F53B0E97F3C8\",\"inner_msg_lang_code\":\"en\",\"review_biz_type\":\"1\"},\"content_type\":9999,\"tts_content\":\"Hi\"},\"meta\":{\"message_id\":\"30292449831369218\",\"conversation_id\":\"30303300814870018\",\"section_id\":\"30303300814870274\",\"sender_id\":\"7338286299411103781\",\"user_type\":2,\"create_time\":1763718868,\"index_in_conv\":7,\"bot_reply_message_id\":\"30292449831368194\",\"local_conversation_id\":\"\"},\"attr\":{\"reply_unique_key\":\"02f0ba6e-f2f5-4615-bc3f-046c51e407a3\"}}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 5\nevent: STREAM_MSG_NOTIFY\ndata: {"content":{"…que_key":"02f0ba6e-f2f5-4615-bc3f-046c51e407a3"}}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 5
event: STREAM_MSG_NOTIFY
data: {"content":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":"Hi"}},"is_finish":false,"patch_type":1}],"content_status":100,"ext":{"update_version_code":"0","use_content_block":"1","auto_create_creation_asset":"0","inner_libra_versions":"9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14673657,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14738709,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14828924,14852777,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14675542,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097","inner_platform":"web","inner_samantha_web":"true","inner_tea_uuid":"7572934252993824292","llm_model_type":"38","model_id":"38","old_content_type":"1","inner_real_app_id":"497858","inner_version_name":"","llm_intention":"seed_main","model_type":"38","reply_unique_key":"02f0ba6e-f2f5-4615-bc3f-046c51e407a3","review_scenario_id":"4085066754","user_question_round":"2","client_report_scene":"gui","cot_switch":"0","inner_is_tour":"false","inner_tt_wid":"7572934182482757163","agent_intention_detail":"default","inner_app_id":"497858","inner_did":"7572934182482757163","inner_msg_lang_display_code":"en","inner_pc_version":"2.46.0","seed_intention":"seed_main","agent_intention":"seed_main","before_content_type":"1","chat_id":"30292449831368194","inner_msg_lang_confidence":"1","inner_user_ip":"120.239.245.233","llm_intention_detail_dict":"{\"plugin_intention\":\"\",\"plugin_generalize_intention\":\"无\",\"vlm_intention\":\"false\",\"browsing_intention\":\"-1\",\"rich_media_intention\":\"0\",\"branch_intention\":\"Branch-Other\",\"creation_detail_intention\":\"\",\"deep_think_intention\":\"0\",\"freshness\":\"false\",\"valid\":true,\"plugin_name\":\"\",\"plugin_name_generalized\":\"无\",\"origin_plugin_name\":\"<[Branch-Other]>\"}","agent_name":"豆包","auto_create_creation":"1","bot_state":"{\"bot_id\":\"7338286299411103781\",\"bot_name\":\"豆包\",\"agent_name\":\"豆包\",\"agent_id\":\"19457456070409730\"}","chat_ability":"{}","chat_next":"1","inner_env":"prod","inner_msg_lang_exemption":"false","input_skill":"{\"skill_id\":\"0\",\"skill_type\":0}","inner_cluster":"default","inner_flow_app_variant":"doubao","inner_region":"CN","llm_intention_detail":"default","seed_agent_name":"Agent-Chat","tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}","tts":"","agent_id":"19457456070409730","inner_log_id":"20251121175427276038F8F53B0E97F3C8","inner_msg_lang_code":"en","review_biz_type":"1"},"content_type":9999,"tts_content":"Hi"},"meta":{"message_id":"30292449831369218","conversation_id":"30303300814870018","section_id":"30303300814870274","sender_id":"7338286299411103781","user_type":2,"create_time":1763718868,"index_in_conv":7,"bot_reply_message_id":"30292449831368194","local_conversation_id":""},"attr":{"reply_unique_key":"02f0ba6e-f2f5-4615-bc3f-046c51e407a3"}}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"content":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":"Hi"}},"is_finish":false,"patch_type":1}],"content_status":100,"ext":{"update_version_code":"0","use_content_block":"1","auto_create_creation_asset":"0","inner_libra_versions":"9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14673657,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14738709,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14828924,14852777,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14675542,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097","inner_platform":"web","inner_samantha_web":"true","inner_tea_uuid":"7572934252993824292","llm_model_type":"38","model_id":"38","old_content_type":"1","inner_real_app_id":"497858","inner_version_name":"","llm_intention":"seed_main","model_type":"38","reply_unique_key":"02f0ba6e-f2f5-4615-bc3f-046c51e407a3","review_scenario_id":"4085066754","user_question_round":"2","client_report_scene":"gui","cot_switch":"0","inner_is_tour":"false","inner_tt_wid":"7572934182482757163","agent_intention_detail":"default","inner_app_id":"497858","inner_did":"7572934182482757163","inner_msg_lang_display_code":"en","inner_pc_version":"2.46.0","seed_intention":"seed_main","agent_intention":"seed_main","before_content_type":"1","chat_id":"30292449831368194","inner_msg_lang_confidence":"1","inner_user_ip":"120.239.245.233","llm_intention_detail_dict":"{\"plugin_intention\":\"\",\"plugin_generalize_intention\":\"无\",\"vlm_intention\":\"false\",\"browsing_intention\":\"-1\",\"rich_media_intention\":\"0\",\"branch_intention\":\"Branch-Other\",\"creation_detail_intention\":\"\",\"deep_think_intention\":\"0\",\"freshness\":\"false\",\"valid\":true,\"plugin_name\":\"\",\"plugin_name_generalized\":\"无\",\"origin_plugin_name\":\"<[Branch-Other]>\"}","agent_name":"豆包","auto_create_creation":"1","bot_state":"{\"bot_id\":\"7338286299411103781\",\"bot_name\":\"豆包\",\"agent_name\":\"豆包\",\"agent_id\":\"19457456070409730\"}","chat_ability":"{}","chat_next":"1","inner_env":"prod","inner_msg_lang_exemption":"false","input_skill":"{\"skill_id\":\"0\",\"skill_type\":0}","inner_cluster":"default","inner_flow_app_variant":"doubao","inner_region":"CN","llm_intention_detail":"default","seed_agent_name":"Agent-Chat","tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}","tts":"","agent_id":"19457456070409730","inner_log_id":"20251121175427276038F8F53B0E97F3C8","inner_msg_lang_code":"en","review_biz_type":"1"},"content_type":9999,"tts_content":"Hi"},"meta":{"message_id":"30292449831369218","conversation_id":"30303300814870018","section_id":"30303300814870274","sender_id":"7338286299411103781","user_type":2,"create_time":1763718868,"index_in_conv":7,"bot_reply_message_id":"30292449831368194","local_conversation_id":""},"attr":{"reply_unique_key":"02f0ba6e-f2f5-4615-bc3f-046c51e407a3"}}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "content": {
    "content_block": [
      {
        "block_type": 10000,
        "block_id": "30298671980585474",
        "content": {
          "text_block": {
            "text": "Hi"
          }
        },
        "is_finish": false,
        "patch_type": 1
      }
    ],
    "content_status": 100,
    "ext": {
      "update_version_code": "0",
      "use_content_block": "1",
      "auto_create_creation_asset": "0",
      "inner_libra_versions": "9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14673657,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14738709,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14828924,14852777,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14675542,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097",
      "inner_platform": "web",
      "inner_samantha_web": "true",
      "inner_tea_uuid": "7572934252993824292",
      "llm_model_type": "38",
      "model_id": "38",
      "old_content_type": "1",
      "inner_real_app_id": "497858",
      "inner_version_name": "",
      "llm_intention": "seed_main",
      "model_type": "38",
      "reply_unique_key": "02f0ba6e-f2f5-4615-bc3f-046c51e407a3",
      "review_scenario_id": "4085066754",
      "user_question_round": "2",
      "client_report_scene": "gui",
      "cot_switch": "0",
      "inner_is_tour": "false",
      "inner_tt_wid": "7572934182482757163",
      "agent_intention_detail": "default",
      "inner_app_id": "497858",
      "inner_did": "7572934182482757163",
      "inner_msg_lang_display_code": "en",
      "inner_pc_version": "2.46.0",
      "seed_intention": "seed_main",
      "agent_intention": "seed_main",
      "before_content_type": "1",
      "chat_id": "30292449831368194",
      "inner_msg_lang_confidence": "1",
      "inner_user_ip": "120.239.245.233",
      "llm_intention_detail_dict": "{\"plugin_intention\":\"\",\"plugin_generalize_intention\":\"无\",\"vlm_intention\":\"false\",\"browsing_intention\":\"-1\",\"rich_media_intention\":\"0\",\"branch_intention\":\"Branch-Other\",\"creation_detail_intention\":\"\",\"deep_think_intention\":\"0\",\"freshness\":\"false\",\"valid\":true,\"plugin_name\":\"\",\"plugin_name_generalized\":\"无\",\"origin_plugin_name\":\"<[Branch-Other]>\"}",
      "agent_name": "豆包",
      "auto_create_creation": "1",
      "bot_state": "{\"bot_id\":\"7338286299411103781\",\"bot_name\":\"豆包\",\"agent_name\":\"豆包\",\"agent_id\":\"19457456070409730\"}",
      "chat_ability": "{}",
      "chat_next": "1",
      "inner_env": "prod",
      "inner_msg_lang_exemption": "false",
      "input_skill": "{\"skill_id\":\"0\",\"skill_type\":0}",
      "inner_cluster": "default",
      "inner_flow_app_variant": "doubao",
      "inner_region": "CN",
      "llm_intention_detail": "default",
      "seed_agent_name": "Agent-Chat",
      "tea_tags_time_cost": "{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}",
      "tts": "",
      "agent_id": "19457456070409730",
      "inner_log_id": "20251121175427276038F8F53B0E97F3C8",
      "inner_msg_lang_code": "en",
      "review_biz_type": "1"
    },
    "content_type": 9999,
    "tts_content": "Hi"
  },
  "meta": {
    "message_id": "30292449831369218",
    "conversation_id": "30303300814870018",
    "section_id": "30303300814870274",
    "sender_id": "7338286299411103781",
    "user_type": 2,
    "create_time": 1763718868,
    "index_in_conv": 7,
    "bot_reply_message_id": "30292449831368194",
    "local_conversation_id": ""
  },
  "attr": {
    "reply_unique_key": "02f0ba6e-f2f5-4615-bc3f-046c51e407a3"
  }
}
doubao.js:203 🔵 [DOUBAO] Final content text: Hi
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "Hi",
    "timestamp": "2025-11-21T09:54:28.569Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "Hi",
  "timestamp": "2025-11-21T09:54:28.569Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 8\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\"!\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\"!\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 8\nevent: STREAM_CHUNK\ndata: {"message_id":"302…atch_type":1,"patch_value":{"tts_content":"!"}}]}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 8
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":"!"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"!"}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":"!"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"!"}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": "!"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": "!"
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text: !
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "!",
    "timestamp": "2025-11-21T09:54:28.598Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "!",
  "timestamp": "2025-11-21T09:54:28.598Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 11\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" \"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" \"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 11\nevent: STREAM_CHUNK\ndata: {"message_id":"30…atch_type":1,"patch_value":{"tts_content":" "}}]}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 11
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" "}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" "}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" "}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" "}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " "
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " "
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text:  
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " ",
    "timestamp": "2025-11-21T09:54:28.632Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " ",
  "timestamp": "2025-11-21T09:54:28.632Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 14\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\"👋\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\"👋\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 14\nevent: STREAM_CHUNK\ndata: {"message_id":"30…tch_type":1,"patch_value":{"tts_content":"👋"}}]}']
 🔵 [DOUBAO] Processing event: id: 14
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":"👋"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"👋"}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":"👋"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"👋"}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": "👋"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": "👋"
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text: 👋
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "👋",
    "timestamp": "2025-11-21T09:54:28.639Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "👋",
  "timestamp": "2025-11-21T09:54:28.639Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 17\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" Looks\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" Looks\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 17\nevent: STREAM_CHUNK\ndata: {"message_id":"30…type":1,"patch_value":{"tts_content":" Looks"}}]}']
 🔵 [DOUBAO] Processing event: id: 17
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" Looks"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" Looks"}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" Looks"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" Looks"}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " Looks"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " Looks"
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text:  Looks
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " Looks",
    "timestamp": "2025-11-21T09:54:28.643Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " Looks",
  "timestamp": "2025-11-21T09:54:28.643Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 20\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" like\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" like\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 20\nevent: STREAM_CHUNK\ndata: {"message_id":"30…_type":1,"patch_value":{"tts_content":" like"}}]}']
 🔵 [DOUBAO] Processing event: id: 20
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" like"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" like"}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" like"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" like"}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " like"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " like"
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text:  like
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " like",
    "timestamp": "2025-11-21T09:54:28.684Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " like",
  "timestamp": "2025-11-21T09:54:28.684Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 23\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" you\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" you\"}},{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"tea_tags_time_cost\":\"{\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"19457456070409730\\\",\\\"agent_name\\\":\\\"豆包\\\",\\\"llm_intention\\\":\\\"seed_main\\\"}\"}}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 23\nevent: STREAM_CHUNK\ndata: {"message_id":"30…e\\":\\"豆包\\",\\"llm_intention\\":\\"seed_main\\"}"}}}]}']
 🔵 [DOUBAO] Processing event: id: 23
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" you"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" you"}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\",\"llm_intention\":\"seed_main\"}"}}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" you"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" you"}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\",\"llm_intention\":\"seed_main\"}"}}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " you"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " you"
      }
    },
    {
      "patch_object": 50,
      "patch_type": 1,
      "patch_value": {
        "ext": {
          "tea_tags_time_cost": "{\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\",\"llm_intention\":\"seed_main\"}"
        }
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text:  you
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " you",
    "timestamp": "2025-11-21T09:54:28.688Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " you",
  "timestamp": "2025-11-21T09:54:28.688Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 26\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" might be testing the interaction or\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" might be testing the interaction or\"}},{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"tea_tags_time_cost\":\"{\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"19457456070409730\\\",\\\"agent_name\\\":\\\"豆包\\\"}\"}}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 26\nevent: STREAM_CHUNK\ndata: {"message_id":"30…"19457456070409730\\",\\"agent_name\\":\\"豆包\\"}"}}}]}']
 🔵 [DOUBAO] Processing event: id: 26
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" might be testing the interaction or"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" might be testing the interaction or"}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}"}}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" might be testing the interaction or"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" might be testing the interaction or"}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}"}}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " might be testing the interaction or"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " might be testing the interaction or"
      }
    },
    {
      "patch_object": 50,
      "patch_type": 1,
      "patch_value": {
        "ext": {
          "tea_tags_time_cost": "{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}"
        }
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text:  might be testing the interaction or
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " might be testing the interaction or",
    "timestamp": "2025-11-21T09:54:28.813Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " might be testing the interaction or",
  "timestamp": "2025-11-21T09:54:28.813Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 29\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" have a specific need to follow\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" have a specific need to follow\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 29\nevent: STREAM_CHUNK\ndata: {"message_id":"30…ts_content":" have a specific need to follow"}}]}']
 🔵 [DOUBAO] Processing event: id: 29
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" have a specific need to follow"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" have a specific need to follow"}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" have a specific need to follow"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" have a specific need to follow"}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " have a specific need to follow"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " have a specific need to follow"
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text:  have a specific need to follow
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " have a specific need to follow",
    "timestamp": "2025-11-21T09:54:28.968Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " have a specific need to follow",
  "timestamp": "2025-11-21T09:54:28.968Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 32\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" up. Feel free to share\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" up. Feel free to share\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 32\nevent: STREAM_CHUNK\ndata: {"message_id":"30…lue":{"tts_content":" up. Feel free to share"}}]}']
 🔵 [DOUBAO] Processing event: id: 32
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" up. Feel free to share"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" up. Feel free to share"}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" up. Feel free to share"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" up. Feel free to share"}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " up. Feel free to share"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " up. Feel free to share"
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text:  up. Feel free to share
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " up. Feel free to share",
    "timestamp": "2025-11-21T09:54:29.113Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " up. Feel free to share",
  "timestamp": "2025-11-21T09:54:29.113Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 35\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" details about your technical project—\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" details about your technical project—\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 35\nevent: STREAM_CHUNK\ndata: {"message_id":"30…ent":" details about your technical project—"}}]}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 35
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" details about your technical project—"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" details about your technical project—"}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" details about your technical project—"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" details about your technical project—"}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " details about your technical project—"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " details about your technical project—"
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text:  details about your technical project—
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " details about your technical project—",
    "timestamp": "2025-11-21T09:54:29.261Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " details about your technical project—",
  "timestamp": "2025-11-21T09:54:29.261Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 38\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\"whether it's quant trading,\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\"whether it's quant trading,\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: [`id: 38\nevent: STREAM_CHUNK\ndata: {"message_id":"30…:{"tts_content":"whether it's quant trading,"}}]}`]
doubao.js:115 🔵 [DOUBAO] Processing event: id: 38
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":"whether it's quant trading,"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"whether it's quant trading,"}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":"whether it's quant trading,"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"whether it's quant trading,"}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": "whether it's quant trading,"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": "whether it's quant trading,"
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text: whether it's quant trading,
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "whether it's quant trading,",
    "timestamp": "2025-11-21T09:54:29.435Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "whether it's quant trading,",
  "timestamp": "2025-11-21T09:54:29.435Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 41\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" VS Code extension development, local\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" VS Code extension development, local\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 41\nevent: STREAM_CHUNK\ndata: {"message_id":"30…tent":" VS Code extension development, local"}}]}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 41
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" VS Code extension development, local"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" VS Code extension development, local"}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" VS Code extension development, local"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" VS Code extension development, local"}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " VS Code extension development, local"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " VS Code extension development, local"
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text:  VS Code extension development, local
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " VS Code extension development, local",
    "timestamp": "2025-11-21T09:54:29.519Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " VS Code extension development, local",
  "timestamp": "2025-11-21T09:54:29.519Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 44\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" knowledge base setup, or other\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" knowledge base setup, or other\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 44\nevent: STREAM_CHUNK\ndata: {"message_id":"30…ts_content":" knowledge base setup, or other"}}]}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 44
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" knowledge base setup, or other"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" knowledge base setup, or other"}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" knowledge base setup, or other"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" knowledge base setup, or other"}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " knowledge base setup, or other"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " knowledge base setup, or other"
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text:  knowledge base setup, or other
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " knowledge base setup, or other",
    "timestamp": "2025-11-21T09:54:29.597Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " knowledge base setup, or other",
  "timestamp": "2025-11-21T09:54:29.597Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 47\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" programming tasks—and I'll provide\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" programming tasks—and I'll provide\"}},{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"tea_tags_time_cost\":\"{\\\"agent_id\\\":\\\"19457456070409730\\\",\\\"agent_name\\\":\\\"豆包\\\",\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\"}\"}}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 47\nevent: STREAM_CHUNK\ndata: {"message_id":"30…ain\\",\\"llm_intention_detail\\":\\"default\\"}"}}}]}']
 🔵 [DOUBAO] Processing event: id: 47
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" programming tasks—and I'll provide"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" programming tasks—and I'll provide"}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\"}"}}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" programming tasks—and I'll provide"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" programming tasks—and I'll provide"}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\"}"}}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " programming tasks—and I'll provide"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " programming tasks—and I'll provide"
      }
    },
    {
      "patch_object": 50,
      "patch_type": 1,
      "patch_value": {
        "ext": {
          "tea_tags_time_cost": "{\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\"}"
        }
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text:  programming tasks—and I'll provide
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " programming tasks—and I'll provide",
    "timestamp": "2025-11-21T09:54:29.706Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " programming tasks—and I'll provide",
  "timestamp": "2025-11-21T09:54:29.706Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 50\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" concise, actionable solutions tailored to\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" concise, actionable solutions tailored to\"}},{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"tea_tags_time_cost\":\"{\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"19457456070409730\\\",\\\"agent_name\\\":\\\"豆包\\\"}\"}}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 50\nevent: STREAM_CHUNK\ndata: {"message_id":"30…"19457456070409730\\",\\"agent_name\\":\\"豆包\\"}"}}}]}']
 🔵 [DOUBAO] Processing event: id: 50
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" concise, actionable solutions tailored to"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" concise, actionable solutions tailored to"}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}"}}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" concise, actionable solutions tailored to"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" concise, actionable solutions tailored to"}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}"}}}]}
 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " concise, actionable solutions tailored to"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " concise, actionable solutions tailored to"
      }
    },
    {
      "patch_object": 50,
      "patch_type": 1,
      "patch_value": {
        "ext": {
          "tea_tags_time_cost": "{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\"}"
        }
      }
    }
  ]
}
 🔵 [DOUBAO] Final content text:  concise, actionable solutions tailored to
 🔵 [DOUBAO] Added message to send queue
 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " concise, actionable solutions tailored to",
    "timestamp": "2025-11-21T09:54:29.786Z"
  }
]
 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " concise, actionable solutions tailored to",
  "timestamp": "2025-11-21T09:54:29.786Z"
}
 🔵 [SERVICE] Streaming server response: 200
 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 53\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{\"text\":\" your needs!\"}},\"is_finish\":false,\"patch_type\":1}]}},{\"patch_object\":111,\"patch_type\":1,\"patch_value\":{\"tts_content\":\" your needs!\"}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
 🔵 [DOUBAO] Parsed events: ['id: 53\nevent: STREAM_CHUNK\ndata: {"message_id":"30…1,"patch_value":{"tts_content":" your needs!"}}]}']
 🔵 [DOUBAO] Processing event: id: 53
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" your needs!"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" your needs!"}}]}
 🔵 [DOUBAO] Event should be sent
 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{"text":" your needs!"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" your needs!"}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {
                "text": " your needs!"
              }
            },
            "is_finish": false,
            "patch_type": 1
          }
        ]
      }
    },
    {
      "patch_object": 111,
      "patch_type": 1,
      "patch_value": {
        "tts_content": " your needs!"
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text:  your needs!
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": " your needs!",
    "timestamp": "2025-11-21T09:54:29.829Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": " your needs!",
  "timestamp": "2025-11-21T09:54:29.829Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 55\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{}},\"is_finish\":true,\"patch_type\":1}]}}]}\n\nid: 56\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":3,\"patch_type\":2,\"patch_value\":{}},{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"is_finish\":\"1\"}}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: (2) ['id: 55\nevent: STREAM_CHUNK\ndata: {"message_id":"30…_block":{}},"is_finish":true,"patch_type":1}]}}]}', 'id: 56\nevent: STREAM_CHUNK\ndata: {"message_id":"30…ype":1,"patch_value":{"ext":{"is_finish":"1"}}}]}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 55
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{}},"is_finish":true,"patch_type":1}]}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{}},"is_finish":true,"patch_type":1}]}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 1,
      "patch_type": 1,
      "patch_value": {
        "content_block": [
          {
            "block_type": 10000,
            "block_id": "30298671980585474",
            "content": {
              "text_block": {}
            },
            "is_finish": true,
            "patch_type": 1
          }
        ]
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 55
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30298671980585474","content":{"text_block":{}},"is_finish":true,"patch_type":1}]}}]}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:115 🔵 [DOUBAO] Processing event: id: 56
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":3,"patch_type":2,"patch_value":{}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"is_finish":"1"}}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":3,"patch_type":2,"patch_value":{}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"is_finish":"1"}}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 3,
      "patch_type": 2,
      "patch_value": {}
    },
    {
      "patch_object": 50,
      "patch_type": 1,
      "patch_value": {
        "ext": {
          "is_finish": "1"
        }
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 56
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":3,"patch_type":2,"patch_value":{}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"is_finish":"1"}}}]}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 55\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{}},\"is_finish\":true,\"patch_type\":1}]}}]}",
    "timestamp": "2025-11-21T09:54:29.839Z"
  },
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 56\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":3,\"patch_type\":2,\"patch_value\":{}},{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"is_finish\":\"1\"}}}]}",
    "timestamp": "2025-11-21T09:54:29.839Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 55\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":1,\"patch_type\":1,\"patch_value\":{\"content_block\":[{\"block_type\":10000,\"block_id\":\"30298671980585474\",\"content\":{\"text_block\":{}},\"is_finish\":true,\"patch_type\":1}]}}]}",
  "timestamp": "2025-11-21T09:54:29.839Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 56\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":3,\"patch_type\":2,\"patch_value\":{}},{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"is_finish\":\"1\"}}}]}",
  "timestamp": "2025-11-21T09:54:29.839Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 57\nevent: SSE_REPLY_END\ndata: {\"end_type\":1,\"msg_finish_attr\":{\"msgid\":\"30292449831369218\",\"badge_count\":7,\"read_badge_count\":6,\"read_conv_version\":1763718868502818,\"pre_read_conv_version\":1763718867504205,\"brief\":\"Hi! 👋 Looks like you might be testing the interaction or have a specific need to follow up. Feel free to share details about your technical project—whether it's quant trading, VS Code extension development, local knowledge base setup, or other programming tasks—and I'll provide concise, actionable solutions tailored to your needs!\"}}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 57\nevent: SSE_REPLY_END\ndata: {"end_type":1,"m…, actionable solutions tailored to your needs!"}}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 57
event: SSE_REPLY_END
data: {"end_type":1,"msg_finish_attr":{"msgid":"30292449831369218","badge_count":7,"read_badge_count":6,"read_conv_version":1763718868502818,"pre_read_conv_version":1763718867504205,"brief":"Hi! 👋 Looks like you might be testing the interaction or have a specific need to follow up. Feel free to share details about your technical project—whether it's quant trading, VS Code extension development, local knowledge base setup, or other programming tasks—and I'll provide concise, actionable solutions tailored to your needs!"}}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"end_type":1,"msg_finish_attr":{"msgid":"30292449831369218","badge_count":7,"read_badge_count":6,"read_conv_version":1763718868502818,"pre_read_conv_version":1763718867504205,"brief":"Hi! 👋 Looks like you might be testing the interaction or have a specific need to follow up. Feel free to share details about your technical project—whether it's quant trading, VS Code extension development, local knowledge base setup, or other programming tasks—and I'll provide concise, actionable solutions tailored to your needs!"}}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "end_type": 1,
  "msg_finish_attr": {
    "msgid": "30292449831369218",
    "badge_count": 7,
    "read_badge_count": 6,
    "read_conv_version": 1763718868502818,
    "pre_read_conv_version": 1763718867504205,
    "brief": "Hi! 👋 Looks like you might be testing the interaction or have a specific need to follow up. Feel free to share details about your technical project—whether it's quant trading, VS Code extension development, local knowledge base setup, or other programming tasks—and I'll provide concise, actionable solutions tailored to your needs!"
  }
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 57
event: SSE_REPLY_END
data: {"end_type":1,"msg_finish_attr":{"msgid":"30292449831369218","badge_count":7,"read_badge_count":6,"read_conv_version":1763718868502818,"pre_read_conv_version":1763718867504205,"brief":"Hi! 👋 Looks like you might be testing the interaction or have a specific need to follow up. Feel free to share details about your technical project—whether it's quant trading, VS Code extension development, local knowledge base setup, or other programming tasks—and I'll provide concise, actionable solutions tailored to your needs!"}}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 57\nevent: SSE_REPLY_END\ndata: {\"end_type\":1,\"msg_finish_attr\":{\"msgid\":\"30292449831369218\",\"badge_count\":7,\"read_badge_count\":6,\"read_conv_version\":1763718868502818,\"pre_read_conv_version\":1763718867504205,\"brief\":\"Hi! 👋 Looks like you might be testing the interaction or have a specific need to follow up. Feel free to share details about your technical project—whether it's quant trading, VS Code extension development, local knowledge base setup, or other programming tasks—and I'll provide concise, actionable solutions tailored to your needs!\"}}",
    "timestamp": "2025-11-21T09:54:29.869Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 57\nevent: SSE_REPLY_END\ndata: {\"end_type\":1,\"msg_finish_attr\":{\"msgid\":\"30292449831369218\",\"badge_count\":7,\"read_badge_count\":6,\"read_conv_version\":1763718868502818,\"pre_read_conv_version\":1763718867504205,\"brief\":\"Hi! 👋 Looks like you might be testing the interaction or have a specific need to follow up. Feel free to share details about your technical project—whether it's quant trading, VS Code extension development, local knowledge base setup, or other programming tasks—and I'll provide concise, actionable solutions tailored to your needs!\"}}",
  "timestamp": "2025-11-21T09:54:29.869Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 58\nevent: SSE_REPLY_END\ndata: {\"end_type\":2,\"answer_finish_attr\":{\"has_suggest\":true}}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 58\nevent: SSE_REPLY_END\ndata: {"end_type":2,"answer_finish_attr":{"has_suggest":true}}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 58
event: SSE_REPLY_END
data: {"end_type":2,"answer_finish_attr":{"has_suggest":true}}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"end_type":2,"answer_finish_attr":{"has_suggest":true}}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "end_type": 2,
  "answer_finish_attr": {
    "has_suggest": true
  }
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 58
event: SSE_REPLY_END
data: {"end_type":2,"answer_finish_attr":{"has_suggest":true}}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 58\nevent: SSE_REPLY_END\ndata: {\"end_type\":2,\"answer_finish_attr\":{\"has_suggest\":true}}",
    "timestamp": "2025-11-21T09:54:29.947Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 58\nevent: SSE_REPLY_END\ndata: {\"end_type\":2,\"answer_finish_attr\":{\"has_suggest\":true}}",
  "timestamp": "2025-11-21T09:54:29.947Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 59\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\",\"tea_tags_time_cost\":\"{\\\"agent_name\\\":\\\"\\\",\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\"}\"}}}]}\n\nid: 60\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"How can I improve my coding skills?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\",\"tea_tags_time_cost\":\"{\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\",\\\"agent_name\\\":\\\"\\\"}\"}}}]}\n\nid: 61\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"tea_tags_time_cost\":\"{\\\"agent_name\\\":\\\"\\\",\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\"}\",\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"How can I improve my coding skills?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"What are some common programming mistakes and how to avoid them?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\"}}}]}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: (3) ['id: 59\nevent: STREAM_CHUNK\ndata: {"message_id":"30…ion_detail\\":\\"default\\",\\"agent_id\\":\\"\\"}"}}}]}', 'id: 60\nevent: STREAM_CHUNK\ndata: {"message_id":"30…lt\\",\\"agent_id\\":\\"\\",\\"agent_name\\":\\"\\"}"}}}]}', 'id: 61\nevent: STREAM_CHUNK\ndata: {"message_id":"30…\\",\\"bot_id\\":\\"\\",\\"dark_icon_url\\":\\"\\"}]"}}}]}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 59
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]","tea_tags_time_cost":"{\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\"}"}}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]","tea_tags_time_cost":"{\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\"}"}}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 50,
      "patch_type": 1,
      "patch_value": {
        "ext": {
          "has_suggest": "1",
          "sp_v2": "[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]",
          "tea_tags_time_cost": "{\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\"}"
        }
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 59
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]","tea_tags_time_cost":"{\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\"}"}}}]}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:115 🔵 [DOUBAO] Processing event: id: 60
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]","tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\",\"agent_name\":\"\"}"}}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]","tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\",\"agent_name\":\"\"}"}}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 50,
      "patch_type": 1,
      "patch_value": {
        "ext": {
          "has_suggest": "1",
          "sp_v2": "[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]",
          "tea_tags_time_cost": "{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\",\"agent_name\":\"\"}"
        }
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 60
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]","tea_tags_time_cost":"{\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\",\"agent_name\":\"\"}"}}}]}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:115 🔵 [DOUBAO] Processing event: id: 61
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\"}","has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"What are some common programming mistakes and how to avoid them?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]"}}}]}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\"}","has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"What are some common programming mistakes and how to avoid them?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]"}}}]}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "message_id": "30292449831369218",
  "patch_op": [
    {
      "patch_object": 50,
      "patch_type": 1,
      "patch_value": {
        "ext": {
          "tea_tags_time_cost": "{\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\"}",
          "has_suggest": "1",
          "sp_v2": "[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"What are some common programming mistakes and how to avoid them?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]"
        }
      }
    }
  ]
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 61
event: STREAM_CHUNK
data: {"message_id":"30292449831369218","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"tea_tags_time_cost":"{\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\",\"agent_id\":\"\"}","has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"What are some common programming mistakes and how to avoid them?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]"}}}]}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 59\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\",\"tea_tags_time_cost\":\"{\\\"agent_name\\\":\\\"\\\",\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\"}\"}}}]}",
    "timestamp": "2025-11-21T09:54:32.299Z"
  },
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 60\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"How can I improve my coding skills?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\",\"tea_tags_time_cost\":\"{\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\",\\\"agent_name\\\":\\\"\\\"}\"}}}]}",
    "timestamp": "2025-11-21T09:54:32.300Z"
  },
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 61\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"tea_tags_time_cost\":\"{\\\"agent_name\\\":\\\"\\\",\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\"}\",\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"How can I improve my coding skills?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"What are some common programming mistakes and how to avoid them?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\"}}}]}",
    "timestamp": "2025-11-21T09:54:32.301Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 59\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\",\"tea_tags_time_cost\":\"{\\\"agent_name\\\":\\\"\\\",\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\"}\"}}}]}",
  "timestamp": "2025-11-21T09:54:32.299Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 60\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"How can I improve my coding skills?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\",\"tea_tags_time_cost\":\"{\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\",\\\"agent_name\\\":\\\"\\\"}\"}}}]}",
  "timestamp": "2025-11-21T09:54:32.300Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 61\nevent: STREAM_CHUNK\ndata: {\"message_id\":\"30292449831369218\",\"patch_op\":[{\"patch_object\":50,\"patch_type\":1,\"patch_value\":{\"ext\":{\"tea_tags_time_cost\":\"{\\\"agent_name\\\":\\\"\\\",\\\"llm_intention\\\":\\\"seed_main\\\",\\\"llm_intention_detail\\\":\\\"default\\\",\\\"agent_id\\\":\\\"\\\"}\",\"has_suggest\":\"1\",\"sp_v2\":\"[{\\\"suggest_type\\\":1,\\\"content\\\":\\\"Can you recommend some resources for learning Python?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"How can I improve my coding skills?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"},{\\\"suggest_type\\\":1,\\\"content\\\":\\\"What are some common programming mistakes and how to avoid them?\\\",\\\"icon_url\\\":\\\"\\\",\\\"icon_uri\\\":\\\"\\\",\\\"click_url\\\":\\\"\\\",\\\"bot_id\\\":\\\"\\\",\\\"dark_icon_url\\\":\\\"\\\"}]\"}}}]}",
  "timestamp": "2025-11-21T09:54:32.301Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_CHUNK
service-worker.js:74 🔄 [DOUBAO] Received STREAMING_CHUNK message: {type: 'STREAMING_CHUNK', service: 'doubao', url: 'https://www.doubao.com/chat/completion?aid=497858&…x2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ', injectId: 'inject-426572-1763718867331', data: {…}, …}
doubao.js:35 🔵 [DOUBAO] Handling STREAMING_CHUNK message for legacy endpoint
doubao.js:109 🔵 [DOUBAO] processSseEvents called with: {
  "rawChunk": "id: 62\nevent: SSE_REPLY_END\ndata: {\"end_type\":3}\n\n",
  "service": "doubao",
  "url": "https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.0&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=05983e5c-2538-45e8-bfec-90aaafff61d1&msToken=OwgYDaTVANL8bWfYhcJcXhQ5wbardqbnKTIWYOeeoY7EaJX6Ez3LxxOCM1ovh2IHk5z8FBKma7Gx0tPWjQrRd6FXNkS9Vd2jgABKkHPdIUWetzqNKoB3KHWlAYnMbk89vQ4XTZ4bbzi1P-LrY2B8N4Oh9YpRY5Yp6UuDU72G-XQkO7ZbEmmAEw%3D%3D&a_bogus=xXsfk7UJYZRcFd%2FSYCdECIKRwXQArsuyxBiKWu%2F5HFzqOhFPHcloFa5HbOunvt0G1ukshFA7kjtZYdnTsSRbll3komkfuEUWJTQ5968oh174Y-vgV1RgCfSELJ-e0C4Y%2F%2FQri-wX1UUx2oQ3qrKPAZP9t%2FeqQ%2FmMTNNbd3WUyx2-gGJY9VQXtBZZ",
  "injectId": "inject-426572-1763718867331",
  "source": "fetch"
}
doubao.js:113 🔵 [DOUBAO] Parsed events: ['id: 62\nevent: SSE_REPLY_END\ndata: {"end_type":3}']
doubao.js:115 🔵 [DOUBAO] Processing event: id: 62
event: SSE_REPLY_END
data: {"end_type":3}
doubao.js:118 🔵 [DOUBAO] Event should be sent
doubao.js:122 🔵 [DOUBAO] Raw data field: {"end_type":3}
doubao.js:125 🔵 [DOUBAO] Parsed data JSON: {
  "end_type": 3
}
doubao.js:203 🔵 [DOUBAO] Final content text: id: 62
event: SSE_REPLY_END
data: {"end_type":3}
doubao.js:210 🔵 [DOUBAO] Added message to send queue
doubao.js:220 🔵 [DOUBAO] Messages to send: [
  {
    "type": "STREAMING_CHUNK",
    "injectId": "inject-426572-1763718867331",
    "text": "id: 62\nevent: SSE_REPLY_END\ndata: {\"end_type\":3}",
    "timestamp": "2025-11-21T09:54:32.328Z"
  }
]
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_CHUNK
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_CHUNK",
  "injectId": "inject-426572-1763718867331",
  "text": "id: 62\nevent: SSE_REPLY_END\ndata: {\"end_type\":3}",
  "timestamp": "2025-11-21T09:54:32.328Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
service-worker.js:25 🔵 [SERVICE] Received message via port: STREAMING_COMPLETED
service-worker.js:110 🔵 [SERVICE] Handling STREAMING_COMPLETED message
doubao.js:52 🔵 [DOUBAO] Handling STREAMING_COMPLETED message for legacy endpoint
service-worker.js:121 🔵 [SERVICE] Sending data to streaming server: STREAMING_COMPLETED
service-worker.js:122 🔵 [SERVICE] Data being sent: {
  "type": "STREAMING_COMPLETED",
  "injectId": "inject-426572-1763718867331",
  "timestamp": "2025-11-21T09:54:32.359Z"
}
service-worker.js:131 🔵 [SERVICE] Streaming server response: 200
