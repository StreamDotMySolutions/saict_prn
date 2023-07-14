const server = "http://103.156.82.58/api/test_post"
//const server = "http://202.165.15.230:8001/test_get"

function testPostData(){
  var options = {
    "method" : "post",
    "contentType" : "application/json",
    "headers" : {
       "accept": "application/json" // Tell Laravel to talk in JSON
     }
  };
  var url = server;
  Logger.log(url)
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response)
}


















