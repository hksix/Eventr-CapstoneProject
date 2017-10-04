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
    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    },
  }); 
  return EventInventory;
};

