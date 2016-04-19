'use strict'

var seneca = require('seneca')()
var config = require('./config')
var pkg = require('./package.json')

seneca.add({ cmd: 'collect-tasks' }, function (args, callback) {
  var result = {
    id: pkg.name,
    version: pkg.version,
    timestamp: new Date().getTime(),
    user: args.user,
    results: []
  }
  callback(null, result)
})

seneca.listen({
  port: config.SERVICE_PORT
})
