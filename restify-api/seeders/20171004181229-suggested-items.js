'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SuggestedItems', [{
      id: 100,
      item_name: 'Cake',
      category_id: 1
    },
    {
      id: 101,
      item_name: 'Cupcakes',
      category_id: 1
    },
    {
      id: 102,
      item_name: 'Snacks',
      category_id: 1
    },
    {
      id: 401,
      item_name: 'Soda',
      category_id: 2
    },
    {
      id: 405,
      item_name: 'Juice',
      category_id: 2
    },
    {
      id: 406,
      item_name: 'Beer',
      category_id: 2
    },
    {
      id: 407,
      item_name: 'Wine',
      category_id: 2
    },
    {
      id: 408,
      item_name: 'General Alcoholic Beverages',
      category_id: 2
    },
    {
      id: 409,
      item_name: 'Liquor',
      category_id: 2
    },
    {
      id: 301,
      item_name: 'Banners',
      category_id: 3,
    },
    {
      id: 401,
      item_name: 'Plates',
      category_id: 4,
    },
    {
      id: 402,
      item_name: 'Forks',
      category_id: 4,
    },
    {
      id: 403,
      item_name: 'Knives',
      category_id: 4,
    },
    {
      id: 404,
      item_name: 'Spoons',
      category_id: 4,
    },
    {
      id: 405,
      item_name: 'Bowls',
      category_id: 4,
    },
    {
      id: 406,
      item_name: 'Cups',
      category_id: 4,
    },
    {
      id: 117,
      item_name: 'Burgers',
      category_id: 1
    },
    {
      id: 118,
      item_name: 'Hotdogs',
      category_id: 1
    },
    {
      id: 119,
      item_name: 'Other Meat Option',
      category_id: 1
    },
    {
      id: 120,
      item_name: 'Vegetarian Option',
      category_id: 1
    },
    {
      id: 121,
      item_name: 'Side Item',
      category_id: 1
    },
    {
      id: 122,
      item_name: 'Buns',
      category_id: 1
    },
    {
      id: 123,
      item_name: 'Condements',
      category_id: 1
    },
    {
      id: 125,
      item_name: 'Salad',
      category_id: 1
    },
    {
      id: 127,
      item_name: 'Salad Dressing',
      category_id: 1
    },
    {
      id: 303,
      item_name: 'Streamers',
      category_id: 3,
    },
    {
      id: 304,
      item_name: 'Table Cloth',
      category_id: 3,
    },
    {
      id: 305,
      item_name: 'Birthday Candels',
      category_id: 3,
    },
    {
      id: 306,
      item_name: 'Party Favors',
      category_id: 3,
    },
    {
      id: 307,
      item_name: 'Balloons',
      category_id: 3,
    },
    {
      id: 308,
      item_name: 'Pinata',
      category_id: 3,
    },
    {
      id: 308,
      item_name: 'Lights',
      category_id: 3,
    },
    {
      id: 307,
      item_name: 'Party Hats',
      category_id: 3,
    },
    {
      id: 500,
      item_name: 'Miscelaneous',
      category_id: 5,
    },
    {
      id: 601,
      item_name: 'Indoor Speakers',
      category_id: 6,
    },
    {
      id: 602,
      item_name: 'Outdoor Speaker',
      category_id: 6,
    },
    {
      id: 602,
      item_name: 'Bounce House',
      category_id: 6,
    },
    {
      id: 702,
      item_name: 'Playlist',
      category_id: 7,
    },
    {
      id: 703,
      item_name: 'Dancers',
      category_id: 7,
    },
    {
      id: 704,
      item_name: 'Magician',
      category_id: 7,
    },
    {
      id: 705,
      item_name: 'Clown',
      category_id: 7,
    }

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SuggestedItems', null, {});
  }
};
