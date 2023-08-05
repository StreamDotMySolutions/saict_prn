/**
 * Trigger onOpen()
 */

function onOpen() 
{
  // load the menu
  generateMenu(); 

  // populate dropdown
  populateDropDown();   
  
}

/**
 * Load menu on spreadsheet
 *'DB_KEDAH_PRU15',
  'DB_KELANTAN_PRU15',
  'DB_SELANGOR_PRU15',
  'DB_TERENGGANU_PRU15',
  'DB_PENANG_PRU15',
  'DB_N9_PRU15',
 */

function generateMenu() 
{
  var ui = SpreadsheetApp.getUi();

  ui.createMenu('Data Portal #PRN23')
    .addItem('Kemaskini Gabungan', 'ingestCoalitionData')
    .addItem('Kemaskini Parti', 'ingestPartyData')
    .addItem('Kemaskini Kawasan', 'ingestRegionData')
    // .addItem('Sync Semua Data ke DB ', 'ingestAllRegionsData')
    //   .addSeparator()
      .addSubMenu(ui.createMenu('Sync Data ke Portal')
          .addItem('KEDAH',"ingestKedah")
          .addItem('KELANTAN',"ingestKelantan")
          .addItem('SELANGOR',"ingestSelangor")
          .addItem('TERENGGANU',"ingestTerengganu")
          .addItem('PENANG',"ingestPenang")
          .addItem('N9',"ingestNs")
          )
    .addToUi();    
}

/**
 * This function will populate
 * targetted range for
 * Gabungan and Parti Dropdown
 * @trigger onOpen()
 * @return Dropdown
 */
function populateDropDown(){
  // loop all sheets using forEach
  PRN_STATES.forEach(function(sheetName) {

      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      var lastRow = sheet.getLastRow()

      // Calon 1
      //var senaraiGabungan = getSenaraiGabungan()
      //var address = "G5:H" + lastRow
      //var range = sheet.getRange(5,8,lastRow, 1 );
      //writeDropdown(sheetName,senaraiGabungan,range) 

      // Calon 2
      // var senaraiGabungan = getSenaraiGabungan()
      // var address = "P5:P" + lastRow
      // createDropdown(sheetName,senaraiGabungan,address) 


      // // populate Party dropdown menu to targetted range
      // var senaraiParti = getSenaraiParti()
      // var address = "H5:H" + lastRow
      // createDropdown(sheetName,senaraiParti,address) 

      // Gabungan DropDown Writer
      var startRow = 5 // start address by row
      var totalRow = 1 // how many row per selection ?
      var totalCol = 10 // total data per row
      var startCol = 7 // start address by col
      var dataCol = 8 // total col for each candidate

      var i = 0
    
      // new candidate after 8 cols
      for( i=0; i<totalCol; i++ )
      {
        var col = (i*dataCol)
        var nextStartCol =  ( startCol + col )

        var senaraiGabungan = getSenaraiGabungan()
        var address = sheet.getRange( startRow,nextStartCol,lastRow, 1 );
        
        writeDropdown(sheetName,senaraiGabungan,address) 
      }

      // Party DropDown Writer
      var startRow = 5 // start address by row
      var totalRow = 1 // how many row per selection ?
      var totalCol = 10 // total data per row
      var startCol = 8 // start address by col
      var dataCol = 8 // total col for each candidate

      var i = 0
    
      // new candidate after 8 cols
      for( i=0; i<totalCol; i++ )
      {
        var col = (i*dataCol)
        var nextStartCol =  ( startCol + col )

        var senaraiParti = getSenaraiParti()
        var address = sheet.getRange( startRow,nextStartCol,lastRow, 1 );
        
        writeDropdown(sheetName,senaraiParti,address) 
      }



  }) // sheets.loop
}

/**
 * Dapatkan senarai gabungan dari sheet RUJUKAN
 * @return Array data
 */
function getSenaraiGabungan()
{
  var sheetName = 'RUJUKAN'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const address = "D3:D33"
  var data = sheet.getRange(address).getValues();
  return data;
}

/**
 * Dapatkan senarai parti dari sheet RUJUKAN
 * @return Array data
 */
function getSenaraiParti()
{
  var sheetName = 'RUJUKAN'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  data = sheet.getRange("G3:G42").getValues();
  return data 
}

