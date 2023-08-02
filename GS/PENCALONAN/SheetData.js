function ingestAllRegionsData()
{
    PRN_STATES.forEach(function(sheetName) 
    {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      var stateName = sheet.getRange('B5').getValue();
      var range = sheet.getRange("C5:CF" + sheet.getLastRow());
      var values = range.getValues();

      // Prepare the data for POST request
      var data = {
        'api_key' : "abc123",
        'state_name' : stateName,
        'sheet_name' : sheetName,
        values: values
      };

      Logger.log(stateName)
      postData(data);

    })
}

/**
 *'DB_KEDAH_PRU15',
  'DB_KELANTAN_PRU15',
  'DB_SELANGOR_PRU15',
  'DB_TERENGGANU_PRU15',
  'DB_PENANG_PRU15',
  'DB_N9_PRU15',
 */
function ingestURL(sheetName){
  getAllCandidateUrl('DB_SELANGOR_PRU15')
}

function ingestKedah(){
  var sheetName = "DB_KEDAH_PRU15"
  ingestSheetName(sheetName)
  getAllCandidateUrl(sheetName)
}

function ingestKelantan(){
  var sheetName = "DB_KELANTAN_PRU15"
  ingestSheetName(sheetName)
  getAllCandidateUrl(sheetName)
}

function ingestSelangor(){
  var sheetName = "DB_SELANGOR_PRU15"
  ingestSheetName(sheetName)
  getAllCandidateUrl(sheetName)
}

function ingestTerengganu(){
  var sheetName = "DB_TERENGGANU_PRU15"
  ingestSheetName(sheetName)
  getAllCandidateUrl(sheetName)
}

function ingestPenang(){
  var sheetName = "DB_PENANG_PRU15"
  ingestSheetName(sheetName)
  getAllCandidateUrl(sheetName)
}

function ingestNs(){
  var sheetName = "DB_N9_PRU15"
  ingestSheetName(sheetName)
  getAllCandidateUrl(sheetName)
}

function ingestSheetName(sheetName)
{
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var stateName = sheet.getRange('B5').getValue();
  var range = sheet.getRange("C5:CF" + sheet.getLastRow());
  var values = range.getValues();

  // Prepare the data for POST request
  var data = {
    'api_key' : "abc123",
    'state_name' : stateName,
    'sheet_name' : sheetName,
    values: values
  };

  //Logger.log(stateName)
  postData(data);
}

function getAllCandidateUrl(sheetName)
{

    // PRN_STATES.forEach(function(sheetName) 
    // {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      var stateName = sheet.getRange('B5').getValue();
      
      var range = sheet.getRange("C5:CF" + sheet.getLastRow());

      var startRow = 5
      var startCol = 6
      var totalRow = 1
      var totalCol = 1
      var dataEachCol = 8

      var range = sheet.getRange(startRow,startCol,totalRow,totalCol)

      // data kawasan
      // var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();

      Logger.log(stateName)
      var i = 1
      for(i=1;i<=10;i++){
        if( i === 1 ){
          var nextCol = startCol
        } else {
          var nextCol = ( startCol + ( i*dataEachCol ) )
        }
        
        var candidates = sheet.getRange(startRow,nextCol,sheet.getLastRow(),1).getValues();
        //var data = sheet.getRange( activeRow,nextStartCol+1,totalRow,1 ).getRichTextValue().getLinkUrl();
        //Logger.log(data)

  
        candidates.forEach(function(candidate, index) {
          //Logger.log("The value at index " + index + " is " + candidate + ".");
          let name = candidate[0]
          activeRow = startRow + index
          let candidateName = sheet.getRange( activeRow,nextCol,totalRow,totalCol ).getValue();
          let url = sheet.getRange( activeRow,nextCol,totalRow,totalCol ).getRichTextValue().getLinkUrl();
          if(url !== null ){
            Logger.log(candidateName)
            Logger.log(url)
            postURL(stateName,candidateName,url) 

            // send to server
          }
          
        });

       
      }

    // }) // loop

}

function postURL(stateName,name,url) 
{
  // Convert the data to JSON format

    var data = {
    'api_key' : API_KEY,
    'state_name': stateName,
    'candidate_name': name,
    'url' : url,
  };
  var jsonData = JSON.stringify(data);

  // Set the URL to which you want to post the data
  //var url = "http://202.165.15.230:8001/api/prn-nominations/store-sheet-data";
  var url = BACKEND_URL + "/prn-nominations/store-candidate-url";

  // Set the options for the HTTP POST request
  var options = {
    method: "post",
    contentType: "application/json",
    payload: jsonData
  };

  // Make the HTTP POST request
  var response = UrlFetchApp.fetch(url, options);

  // Log the response
  //Logger.log(response.getContentText());
}


function postData(data) 
{
  // Convert the data to JSON format
  var jsonData = JSON.stringify(data);

  // Set the URL to which you want to post the data
  //var url = "http://202.165.15.230:8001/api/prn-nominations/store-sheet-data";
  var url = BACKEND_URL + "/prn-nominations/store-sheet-data";

  Logger.log(url)

  // Set the options for the HTTP POST request
  var options = {
    method: "post",
    contentType: "application/json",
    payload: jsonData
  };

  // Make the HTTP POST request
  var response = UrlFetchApp.fetch(url, options);

  // Log the response
  Logger.log(response.getContentText());
}















