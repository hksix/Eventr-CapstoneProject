var restify = require('restify');
var dotenv = require('dotenv');
var server = require('./server');



server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

