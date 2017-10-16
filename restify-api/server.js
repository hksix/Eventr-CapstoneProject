//https://tutorials.kode-blog.com/nodejs-rest-api
//http://mcavage.me/node-restify/
//https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
//http://docs.sequelizejs.com/manual/tutorial/migrations.html

var restify = require('restify');
var restifyValidator = require('restify-validator');
var util = require('util');
var models = require('./models/index');
var error_messages = null;

const corsMiddleware = require('restify-cors-middleware');


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
//server.get('/api/v1/event/:event_id/guests', getGuestProfilesByEvent); 
function getGuestProfilesByEvent(request, response, next) {
    models.Events.findOne({
        where: {
            'id': request.params.event_id
        }

    }).then(function(event) {
        var options = {}
        event.getGuests(options).then(results => {
            response.send(results);
            next();
        }).catch(function(err) {
            console.log(err)
        });
    });
}

function getAllEventsByHost(request, response, next) {
    models.Events.findAll({
        where: {
            'host_id': request.params.id
        }
    }).then(function(events) {
        // var data = {
        //     data: events
        // }
        response.send(events);
        next();
    }).catch(function (err) {
        console.log(err)
    });
}


//server.get('/api/v1/events/guest/:id', getAllEventsByGuest); 
function getAllEventsByGuest(request, response, next) {
    models.Users.find({
        where: {
            'id': request.params.id
        },
        // attributes:[ 
        //     sequelize.fn('date_format', sequelize.col('date_col'), '%Y-%m-%d'), 'date_col_formed'
        // ]
    }).then(function(user) {
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
        host_id: request.body['host_id'],
        name: request.body['name'],
        description: request.body['description'],
        date: request.body['date'],
        time: request.body['time'],
        location: request.body['location'],
        category_id: request.body['category_id'],
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
                host_id: request.body['host_id'],
                name: request.body['name'],
                description: request.body['description'],
                date: request.body['date'],
                time: request.body['time'],
                location: request.body['location'],
                category_id: request.body['category_id'],
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
        // var data = {
        //     data: Users
        // };
        response.send(Users);
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
        // var data = {
            // error: `no user by id ${request.params.id}`,
            // data: user
        // };  
        response.send(user);
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
        fName: request.body.fName,
        lName: request.body.lName,
        profPic: request.body.profPic,
        email: request.body.email,
        phone: request.body.phone,
        location: request.body.location
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
            console.log(request.body)
            user.updateAttributes({
                fName: request.body['fName'],
                lName: request.body['lName'],
                profPic: request.body['profPic'],
                email: request.body['email'],
                phone: request.body['phone'],
                location: request.body['location']
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

//server.get(`${extension}/guests/event/:eventid`, getAllGuestsByEvent);
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
            eventid: request.body.eventid,
            userid: request.body.guestid,
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
            eventid: request.body.eventid,
            userid: request.body.guestid,
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
            id: request.params.id
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
function isItemAdded(eventid, itemname){
    return models.EventInventory.count({
        where: {
            eventid: eventid,
            itemname: itemname
        }
    }).then(count => {
        if (count != 0) {
            console.log("working")
            return false;
        }
        console.log("Nooooo")
        return true;
    })
}
//server.post('/api/v1/event_inventory/:eventid', addItemToInventory);
function addItemToInventory(request,response,next){
    var itemIsAdded = isItemAdded(request.params.eventid, request.params.itemname)
    .then(isItemAdded => {
        if(isItemAdded === false){
            response.send('this item is already added')
        } else {
            models.EventInventory.create({
                eventid: request.body.eventid,
                defaultitmeid: request.body.defaultitemid,
                itemname: request.body.itemname,
                quantity: request.body.quantity,
                categoryid: request.body.categoryid,
                ownerid: request.body.ownerid,
                description: request.body.description,
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
    })
}

//server.put('/api/v1/event_inventory/:id', updateItemInInventory);
function updateItemInInventory(request,response,next) {
    models.EventInventory.findAll({
        attributes: ['itemname', 'quantity', 'ownerid', 'description'],
        where: {
            id: request.params.id
        }
    }).then(function(inventory) {
        if(inventory){
            user.updateAttributes({
                itemname: request.body.itemname,
                quantity: request.body.quantity,
                ownerid: request.body.ownerid,
                description: request.body.description
            }).then(function(inventory){
                var data = {
                    message: "Updated inventory successfully",
                    data: inventory
                };
                response.send(data);
                next();
            }).catch(function (err) {
                console.log(err)
            });
        }
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


//server.del('/api/v1/event_inventory/:defaultitemid/:itemname', deleteItemFromInventory);
function deleteItemFromInventory(request,response,next) {
    models.EventInventory.destroy({
        where: {
            eventid: request.params.eventid,
            defaultitemid: request.params.defaultitemid,
            itemname: request.params.itemname
        }
    }).then(function(item) {
        var data = {
            message: `Deleted item from event ${request.params.eventid} successfully`,
            data: item
        };
        response.send(data);
        next();
    }).catch(function (err) {
        console.log(err)
    });
}

//************************************************** SERVER ****************************** 

var server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use(restifyValidator);



const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*','https://event-r.com'],
//   allowHeaders: ['API-Token'],
//   exposeHeaders: ['API-Token-Expiry']
})

server.pre(cors.preflight)
server.use(cors.actual)





var extension = `/api/v1/${process.env.API_KEY}`;
//************************************************** EVENTS ENDPOINTS ****************************** 
server.get(`${extension}/events`, getAllEvents); 
server.get(`${extension}/events/host/:id`, getAllEventsByHost); 
server.get(`${extension}/events/guest/:id`, getAllEventsByGuest); 
server.post(`${extension}/events`, addEvent); 
server.put(`${extension}/events/:id`, updateEvent);
server.del(`${extension}/events/:id`, deleteEvent);


//************************************************** USERS ENDPOINTS ****************************** 
server.get(`${extension}/users`, getAllUsers);
server.get(`${extension}/users/:id`, getUser);
server.post(`${extension}/users`, addUser);
server.put(`${extension}/users/:id`, updateUser);
server.del(`${extension}/users/:id`, deleteUser);

//************************************************** GUESTS ENDPOINTS****************************** 
server.get(`${extension}/guests/event/:eventid`, getAllGuestsByEvent);
server.post(`${extension}/guests/:eventid/:guestid`, addGuest);
server.del(`${extension}/guests/eventid/:eventid/:guestid`, deleteGuest);

//************************************************** EVENT TYPES ENDPOINTS ****************************** 
server.get(`${extension}/event_categories`, getAllEventCategories);
server.get(`${extension}/event_categories/:id`, getEventCategory);
server.get(`${extension}/event_categories/:id/items`, getAllItemsInEventCategory);

//************************************************** INVENTORY ENDPOINTS ****************************** 
server.get(`${extension}/event_inventory/:event_id`, getInventoryForEvent);
server.post(`${extension}/event_inventory/:event_id`, addItemToInventory);
server.put(`${extension}/event_inventory/:id`, updateItemInInventory);
server.del(`${extension}/event_inventory/:id`, deleteItemFromInventory);

server.get(`${extension}/event/:event_id/guests`, getGuestProfilesByEvent); 

// module.exports = server;
server.listen(8090, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

