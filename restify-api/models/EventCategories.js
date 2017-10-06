'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventCategories = sequelize.define('EventCategories', {
    category_name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  });
  EventCategories.prototype.getItems = function(options) {
    options.include = [{
      model: sequelize.models.ItemsForEventCategories,
      attributes: [],
      where: {
        events_category_id: this.get('id')
      }
    }];
    return sequelize.models.SuggestedItems.findAll(options);
    
  };
  return EventCategories;
};