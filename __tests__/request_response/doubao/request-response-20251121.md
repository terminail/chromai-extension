# DouBao Request/Response 

## Request URL

https://www.doubao.com/chat/completion?aid=497858&device_id=7572934182482757163&device_platform=web&fp=verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf&language=zh&pc_version=2.46.1&pkg_type=release_version&real_aid=497858&region=CN&samantha_web=1&sys_region=CN&tea_uuid=7572934252993824292&use-olympus-account=1&version_code=20800&web_id=7572934252993824292&web_tab_id=8e170a0f-065d-4c64-95ce-d8be475c4948&msToken=UpHu1SdxWFF66n9jBre4Tex2wAx55l_gX27e3NbUta2bBUyC9-e5M3R2BCRAQUDjs0wBBwvZMgOuHqFeF05B2x5QhG5U05jLwKnYL3NAyTEcoP4eIHigXi_KBHO96Okt4NJ3bhbN2gAzMUbGOIbGWya-jIEh_apWJFNyIcnOS6uZYtZxX26cTA%3D%3D&a_bogus=D7sVk7UjDqRncdFSuOdgCVZRLZOMrBuy0FioRbA5eoToOheaw%2FlOFJihJqunlx0-6bswhq5HBjtqbxjGzu401APpumkfuxky9Gd59WfL%2FZrmP4JgIZRuCvSxoJ-FUWTYKQdeiVE1IUUr2gc3prKpAMF9t%2FtH5KmM0qNjd34lyxgQ6-vY6IdDSoE%3D


## Request Payload

{"client_meta":{"conversation_id":"30303300814870018","bot_id":"7338286299411103781","last_section_id":"30303300814870274","last_message_index":25},"messages":[{"local_message_id":"7ef89f70-c741-11f0-bf4b-410b389a1f69","content_block":[{"block_type":10000,"content":{"text_block":{"text":"hello3","icon_url":"","icon_url_dark":""},"pc_event_block":""},"block_id":"0b63341b-b837-4358-b2ee-7d2c41ae587f","parent_id":"","meta_info":[],"append_fields":[]}],"message_status":0}],"option":{"send_message_scene":"","create_time_ms":1763774456568,"collect_id":"","is_audio":false,"answer_with_suggest":false,"tts_switch":false,"need_deep_think":0,"click_clear_context":false,"from_suggest":false,"is_regen":false,"is_replace":false,"disable_sse_cache":false,"select_text_action":"","resend_for_regen":false,"scene_type":0,"unique_key":"74098698-21ee-4d49-afc8-3847d0f2ad69","start_seq":0,"need_create_conversation":false,"regen_query_id":[],"edit_query_id":[],"regen_instruction":"","no_replace_for_regen":false,"message_from":0,"shared_app_name":""},"ext":{"use_deep_think":"0","commerce_credit_config_enable":"0","fp":"verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf","sub_conv_firstmet_type":"0"}}

## Response Payload

id: 0
event: SSE_HEARTBEAT
data: {}

id: 0
event: SSE_ACK
data: {"query_list":[{"question_id":"30310952846766850","local_message_id":"7ef89f70-c741-11f0-bf4b-410b389a1f69","message_index":26}],"ack_client_meta":{"conversation_id":"30303300814870018","conversation_type":3,"section_id":"30303300814870274"},"timeout_conf":{"answer_first_pending_time":180000,"packet_interval_time":120000}}

