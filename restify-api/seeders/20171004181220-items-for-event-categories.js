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
      item_id: 12
    },
    {
      //cupcake
      events_category_id: 1,
      item_id: 13
    },
    {
      //Beer
      events_category_id: 1,
      item_id: 12
    },
    {
      //wine
      events_category_id: 1,
      item_id: 17
    },

  ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemsForEventCategories', null, {});
  }
};
