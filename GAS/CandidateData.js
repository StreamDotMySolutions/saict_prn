/**
 * When user edit a cell, send the whole row 
 * to Laravel server as POST
 * only update on chosen sheets
 * 
 */
function ingestCandidateData(){
  // detecT sheet name
  var sheetName =  SpreadsheetApp.getActiveSheet().getName();
  
  if(PRN_STATES.includes(sheetName)){
    console.log('match')
    updateCandidate()
  }
}

/**
 * Update targetted CELL 
 * for single ROW
 */
function updateCandidate() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var selection = sheet.getSelection();
  var activeRow = selection.getCurrentCell().getRow();
  var data = sheet.getRange( activeRow,1,1,sheet.getLastColumn() ).getValues();
  //sendCandidateData(data);

    // calon 1
    var col = 5
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(1, data, regionCode, regionName)

    // calon 2
    var col = 13
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(2, data, regionCode, regionName)

    // calon 3
    var col = 21
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(3, data, regionCode, regionName)

    // calon 4
    var col = 29
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(4, data, regionCode, regionName)

    // calon 5
    var col = 37
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(5, data, regionCode, regionName)

    // calon 6
    var col = 45
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(6, data, regionCode, regionName)

    // calon 7
    var col = 53
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(7, data, regionCode, regionName)    

    // calon 8
    var col = 61
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(8, data, regionCode, regionName)

    // calon 9
    var col = 69
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(9, data, regionCode, regionName)    

    // calon 10
    var col = 77
    var data = sheet.getRange(activeRow,col,1,8).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();
    candidate(10, data, regionCode, regionName)    

}

/**
 * 
 * Candidate data to be sent by specified RANGE
 * 
 * @param Int entry - range from 1..10
 * @param Array data - data from getRange.getValues()
 * @param String regionCode - region code for each kawasan
 * @param String regionName - kawasan name 
 */
function candidate(entry, data, regionCode, regionName){

  var payload = {
    entry: entry,
    region_name: regionName[0][0],
    region_code: regionCode[0][0],
    title: data[0][0],
    name: data[0][1],
    marital_status:data[0][5],
    career: data[0][7],
    education: data[0][6],
    party_coalition: data[0][2],
    party_name: data[0][3],
    party_job: data[0][4]
  }
  sendCandidateData(payload);
}
