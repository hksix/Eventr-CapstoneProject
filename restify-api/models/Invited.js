'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invited = sequelize.define('Invited', {
    user_id: DataTypes.INTEGER,
    attending: DataTypes.BOOLEAN,
    event_id: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    },
    freezeTableName: true,
    tableName: 'Invited',
  });
  return Invited;
};