id: 1
event: FULL_MSG_NOTIFY
data: {"message":{"conversation_id":"30303300814870018","message_id":"30310952846766850","message_body_version":1,"sender_id":"204977496917593","user_type":1,"content_type":9999,"content":"[{\"block_type\":10000,\"block_id\":\"0b63341b-b837-4358-b2ee-7d2c41ae587f\",\"content\":{\"text_block\":{\"text\":\"hello3\"}}}]","index_in_conv":26,"create_time":1763774456,"biz_content_type":"","sec_sender":"MS4wLjABAAAA_mIkL4JTsuOYub4RdexBfQgVhqaHFqFdSV6Bc7c0ups","content_block":[{"block_type":10000,"block_id":"0b63341b-b837-4358-b2ee-7d2c41ae587f","content":{"text_block":{"text":"hello3"}},"is_finish":false}],"tts_content":"","update_time":1763774456,"ext":{"inner_user_ip":"120.239.245.233","bot_id":"7338286299411103781","inner_did":"7572934182482757163","enc_strategy":"in_place","memory_reflect":"1","chat_next":"1","ugc_voice_id":"104","inner_pc_version":"2.46.1","chat_history_count":"10","inner_env":"prod","fp":"verify_mi8ogf91_CoosdIYW_o4aR_4iux_AqSm_SRmQdnrXazIf","inner_log_id":"20251122092056FA6B2EA4B2CBA3C502F0","cot_switch":"0","chat_id":"30310952846766850","commerce_credit_config_enable":"0","group":"1763774456","inner_samantha_web":"true","inner_real_app_id":"497858","inner_terminal_app_id":"497858","inner_msg_lang_display_code":"en","inner_platform":"web","user_question_round":"6","inner_tea_uuid":"7572934252993824292","inner_flow_app_variant":"doubao","update_version_code":"0","use_content_block":"1","use_deep_think":"0","model_type":"38","reply_unique_key":"74098698-21ee-4d49-afc8-3847d0f2ad69","inner_libra_versions":"9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14852777,14884712,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097","archive_state":"mask_init","inner_app_id":"497858","message_from":"InputBox","inner_msg_lang_code":"en","inner_msg_lang_exemption":"false","sub_conv_firstmet_type":"0","inner_region":"CN","client_report_scene":"gui","inner_is_tour":"false","bot_source":"BotStudio","inner_tt_wid":"7572934182482757163","old_content_type":"1","speaker_id":"zh_female_wenroutaozi_uranus_bigtts","inner_version_name":"","inner_cluster":"default","inner_msg_lang_confidence":"1","input_skill":"{\"skill_id\":\"0\",\"skill_type\":0}","llm_model_type":"38","chat_ability":"{}"},"local_message_id":"7ef89f70-c741-11f0-bf4b-410b389a1f69","section_id":"30303300814870274","bot_reply_message_id":"0","fetch_token":"30310952846766850"},"message_attr":{"badge_count":26,"read_badge_count":26,"read_conv_version":1763774456861102,"pre_read_conv_version":1763725317719792}}

id: 5
event: STREAM_MSG_NOTIFY
data: {"content":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"Hi"}},"is_finish":false,"patch_type":1}],"content_status":100,"ext":{"inner_tea_uuid":"7572934252993824292","auto_create_creation_asset":"0","before_content_type":"1","inner_did":"7572934182482757163","inner_msg_lang_confidence":"1","inner_pc_version":"2.46.1","inner_tt_wid":"7572934182482757163","inner_user_ip":"120.239.245.233","inner_version_name":"","agent_name":"豆包","bot_state":"{\"bot_id\":\"7338286299411103781\",\"bot_name\":\"豆包\",\"agent_name\":\"豆包\",\"agent_id\":\"19457456070409730\"}","inner_flow_app_variant":"doubao","inner_libra_versions":"9681435,14573792,14615804,14712210,14712264,14712275,14712352,14712369,14743491,9427166,10596462,13741271,14418351,14855265,10541099,11100283,11100284,12077497,14199306,14289251,14542595,14547799,14591853,14682074,14711196,14711246,14711252,14711301,14711369,14716868,14723583,14736861,14743555,14758764,14760533,14769901,14788833,14798017,14825787,14852777,14884712,11958164,12628471,13253683,13349017,13578190,13644880,13828344,13863304,14207348,14370070,14432780,14438036,14464960,14700738,14717279,14754785,14794350,14845477,14852567,14854931,14869223,14874097","inner_msg_lang_code":"en","input_skill":"{\"skill_id\":\"0\",\"skill_type\":0}","llm_intention":"seed_main","model_type":"38","inner_platform":"web","inner_samantha_web":"true","llm_intention_detail":"default","llm_intention_detail_dict":"{\"plugin_intention\":\"\",\"plugin_generalize_intention\":\"无\",\"vlm_intention\":\"false\",\"browsing_intention\":\"-1\",\"rich_media_intention\":\"0\",\"branch_intention\":\"Branch-Other\",\"creation_detail_intention\":\"\",\"deep_think_intention\":\"0\",\"freshness\":\"false\",\"valid\":true,\"plugin_name\":\"\",\"plugin_name_generalized\":\"无\",\"origin_plugin_name\":\"<[Branch-Other]>\"}","update_version_code":"0","use_content_block":"1","agent_intention":"seed_main","agent_intention_detail":"default","client_report_scene":"gui","cot_switch":"0","inner_cluster":"default","inner_env":"prod","inner_is_tour":"false","reply_unique_key":"74098698-21ee-4d49-afc8-3847d0f2ad69","old_content_type":"1","review_biz_type":"1","seed_agent_name":"Agent-Chat","seed_intention":"seed_main","user_question_round":"6","chat_ability":"{}","chat_id":"30310952846766850","inner_app_id":"497858","inner_msg_lang_exemption":"false","inner_region":"CN","llm_model_type":"38","model_id":"38","tea_tags_time_cost":"{\"agent_id\":\"19457456070409730\",\"agent_name\":\"豆包\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\"}","agent_id":"19457456070409730","auto_create_creation":"1","chat_next":"1","review_scenario_id":"4085066754","tts":"","inner_log_id":"20251122092056FA6B2EA4B2CBA3C502F0","inner_msg_lang_display_code":"en","inner_real_app_id":"497858"},"content_type":9999,"tts_content":"Hi"},"meta":{"message_id":"30310952846767362","conversation_id":"30303300814870018","section_id":"30303300814870274","sender_id":"7338286299411103781","user_type":2,"create_time":1763774457,"index_in_conv":27,"bot_reply_message_id":"30310952846766850","local_conversation_id":""},"attr":{"reply_unique_key":"74098698-21ee-4d49-afc8-3847d0f2ad69"}}

