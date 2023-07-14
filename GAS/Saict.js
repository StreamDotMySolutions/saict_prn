const server = "http://103.156.82.58/api/test_post"
//const server = "http://202.165.15.230:8001/test_get"

function testPostData(){
  var options = {
    "method" : "post",
    "contentType" : "application/json",
    "headers" : {
       "accept": "application/json" // Tell Laravel to talk in JSON
     }
  };
  var url = server;
  Logger.log(url)
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response)
}

/**
 * Dapatkan senarai parti
 */
function getSenaraiParti()
{


  var sheetName = 'RUJUKAN'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  // dapatkan senarai parti bertanding
  var startRow = 3 // start on which row ?
  var totalRow = 31 // how many rows of data ?

  var startCol = 7 // start on which Col ?
  var totalCol = 1 // how many cols of data ?

  var data = sheet.getRange(startRow,startCol,totalRow,totalCol).getValues();

  // paparkan sebagai DropDown
  createDropdown(data)
}

/**
 * @param Array data
 */
function createDropdown(data) {
  var sheetName = 'SAICT'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  
  //var cell = sheet.getRange("B1");
  


  //var rule = SpreadsheetApp.newDataValidation().requireValueInList(["Option1", "Option 2", "Option 3"]).build();
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(data).build();
  
  // single cell
  // var cell = sheet.getRange("B1");
  // cell.setDataValidation(rule);

  // range of cells
  var startRow = 1 // start on which row ?
  var totalRow = 10 // how many rows of data ?

  var startCol = 2 // start on which Col ?
  var totalCol = 1 // how many cols of data ?

  var range = sheet.getRange(startRow,startCol,totalRow,totalCol);
  range.setDataValidation(rule);
    
    
  // clear B2
  // var cell = sheet.getRange("B2");
  // cell.clearContent();
  // cell.setValue('test123'); 
}



















