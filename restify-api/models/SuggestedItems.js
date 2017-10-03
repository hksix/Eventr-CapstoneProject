'use strict';
module.exports = (sequelize, DataTypes) => {
  var SuggestedItems = sequelize.define('SuggestedItems', {
    // item_id: DataTypes.INTEGER,
    item_name: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SuggestedItems;
};