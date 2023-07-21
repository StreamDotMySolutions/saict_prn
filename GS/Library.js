/**
 * API sender
 */
function sendData(data, method, route){
  var payload = JSON.stringify(data);
  var options = {
    "method" : method,
    "contentType" : "application/json",
    "payload" : payload,
    "headers" : {
       "accept": "application/json" // Tell Laravel to talk in JSON
     }
  };
  var url = BACKEND_URL + route;
  Logger.log(url)
  var response = UrlFetchApp.fetch(url, options);
  return response;

}

/**
 * send Candidate Data
 */
function sendCandidateData(data)
{
    var sheetName =  SpreadsheetApp.getActiveSheet().getName();
    var stateName = SpreadsheetApp.getActiveSheet().getRange('B5').getValue();

    var data = {
    'state_name': stateName,
    'sheet_name' : sheetName,
    'api_key' : "abc123",
    'email' : Session.getActiveUser().getEmail(),
    'data' : data
  };

  var route = "/prn-nominations/store-candidate-data";
  var method = "post";
  
  sendData(data,method,route);
}

/**
 * send Region Data
 */
function sendRegionData(data,sheetName,stateName)
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = {

    'state_name' : stateName,
    'sheet_name' : sheetName,
    'api_key' : "abc123",
    'email' : Session.getActiveUser().getEmail(),
    'data' : data
  };

  var route = "/prn-variables/store-region-data";
  var method = "post";
  sendData(data,method,route);
}

