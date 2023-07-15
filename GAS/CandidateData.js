/**
 * When user edit a cell, send the whole row 
 * to Laravel server as POST
 * only update on chosen sheets
 * @trigger onEdit()
 * 
 */
function ingestCandidateData()
{
  // detect sheet name
  var sheetName =  SpreadsheetApp.getActiveSheet().getName();
  
  // update the row
  if(PRN_STATES.includes(sheetName)){
    getCandidateData()
  }
}

/**
 * Update targetted CELL 
 * for single ROW
 * 10 candidates per ROW
 * inserted 10 rows at MySQL
 */
function getCandidateData()
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var sheetName =  sheet.getName();
  var selection = sheet.getSelection();
  var activeRow = selection.getCurrentCell().getRow();

  var startRow = 5 // start address by row
  var totalRow = 1 // how many row per selection ?
  var totalCol = 10 // total data per row
  var startCol = 5 // start address by col
  var dataCol = 8 // total col for each candidate

  var i = 0
 
  // new candidate after 8 cols
  for( i=0; i<totalCol; i++ )
  {
    var col = (i*dataCol)
    var nextStartCol =  ( startCol + col )
    var data = sheet.getRange( activeRow,nextStartCol,totalRow,dataCol ).getValues();
    var regionCode = sheet.getRange(activeRow,3).getValues();
    var regionName = sheet.getRange(activeRow,4).getValues();

    if( regionCode !== null && regionName !== null ){
      // send to server
      candidate( (i+1), data, regionCode, regionName)
    }

  }
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
function candidate(entry, data, regionCode, regionName)
{

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


