function ingestRegionData(){
    PRN_STATES.forEach(function(sheetName) 
    {
      Logger.log(sheetName)
      var data =  getDataByRegionCode(sheetName)
      postData(sheetName, data)

    })
}

function getDataByRegionCode(sheetName) {
  //var sheetName = 'KEDAH N.01 - N.36';
  var startRow = 3; // Row number of the first cell (e.g., C3)
  var interval = 22; // The interval between data points (e.g., C3, C25, C47, etc.)

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var lastRow = sheet.getLastRow();
  //Logger.log('Last row is %s', lastRow);
  var data = [];

  for (var i = 0; startRow + interval * i <= lastRow; i++) {
    var row = startRow + (interval * i);

    //Logger.log(row)

    var colData = [];

    var dataset_1 =  getRegionObject(sheet, row, 'C', 'B', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'B', 'H')
    var dataset_2 =  getRegionObject(sheet, row, 'K', 'J', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'J', 'P')
    var dataset_3 =  getRegionObject(sheet, row, 'S', 'R', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'R', 'X')

    //colData.push(sheet.getRange('B' + row).getValue());
    colData.push(dataset_1);
    colData.push(dataset_2);
    colData.push(dataset_3);

    data.push(colData);

  } // row

  var flattenedData = [].concat(...data);
  //Logger.log(flattenedData);
  return data;
}

/**
 * sheet - OBJ sheet object
 * row - INT which row ?
 * nameCol STRING which column for Region Name
 * codeCol STRING which column for Region cCode
 * voterCol STRING which col for Registered Voters
 */

function getRegionObject(
              sheet, 
              row, 
              nameCol, 
              codeCol, 
              voterCol, 
              votesCol, 
              percentageCol,
              majorityCol,
              verifier1Col,
              verifier2Col,
              chiefVerifierCol,
              candidateStartCol,
              candidateEndCol,
              
              ) {
  
  // to get region name
  var regionName = sheet.getRange(nameCol + row).getValue();
  
  // to get region code and convert to N01
  var regionCode = sheet.getRange(codeCol + row).getValue();
  //regionCode =  'N' + (parseInt(regionCode, 10) + 101).toString().substr(1)
  regionCode =  regionCode

  // to get registered voters
  var voterRow = row + 12 // 12 row offset from top
  var registeredVoters = sheet.getRange(voterCol + voterRow).getValue();

  // to get votes
  var votesRow = row + 13 // 13 row offset from top
  var votes = sheet.getRange(votesCol + votesRow).getValue();

  // to get percentage value
  var percentageRow = row + 14 // 14 row offset from top
  var percentage = sheet.getRange(percentageCol + percentageRow).getValue();

  // to get majority value
  var majorityRow = row + 16 // 16 row offset from top
  var majority = sheet.getRange(majorityCol + majorityRow).getValue();

  // to get verifier 1 value
  var verifier1Row = row + 18 // 18 row offset from top
  var verifier1 = sheet.getRange(verifier1Col + verifier1Row).getValue();

  // to get verifier 2 value
  var verifier2Row = row + 19 // 19 row offset from top
  var verifier2 = sheet.getRange(verifier2Col + verifier2Row).getValue();

  // to get chiefVerifier value
  var chiefVerifierRow = row + 20 // 20 row offset from top
  var chiefVerifier = sheet.getRange(chiefVerifierCol + chiefVerifierRow).getValue();

  // calon data
  // var candidates = sheet.getRange('C4:H13').getValues();
  var coordinate = candidateStartCol + 4 + ':' + candidateEndCol + 13
  var candidates = sheet.getRange(coordinate).getValues();


  
  return {
    'sheet_name' : sheet.getName(),
    'region_name': regionName,
    'region_code': regionCode,
    'registered_voters': registeredVoters,
    'votes': votes,
    'percentage': percentage,
    'majority': majority,
    'verifier1': verifier1,
    'verifier2': verifier2,
    'chief_verifier': chiefVerifier,
    'candidates': candidates,

  };
}

function getCandidateValue(sheet, row){
    
    var initialRow = 4
    var initialCol = 3
    var rowData = 10
    var colData = 7
    var rowInterval = 22
    var colInterval = 6
    var lastRow = sheet.getLastRow();
    var data = []
    
    // for each ro there 3 sets of data
    for(var i = 0; i < 3; i++){
  
      var nextCol = initialCol  + ( colInterval * i )
      var candidates = sheet.getRange(row,nextCol,rowData,colData).getValues()
      data.push(candidates)
    }
    return data;
}

function getCandidateData(){
  var sheetName = 'KEDAH N.01 - N.36'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
  //var candidates = sheet.getRange( 4,3,10,6).getValues()
  
  var initialRow = 4
  var initialCol = 3
  var rowData = 10
  var colData = 6
  var rowInterval = 22
  var colInterval = 6
  var lastRow = sheet.getLastRow();
  var data = []

  // for each ro there 3 sets of data
  // for(var i = 1; i < 4; i++){
  //   Logger.log(i)
  //   var nextRow = i * initialRow
  //   var nextCol = i * initialCol
  //   var candidates = sheet.getRange(4,nextCol,10,6).getValues()
  //   data.push(candidates)
  //   //Logger.log(candidates)
  // }

  // row data
  // Logger.log(lastRow)
  // for (var j = 0; j <= lastRow; j++){
  //   row = initialRow  + ( rowInterval * j )
  //   Logger.log(row)

      // for each ro there 3 sets of data
      for(var i = 0; i < 3; i++){
        Logger.log(i)
        //var nextRow = i * initialRow
        var nextCol = initialCol  + ( colInterval * i )

        var candidates = sheet.getRange(4,nextCol,10,6).getValues()
        Logger.log(candidates)
        Logger.log('=========')
        data.push(candidates)
        //Logger.log(candidates)
      }

      //Logger.log(data)


  //   if( row > lastRow) break
  // }

  //Logger.log(data)

   


  
}


/**
 * Post data to Server
 */
function postData(sheetName,data) 
{
  // Convert the data to JSON format

    var data = {
    'api_key' : API_KEY,
    'sheet_name': sheetName,
    'data' : data
  };
  var jsonData = JSON.stringify(data);

  // Set the URL to which you want to post the data
  var url = BACKEND_URL + "/prn-results/store-region-data";

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
