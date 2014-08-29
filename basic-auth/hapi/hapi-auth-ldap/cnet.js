// validation function taking a cnet_id, password, and callback
(function() {
  var ldap;

  ldap = require('ldapjs');

  module.exports = function(username, password, callback) {
    var client, dn, opts, unbind;
    opts = {
      url: 'ldaps://ldap.uchicago.edu/dc=uchicago,dc=edu',
      timeout: 5000,
      connectTimeout: 10000
    };
    client = ldap.createClient(opts);
    unbind = function(username, callback) {
      return function(err) {
        var status;
        status = (err != null ? err.message : void 0) || 'OK';
        client.unbind(function(err) {
          if (err) {
            return console.log(err.message);
          }
        });
        if (status !== 'OK') {
          return callback(null, false);
        } else {
          return callback(err, true, {
            id: username
          });
        }
      };
    };
    dn = "uid=" + username + ", ou=people, dc=uchicago, dc=edu";
    return client.bind(dn, password, unbind(username, callback));
  };

}).call(this);
