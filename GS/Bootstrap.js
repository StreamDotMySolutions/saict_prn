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
    // .addItem('Kemaskini Gabungan', 'ingestCoalitionData')
    // .addItem('Kemaskini Parti', 'ingestPartyData')
    // .addItem('Kemaskini Kawasan', 'ingestRegionData')
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
