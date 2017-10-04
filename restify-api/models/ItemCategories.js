'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemCategories = sequelize.define('ItemCategories', {
    // item_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    },
  });

  return ItemCategories;
};