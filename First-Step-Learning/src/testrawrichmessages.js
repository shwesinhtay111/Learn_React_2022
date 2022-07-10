exports.step = function (input, fileInput) {
  let message;
  message = String.raw`{
              "type": "divider"
          },
                      {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": "<@aye aye>"
              },
              "accessory": {
                  "type": "button",
                  "text": {
                      "type": "plain_text",
                      "emoji": true,
                      "text": "info"
                  },
                   "value": "$wbk プロセスDX Call Event service_id:wf_status_service_s command_id:wf_zoom_status_change_s  flag:詳細 mail:test.com"
              }
          },
          {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": ":zoom:：不参加\n:speech_balloon:：great test"
              },
              "accessory": {
                  "type": "image",
                  "image_url": "testing.com",
                  "alt_text": "aung aung"
              }
          },`;

  message += String.raw`{
              "type": "divider"
          },
                      {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": "<@aung aung>"
              },
              "accessory": {
                  "type": "button",
                  "text": {
                      "type": "plain_text",
                      "emoji": true,
                      "text": "info"
                  },
                   "value": "$wbk プロセスDX Call Event service_id:wf_status_service_s command_id:wf_zoom_status_change_s  flag:詳細 mail:test.com"
              }
          },
          {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": ":zoom:：不参加\n:speech_balloon:：great test"
              },
              "accessory": {
                  "type": "image",
                  "image_url": "testing.com",
                  "alt_text": "aung aung"
              }
          },`;
          message += String.raw`{
            "type": "divider"
        },
                    {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "<@aung aung>"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "emoji": true,
                    "text": "info"
                },
                 "value": "$wbk プロセスDX Call Event service_id:wf_status_service_s command_id:wf_zoom_status_change_s  flag:詳細 mail:test.com"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":zoom:：不参加\n:speech_balloon:：great test"
            },
            "accessory": {
                "type": "image",
                "image_url": "testing.com",
                "alt_text": "aung aung"
            }
        },`;
        message += String.raw`{
            "type": "divider"
        },
                    {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "<@aung aung>"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "emoji": true,
                    "text": "info"
                },
                 "value": "$wbk プロセスDX Call Event service_id:wf_status_service_s command_id:wf_zoom_status_change_s  flag:詳細 mail:test.com"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":zoom:：不参加\n:speech_balloon:：great test"
            },
            "accessory": {
                "type": "image",
                "image_url": "testing.com",
                "alt_text": "aung aung"
            }
        },`;
        message += String.raw`{
            "type": "divider"
        },
                    {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "<@aung aung>"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "emoji": true,
                    "text": "info"
                },
                 "value": "$wbk プロセスDX Call Event service_id:wf_status_service_s command_id:wf_zoom_status_change_s  flag:詳細 mail:test.com"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":zoom:：不参加\n:speech_balloon:：great test"
            },
            "accessory": {
                "type": "image",
                "image_url": "testing.com",
                "alt_text": "aung aung"
            }
        },`;
        message += String.raw`{
            "type": "divider"
        },
                    {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "<@aung aung>"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "emoji": true,
                    "text": "info"
                },
                 "value": "$wbk プロセスDX Call Event service_id:wf_status_service_s command_id:wf_zoom_status_change_s  flag:詳細 mail:test.com"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":zoom:：不参加\n:speech_balloon:：great test"
            },
            "accessory": {
                "type": "image",
                "image_url": "testing.com",
                "alt_text": "aung aung"
            }
        },`;
        message += String.raw`{
            "type": "divider"
        },
                    {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "<@aung aung>"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "emoji": true,
                    "text": "info"
                },
                 "value": "$wbk プロセスDX Call Event service_id:wf_status_service_s command_id:wf_zoom_status_change_s  flag:詳細 mail:test.com"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":zoom:：不参加\n:speech_balloon:：great test"
            },
            "accessory": {
                "type": "image",
                "image_url": "testing.com",
                "alt_text": "aung aung"
            }
        },`;
  console.log(typeof message);
  return message;
};
