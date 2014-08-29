Quick demo of [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication) with [`hapi-auth-basic`](https://github.com/hapijs/hapi-auth-basic) plugin.


## Usage

    npm install
    npm run start

Then try ...

    curl -H "Authorization: Basic am9objoxMjM=" http://localhost:3000/login 

... which should return: `ok!`

Alternatively, run the client:

    node client.js 
