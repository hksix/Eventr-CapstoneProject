'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventCategories', [{
      id: 0,
      category_name: 'Taco Night'
    },
    {
      id: 1,
      category_name: 'Birthday Party'
    },
    {
      id: 2,
      category_name: 'Family Get-Together'
    },
    {
      id: 3,
      category_name: 'Night Out'
    },
    {
      id: 4,
      category_name: 'Reunion'
    },
    {
      id: 5,
      category_name: 'Christmas Party'
    },
    {
      id: 6,
      category_name: 'New Years Party'
    },
    {
      id: 7,
      category_name: 'General Party'
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventCategories', null, {});
  }
};
