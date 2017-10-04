'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventCategories = sequelize.define('EventCategories', {
    category_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return EventCategories;
};