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
    }).catch(function (err) {
        console.log(err)
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
    }).catch(function (err) {
        console.log(err)
    });
}


<<<<<<< HEAD
//server.get('/api/v1/events/guest/:id', getAllEventsByGuest); 
=======
>>>>>>> 9fe2bc968e354bd4f2fe323e683bf611173ff9bb
function getAllEventsByGuest(request, response, next) {
    models.Users.find({
        where: {
            'id': request.params.id
        }
    }).then(function(user) {
<<<<<<< HEAD
=======
        // console.log(user)
>>>>>>> 9fe2bc968e354bd4f2fe323e683bf611173ff9bb
        var options = {}
        user.getEvents(options).then(results => {
            response.send(results);
            next();
        }).catch(function (err) {
            console.log(err)
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
    }).catch(function (err) {
        console.log(err)
    });
}


//server.put('/api/v1/events/:id', updateEvent);
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
            }).catch(function (err) {
                console.log(err)
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
            message: "Deleted event successfully",
            data: event
        };
        response.send(data);
        next();
    }).catch(function (err) {
        console.log(err)
    });
}
//************************************************** USERS ****************************** 
//server.get('/api/v1/users', getAllUsers);
function getAllUsers(request,response,next){
    models.Users.findAll({})
    .then(function(Users) {
        var data = {
            data: Users
        };
        response.send(data);
        next();
    }).catch(function (err) {
        console.log(err)
    });
}
//server.get('/api/v1/users/:id', getUser);
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
    }).catch(function (err) {
        console.log(err)
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

//server.post('/api/v1/users', addUser);
function addUser(request,response,next){
    if (!verifyRequiredParamsForUser(request)){
        response.send(422,error_messages);
        return;
    }
    models.Users.create({
        fName: request.params.fName,
        lName: request.params.lName,
        profPic: request.params.profPic,
        email: request.params.email,
        phone: request.params.phone,
        location: request.params.location
    }).then(function(user) {
        var data = {
            message: "New user created successfully",
            data: user
        };
        response.send(data);
        next();
    }).catch(function (err) {
        console.log(err)
    });
}
//server.put('/api/v1/users/:id', updateUser);
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
    
                    message: "Updated user successfully",
                    data: user
                };
                response.send(data);
                next();
            }).catch(function (err) {
                console.log(err)
            });
        }
    });
}

//server.del('/api/v1/users/:id', deleteUser);
function deleteUser(request,response,next){
    models.Users.destroy({
        where: {
            id: request.params.id
        }
    }).then(function(user) {
        var data = {
            message: "Deleted user successfully",
            data: user
        };
        response.send(data);
        next();
    }).catch(function (err) {
        console.log(err)
    });
}

//************************************************** GUESTS ****************************** 

function getAllGuestsByEvent(request,response,next) {
    models.Guests.findAll({
        where: {
            eventid: request.params.eventid
        }
    }).then(function(guests) {
        var data = {
            data: guests
        };
        response.send(data);
        next();
    }).catch(function (err) {
        console.log(err)
    });
}


function isGuestInvited(eventid, userid){
    return models.Guests.count({
        where: {
            eventid: eventid,
            userid: userid
        }
    }).then(count => {
        if (count != 0) {
            return false;
        }
        return true;
    })
}

//server.post('/api/v1/guests/:eventid/:guestid', addGuest);
function addGuest(request,response,next){
    var isInvited = isGuestInvited(request.params.eventid, request.params.guestid)
    .then(isInvited => {
        if (isInvited === false){
            response.send('This person is already invited')
        } else {
        models.Guests.create({
            eventid: request.params.eventid,
            userid: request.params.guestid,
        }).then(function(guest) {
            var data = {
                message: "New guest successfully added to event",
                data: guest
            };
            response.send(data);
            next();
        }).catch(function (err) {
            console.log(err)
        });
    }})
}


//server.del('/api/v1/guests/eventid/:eventid/:guestid', deleteGuest);
function deleteGuest(request,response,next) {
    models.Guests.destroy({
        where: {
            eventid: request.params.eventid,
            userid: request.params.guestid,
        }
    }).then(function(guest) {
        var data = {
            message: `Deleted guest from event ${request.params.eventid} successfully`,
            data: guest
        };
        response.send(data);
        next();
    }).catch(function (err) {
        console.log(err)
    });

}

