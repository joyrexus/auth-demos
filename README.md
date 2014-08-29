## Auth Demos

Various demos showing component pieces for doing secure authentication via [HTTP
Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). 

Our aim is to [TLS](http://en.wikipedia.org/wiki/Transport_Layer_Security) in
conjunction with basic auth, so as not to pass plain text passwords over the
wire.

Lastly, we'd like to validate the supplied credentials (username, password) against an LDAP server.

* `https-demo` - demo of how to deal with certs when running an `https` server
* `basic-auth` - http server prompting for basic authentication
* `ldap-auth` - demo of how to authenticate against an LDAP server
* `basic-auth-ldap` - same as above, but validating credentials against an LDAP
  server
* `hapi-auth-ldap` - same as above, but we're using `hapi.js` as our server
  framework
* `make-curl` - utility for generating test `curl` commands
