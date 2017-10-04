'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventCategories', [{
      category_id: 0,
      category_name: 'Taco Night',
    },
    {
      category_id: 1,
      category_name: 'Birthday Party',
    },
    {
      category_id: 2,
      category_name: 'Family Get-Together',
    },
    {
      category_id: 3,
      category_name: 'Night Out',
    },
    {
      category_id: 4,
      category_name: 'Reunion',
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventCategories', null, {});
  }
};
