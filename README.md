## Auth Demos

Various demos showing component pieces for doing secure authentication via [HTTP
Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). 

Our aim is to use [TLS](http://en.wikipedia.org/wiki/Transport_Layer_Security) in
conjunction with Basic Auth, so that we're not sending plain text passwords over the wire.

For our use case, we're also interested in validating the returned credentials (i.e., username and password) against an [LDAP](http://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) server.

---

* `make-curl` - utility for generating test `curl` commands

* `ldap-auth` - demo of how to authenticate against an LDAP server

* `basic-auth/` - http servers prompting for basic authentication
  * `http` - a simple http server with basic auth
  * `hapi` - same as above, but we're using `hapi.js` as our server framework
  * `hapi-ldap` - same as above, but validating credentials against an LDAP
  * `hapi-ldap-tls` - same as above, but using TLS for encryption

* `tls/` - demos showing how to run various forms of `https` servers
  * `https` - using the `https` module (part of node's core library)
  * `tls` - using the `tls` module
  * `hapi` - using `hapi.js`
