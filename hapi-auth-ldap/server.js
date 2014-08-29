var Hapi = require('hapi');
var Basic = require('hapi-auth-basic');
var cnet = require('cnet');   // validation func that takes
                              // a cnet_id, password, and callback

var server = new Hapi.Server(3000);

server.pack.register(Basic, function (err) {
    if (err) { throw err; }
    server.auth.strategy('simple', 'basic', { validateFunc: cnet });
    server.route({ 
        method: 'GET', 
        path: '/login', 
        config: { auth: 'simple' },
        handler: function (request, reply) { 
          console.log(request);
          reply('ok!'); 
        }
    });
    server.start(function () {
      console.log('info', 'Server running at: ' + server.info.uri);
    });
});
