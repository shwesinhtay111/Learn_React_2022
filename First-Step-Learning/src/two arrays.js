exports.step = function (input, fileInput) {
    let count = 0;
    let message;
    input.master_list.forEach((item) => {
      input.meeting_live_list.forEach((meeting) => {
        //   meeting search data not found
        if (meeting.member_id != item.Zoom_ID) {
          if (count == 0) {
            message = String.raw`{
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": "<@${item.Slack_ID}>:${item.Feeling}::${item.Load}:"
              },
              "accessory": {
                  "type": "button",
                  "text": {
                      "type": "plain_text",
                      "emoji": true,
                      "text": "info"
                  },
                   "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:${item["e-mail"]},zoomid:なし"
              }
          },
          {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": ":speech_balloon:：${item.comment}\n:zoom:：不参加"
              },
              "accessory": {
                  "type": "image",
                  "image_url": "${item.Profile}",
                  "alt_text": "${item.Name}"
              }
          },`;
            count = 1;
            console.log(message);
          } else {
            message += String.raw`{
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": "<@${item.Slack_ID}>:${item.Feeling}::${item.Load}:"
              },
              "accessory": {
                  "type": "button",
                  "text": {
                      "type": "plain_text",
                      "emoji": true,
                      "text": "info"
                  },
                   "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:${item["e-mail"]},zoomid:なし"
              }
          },
          {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": ":speech_balloon:：${item.comment}\n:zoom:：不参加"
              },
              "accessory": {
                  "type": "image",
                  "image_url": "${item.Profile}",
                  "alt_text": "${item.Name}"
              }
          },`;
            console.log(message);
          }
        }
        //   meeting data found
        else {
          if (count == 0) {
            message = String.raw`{
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": "<@${item.Slack_ID}>:${item.Feeling}::${item.Load}:"
              },
              "accessory": {
                  "type": "button",
                  "text": {
                      "type": "plain_text",
                      "emoji": true,
                      "text": "info"
                  },
                   "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:${item["e-mail"]},zoomid:{csv-6.data.ID}"
              }
          },
          {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": ":speech_balloon:：${item.comment}\n:zoom:：{csv-6.data.Topic}"
              },
              "accessory": {
                  "type": "image",
                  "image_url": "${item.Profile}",
                  "alt_text": "${item.Name}"
              }
          },`;
            count = 1;
            console.log(message);
          } else {
            message += String.raw`{
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": "<@${item.Slack_ID}>:${item.Feeling}::${item.Load}:"
              },
              "accessory": {
                  "type": "button",
                  "text": {
                      "type": "plain_text",
                      "emoji": true,
                      "text": "info"
                  },
                   "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:${item["e-mail"]},zoomid:{csv-6.data.ID}"
              }
          },
          {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": ":speech_balloon:：${item.comment}\n:zoom:：{csv-6.data.Topic}"
              },
              "accessory": {
                  "type": "image",
                  "image_url": "${item.Profile}",
                  "alt_text": "${item.Name}"
              }
          },`;
            console.log(message);
          }
        }
      });
    });
    return message;
  };
  