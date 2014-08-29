// http://docs.nodejitsu.com/articles/cryptography/how-to-use-the-tls-module

var tls = require('tls'),
    fs = require('fs'),
    msg = [
            ".-..-..-.  .-.   .-. .--. .---. .-.   .---. .-.",
            ": :; :: :  : :.-.: :: ,. :: .; :: :   : .  :: :",
            ":    :: :  : :: :: :: :: ::   .': :   : :: :: :",
            ": :: :: :  : `' `' ;: :; :: :.`.: :__ : :; ::_;",
            ":_;:_;:_;   `.,`.,' `.__.':_;:_;:___.':___.':_;" 
          ].join("\n");

var options = {
  key: fs.readFileSync('cert/private-key.pem'),
  cert: fs.readFileSync('cert/public-cert.pem')
};

tls.createServer(options, function (s) {
  s.write(msg + "\n");
  s.pipe(s);
}).listen(8000);
