/**
 * Load menu on spreadsheet
 * Trigger onOpen()
 */

function onOpen() 
{
  var ui = SpreadsheetApp.getUi();

  ui.createMenu('Data Portal #PRN23')
    .addItem('Kemaskini Gabungan', 'ingestCoalitionData')
    .addItem('Kemaskini Parti', 'ingestPartyData')
    .addItem('Kemaskini Kawasan', 'ingestRegionData')
    .addToUi();     
}