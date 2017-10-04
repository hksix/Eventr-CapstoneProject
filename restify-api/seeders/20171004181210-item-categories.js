'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemCategories', [{
      // id: 1,
      name: 'Food'
    },
    {
      // id: 2,
      name: 'Beverages'
    },
    {
      // id: 3,
      name: 'Decorations'
    },
    {
      // id: 4,
      name: 'Tableware'
    },
    {
      // id: 5,
      name: 'Misc'
    },
    {
      // id: 6,
      name: 'Equipment'
    },
    {
      // id: 7,
      name: 'Entertainment'
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemCategories', null, {});
  }
};
