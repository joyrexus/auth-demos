ldap = require 'ldapjs'

module.exports = (username, password, callback) ->

  opts = 
    url: 'ldaps://ldap.uchicago.edu/dc=uchicago,dc=edu'
    timeout: 5000
    connectTimeout: 10000

  client = ldap.createClient opts

  unbind = (username, callback) ->
    (err) ->
      status = err?.message or 'OK'
      client.unbind (err) ->
        console.log(err.message) if err
      if status isnt 'OK'
        return callback(null, false, id: username)
      else
        return callback(err, true, id: username)

  dn = "uid=#{username}, ou=people, dc=uchicago, dc=edu"

  client.bind(dn, password, unbind(username, callback))
