var request = require('request')

var options = {
  url: 'http://localhost:8000',
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
  if (res.headers.length) console.dir('headers:', res.headers)
  if (res.statusCode.length) console.dir('status code:', res.statusCode)
  console.dir(body)
})