//************************************************** EVENT TYPES ****************************** 

function getAllEventCategories(request,response,next) {
    models.EventCategories.findAll({})
    .then(function(categories) {
        var data = {
            data: categories
        };
        response.send(data);
        next();
    });
}

function getEventCategory(request,response,next) {
    models.EventCategories.find({
        where: {
            id: request.params.id
        }
    })
    .then(function(category) {
        var data = {
            data: category
        };
        response.send(data);
        next();
    });    

}

function getAllItemsInEventCategory(request,response,next) {
    models.EventCategories.find({
        where: {
            'id': request.params.id
        }
    }).then(function(user) {
        var options = {}
        user.getItems(options).then(results => {
            response.send(results);
            next();
        });  
    });          
}

//************************************************** INVENTORY ****************************** 

//server.post('/api/v1/event_inventory/:eventid', addItemToInventory);
function addItemToInventory(request,response,next){
    models.EventInventory.create({
        eventid: request.params.eventid,
        defaultitmeid: request.params.defaultitemid,
        itemname: request.params.itemname,
        quantity: request.params.quantity,
        categoryid: request.params.categoryid,
        ownderid: request.params.ownderid,
        description: request.params.description,
    }).then(function(item) {
        var data = {
            message: "New item added successfully",
            data: item
        };
        response.send(data);
        next();
    }).catch(function (err) {
        console.log(err)
    });
}
// server.get('/api/v1/event_inventory/:event_id', getInventoryForEvent);
function getInventoryForEvent(request,response,next) {
    models.EventInventory.findAll({
        attributes: ['itemname', 'quantity', 'ownerid', 'description'],
        where: {
            eventid: request.params.event_id
        }
    })
    .then(function(inventory) {
        var data = {
            data: inventory
        };
        response.send(data);
        next();
    });
}




//************************************************** SERVER ****************************** 

var server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use(restifyValidator);

//************************************************** EVENTS ENDPOINTS ****************************** 
server.get('/api/v1/events', getAllEvents); //http://localhost:8080/api/events
server.get('/api/v1/events/host/:id', getAllEventsByHost); //http://localhost:8080/api/events/hostid/1
server.get('/api/v1/events/guest/:id', getAllEventsByGuest); 
server.post('/api/v1/events', addEvent); 
server.put('/api/v1/events/:id', updateEvent);
server.del('/api/events/:id', deleteEvent);


//************************************************** USERS ENDPOINTS ****************************** 
server.get('/api/v1/users', getAllUsers);
server.get('/api/v1/users/:id', getUser);
server.post('/api/v1/users', addUser);
server.put('/api/v1/users/:id', updateUser);
server.del('/api/v1/users/:id', deleteUser);

//************************************************** GUESTS ENDPOINTS****************************** 
server.get('/api/v1/guests/event/:eventid', getAllGuestsByEvent);
server.post('/api/v1/guests/:eventid/:guestid', addGuest);
server.del('/api/v1/guests/eventid/:eventid/:guestid', deleteGuest);

//************************************************** EVENT TYPES ENDPOINTS ****************************** 
server.get('/api/v1/event_categories', getAllEventCategories);
server.get('/api/v1/event_categories/:id', getEventCategory);
server.get('/api/v1/event_categories/:id/items', getAllItemsInEventCategory);

//************************************************** INVENTORY ****************************** 
// server.get('/api/v1/event_inventory/:event_id', getInventoryForEvent);
server.post('/api/v1/event_inventory/:eventid', addItemToInventory);
//************************************************** INVENTORY ENDPOINTS ****************************** 
server.get('/api/v1/event_inventory/:event_id', getInventoryForEvent);
// server.post('/api/v1/event_inventory/:event_id', addItemToInventory);
// server.put('/api/v1/event_inventory/:id', updateItemInInventory);
// server.del('/api/v1/event_inventory/:id', deleteItemFromInventory);




server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

