'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ItemsForEventCategories', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      events_category_id: {
        type: Sequelize.BIGINT
      },
      item_id: {
        type: Sequelize.INTEGER
      }
      //,
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
    return queryInterface.dropTable('ItemsForEventCategories');
  }
};