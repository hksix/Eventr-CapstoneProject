'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemCategories = sequelize.define('ItemCategories', {
    // item_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  ItemCategories.removeAttribute('id');
  return ItemCategories;
};