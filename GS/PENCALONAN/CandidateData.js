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
      
      // if candidate name is a LINK, the value will be sent to server as URL
      var url = sheet.getRange( activeRow,nextStartCol+1,totalRow,1 ).getRichTextValue().getLinkUrl();
      Logger.log("url is " + url)

      // send to server
      candidate( (i+1), data, regionCode, regionName, url)
    }

  }
}

function getLink(range){
  var link = SpreadsheetApp.getActive().getActiveSheet().getRange(range).getRichTextValue().getLinkUrl();
  return link;
}


/**
 * 
 * Candidate data to be sent by specified RANGE
 * 
 * @param Int entry - range from 1..10
 * @param Array data - data from getRange.getValues()
 * @param String regionCode - region code for each kawasan
 * @param String regionName - kawasan name 
 * 
 */
function candidate(entry, data, regionCode, regionName, url)
{

  // should check empty data
  // empty name && empty party_name
  //if ( data[0][1] !== ""){

    // extract url from data[0][1] or name
    var payload = {
      url: url,
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

  //}
}


