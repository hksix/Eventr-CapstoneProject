var restify = require('restify');

var restifyValidator = require('restify-validator');
var util = require('util');

var models = require('./models/index');

var error_messages = null;

function getAllContacts(request,response,next){...}
function getContact(request,response,next){...}
function verifyRequiredParams(request){...}
function addContact(request,response,next){...}
function updateContact(request,response,next){...}
function deleteContact(request,response,next){...}

var server = restify.createServer();

server.use(restify.bodyParser());
server.use(restify.queryParser());
server.use(restifyValidator);

server.get('/api/v1/contacts',getAllContacts);
server.get('/api/v1/contacts/:id',getContact);
server.post('/api/v1/contacts',addContact);
server.put('/api/v1/contacts/:id',updateContact);
server.del('/api/v1/contacts/:id',deleteContact);



// function respond(req, res, next) {
//   res.send('hello ' + req.params.name);
//   next();
// }

// var server = restify.createServer(
//     {
//     certificate:...,
//     key: ...,
//     name: 'eventr-api',
// }
// );
// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});