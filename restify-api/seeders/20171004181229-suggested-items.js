'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SuggestedItems', [{
      // id: 2,
      item_name: 'Cake',
      category_id: 1
    },
    {
      // id: 13,
      item_name: 'Cupcakes',
      category_id: 1
    },
    {
      // id: 22,
      item_name: 'Snacks',
      category_id: 1
    },
    {
      // id: 1,
      item_name: 'Non-Alcoholic Beverages',
      category_id: 2
    },
    {
      // id: 1,
      item_name: 'Alcoholic Beverages',
      category_id: 2
    },
    {
      // id: 3,
      item_name: 'Banners',
      category_id: 2,
    },
    {
      // id: 12,
      item_name: 'Plates',
      category_id: 4,
    },
    {
      // id: 10,
      item_name: 'Forks',
      category_id: 4,
    },
    {
      // id: 1,
      item_name: 'Cups',
      category_id: 4,
    },


    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SuggestedItems', null, {});
  }
};
