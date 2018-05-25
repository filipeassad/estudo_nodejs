var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
   res.write(uc("Para baixar o pacote de upper-case no cmd: npm install upper-case"));
   res.end();
}).listen(8080);