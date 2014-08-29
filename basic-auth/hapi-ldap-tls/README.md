Quick demo of [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication) with [`hapi-auth-basic`](https://github.com/hapijs/hapi-auth-basic) plugin.

In this demo we're validating the returned credentials provided by the user
(viz., username and password) [against an LDAP server](http://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol#Bind_.28authenticate.29) (`ldap.uchicago.edu`).


## Usage

    npm install
    npm run start

If you have a [CNet ID](https://itservices.uchicago.edu/services/cnetid) try ...

    node client.js --username CNET_ID --password CNET_PASS

If authenticated, should return ...

    'Welcome <CNET_ID>!'

