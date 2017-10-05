//https://tutorials.kode-blog.com/nodejs-rest-api
//http://mcavage.me/node-restify/
//https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
//http://docs.sequelizejs.com/manual/tutorial/migrations.html



var restify = require('restify');
var restifyValidator = require('restify-validator');
var util = require('util');
var models = require('./models/index');
var error_messages = null;


//************************************************** EVENTS ****************************** 
function getAllEvents(request, response, next) {
    models.Events.findAll({})
    .then(function(events) {
        var data = {
            data: events
        };
        response.send(data);
        next();
    });
}

function getAllEventsByHost(request, response, next) {
    models.Events.findAll({
        where: {
            'host_id': request.params.id
        }
    }).then(function(events) {
        var data = {
            data: events
        };  
        response.send(data);
        next();
    });
}



function getAllEventsByGuest(request, response, next) {
   console.log(request.params.id)
    models.Users.find({
        where: {
            'id': request.params.id
        }
    }).then(function(user) {
        console.log(user)
        var options = {}
        user.getEvents(options).then(results => {
            response.send(results);
            next();
        });  
    });    
}


function verifyRequiredParamsForEvent(request){
    // request.assert('fName', 'First Name field is required').notEmpty();
    // request.assert('lName', 'Last Name field is required').notEmpty();
    // request.assert('profPic', 'mobile_no field is required').notEmpty();
    // request.assert('email', 'Email field is required').notEmpty();
    // request.assert('email', 'Valid email address is required').isEmail();
    // request.asser('phone', 'Phone field is required').notEmpty();
    // request.assert('location', 'Location field is required').notEmpty();

    // var errors = request.validationErrors();
    // if (errors) {
    //     error_messages = {
    //         error: "true",
    //         message : util.inspect(errors)
    //     };
    //     return false;
    // }else{
    //     return true;
    // }
    return true;
}

function addEvent(request,response,next){
    if (!verifyRequiredParamsForEvent(request)){
        response.send(422,error_messages);
        return;
    }
    models.Events.create({
        host_id: request.params['host_id'],
        name: request.params['name'],
        description: request.params['description'],
        date: request.params['date'],
        time: request.params['time'],
        location: request.params['location'],
        category_id: request.params['category_id'],
    }).then(function(event) {
        var data = {
            data: event
        };

        response.send(data);
        next();
    });
}

function updateEvent(request,response,next){
    if (!verifyRequiredParams(request)){
        response.send(422,error_messages);
        return;
    }
    models.Events.find({
        where: {
            'id': request.params.id
        }
    }).then(function(event) {
        if(event){
            event.updateAttributes({
                host_id: request.params['host_id'],
                name: request.params['name'],
                description: request.params['description'],
                date: request.params['date'],
                time: request.params['time'],
                location: request.params['location'],
                category_id: request.params['category_id'],
            }).then(function(event) {
                var data = {
                    data: event
                };
                response.send(data);
                next();
            });
        }
    });
}

function deleteEvent(request,response,next){
    models.Events.destroy({
        where: {
            id: request.params.id
        }
    }).then(function(event) {
        var data = {
            error: "false",
            message: "Deleted event successfully",
            data: event
        };
        response.send(data);
        next();
    });
}
//************************************************** USERS ****************************** 

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

function getUser(request, response, next) {
    models.Users.find({
        where: {
            'id': request.params.id
        }
    }).then(function(user) {
        var data = {
            error: `no user by id ${request.params.id}`,
            data: user
        };  
        response.send(data);
        next();
    });
}


function verifyRequiredParamsForUser(request){
    // request.assert('fName', 'First Name field is required').notEmpty();
    // request.assert('lName', 'Last Name field is required').notEmpty();
    // request.assert('profPic', 'mobile_no field is required').notEmpty();
    // request.assert('email', 'Email field is required').notEmpty();
    // request.assert('email', 'Valid email address is required').isEmail();
    // request.asser('phone', 'Phone field is required').notEmpty();
    // request.assert('location', 'Location field is required').notEmpty();

    // var errors = request.validationErrors();
    // if (errors) {
    //     error_messages = {
    //         error: "true",
    //         message : util.inspect(errors)
    //     };
    //     return false;
    // }else{
    //     return true;
    // }
    return true;
}

