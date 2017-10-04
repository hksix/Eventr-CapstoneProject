'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventInventory = sequelize.define('EventInventory', {
    // itemid: DataTypes.INTEGER,
    eventid: DataTypes.INTEGER,
    defaultitemid: DataTypes.INTEGER,
    itemname: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    categoryid: DataTypes.INTEGER,
    ownerid: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  EventInventory.hasOne(Event);
  EventInventory.hasMany(Users);  
  return EventInventory;
};