id: 8
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"!"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"!"}}]}

id: 11
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" "}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" "}}]}

id: 14
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"👋"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"👋"}}]}

id: 17
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" Ready"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" Ready"}}]}

id: 20
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" to"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" to"}}]}

id: 23
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" tackle"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" tackle"}}]}

id: 26
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" your technical project? Whether it"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" your technical project? Whether it"}}]}

id: 29
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"’s quant trading (vnpy"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"’s quant trading (vnpy"}}]}

id: 32
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" strategy/data feed), VS Code"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" strategy/data feed), VS Code"}}]}

id: 35
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" extension development (UI/function"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" extension development (UI/function"}}]}

id: 38
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"ality), local knowledge base deployment"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"ality), local knowledge base deployment"}}]}

id: 41
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" (low-end server/model training"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" (low-end server/model training"}}]}

id: 44
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"), or Python/C++ coding"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"), or Python/C++ coding"}}]}

id: 47
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"—share your specific needs,"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"—share your specific needs,"}}]}

id: 50
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" and I’ll provide concise,"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" and I’ll provide concise,"}}]}

id: 53
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":" actionable solutions (code snippets"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":" actionable solutions (code snippets"}}]}

id: 56
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":", configs, step-by"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":", configs, step-by"}}]}

id: 59
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"-step guides) tailored to you"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"-step guides) tailored to you"}}]}

id: 62
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{"text":"!"}},"is_finish":false,"patch_type":1}]}},{"patch_object":111,"patch_type":1,"patch_value":{"tts_content":"!"}}]}

id: 64
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":1,"patch_type":1,"patch_value":{"content_block":[{"block_type":10000,"block_id":"30387402865563394","content":{"text_block":{}},"is_finish":true,"patch_type":1}]}}]}

id: 65
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":3,"patch_type":2,"patch_value":{}},{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"is_finish":"1"}}}]}

id: 66
event: SSE_REPLY_END
data: {"end_type":1,"msg_finish_attr":{"msgid":"30310952846767362","badge_count":27,"read_badge_count":26,"read_conv_version":1763774457824026,"pre_read_conv_version":1763774456861102,"brief":"Hi! 👋 Ready to tackle your technical project? Whether it’s quant trading (vnpy strategy/data feed), VS Code extension development (UI/functionality), local knowledge base deployment (low-end server/model training), or Python/C++ coding—share your specific needs, and I’ll provide concise, actionable solutions (code snippets, configs, step-by-step guides) tailored to you!"}}

id: 67
event: SSE_REPLY_END
data: {"end_type":2,"answer_finish_attr":{"has_suggest":true}}

id: 67
event: SSE_HEARTBEAT
data: {}

id: 68
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some good resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]","tea_tags_time_cost":"{\"agent_id\":\"\",\"agent_name\":\"\",\"llm_intention\":\"seed_main\",\"llm_intention_detail\":\"default\"}"}}}]}

id: 69
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some good resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]"}}}]}

id: 70
event: STREAM_CHUNK
data: {"message_id":"30310952846767362","patch_op":[{"patch_object":50,"patch_type":1,"patch_value":{"ext":{"has_suggest":"1","sp_v2":"[{\"suggest_type\":1,\"content\":\"Can you recommend some good resources for learning Python?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"How can I improve my coding skills?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"},{\"suggest_type\":1,\"content\":\"What are the best practices for developing a VS Code extension?\",\"icon_url\":\"\",\"icon_uri\":\"\",\"click_url\":\"\",\"bot_id\":\"\",\"dark_icon_url\":\"\"}]"}}}]}

id: 71
event: SSE_REPLY_END
data: {"end_type":3}




## Expected Extraction Result 
Question: hello3

Answer: Hi! 👋 Ready to tackle your technical project? Whether it’s quant trading (vnpy strategy/data feed), VS Code extension development (UI/functionality), local knowledge base deployment (low-end server/model training), or Python/C++ coding—share your specific needs, and I’ll provide concise, actionable solutions (code snippets, configs, step-by-step guides) tailored to you!
