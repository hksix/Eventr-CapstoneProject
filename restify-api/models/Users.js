'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    profPic: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    location: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  });
  Users.prototype.getEvents = function(options) {
    options.include = [{
      model: sequelize.models.Guests,
      attributes: [],
      where: {
        userid: this.get('id')
      }
    }];
    return sequelize.models.Events.findAll(options);
    
  };
  return Users;
};