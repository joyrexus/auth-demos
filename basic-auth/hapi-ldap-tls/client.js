#!/usr/bin/env node 
var request = require('request');
var parse = require('minimist');

var parseOptions = {
  default: {
    host: 'localhost',
    port: '8080'
  },
  alias: {
    username: 'u',
    password: 'p'
  }
};

var argv = parse(process.argv, parseOptions);

var options = {
  url: 'https://' + argv.host + ':' + argv.port + '/login',
  rejectUnauthorized: false,
  auth: {
    user: argv.username,
    password: argv.password
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
