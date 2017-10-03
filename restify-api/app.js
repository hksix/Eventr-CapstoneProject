//https://tutorials.kode-blog.com/nodejs-rest-api
//http://mcavage.me/node-restify/
//https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
//http://docs.sequelizejs.com/manual/tutorial/migrations.html



var restify = require('restify');

var restifyValidator = require('restify-validator');
var util = require('util');

var models = require('./models/index');

var error_messages = null;

function getAllEvents(request, response, next) {
    var data = {
        1: {
            event_id: 1,
            name: 'My Birthday Bash',
            host_id: 1,
            description: 'woot!',
            date: '2017-10-20',
            time: '14:00:00',
            location: 'club havana',
            category_id: 1
        },
        2: {
            event_id: 2,
            name: 'My Birthday Bash2',
            host_id: 2,
            description: 'woot2!',
            date: '2017-10-22',
            time: '15:00:00',
            location: 'gold room',
            category_id: 1
        }
    }
    response.send(data)
}

function getAllEventsByHost(request, response, next) {
    var data = {
        1: {
            event_id: 1,
            name: 'My Birthday Bash',
            host_id: 1,
            description: 'woot!',
            date: '2017-10-20',
            time: '14:00:00',
            location: 'club havana',
            category_id: 1
        },
        2: {
            event_id: 2,
            name: 'My Birthday Bash2',
            host_id: 2,
            description: 'woot2!',
            date: '2017-10-22',
            time: '15:00:00',
            location: 'gold room',
            category_id: 1
        }
    }
    response.send(data[request.params.host_id])
}


function getAllUsers(request,response,next){
    models.Users.findAll({})
        .then(function(Users) {
        var data = {
            error: "false",
            data: Users
        };

        response.send(data);
        next();
    });
}

// function getContact(request,response,next){

//     models.Contact.find({
//         where: {
//             'id': request.params.id
//         }
//     }).then(function(contact) {
//         var data = {
//             error: "false",
//             data: contact
//         };

//         response.send(data);
//         next();
//     });
// }

// function verifyRequiredParams(request){
//     request.assert('first_name', 'first_name field is required').notEmpty();
//     request.assert('last_name', 'last_name field is required').notEmpty();
//     request.assert('mobile_no', 'mobile_no field is required').notEmpty();
//     request.assert('email', 'email field is required').notEmpty();
//     request.assert('email', 'valid email address is required').isEmail();

//     var errors = request.validationErrors();
//     if (errors) {
//         error_messages = {
//             error: "true",
//             message : util.inspect(errors)
//         };

//         return false;
//     }else{
//         return true;
//     }
// }

// function addContact(request,response,next){
//     if (!verifyRequiredParams(request)){
//         response.send(422,error_messages);
//         return;
//     }

//     models.Contact.create({
//         first_name: request.params['first_name'],
//         last_name: request.params['last_name'],
//         mobile_no: request.params['mobile_no'],
//         email: request.params['email'],
//     }).then(function(contact) {
//         var data = {
//             error: "false",
//             message: "New contact created successfully",
//             data: contact
//         };

//         response.send(data);
//         next();
//     });
// }

// function updateContact(request,response,next){
//     if (!verifyRequiredParams(request)){
//         response.send(422,error_messages);
//         return;
//     }

//     models.Contact.find({
//         where: {
//             'id': request.params.id
//         }
//     }).then(function(contact) {
//         if(contact){
//             contact.updateAttributes({
//                 first_name: request.params['first_name'],
//                 last_name: request.params['last_name'],
//                 mobile_no: request.params['mobile_no'],
//                 email: request.params['email'],
//             }).then(function(contact) {
//                 var data = {
//                     error: "false",
//                     message: "Updated contact successfully",
//                     data: contact
//                 };

//                 response.send(data);
//                 next();
//             });
//         }
//     });
// }

// function deleteContact(request,response,next){
//     models.Contact.destroy({
//         where: {
//             id: request.params['id']
//         }
//     }).then(function(contact) {
//         var data = {
//             error: "false",
//             message: "Deleted contact successfully",
//             data: contact
//         };

//         response.send(data);
//         next();
//     });
// }
var server = restify.createServer();

// server.use(restify.bodyParser());
// server.use(restify.queryParser());
server.use(restifyValidator);

server.get('/api/v1/events', getAllEvents); //http://localhost:8080/api/events
server.get('/api/v1/events/hostid/:host_id', getAllEventsByHost); //http://localhost:8080/api/events/hostid/1
server.get('/api/v1/users', getAllUsers);
// server.get('/api/events/inviteeid/:invitee_id', getAllEventsByInvitee); //http://localhost:8080/api/events/inviteeid/1
// server.get('/api/events/:event_id', getEvent);
// server.post('/api/events', addEvent);
// server.put('/api/events/:event_id', updateEvent);
// server.del('/api/events/:event_id', deleteEvent);

// server.get('/api/v1/contacts',getAllContacts);
// server.get('/api/v1/contacts/:id',getContact);
// server.post('/api/v1/contacts',addContact);
// server.put('/api/v1/contacts/:id',updateContact);
// server.del('/api/v1/contacts/:id',deleteContact);



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