var http = require('http');

http.createServer(function(req, res){
    res.write("Eaw meu povo!");
    res.end();
}).listen(8080);
