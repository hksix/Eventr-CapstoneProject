'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invited = sequelize.define('Invited', {
    user_id: DataTypes.BIGINT,
    attending: DataTypes.BOOLEAN,
    event_id: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Invited.removeAttribute('id');
  return Invited;
};