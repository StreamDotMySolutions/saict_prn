/**
 * Trigger onOpen()
 */

function onOpen() 
{
  // load the menu
  generateMenu(); 
  
}

/**
 * Load menu on spreadsheet
      'KEDAH N.01 - N.36',
      'PULAU PINANG N.01 - N.40',
      'KELANTAN N.01 - N.45',
      'TERENGGANU N.01 - N.32',
      'SELANGOR N.01 - N.56',
      'N.SEMBILAN N.01 - N.36'
 */

function generateMenu() 
{
  var ui = SpreadsheetApp.getUi();

  ui.createMenu('Data Portal #PRN23')

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

function ingestKedah(){
  var sheetName = "KEDAH N.01 - N.36"
  ingestBySheetName('KEDAH',sheetName)
}

function ingestKelantan(){
  var sheetName = "KELANTAN N.01 - N.45"
  ingestBySheetName('KELANTAN',sheetName)
}
function ingestSelangor(){
  var sheetName = "SELANGOR N.01 - N.56"
  ingestBySheetName('SELANGOR',sheetName)
}
function ingestTerengganu(){
  var sheetName = "TERENGGANU N.01 - N.32"
  ingestBySheetName('TERENGGANU',sheetName)
}
function ingestPenang(){
  var sheetName = "PULAU PINANG N.01 - N.40"
  ingestBySheetName('PULAU PINANG',sheetName)
}
function ingestNs(){
  var sheetName = "N.SEMBILAN N.01 - N.36"
  ingestBySheetName('NEGERI SEMBILAN',sheetName)
}
