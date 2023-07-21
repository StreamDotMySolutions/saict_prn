function ingestPartyData() {

  /**
   * @author Azril Nazli Alias ( streamdotmysolutions@gmail.com )
   * 
   * Rujukan Parti dan gabungan
   * dan sync dengan Portal PRN PDSA
   * SAICT RTM
   * 
   * @sheet RUJUKAN
   * @param Array from Google Sheet
   * @return String
   *  
   * */    

  var sheetName = 'RUJUKAN'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  var startRow = 3 // start on which row ?
  var totalRow = 31 // how many rows of data ?

  var startCol = 7 // start on which Col ?
  var totalCol = 2 // how many cols of data ?

  var data = sheet.getRange(startRow,startCol,totalRow,totalCol).getValues();

  var data = {
    'sheet_name' : sheetName,
    'api_key' : "abc123",
    'email' : Session.getActiveUser().getEmail(),
    'data' : data
  };

  var route = "/prn-variables/store-party-data";
  var method = "post";

  message = sendData(data,method,route);
  var response = JSON.parse(message.getContentText());
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert(response.message);
}
