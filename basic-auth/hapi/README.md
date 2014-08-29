Quick demo of [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication) with [`hapi-auth-basic`](https://github.com/hapijs/hapi-auth-basic) plugin.


## Usage

    npm install
    npm run start

Once the server is running try opening the login route ([`http://localhost:3000/login`](http://localhost:3000/login)) in a web browser.

You should get prompted for a username (try `john`) and password (try `123`).

Alternatively, try ...

    curl -H "Authorization: Basic am9objoxMjM=" http://localhost:3000/login 

... which should return: `ok!`

Also try:

    curl --head -H "Authorization: Basic am9objoxMjM=" http://localhost:3000/login 

Note that the `am9objoxMjM=` part is a Base64 encoding of `john:123`.

Alternatively, just run the client:

    node client.js 