/**
 * 
 * To populate Dropdown on
 * targetted Range
 * 
 * @param String sheetName
 * @param Array data
 * @param A1Notation address
 * 
 */
function createDropdown(sheetName,data,address) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName); // which sheet
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(data).build(); // set the rule
    
  var range = sheet.getRange(address); // targetted cell
  range.setDataValidation(rule); // apply the rules
}

function writeDropdown(sheetName,data,range) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName); // which sheet
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(data).build(); // set the rule
  range.setDataValidation(rule); // apply the rules

}

/**
 * API sender
 */
function sendData(data, method, route){
    var payload = JSON.stringify(data);
    var options = {
      "method" : method,
      "contentType" : "application/json",
      "payload" : payload,
      "headers" : {
         "accept": "application/json" // Tell Laravel to talk in JSON
       }
    };
    var url = BACKEND_URL + route;
    Logger.log(url)
    var response = UrlFetchApp.fetch(url, options);
    return response;
  
  }
  
  /**
   * send Candidate Data
   */
  function sendCandidateData(data)
  {
      var sheetName =  SpreadsheetApp.getActiveSheet().getName();
      var stateName = SpreadsheetApp.getActiveSheet().getRange('B5').getValue();
  
      var data = {
      'state_name': stateName,
      'sheet_name' : sheetName,
      'api_key' : "abc123",
      'email' : Session.getActiveUser().getEmail(),
      'data' : data
    };
  
    var route = "/prn-nominations/store-candidate-data";
    var method = "post";
    
    sendData(data,method,route);
  }
  
  

  
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

/**
 * send Region Data
 */
function sendRegionData(data,sheetName,stateName)
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = {

    'state_name' : stateName,
    'sheet_name' : sheetName,
    'api_key' : "abc123",
    'email' : Session.getActiveUser().getEmail(),
    'data' : data
  };

  var route = "/prn-variables/store-region-data";
  var method = "post";
  sendData(data,method,route);
}




