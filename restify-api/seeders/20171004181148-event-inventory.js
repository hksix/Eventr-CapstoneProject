'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventInventories', [{
      eventid: 1,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: null,
      description: 'solo cups'
    },
    {
      eventid: 1,
      defaultitemid: 401,
      itemname: 'Plates',
      quantity: '50',
      categoryid: 4,
      ownerid: null,
      description: 'purple'
    },
    {
      eventid: 1,
      defaultitemid: 404,
      itemname: 'Forks',
      quantity: '50',
      categoryid: 4,
      ownerid: null,
      description: 'plastic'
    },
    {
      eventid: 1,
      defaultitemid: 500,
      itemname: 'Misc',
      quantity: '50',
      categoryid: 5,
      ownerid: null,
      description: 'Other'
    },
    {
      eventid: 1,
      defaultitemid: 601,
      itemname: 'Indoor Speakers',
      quantity: '1',
      categoryid: 6,
      ownerid: null,
      description: 'Small to hook up to iPod'
    },
    {
      eventid: 1,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '50',
      categoryid: 1,
      ownerid: null,
      description: '25 vanilla, 25 chocolate'
    },
    {
      eventid: 1,
      defaultitemid: 406,
      itemname: 'Beer',
      quantity: '24',
      categoryid: 2,
      ownerid: null,
      description: 'Budlight and Stella please'
    },
    {
      eventid: 2,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: null,
      description: 'solo cups'
    },
    {
      eventid: 2,
      defaultitemid: 406,
      itemname: 'Plates',
      quantity: '20',
      categoryid: 4,
      ownerid: null,
      description: 'purple'
    },
    {
      eventid: 2,
      defaultitemid: 404,
      itemname: 'Forks',
      quantity: '20',
      categoryid: 4,
      ownerid: null,
      description: 'plastic'
    },
    {
      eventid: 2,
      defaultitemid: 601,
      itemname: 'Outdoor Speaker',
      quantity: '1',
      categoryid: 6,
      ownerid: null,
      description: 'portable if you have it!'
    },
    {
      eventid: 2,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '50',
      categoryid: 1,
      ownerid: null,
      description: '25 strawberry, 25 chocolate'
    },
    {
      eventid: 2,
      defaultitemid: 406,
      itemname: 'Beer',
      quantity: '12',
      categoryid: 2,
      ownerid: null,
      description: 'Budlight'
    },
    {
      eventid: 2,
      defaultitemid: 406,
      itemname: 'Beer',
      quantity: '12',
      categoryid: 2,
      ownerid: null,
      description: 'Stella'
    },
    {
      eventid: 2,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: null,
      description: 'Cabernet'
    },
    {
      eventid: 2,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: null,
      description: 'Chardonnay'
    },
    {
      eventid: 3,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: null,
      description: 'solo cups'
    },
    {
      eventid: 3,
      defaultitemid: 303,
      itemname: 'Streamers',
      quantity: '15',
      categoryid: 3,
      ownerid: null,
      description: 'white and pink'
    },
    {
      eventid: 3,
      defaultitemid: 307,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 3,
      ownerid: null,
      description: 'bacholorette theme'
    },
    {
      eventid: 3,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '10',
      categoryid: 1,
      ownerid: null,
      description: 'chocolate'
    },
    {
      eventid: 3,
      defaultitemid: 406,
      itemname: 'Juice',
      quantity: '4',
      categoryid: 2,
      ownerid: null,
      description: 'Oj for mimosas!'
    },
    {
      eventid: 3,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: null,
      description: 'Champagine'
    },
    {
      eventid: 3,
      defaultitemid: 409,
      itemname: 'Liquor',
      quantity: '2',
      categoryid: 2,
      ownerid: null,
      description: 'Small handle of vodka to make screwdrivers'
    },
    {
      eventid: 3,
      defaultitemid: 306,
      itemname: 'Party Favors',
      quantity: '10',
      categoryid: 3,
      ownerid: null,
      description: 'Sparkly necklaces'
    },
    {
      eventid: 3,
      defaultitemid: 306,
      itemname: 'Party Favors',
      quantity: '1',
      categoryid: 3,
      ownerid: null,
      description: 'Bachelorette sash. Make it adorable'
    },
    {
      eventid: 3,
      defaultitemid: 703,
      itemname: 'Dancers',
      quantity: '3',
      categoryid: 3,
      ownerid: null,
      description: 'Yup'
    },
    {
      eventid: 3,
      defaultitemid: 702,
      itemname: 'Playlist',
      quantity: '3',
      categoryid: 3,
      ownerid: null,
      description: 'Needing a playlist for pregame'
    },
    {
      eventid: 4,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: null,
      description: 'solo cups'
    },
    {
      eventid: 4,
      defaultitemid: 702,
      itemname: 'Playlist',
      quantity: '3',
      categoryid: 3,
      ownerid: null,
      description: 'Needing a playlist for night fires'
    },
    {
      eventid: 4,
      defaultitemid: 303,
      itemname: 'Streamers',
      quantity: '15',
      categoryid: 3,
      ownerid: null,
      description: 'white'
    },
    {
      eventid: 4,
      defaultitemid: 307,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 3,
      ownerid: null,
      description: 'beach theme'
    },
    {
      eventid: 4,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '10',
      categoryid: 1,
      ownerid: null,
      description: 'chocolate'
    },
    {
      eventid: 4,
      defaultitemid: 406,
      itemname: 'Beer',
      quantity: '24',
      categoryid: 2,
      ownerid: null,
      description: 'Budlight Lime and Corona please'
    },
    {
      eventid: 4,
      defaultitemid: 130,
      itemname: 'Fruit',
      quantity: '6',
      categoryid: 1,
      ownerid: null,
      description: 'Limes'
    },
    {
      eventid: 4,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: null,
      description: 'Tidos Vodka'
    },
    {
      eventid: 4,
      defaultitemid: 407,
      itemname: 'Soda',
      quantity: '12',
      categoryid: 2,
      ownerid: null,
      description: 'Gingner Beer for moscole mules'
    },
    {
      eventid: 4,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: null,
      description: 'Chips and Dip'
    },
    {
      eventid: 4,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: null,
      description: 'Doritos'
    },
    {
      eventid: 4,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: null,
      description: 'Pita and Hummus'
    },
    {
      eventid: 5,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: null,
      description: 'solo cups'
    },
    {
      eventid: 5,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: null,
      description: 'Chips and Dip'
    },
    {
      eventid: 5,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: null,
      description: 'Kettle Popcorn'
    },
    {
      eventid: 5,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: null,
      description: 'Pita and Hummus'
    },
    {
      eventid: 5,
      defaultitemid: 303,
      itemname: 'Streamers',
      quantity: '5',
      categoryid: 3,
      ownerid: null,
      description: 'Navy Blue'
    },
    {
      eventid: 5,
      defaultitemid: 307,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 3,
      ownerid: null,
      description: 'Over the Hill'
    },
    {
      eventid: 5,
      defaultitemid: 101,
      itemname: 'Cake',
      quantity: '1',
      categoryid: 1,
      ownerid: null,
      description: 'To feed 50 people saying "Robertson\'s Family Reunion 2017". Preferably half vanilla, half chocolate with vanilla frosting'
    },
    {
      eventid: 5,
      defaultitemid: 401,
      itemname: 'Soda',
      quantity: '5',
      categoryid: 2,
      ownerid: null,
      description: 'Dr Pepper, Coke, diet Coke'
    },
    {
      eventid: 5,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '3',
      categoryid: 2,
      ownerid: null,
      description: 'Pino Noir'
    },
    {
      eventid: 5,
      defaultitemid: 402,
      itemname: 'Forks',
      quantity: '100',
      categoryid: 2,
      ownerid: null,
      description: 'white plastic'
    },
    {
      eventid: 5,
      defaultitemid: 404,
      itemname: 'Spoons',
      quantity: '100',
      categoryid: 2,
      ownerid: null,
      description: 'white plastic'
    },
    {
      eventid: 5,
      defaultitemid: 403,
      itemname: 'Knives',
      quantity: '100',
      categoryid: 2,
      ownerid: null,
      description: 'white plastic'
    },
    {
      eventid: 5,
      defaultitemid: 401,
      itemname: 'Plates',
      quantity: '50',
      categoryid: 2,
      ownerid: null,
      description: 'Large navy blue'
    },
    {
      eventid: 5,
      defaultitemid: 401,
      itemname: 'Plates',
      quantity: '50',
      categoryid: 2,
      ownerid: null,
      description: 'Small navy blue'
    },
    {
      eventid: 5,
      defaultitemid: 117,
      itemname: 'Burgers',
      quantity: '20',
      categoryid: 1,
      ownerid: null,
      description: 'Turkey burgers pre-made'
    },
    {
      eventid: 5,
      defaultitemid: 118,
      itemname: 'Hotdogs',
      quantity: '20',
      categoryid: 1,
      ownerid: null,
      description: 'Jumbo'
    },
    {
      eventid: 5,
      defaultitemid: 118,
      itemname: 'Buns',
      quantity: '50',
      categoryid: 1,
      ownerid: null,
      description: '25 Hotdog and 25 buger buns'
    },
    {
      eventid: 5,
      defaultitemid: 121,
      itemname: 'Side Item',
      quantity: '3',
      categoryid: 1,
      ownerid: null,
      description: 'need more side items!'
    },
    {
      eventid: 5,
      defaultitemid: 119,
      itemname: 'Other Meat Option',
      quantity: '10',
      categoryid: 1,
      ownerid: null,
      description: 'Chicken Breasts'
    },
    {
      eventid: 5,
      defaultitemid: 123,
      itemname: 'Condements',
      quantity: '2',
      categoryid: 1,
      ownerid: null,
      description: 'Ketchup'
    },
    {
      eventid: 5,
      defaultitemid: 123,
      itemname: 'Condements',
      quantity: '2',
      categoryid: 1,
      ownerid: null,
      description: 'Mustard'
    },
    {
      eventid: 5,
      defaultitemid: 123,
      itemname: 'Condements',
      quantity: '2',
      categoryid: 1,
      ownerid: null,
      description: 'Sweet Relish'
    },
    {
      eventid: 5,
      defaultitemid: 123,
      itemname: 'Condements',
      quantity: '2',
      categoryid: 1,
      ownerid: null,
      description: 'Spicy Mustard'
    },
    {
      eventid: 5,
      defaultitemid: 125,
      itemname: 'Salad',
      quantity: '1',
      categoryid: 1,
      ownerid: null,
      description: 'Large Pasta Salad'
    },
    {
      eventid: 5,
      defaultitemid: 125,
      itemname: 'Salad',
      quantity: '1',
      categoryid: 1,
      ownerid: null,
      description: 'Spinach and fruit salad'
    },
    {
      eventid: 5,
      defaultitemid: 130,
      itemname: 'Fruit',
      quantity: '1',
      categoryid: 1,
      ownerid: null,
      description: 'Assorted large platter. Whatever is in season'
    },
    {
      eventid: 5,
      defaultitemid: 127,
      itemname: 'Fruit',
      quantity: '1',
      categoryid: 1,
      ownerid: null,
      description: 'Ranch and Balsamic'
    },
    {
      eventid: 5,
      defaultitemid: 304,
      itemname: 'Table Cloth',
      quantity: '4',
      categoryid: 3,
      ownerid: null,
      description: 'Navy blue picnic table size'
    },
    {
      eventid: 5,
      defaultitemid: 307,
      itemname: 'Balloons',
      quantity: '20',
      categoryid: 3,
      ownerid: null,
      description: 'Navy blue and white assorted'
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventInventories', null, {});
  }
};