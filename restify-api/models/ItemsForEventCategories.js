'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemsForEventCategories = sequelize.define('ItemsForEventCategories', {
    events_category_id: DataTypes.INTEGER,
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