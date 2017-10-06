'use strict';
module.exports = (sequelize, DataTypes) => {
  var SuggestedItems = sequelize.define('SuggestedItems', {
    //
    item_id: DataTypes.INTEGER,
    // Item name we name in table
    item_name: DataTypes.STRING,
    // food/ drink/ decoration from Item Categories
    category_id: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  });
  return SuggestedItems;
};