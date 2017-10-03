'use strict';
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
    // event_id: DataTypes.BIGINT,
    host_id: DataTypes.BIGINT,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    location: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Events;
};