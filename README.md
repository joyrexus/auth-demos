## Auth Demos

Various demos showing component pieces for doing secure authentication via [HTTP
Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). 

Our aim is to use [TLS](http://en.wikipedia.org/wiki/Transport_Layer_Security) in
conjunction with Basic Auth, so that we're not sending plain text passwords over the wire.

For our use case, we're also interested in validating the returned credentials (i.e., username and password) against an LDAP server.

---

* `make-curl` - utility for generating test `curl` commands
* `https-demo` - demo of how to deal with certs when running an `https` server
* `ldap-auth` - demo of how to authenticate against an LDAP server
* `basic-auth` - http server prompting for basic authentication
* `hapi-auth` - same as above, but we're using `hapi.js` as our server framework
* `hapi-auth-ldap` - same as above, but validating credentials against an LDAP
  server
