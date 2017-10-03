'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventInventory = sequelize.define('EventInventory', {
    // itemid: DataTypes.INTEGER,
    eventid: DataTypes.BIGINT,
    defaultitemid: DataTypes.INTEGER,
    itemname: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    categoryid: DataTypes.INTEGER,
    ownerid: DataTypes.BIGINT,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return EventInventory;
};

