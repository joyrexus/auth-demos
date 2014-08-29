#!/usr/bin/env coffee 
validate = require 'index'
parse = require 'minimist'

options = 
  alias:
    username: 'u'
    password: 'p'

argv = parse(process.argv, options)

callback = (err, valid, data) ->
  console.log(err.message) if err
  status = if valid
    "#{data.id} has been authenticated!"
  else
    "#{data.id} could not be authenticated!"
  console.log status

validate(argv.username, argv.password, callback)
