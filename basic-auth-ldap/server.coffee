basic = require 'basic'
http = require 'http'


validate = (user, pass, callback) ->
  return callback(null) if user is 'jones' and pass is '123'
  callback(401)

auth = basic(validate)

requestListener = (req, res) ->
  callback = (err) ->
    head = if err then {'WWW-Authenticate': 'Basic realm="Secure Area"'} else {}
    res.writeHead(err or 200, head)
    res.end('OK!')
  auth(req, res, callback)
    
http.createServer(requestListener).listen(9000)

encodedCred = (new Buffer('jones:123', 'utf8')).toString('base64')

console.log 'Test with ...\n curl --head -H "Authorization: Basic ' \
            + encodedCred                                           \
            + '" http://localhost:9000'
