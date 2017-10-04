'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invited = sequelize.define('Invited', {
    user_id: DataTypes.INTEGER,
    attending: DataTypes.BOOLEAN,
    event_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        user_id.belongsTo(Users, {foreignKey:'id'});
        event_id.belongsTo(Events, {foreignKey:'id'})
        // associations can be defined here
      }
    }
  });
  Invited.removeAttribute('id');
  return Invited;
};