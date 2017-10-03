'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemsForEventCategories = sequelize.define('ItemsForEventCategories', {
    events_category_id: DataTypes.BIGINT,
    item_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  ItemsForEventCategories.removeAttribute('id');
  return ItemsForEventCategories;
};