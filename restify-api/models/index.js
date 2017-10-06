'use strict';

// var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Users = require('./Users.js')(sequelize, Sequelize); 
db.Events = require('./Events.js')(sequelize, Sequelize); 
db.EventInventory = require('./EventInventories.js')(sequelize, Sequelize); 
db.Guests = require('./Guests.js')(sequelize, Sequelize); 
db.ItemCategories = require('./ItemCategories.js')(sequelize, Sequelize); 
db.ItemsForEventCategories = require('./ItemsForEventCategories.js')(sequelize, Sequelize); 
db.SuggestedItems = require('./SuggestedItems.js')(sequelize, Sequelize); 
db.EventCategories = require('./EventCategories.js')(sequelize, Sequelize); 



//Associations
db.Events.belongsToMany(db.Users, {through: db.Guests, foreignKey: 'eventid'}); //each event has many users - joined in guest table
db.Users.belongsToMany(db.Events, {through: db.Guests, foreignKey: 'userid'}); //each user has many events - joined in guest table

db.EventCategories.hasMany(db.Events, {foreignKey: 'category_id'}); //each event has a category
// db.Events.belongsTo(db.EventCategories, {foreignKey: 'category_id'});

db.Users.hasMany(db.Events, {foreignKey: 'host_id'}); //each event has a host user
db.Events.hasMany(db.Guests, {foreignKey: 'eventid'});

db.EventCategories.hasMany(db.SuggestedItems, {foreignKey: 'id'})
db.SuggestedItems.hasMany(db.ItemsForEventCategories, {foreignKey: 'item_id'})


// db.Event.hasMany(db.EventInventory, {foreignKey: 'eventid'}); //each inventory has an eventid

// db.SuggestedItems.hasMany()
//each inventory has suggested itemsid 

// db.EventInventory.hasMany(db.SuggestedItems);
// db.SuggestedItems.belongsTo(db.EventInventory);
// db.EventInventory.hasMany(db.Users);
// db.Users.belongsTo(db.EventInventory);
// db.EventInventory.hasMany(db.ItemCategories);
// db.ItemCategories.belongsTo(db.EventInventory);


// db.ItemsForEventCategories.hasMany(db.EventCategories);
// db.EventCategories.belongsTo(db.ItemsForEventCategories);
// db.ItemsForEventCategories.hasMany(db.SuggestedItems);
// db.SuggestedItems.belongsTo(db.ItemsForEventCategories);

// db.SuggestedItems.hasMany(db.ItemCategories);
// db.ItemCategories.belongsTo(db.SuggestedItems);


// var models = [
//   'Users',
//   'Events',
//   'EventInventory',
//   'Guests',
//   'ItemCategories',
//   'ItemsForEventCategories',
//   'SuggestedItems',
//   'EventCategories'
// ];

module.exports = db;

// models.forEach(function(model) {
//   module.exports[model] = sequelize.import(__dirname + '/' + model);
// });
