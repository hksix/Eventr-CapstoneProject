'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventInventory', {
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
        type: Sequelize.BIGINT
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
        type: Sequelize.BIGINT
      },
      description: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('EventInventory');
  }
};