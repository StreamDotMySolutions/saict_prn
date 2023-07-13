/**
 * To get kawasan/negeri/kod from GSheet
 * And send to Laravel API Server
 */
function ingestRegionData()
{
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  // loop all sheets using forEach
  sheets.forEach(function(sheet) {
 
    var sheetName = sheet.getName()

    if(PRN_STATES.includes(sheetName)){
        var stateName = sheet.getRange('B5').getValue();
        var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();
        sendRegionData(data,sheetName,stateName);
    }
  
  }) // sheets.loop

  var ui = SpreadsheetApp.getUi();
  ui.alert('Region Data successfully updated');

} // getAllSheets()

