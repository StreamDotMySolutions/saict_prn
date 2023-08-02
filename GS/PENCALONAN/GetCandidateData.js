function test(){
  var data= getLink("F5")
  Logger.log(data)
}

function getLink(range){
  var link = SpreadsheetApp.getActive().getActiveSheet().getRange(range).getRichTextValue().getLinkUrl();
  return link;
}