function ingestCoalitionData() 
{

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
  var totalRow = sheet.getLastRow() // how many rows of data ?

  var startCol = 4 // start on which Col ?
  var totalCol = 2 // how many cols of data ?

  var data = sheet.getRange(startRow,startCol,totalRow,totalCol).getValues();

  var data = {
    'sheet_name' : sheetName,
    'api_key' : "abc123",
    'email' : Session.getActiveUser().getEmail(),
    'data' : data
  };

  var route = "/prn-variables/store-coalition-data";
  var method = "post";

  message = sendData(data,method,route);
  var response = JSON.parse(message.getContentText());
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert(response.message);

}
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
    var totalRow = sheet.getLastRow() // how many rows of data ?
  
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
  function ingestAllRegionsData()
  {
      PRN_STATES.forEach(function(sheetName) 
      {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
        var stateName = sheet.getRange('B5').getValue();
        var range = sheet.getRange("C5:CF" + sheet.getLastRow());
        var values = range.getValues();
  
        // Prepare the data for POST request
        var data = {
          'api_key' : "abc123",
          'state_name' : stateName,
          'sheet_name' : sheetName,
          values: values
        };
  
        Logger.log(stateName)
        postData(data);
  
      })
  }
  
  /**
   *'DB_KEDAH_PRU15',
    'DB_KELANTAN_PRU15',
    'DB_SELANGOR_PRU15',
    'DB_TERENGGANU_PRU15',
    'DB_PENANG_PRU15',
    'DB_N9_PRU15',
   */
  function ingestURL(sheetName){
    getAllCandidateUrl('DB_SELANGOR_PRU15')
  }
  
  function ingestKedah(){
    var sheetName = "DB_KEDAH_PRU15"
    ingestSheetName(sheetName)
    getAllCandidateUrl(sheetName)
  }
  
  function ingestKelantan(){
    var sheetName = "DB_KELANTAN_PRU15"
    ingestSheetName(sheetName)
    getAllCandidateUrl(sheetName)
  }
  
  function ingestSelangor(){
    var sheetName = "DB_SELANGOR_PRU15"
    ingestSheetName(sheetName)
    getAllCandidateUrl(sheetName)
  }
  
  function ingestTerengganu(){
    var sheetName = "DB_TERENGGANU_PRU15"
    ingestSheetName(sheetName)
    getAllCandidateUrl(sheetName)
  }
  
  function ingestPenang(){
    var sheetName = "DB_PENANG_PRU15"
    ingestSheetName(sheetName)
    getAllCandidateUrl(sheetName)
  }
  
  function ingestNs(){
    var sheetName = "DB_N9_PRU15"
    ingestSheetName(sheetName)
    getAllCandidateUrl(sheetName)
  }
  
  function ingestSheetName(sheetName)
  {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    var stateName = sheet.getRange('B5').getValue();
    var range = sheet.getRange("C5:CF" + sheet.getLastRow());
    var values = range.getValues();
  
    // Prepare the data for POST request
    var data = {
      'api_key' : "abc123",
      'state_name' : stateName,
      'sheet_name' : sheetName,
      values: values
    };
  
    //Logger.log(stateName)
    postData(data);
  }
  
  function getAllCandidateUrl(sheetName)
  {
  
      // PRN_STATES.forEach(function(sheetName) 
      // {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
        var stateName = sheet.getRange('B5').getValue();
        
        var range = sheet.getRange("C5:CF" + sheet.getLastRow());
  
        var startRow = 5
        var startCol = 6
        var totalRow = 1
        var totalCol = 1
        var dataEachCol = 8
  
        var range = sheet.getRange(startRow,startCol,totalRow,totalCol)
  
        // data kawasan
        // var data = sheet.getRange(5,3,sheet.getLastRow(),2).getValues();
  
        Logger.log(stateName)
        var i = 1
        for(i=1;i<=10;i++){
          if( i === 1 ){
            var nextCol = startCol
          } else {
            var nextCol = ( startCol + ( i*dataEachCol ) )
          }
          
          var candidates = sheet.getRange(startRow,nextCol,sheet.getLastRow(),1).getValues();
          //var data = sheet.getRange( activeRow,nextStartCol+1,totalRow,1 ).getRichTextValue().getLinkUrl();
          //Logger.log(data)
  
    
          candidates.forEach(function(candidate, index) {
            //Logger.log("The value at index " + index + " is " + candidate + ".");
            let name = candidate[0]
            activeRow = startRow + index
            let candidateName = sheet.getRange( activeRow,nextCol,totalRow,totalCol ).getValue();
            let url = sheet.getRange( activeRow,nextCol,totalRow,totalCol ).getRichTextValue().getLinkUrl();
            if(url !== null ){
              Logger.log(candidateName)
              Logger.log(url)
              postURL(stateName,candidateName,url) 
  
              // send to server
            }
            
          });
  
         
        }
  
      // }) // loop
  
  }
  
  function postURL(stateName,name,url) 
  {
    // Convert the data to JSON format
  
      var data = {
      'api_key' : API_KEY,
      'state_name': stateName,
      'candidate_name': name,
      'url' : url,
    };
    var jsonData = JSON.stringify(data);
  
    // Set the URL to which you want to post the data
    //var url = "http://202.165.15.230:8001/api/prn-nominations/store-sheet-data";
    var url = BACKEND_URL + "/prn-nominations/store-candidate-url";
  
    // Set the options for the HTTP POST request
    var options = {
      method: "post",
      contentType: "application/json",
      payload: jsonData
    };
  
    // Make the HTTP POST request
    var response = UrlFetchApp.fetch(url, options);
  
    // Log the response
    //Logger.log(response.getContentText());
  }
  
  
  function postData(data) 
  {
    // Convert the data to JSON format
    var jsonData = JSON.stringify(data);
  
    // Set the URL to which you want to post the data
    //var url = "http://202.165.15.230:8001/api/prn-nominations/store-sheet-data";
    var url = BACKEND_URL + "/prn-nominations/store-sheet-data";
  
    Logger.log(url)
  
    // Set the options for the HTTP POST request
    var options = {
      method: "post",
      contentType: "application/json",
      payload: jsonData
    };
  
    // Make the HTTP POST request
    var response = UrlFetchApp.fetch(url, options);
  
    // Log the response
    Logger.log(response.getContentText());
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function test(){
    var data= getLink("F5")
    Logger.log(data)
  }
  
  function getLink(range){
    var link = SpreadsheetApp.getActive().getActiveSheet().getRange(range).getRichTextValue().getLinkUrl();
    return link;
  }
  
      