#!/usr/bin/env node
(function() {
  var argv, checkStatus, client, dn, ldap, options, opts, parse;

  ldap = require('ldapjs');

  parse = require('minimist');

  options = {
    alias: {
      username: 'u',
      password: 'p'
    }
  };

  argv = parse(process.argv, options);

  opts = {
    url: 'ldaps://ldap.uchicago.edu/dc=uchicago,dc=edu',
    timeout: 5000,
    connectTimeout: 10000
  };

  client = ldap.createClient(opts);

  checkStatus = function(err) {
    var status;
    status = (err != null ? err.message : void 0) || 'OK';
    client.unbind(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
    return console.log(status);
  };

  dn = "uid=" + argv.username + ", ou=people, dc=uchicago, dc=edu";

  client.bind(dn, argv.password, checkStatus);

}).call(this);
