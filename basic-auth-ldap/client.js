var request = require('request')

var options = {
  url: 'http://localhost:9000',
  auth: {
    user: 'jones',
    password: '123'
  }
}

request(options, function (err, res, body) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir('headers', res.headers)
  console.dir('status code', res.statusCode)
  console.dir(body)
})

