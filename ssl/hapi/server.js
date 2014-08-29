var fs = require('fs');
var Hapi = require('hapi');

var options = {
  tls: {
    key: fs.readFileSync("private/key.pem"),
    cert: fs.readFileSync("private/cert.pem")
  }
};

var server = new Hapi.Server("localhost", 8080, options);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
