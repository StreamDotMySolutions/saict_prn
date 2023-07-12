function onOpen() {
  var ui = SpreadsheetApp.getUi();

  ui.createMenu('Data Portal PRN')
      .addItem('Kemaskini Gabungan', 'ingestCoalitionData')
      .addItem('Kemaskini Parti', 'ingestPartyData')
      .addItem('Kemaskini Kawasan', 'ingestRegionData')
      .addToUi();     
}