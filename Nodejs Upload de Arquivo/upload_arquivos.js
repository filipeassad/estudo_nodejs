var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
           var oldpath = files.filetoupload.path;
           var newpath = 'D:/Filipe/NodeJs/Primeiro Projeto/Nodejs Upload de Arquivo/arquivos/' + files.filetoupload.name;
           fs.rename(oldpath, newpath, function (err) {
              if(err) throw err;
              res.write('Upload efetuado com sucesso!');
              res.end(); 
           });
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Upload de arquivo</h1>');
        res.write('<p>Tem que baixar o modulo de FORMIDABLE no cmd: npm install formidable</p>');
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }

}).listen(8080);