Make a `curl` command for testing an HTTP server that prompts for [basic authentication](http://en.wikipedia.org/wiki/Basic_access_authentication).


## Usage

Install the arg-parsing dependency:

    npm install

You just need to specify the username and password you want to pass along in the header of the curl request:

    > make-curl --username jones --password 123

This should return:

    curl --head -H "Authorization: Basic am9uZXM6MTIz" http://localhost:8000

Note that `am9uZXM6MTIz` is the [Base64](http://en.wikipedia.org/wiki/Base64) encoding of `jones:123`.

You can also specify a hostname and port to use:

    > make-curl --username jones --password 123 \
                --hostname server.org --port 7000

Should return:

    curl --head -H "Authorization: Basic am9uZXM6MTIz" http://server.org:7000
