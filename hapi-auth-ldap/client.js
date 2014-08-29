var request = require('request')

var options = {
  url: 'http://localhost:3000/login',
  auth: {
    user: 'john',
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
