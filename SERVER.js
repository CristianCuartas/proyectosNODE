var http = require("http");
var module = require("./JS/text");
function onRequest(request, response) {
  response.writeHead(200, { "content-type": "text/plain" });
  response.write("Probando");
  module.myFunction();
  response.end();
}
http.createServer(onRequest).listen(8000);
