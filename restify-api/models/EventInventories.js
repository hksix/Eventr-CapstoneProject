'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventInventories = sequelize.define('EventInventories', {
    // itemid: DataTypes.INTEGER,
    eventid: DataTypes.INTEGER,
    // suggested item id from Suggested Items
    defaultitemid: DataTypes.INTEGER,
    itemname: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    //event category ex: taco night is 0
    categoryid: DataTypes.INTEGER,
    //whoever owns the event
    ownerid: DataTypes.INTEGER,
    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  }); 
  return EventInventories;
};

