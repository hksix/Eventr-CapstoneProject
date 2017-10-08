'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemsForEventCategories = sequelize.define('ItemsForEventCategories', {
    // ex: taco night coming from Event Categories
    events_category_id: DataTypes.INTEGER,
    // suggested item ex: taco coming from 
    item_id: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  });
  return ItemsForEventCategories;
};