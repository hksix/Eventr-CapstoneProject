'use strict';
module.exports = (sequelize, DataTypes) => {
  var Guests = sequelize.define('Guests', {
    eventid: DataTypes.INTEGER,
    userid: DataTypes.BIGINT,
    attending: DataTypes.BOOLEAN,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  });
  return Guests;
};