/**
 * GSheet Menu
 */

function onOpen() {
    var ui = SpreadsheetApp.getUi();
    // Or DocumentApp or FormApp.
    // ui.createMenu('SAICT PRN')
    //     .addItem('Row sahaja', 'onCellUpdate')
    //     .addToUi();     
  }
  
  /**
   * When user edit a cell, send the whole row 
   * to Laravel server as POST
   */
  function onCellUpdate() {
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
   * Candidate data
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
  
  /**
   * When user click menu Send To Portal
   * send the whole activeSheet
   */
  function onMenuUpdate() {
      Logger.log('all');
  }
  