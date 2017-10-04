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
    category_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        host_id.belongsTo(Users, {foreignKey: 'id'});
        category_id.belongsTo(EventCategories, {foreignKey: 'id'});
      }
    }
  });
  return Events;
};