function addUser(request,response,next){
    if (!verifyRequiredParamsForUser(request)){
        response.send(422,error_messages);
        return;
    }

    models.Users.create({
        fName: request.params['fName'],
        lName: request.params['lName'],
        profPic: request.params['profPic'],
        email: request.params['email'],
        phone: request.params['phone'],
        location: request.params['location']
    }).then(function(user) {
        var data = {
            error: "false",
            message: "New user created successfully",
            data: user
        };

        response.send(data);
        next();
    });
}

function updateUser(request,response,next){
    if (!verifyRequiredParamsForUser(request)){
        response.send(422,error_messages);
        return;
    }
    models.Users.find({
        where: {
            'id': request.params.id
        }
    }).then(function(user) {
        if(user){
            user.updateAttributes({
                fName: request.params['fName'],
                lName: request.params['lName'],
                profPic: request.params['profPic'],
                email: request.params['email'],
                phone: request.params['phone'],
                location: request.params['location']
            }).then(function(user) {
                var data = {
                    error: "false",
                    message: "Updated user successfully",
                    data: user
                };
                response.send(data);
                next();
            });
        }
    });
}

function deleteUser(request,response,next){
    models.Users.destroy({
        where: {
            id: request.params.id
        }
    }).then(function(user) {
        var data = {
            error: "false",
            message: "Deleted user successfully",
            data: user
        };
        response.send(data);
        next();
    });
}

//************************************************** GUESTS ****************************** 

function getAllGuestsByEvent(request,response,next) {
    models.Guests.findAll({
        where: {
            eventid: request.params.eventid
        }
    })
    .then(function(guests) {
        var data = {
            error: "false",
            data: guests
        };
        response.send(data);
        next();
    });
}

// function addGuest() {

// }

// function deleteGuest() {

// }

//************************************************** EVENT TYPES ****************************** 




//************************************************** INVENTORY ****************************** 




var server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use(restifyValidator);



//************************************************** EVENTS ****************************** 
server.get('/api/v1/events', getAllEvents); //http://localhost:8080/api/events
server.get('/api/v1/events/host/:id', getAllEventsByHost); //http://localhost:8080/api/events/hostid/1
server.get('/api/v1/events/guest/:id', getAllEventsByGuest); 
server.post('/api/v1/events', addEvent); 
server.put('/api/v1/events/:id', updateEvent);
server.del('/api/events/:id', deleteEvent);


//************************************************** USERS ****************************** 
server.get('/api/v1/users', getAllUsers);
server.get('/api/v1/users/:id', getUser);
server.post('/api/v1/users', addUser);
server.put('/api/v1/users/:id', updateUser);
server.del('/api/v1/users/:id', deleteUser);


//************************************************** GUESTS ****************************** 
server.get('/api/v1/guests/event/:eventid', getAllGuestsByEvent);
// server.post('/api/v1/invitees/eventid/:event_id', addInvitee);
// server.del('/api/v1/invitees/eventid/:event_id/:invitee_id', deleteInvitee);

//************************************************** EVENT TYPES ****************************** 
// server.get('/api/v1/event_categories', getAllEventCategories);
// server.get('/api/v1/event_categories/:id', getEventCategory);
// server.get('/api/v1/event_categories/:id/items', getAllItemsInEventCategory);

//************************************************** INVENTORY ****************************** 
// server.get('/api/v1/event_inventory/:event_id', getInventoryForEvent);
// server.post('/api/v1/event_inventory/:event_id', addItemToInventory);
// server.put('/api/v1/event_inventory/:id', updateItemInInventory);
// server.del('/api/v1/event_inventory/:id', deleteItemFromInventory);




server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

