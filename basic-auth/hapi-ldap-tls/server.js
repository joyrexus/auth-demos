var fs = require('fs');
var Hapi = require('hapi');
var Basic = require('hapi-auth-basic');
var cnet = require('cnet');   // validation func that takes
                              // a cnet_id, password, and callback

var options = {
    tls: {
        key: fs.readFileSync("private/key.pem"),
        cert: fs.readFileSync("private/cert.pem")
    }
};

var server = new Hapi.Server("localhost", 8080, options);

server.pack.register(Basic, function (err) {
    if (err) { throw err; }
    server.auth.strategy('simple', 'basic', { validateFunc: cnet });
    server.route({ 
        method: 'GET', 
        path: '/login', 
        config: { auth: 'simple' },
        handler: function (request, reply) { 
            var user = request.auth.credentials.id;
            reply('Welcome ' + user + '!'); 
        }
    });
    server.start(function () {
        server.log('Server running at: ' + server.info.uri);
        server.log('Login at: ' + server.info.uri + '/login');
    });
});
