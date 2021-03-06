#!/usr/bin/env coffee 
parse = require 'minimist'

options = 
  default:
    hostname: "localhost"
    port: 8000
  alias:
    username: 'u'
    password: 'p'
    hostname: 'h'

argv = parse(process.argv, options)

creds = argv.username + ':' +  argv.password

encodedCreds = (new Buffer(creds, 'utf8')).toString('base64') 

console.log 'curl --head -H "Authorization: Basic ' + encodedCreds + '" ' \
          + "http://#{argv.hostname}:#{argv.port}"
