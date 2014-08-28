Quick demo of [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication) with [`basic`](https://github.com/thisandagain/basic) module, validating against an LDAP server.


## Usage

    npm install
    npm run start

Then try ...

    curl --head -H "Authorization: Basic am9uZXM6MTIz" http://localhost:9000

... which should return:

    HTTP/1.1 200 OK
    Date: Wed, 27 Aug 2014 17:08:02 GMT
    Connection: keep-alive


## See also

* dat [`auth`](https://github.com/maxogden/dat/blob/master/lib/auth.js) module,
  used in conjunction with cookies.

* [example](https://github.com/joyrexus/sandbox/tree/master/hapi-auth) of basic auth with hapi.js
