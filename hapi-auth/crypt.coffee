bcrypt = require 'bcrypt'

compare = (input, hash) -> 
  bcrypt.compare(input, hash, (err, res) -> console.log res)

hashify = (input, callback) ->
  bcrypt.hash(input, 8, (err, hash) -> callback(hash))

# hashify input and print the resulting hash
hashify 'bacon', (hash) -> console.log(hash)

# hashify input and then compare input with resulting hash
hashify 'bacon', (hash) -> compare('bacon', hash)

