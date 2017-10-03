'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inviteds', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      user_id: {
        type: Sequelize.BIGINT
      },
      attending: {
        type: Sequelize.BOOLEAN
      },
      event_id: {
        type: Sequelize.BIGINT
      }
      // ,
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inviteds');
  }
};