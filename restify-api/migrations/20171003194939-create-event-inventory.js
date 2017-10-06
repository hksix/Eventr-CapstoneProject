'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventInventories', {
      id: { //this is the item id
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // itemid: {
      //   type: Sequelize.INTEGER
      // },
      eventid: {
        type: Sequelize.INTEGER
      },
      defaultitemid: {
        type: Sequelize.INTEGER
      },
      itemname: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      categoryid: {
        type: Sequelize.INTEGER
      },
      ownerid: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventInventories');
  }
};