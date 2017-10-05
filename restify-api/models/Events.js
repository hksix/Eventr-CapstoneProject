'use strict';
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
    // event_id: DataTypes.BIGINT,
    host_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    location: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    },
  });
  Events.associate = function(models) {
    
  }
  return Events;
};