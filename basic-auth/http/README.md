Quick demo of [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication).

All of this is largely cribbed from [this gist](https://gist.github.com/charlesdaniel/1686663).


## Usage

    npm install
    npm run start

Then try ...

    curl --head -H "Authorization: Basic am9uZXM6MTIz" http://localhost:8000

... which should return:

    HTTP/1.1 200 OK
    Date: Wed, 27 Aug 2014 17:08:02 GMT
    Connection: keep-alive

Alternatively, run the client:

    node client.js 

Try `npm run docs` to view a prettifid version of `server.js` and its inline
comments.


## See also

* dat [`auth`](https://github.com/maxogden/dat/blob/master/lib/auth.js) module,
  used in conjunction with cookies.