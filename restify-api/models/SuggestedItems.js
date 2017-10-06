'use strict';
module.exports = (sequelize, DataTypes) => {
  var SuggestedItems = sequelize.define('SuggestedItems', {
    // item_id: DataTypes.INTEGER,
    item_name: DataTypes.STRING,
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