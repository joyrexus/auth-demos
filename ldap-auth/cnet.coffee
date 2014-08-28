#!/usr/bin/env coffee 
ldap = require 'ldapjs'
parse = require 'minimist'

options = 
  alias:
    username: 'u'
    password: 'p'

argv = parse(process.argv, options)

opts = 
  url: 'ldaps://ldap.uchicago.edu/dc=uchicago,dc=edu'
  timeout: 5000
  connectTimeout: 10000

client = ldap.createClient opts

checkStatus = (err) ->
  status = err?.message or 'OK'
  client.unbind (err) ->
    console.log(err.message) if err
  console.log status

dn = "uid=#{argv.username}, ou=people, dc=uchicago, dc=edu"

client.bind(dn, argv.password, checkStatus)
