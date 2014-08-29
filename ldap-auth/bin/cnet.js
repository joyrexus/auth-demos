#!/usr/bin/env node 
(function() {
  var argv, callback, options, parse, validate;

  validate = require('index');

  parse = require('minimist');

  options = {
    alias: {
      username: 'u',
      password: 'p'
    }
  };

  argv = parse(process.argv, options);

  callback = function(err, valid, data) {
    var status;
    if (err) {
      console.log(err.message);
    }
    status = valid ? "" + data.id + " has been authenticated!" : "" + data.id + " could not be authenticated!";
    return console.log(status);
  };

  validate(argv.username, argv.password, callback);

}).call(this);
