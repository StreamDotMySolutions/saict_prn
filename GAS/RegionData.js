/**
 * To get kawasan/negeri/kod from GSheet
 * And send to Laravel API Server
 */


function ingestRegionData()
{
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  sheets.forEach(function(sheet) {
    
    var sheetName = sheet.getName()
  
    // filter only negeri sheet
    switch( sheetName ){
      case "DB_KEDAH_PRU15":
        var stateName = sheet.getRange('B5').getValue();
        var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();
        sendRegionData(data,sheetName,stateName);
      break;

      case "DB_KELANTAN_PRU15":
        var stateName = sheet.getRange('B5').getValue();;
        var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();
        sendRegionData(data,sheetName,stateName);
      break;
      
      case "DB_TERENGGANU_PRU15":
        var stateName = sheet.getRange('B5').getValue();
        var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();
        sendRegionData(data,sheetName,stateName);
      break;

      case "DB_N9_PRU15":
        var stateName = sheet.getRange('B5').getValue();
        var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();
        sendRegionData(data,sheetName,stateName);
      break;      

      case "DB_PENANG_PRU15":
        var stateName = sheet.getRange('B5').getValue();
        var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();
        sendRegionData(data,sheetName,stateName);
      break;      

      case "DB_SELANGOR_PRU15":
        var stateName = sheet.getRange('B5').getValue();
        var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();
        sendRegionData(data,sheetName,stateName);
      break;

    }
  }) // sheets.loop


  var ui = SpreadsheetApp.getUi();
  ui.alert('Region Data successfully updated');

} // getAllSheets()

