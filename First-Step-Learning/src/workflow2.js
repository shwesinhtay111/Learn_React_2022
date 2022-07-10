// You can reference the input variables using input.NAME
// Parsed JSON files could be referenced as fileInput
exports.step = function (input, fileInput, callback){
  input.live_meeting_list.forEach((meetings) => {
   // NESIC Zoom Meeting Participant JWT
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJFNVc3MFBRX1RVLWJDQm93bWhaUFZBIiwiZXhwIjoxNjcyNDQ4NDUxfQ.Ci1zHnfOWdkyPvDxlLiKCCkzRMj-s_VuL6I3fY4ToaI';
    const participants_url = `https://api.zoom.us/v2/metrics/meetings/${meetings.uuid}/participants`;
    request(
      {
        method: 'GET',
        uri: participants_url,
       headers: {
        'Authorization': token
      }   
    },
   function(error, response, body)
      {
        console.log(body);
        callback(helper(error, response,body));
      }
  );    
   });
   //end loop for live_meeting_list
   };
function helper( error, response, body)
{
  return JSON.parse(response.body);
}