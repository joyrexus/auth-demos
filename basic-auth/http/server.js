// ### a breakdown of basic authentication
//
// ---
//
// See [this tutorial on creating an HTTP server](http://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTP-server) if this is all new to you.
//
var http = require('http');

var server = http.createServer(function(req, res) {
    // Use `console.log(req);` here to debug/dump the request

    // If they pass in a basic auth credential it'll be 
    // in a header called `Authorization` (note NodeJS 
    // lowercases the names of headers in its request object)

    // `auth` now contains a base64 encoding of `username:password` 
    // so we need to decode it
    var auth = req.headers['authorization'];  
    console.log("Authorization Header is: ", auth);

    // No `Authorization` header was passed in so it's the first time 
    // the browser hit us
    if(!auth) {   

        // Sending a 401 will require authentication, we need to send 
        // the `WWW-Authenticate` to tell them the sort of authentication 
        // to use.  Basic auth is quite literally the easiest and least 
        // secure, it simply gives back `base64(username + ":" + password)`
        // from the browser
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        res.end('<html><body>This is a secure area. Try reloading to login.');
    }

    // The `Authorization` was passed in so now we validate it
    else if(auth) {  

        // We could use `basic-auth` module for parsing
        // the auth header, but here we do it ourselves.
        
        // Split on a space, the original auth looks like 
        // "Basic am9uZXM6MTIz" and we need the 2nd part
        var tmp = auth.split(' ');   

        // create a buffer and tell it the data coming in is base64
        var buf = new Buffer(tmp[1], 'base64'); 
        
        // read it back out as a string
        var plain_auth = buf.toString();    

        console.log("Decoded Authorization ", plain_auth);

        // At this point `plain_auth` is `username:password`
        var creds = plain_auth.split(':');    // split on a ':'
        var username = creds[0];
        var password = creds[1];

        // Is the username/password correct?
        if((username == 'jones') && (password == '123')) {   
            res.statusCode = 200;  // OK
            res.end('<html><body>' + username + ' is valid!');
        }
        else {
            // Force to retry authentication
            res.statusCode = 401;   // or 403 to prevent retry
            res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
            // ... or alternatively just reject them altogether with 
            // a 403 Forbidden: `res.statusCode = 403;`   

            res.end('<html><body>Forbidden!');
        }
    }
});

server.listen(8000, function() { 
  console.log("Server Listening on http://localhost:8000"); 
});
