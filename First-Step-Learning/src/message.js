
message = String.raw`{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": "<@{loop-1.value.Slack_ID}>:{loop-1.value.Feeling}::{loop-1.value.Load}:"
    },
    "accessory": {
        "type": "button",
        "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "info"
        },
         "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:{loop-1.value.e-mail},zoomid:なし"
    }
},
{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": ":speech_balloon:：{loop-1.value.comment}\n:zoom:：不参加"
    },
    "accessory": {
        "type": "image",
        "image_url": "{loop-1.value.Profile}",
        "alt_text": "{loop-1.value.Name}"
    }
},`;


// update messages


message += String.raw`{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": "<@{loop-1.value.Slack_ID}>:{loop-1.value.Feeling}::{loop-1.value.Load}:"
    },
    "accessory": {
        "type": "button",
        "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "info"
        },
         "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:{loop-1.value.e-mail},zoomid:なし"
    }
},
{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": ":speech_balloon:：{loop-1.value.comment}\n:zoom:：不参加"
    },
    "accessory": {
        "type": "image",
        "image_url": "{loop-1.value.Profile}",
        "alt_text": "{loop-1.value.Name}"
    }
},`;


// other message
message += String.raw`{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": "<@{loop-1.value.Slack_ID}>:{loop-1.value.Feeling}::{loop-1.value.Load}:"
    },
    "accessory": {
        "type": "button",
        "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "info"
        },
         "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:{loop-1.value.e-mail},zoomid:{csv-6.data.ID}"
    }
},
{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": ":speech_balloon:：{loop-1.value.comment}\n:zoom:：{csv-6.data.Topic}"
    },
    "accessory": {
        "type": "image",
        "image_url": "{loop-1.value.Profile}",
        "alt_text": "{loop-1.value.Name}"
    }
},`;


// update message
message += String.raw`{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": "<@{loop-1.value.Slack_ID}>:{loop-1.value.Feeling}::{loop-1.value.Load}:"
    },
    "accessory": {
        "type": "button",
        "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "info"
        },
         "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:{loop-1.value.e-mail},zoomid:{csv-6.data.ID}"
    }
},
{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": ":speech_balloon:：{loop-1.value.comment}\n:zoom:：{csv-6.data.Topic}"
    },
    "accessory": {
        "type": "image",
        "image_url": "{loop-1.value.Profile}",
        "alt_text": "{loop-1.value.Name}"
    }
},`;