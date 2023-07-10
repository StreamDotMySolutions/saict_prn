function sheetnames() { 

  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var folder = DriveApp.createFolder('saict_prn_csv');

  for (var i=0 ; i<sheets.length ; i++)
  {
    Logger.log('sheet:' +   sheets[i].getName() );

    var ss = SpreadsheetApp.getActiveSpreadsheet(); 
    var sheet = ss.getSheetByName(sheets[i].getName());
   
    fileName = sheet.getName() + ".csv";
    // convert all available sheet data to csv format
    var csvFile = convertRangeToCsvFile_(fileName, sheet);
    
    // create a file in the Docs List with the given name and the csv data
    var file = folder.createFile(fileName, csvFile);

    //File downlaod
    var downloadURL = file.getDownloadUrl().slice(0, -8);

    Logger.log('download url :' +   downloadURL );
  
  }

}

function convertRangeToCsvFile_(csvFileName, sheet) {
  // get available data range in the spreadsheet
  var activeRange = sheet.getDataRange();
  try {
    var data = activeRange.getValues();
    var csvFile = undefined;

    // loop through the data in the range and build a string with the csv data
    if (data.length > 1) {
      var csv = "";
      for (var row = 0; row < data.length; row++) {
        for (var col = 0; col < data[row].length; col++) {
          if (data[row][col].toString().indexOf(",") != -1) {
            data[row][col] = "\"" + data[row][col] + "\"";
          }
        }

        // join each row's columns
        // add a carriage return to end of each row, except for the last one
        if (row < data.length-1) {
          csv += data[row].join(",") + "\r\n";
        }
        else {
          csv += data[row];
        }
      }
      csvFile = csv;
    }
    return csvFile;
  }
  catch(err) {
    Logger.log(err);
    Browser.msgBox(err);
  }
}


