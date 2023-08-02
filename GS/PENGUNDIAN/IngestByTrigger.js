function collectDataFromSets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('KEDAH N.01 - N.36'); // Replace 'Sheet1' with the actual sheet name

  var data = {};

  var numRows = sheet.getLastRow();
  var numSets = Math.floor((numRows - 1) / 22); // Assuming each set contains 23 rows (3 rows header + 20 rows data)

  for (var i = 1; i <= numSets; i++) {
    var startRow = 3 + (i - 1) * 22; // Start row of each set (3 rows header + 20 rows data)
    var endRow = startRow + 19; // End row of each set (20 rows data)

    // Collect data from set1 (Columns B to H)
    var set1Range = sheet.getRange(startRow, 2, 20, 7); // 20 rows x 7 columns (B to H)
    var set1Data = set1Range.getValues();
    data['set' + i] = set1Data;

    // Collect data from set2 (Columns J to P)
    var set2Range = sheet.getRange(startRow, 10, 20, 7); // 20 rows x 7 columns (J to P)
    var set2Data = set2Range.getValues();
    data['set' + i + '_2'] = set2Data;

    // Collect data from set3 (Columns R to X)
    var set3Range = sheet.getRange(startRow, 18, 20, 7); // 20 rows x 7 columns (R to X)
    var set3Data = set3Range.getValues();
    data['set' + i + '_3'] = set3Data;
  }

  Logger.log(data); // Display the collected data in the logs (View > Logs)
}

// function onEdit(e) {
//   var sheet = e.source.getActiveSheet();
//   var range = e.range;
//   var editedRow = range.getRow();
//   var editedColumn = range.getColumn();

//   // Calculate the starting row and column for the edited set
//   var startRow = Math.floor((editedRow - 3) / 22) * 22 + 3;
//   var startColumn = Math.floor((editedColumn - 2) / 8) * 8 + 2;

//   // Get the last row in the sheet with data in column B (adjust column letter as needed)
//   var lastRowWithData = sheet.getLastRow();

//   // Calculate the ending row and column for the edited set
//   var endRow = Math.min(startRow + 20, lastRowWithData); // Each set contains 23 rows, but we need to consider the header (3 rows) for the ending row.
//   var endColumn = startColumn + 6; // Each set contains 7 columns, but we need to consider the header (2 columns) for the ending column.

//   if (
//     e.user &&
//     editedRow >= startRow &&
//     editedRow <= endRow &&
//     editedColumn >= startColumn &&
//     editedColumn <= endColumn
//   ) {
//     // The edit was made within the specific set
//     // Place your code here to take action upon detecting the edit in the set
//     // For example, you could send an email notification, log the edit in another sheet, etc.
//     var currentSet = Math.floor((editedRow - 3) / 22) * 3 + Math.floor((editedColumn - 2) / 8) + 1;
//     Logger.log('Edit detected in set' + currentSet);
//   }
// }

function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var activeSheetName = sheet.getName();

  // Check if the active sheet name is in the allowedSheets array
  if (PRN_STATES.indexOf(activeSheetName) === -1) {
    // Exit the function if the active sheet name is not in the allowedSheets array
    return;
  }

  var range = e.range;
  var editedRow = range.getRow();
  var editedColumn = range.getColumn();

  // Calculate the starting row and column for the edited set
  var startRow = Math.floor((editedRow - 3) / 22) * 22 + 3;
  var startColumn = Math.floor((editedColumn - 2) / 8) * 8 + 2;

  // Get the last row in the sheet with data in column B (adjust column letter as needed)
  var lastRowWithData = sheet.getLastRow();

  // Calculate the ending row and column for the edited set
  var endRow = Math.min(startRow + 20, lastRowWithData); // Each set contains 23 rows, but we need to consider the header (3 rows) for the ending row.
  var endColumn = startColumn + 6; // Each set contains 7 columns, but we need to consider the header (2 columns) for the ending column.

  if (
    e.user &&
    editedRow >= startRow &&
    editedRow <= endRow &&
    editedColumn >= startColumn &&
    editedColumn <= endColumn
  ) {
    // The edit was made within the specific set
    var currentSet = Math.floor((editedRow - 3) / 22) * 3 + Math.floor((editedColumn - 2) / 8) + 1;
    Logger.log('Edit detected in set' + currentSet);

    // Collect the data from the edited set (columns B to H)
    var dataRange = sheet.getRange(startRow, startColumn, 21, 7); // 20 rows x 7 columns (B to H)
    var data = dataRange.getValues();

    switch(  activeSheetName ){
      case 'KEDAH N.01 - N.36':
        var stateName = 'KEDAH'
      break;

      case 'PULAU PINANG N.01 - N.40':
        var stateName = 'PULAU PINANG'
      break;

      case 'KELANTAN N.01 - N.45':
        var stateName = 'KELANTAN'
      break;

      case 'TERENGGANU N.01 - N.32':
        var stateName = 'TERENGGANU'
      break;

      case 'SELANGOR N.01 - N.56':
        var stateName = 'SELANGOR'
      break;

      case 'N.SEMBILAN N.01 - N.36':
        var stateName = 'NEGERI SEMBILAN'
      break;


    }

    postData(stateName,sheet.getName(), data )

  }

  
/**
 * Post data to Server
 */
function postData(stateName,sheetName,data) 
{
  // Convert the data to JSON format

    var data = {
    'api_key' : API_KEY,
    'state_name': stateName,
    'sheet_name': sheetName,
    'data' : data
  };
  var jsonData = JSON.stringify(data);

  // Set the URL to which you want to post the data
  var url = BACKEND_URL + "/prn-results/store-triggered-data";

  // Set the options for the HTTP POST request
  var options = {
    method: "post",
    contentType: "application/json",
    payload: jsonData
  };

  // Make the HTTP POST request
  var response = UrlFetchApp.fetch(url, options);

  Logger.log('HTTP Response Code: ' + response.getResponseCode());
  Logger.log('HTTP Response: ' + response.getContentText());
}
}




