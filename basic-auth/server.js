var basic   = require('basic'),
    http    = require('http');

var auth    = basic(function (user, pass, callback) {
    if (user === 'jones' && pass === '123') return callback(null);
    callback(401);
});

http.createServer(function (req, res) {
    auth(req, res, function (err) {
        var head = (err) ? {'WWW-Authenticate': 'Basic realm="Secure Area"'} : {};
        res.writeHead(err || 200, head);
        res.end();
    });
}).listen(7000);      

var encodedCred = (new Buffer('jones:123', 'utf8')).toString('base64') 

console.log('Test with ...\n curl --head -H "Authorization: Basic ' 
            + encodedCred
            + '" http://localhost:9000');
