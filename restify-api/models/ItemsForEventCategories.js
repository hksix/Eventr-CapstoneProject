'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemsForEventCategories = sequelize.define('ItemsForEventCategories', {
    events_category_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        events_category_id.belongsTo(EventCategories, {foreignKey: 'id'});
        item_id.belongsTo(SuggestedItems, {foreignKey: 'id'});
        // associations can be defined here
      }
    }
  });
  ItemsForEventCategories.removeAttribute('id');
  return ItemsForEventCategories;
};