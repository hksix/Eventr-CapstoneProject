'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemCategories', [{
      item_id: 1,
      name: 'Food'
    },
    {
      item_id: 2,
      name: 'Beverages'
    },
    {
      item_id: 3,
      name: 'Decorations'
    },
    {
      item_id: 4,
      name: 'Tableware'
    },
    {
      item_id: 5,
      name: 'Misc'
    },
    {
      item_id: 6,
      name: 'Equipment'
    },
    {
      item_id: 7,
      name: 'Entertainment'
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemCategories', null, {});
  }
};
