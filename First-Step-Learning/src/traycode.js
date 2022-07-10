exports.step = function (input, fileInput) {
  // storage-12
  let liveUser = [];
  let zoomCount = 0;
  let newRow;
  input.meetings.forEach((meeting) => {
    if (zoomCount == 0) {
      // Create csv steps need how to make
      zoomCount = 1;
    }
    // call participant api by meetign id
    // NESIC Zoom Meeting Participant JWT
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJFNVc3MFBRX1RVLWJDQm93bWhaUFZBIiwiZXhwIjoxNjcyNDQ4NDUxfQ.Ci1zHnfOWdkyPvDxlLiKCCkzRMj-s_VuL6I3fY4ToaI";
    const participants_url = `https://api.zoom.us/v2/metrics/meetings/${meeting.uuid}/participants`;
    let participants = request(
      {
        method: "GET",
        uri: participants_url,
        headers: {
          Authorization: token,
        },
      },
      function (error, response, body) {
        callback(helper(error, response, body));
      }
    );
    function helper(error, response, body) {
      console.log(body);
      return JSON.parse(response.body);
    }

    return participants;
  });
};
