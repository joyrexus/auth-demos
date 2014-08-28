// http://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server

var https = require('https');
var fs = require('fs');
var path = require('path');

var options = {
  key: fs.readFileSync(path.join(__dirname, "cert/private-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "cert/public-cert.pem"))
};

var a = https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
