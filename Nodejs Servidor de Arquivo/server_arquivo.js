var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
   var q = url.parse(req.url, true);
   var nomeArquivo = "." + q.pathname;
   fs.readFile(nomeArquivo, function (err, data) {

        if(err){
            res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            return res.end("404 - Página Não Encontrada!");
        }

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write(data);
        return res.end();
        
   }); 
}).listen(8080);