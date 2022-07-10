exports.step = function (input, fileInput, callback) {
  // get data from aws-s3-2's url
  request(input.url, function (error, response, body) {
    callback(helper(error, response, body));
  });
  function helper(error, response, body) {
    let result = response.body;
    let message;
    let count = 0;
    let string_result = String.raw`${result}`;
    let finalString = string_result.replace(/"/g, "");
    let meeting_live_list = JSON.parse(csvJSON(finalString));
    let topic;
    let id;
    let idMsg= "なし";
    let topicMsg= "不参加";
  //  loop-1, looping over master data
    input.master_list.forEach((item) => {
      // csv-6, meeting live data is in master data
      const found = meeting_live_list.filter((meeting) => meeting.member_id == item.Zoom_ID);
      
      // boolean-condition-2,true case - meeting search data not found in master data
      if (found === undefined || found.length == 0)  { 
      // boolean-condition-1, true case-initial message
        if (count == 0) {
          message = slackPartialMessage(item.Slack_ID,item.Feeling,item.Load,item["e-mail"], idMsg ,item.comment,topicMsg,item.Profile,item.Name);
          count = 1;
              
        } else {
          // boolean-condition-1, false case-update message
          message += slackPartialMessage(item.Slack_ID,item.Feeling,item.Load,item["e-mail"], idMsg,item.comment,topicMsg,item.Profile,item.Name);
        }
      }
      // boolean-condition-2, falsecase- meeting data found in master data
      else {
        console.log("found" + found);
        // found.forEach((meeting) => {
        //   topic = meeting.Topic;
        //   id = meeting.ID;
        
      // boolean-condition-3, true case-initial message
        if (count == 0) {
          message = slackPartialMessage(item.Slack_ID,item.Feeling,item.Load,item["e-mail"],found[0].ID,item.comment,found[0].Topic,item.Profile,item.Name);
          count = 1;
        } else {
          // boolean-condition-3, false case-update message
          message += slackPartialMessage(item.Slack_ID,item.Feeling,item.Load,item["e-mail"],found[0].ID,item.comment,found[0].Topic,item.Profile,item.Name);
        }
      // });
      }

  });
    return message;
  }
  // convert aws-s3-2 result to object
  function csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return JSON.stringify(result);
  }
  // slack partial rich message
  function slackPartialMessage(slackId,feeling,load,email,id,comment,topic,profile,name) {
    const partialMessage = String.raw`{
      "type": "section",
      "text": {
          "type": "mrkdwn",
          "text": "<@${slackId}>:${feeling}::${load}:"
      },
      "accessory": {
          "type": "button",
          "text": {
              "type": "plain_text",
              "emoji": true,
              "text": "info"
          },
           "value": "action_id:modal_open,scenario_id:status_dashboard_info,email:${email},zoomid:${id}"
      }
  },
  {
      "type": "section",
      "text": {
          "type": "mrkdwn",
          "text": ":speech_balloon:：${comment}\n:zoom:：${topic}"
      },
      "accessory": {
          "type": "image",
          "image_url": "${profile}",
          "alt_text": "${name}"
      }
  },`;
  return partialMessage;
  }
};