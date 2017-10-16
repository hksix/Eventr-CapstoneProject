'use strict';
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
    // event_id: DataTypes.BIGINT,
    host_id: DataTypes.BIGINT,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    location: DataTypes.TEXT,
    //event category id from Event Categories ex: taco night is 0
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
  Events.prototype.getGuests = function(options) {
    options.include = [{
      model: sequelize.models.Guests,
      attributes: ['attending'],
      where: {
        eventid: this.get('id')
      }
    }];
    return sequelize.models.Users.findAll(options);
  }
  return Events;
};


