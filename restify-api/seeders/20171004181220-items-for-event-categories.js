'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemsForEventCategories', [{
      //food
        //cups
      events_category_id: 1,
      item_id: 1
    },
    {
        //plates
      events_category_id: 1,
      item_id: 2
    },
    {
      //cupcake
      events_category_id: 1,
      item_id: 3
    },
    {
      //Beer
      events_category_id: 1,
      item_id: 4
    },
    {
      //wine
      events_category_id: 1,
      item_id: 5
    },

  ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemsForEventCategories', null, {});
  }
};
