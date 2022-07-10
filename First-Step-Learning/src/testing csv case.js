// You can reference the input variables using input.NAME
exports.step = function (input, fileInput, callback) {
  request(input.url, function (error, response, body) {
     callback(helper(error, response, body));
  });
};
function helper(error, response, body) {
  let result;
  result = response.body;
  let string_result = String.raw`${result}`;
  let finalString = string_result.replace(/"/g, "");
  // console.log("result" + csvJSON(finalString));
  let output = JSON.parse(csvJSON(finalString));
  return JSON.parse(input.master_list);
  //var csv is the CSV file with headers
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
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }
}