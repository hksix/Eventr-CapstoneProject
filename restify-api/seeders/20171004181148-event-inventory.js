'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventInventories', [{
      eventid: 1,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: 1,
      description: 'solo cups'
    },
    {
      eventid: 1,
      defaultitemid: 401,
      itemname: 'Plates',
      quantity: '50',
      categoryid: 4,
      ownerid: 1,
      description: 'purple'
    },
    {
      eventid: 1,
      defaultitemid: 404,
      itemname: 'Forks',
      quantity: '50',
      categoryid: 4,
      ownerid: 2,
      description: 'plastic'
    },
    {
      eventid: 1,
      defaultitemid: 500,
      itemname: 'Misc',
      quantity: '50',
      categoryid: 5,
      ownerid: 2,
      description: 'Other'
    },
    {
      eventid: 1,
      defaultitemid: 601,
      itemname: 'Indoor Speakers',
      quantity: '1',
      categoryid: 6,
      ownerid: 2,
      description: 'Small to hook up to iPod'
    },
    {
      eventid: 1,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '50',
      categoryid: 1,
      ownerid: 2,
      description: '25 vanilla, 25 chocolate'
    },
    {
      eventid: 1,
      defaultitemid: 406,
      itemname: 'Beer',
      quantity: '24',
      categoryid: 2,
      ownerid: 2,
      description: 'Budlight and Stella please'
    },
    {
      eventid: 2,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: 2,
      description: 'solo cups'
    },
    {
      eventid: 2,
      defaultitemid: 406,
      itemname: 'Plates',
      quantity: '20',
      categoryid: 4,
      ownerid: 2,
      description: 'purple'
    },
    {
      eventid: 2,
      defaultitemid: 404,
      itemname: 'Forks',
      quantity: '20',
      categoryid: 4,
      ownerid: 2,
      description: 'plastic'
    },
    {
      eventid: 2,
      defaultitemid: 601,
      itemname: 'Outdoor Speaker',
      quantity: '1',
      categoryid: 6,
      ownerid: 2,
      description: 'portable if you have it!'
    },
    {
      eventid: 2,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '50',
      categoryid: 1,
      ownerid: 2,
      description: '25 strawberry, 25 chocolate'
    },
    {
      eventid: 2,
      defaultitemid: 406,
      itemname: 'Beer',
      quantity: '12',
      categoryid: 2,
      ownerid: 3,
      description: 'Budlight'
    },
    {
      eventid: 2,
      defaultitemid: 406,
      itemname: 'Beer',
      quantity: '12',
      categoryid: 2,
      ownerid: 3,
      description: 'Stella'
    },
    {
      eventid: 2,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: 3,
      description: 'Cabernet'
    },
    {
      eventid: 2,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: 3,
      description: 'Chardonnay'
    },
    {
      eventid: 3,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: 3,
      description: 'solo cups'
    },
    {
      eventid: 3,
      defaultitemid: 303,
      itemname: 'Streamers',
      quantity: '15',
      categoryid: 3,
      ownerid: 3,
      description: 'white and pink'
    },
    {
      eventid: 3,
      defaultitemid: 307,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 3,
      ownerid: 3,
      description: 'bacholorette theme'
    },
    {
      eventid: 3,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '10',
      categoryid: 1,
      ownerid: 3,
      description: 'chocolate'
    },
    {
      eventid: 3,
      defaultitemid: 406,
      itemname: 'Juice',
      quantity: '4',
      categoryid: 2,
      ownerid: 3,
      description: 'Oj for mimosas!'
    },
    {
      eventid: 3,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: 3,
      description: 'Champagine'
    },
    {
      eventid: 3,
      defaultitemid: 409,
      itemname: 'Liquor',
      quantity: '2',
      categoryid: 2,
      ownerid: 3,
      description: 'Small handle of vodka to make screwdrivers'
    },
    {
      eventid: 3,
      defaultitemid: 306,
      itemname: 'Party Favors',
      quantity: '10',
      categoryid: 3,
      ownerid: 3,
      description: 'Sparkly necklaces'
    },
    {
      eventid: 3,
      defaultitemid: 306,
      itemname: 'Party Favors',
      quantity: '1',
      categoryid: 3,
      ownerid: 3,
      description: 'Bachelorette sash. Make it adorable'
    },
    {
      eventid: 3,
      defaultitemid: 703,
      itemname: 'Dancers',
      quantity: '3',
      categoryid: 3,
      ownerid: 3,
      description: 'Yup'
    },
    {
      eventid: 3,
      defaultitemid: 702,
      itemname: 'Playlist',
      quantity: '3',
      categoryid: 3,
      ownerid: 3,
      description: 'Needing a playlist for pregame'
    },
    {
      eventid: 4,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: 3,
      description: 'solo cups'
    },
    {
      eventid: 4,
      defaultitemid: 702,
      itemname: 'Playlist',
      quantity: '3',
      categoryid: 3,
      ownerid: 3,
      description: 'Needing a playlist for night fires'
    },
    {
      eventid: 4,
      defaultitemid: 303,
      itemname: 'Streamers',
      quantity: '15',
      categoryid: 3,
      ownerid: 3,
      description: 'white'
    },
    {
      eventid: 4,
      defaultitemid: 307,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 3,
      ownerid: 3,
      description: 'beach theme'
    },
    {
      eventid: 4,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '10',
      categoryid: 1,
      ownerid: 3,
      description: 'chocolate'
    },
    {
      eventid: 4,
      defaultitemid: 406,
      itemname: 'Beer',
      quantity: '24',
      categoryid: 2,
      ownerid: 3,
      description: 'Budlight Lime and Corona please'
    },
    {
      eventid: 4,
      defaultitemid: 130,
      itemname: 'Fruit',
      quantity: '6',
      categoryid: 1,
      ownerid: 3,
      description: 'Limes'
    },
    {
      eventid: 4,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: 3,
      description: 'Tidos Vodka'
    },
    {
      eventid: 4,
      defaultitemid: 407,
      itemname: 'Soda',
      quantity: '12',
      categoryid: 2,
      ownerid: 3,
      description: 'Gingner Beer for moscole mules'
    },
    {
      eventid: 4,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: 3,
      description: 'Chips and Dip'
    },
    {
      eventid: 4,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: 3,
      description: 'Doritos'
    },
    {
      eventid: 4,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: 3,
      description: 'Pita and Hummus'
    },
    {
      eventid: 5,
      defaultitemid: 406,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 4,
      ownerid: 1,
      description: 'solo cups'
    },
    {
      eventid: 5,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: 3,
      description: 'Chips and Dip'
    },
    {
      eventid: 5,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: 3,
      description: 'Kettle Popcorn'
    },
    {
      eventid: 5,
      defaultitemid: 102,
      itemname: 'Snacks',
      quantity: '1',
      categoryid: 2,
      ownerid: 3,
      description: 'Pita and Hummus'
    },
    {
      eventid: 5,
      defaultitemid: 303,
      itemname: 'Streamers',
      quantity: '5',
      categoryid: 3,
      ownerid: 3,
      description: 'Navy Blue'
    },
    {
      eventid: 5,
      defaultitemid: 307,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 3,
      ownerid: 3,
      description: 'Over the Hill'
    },
    {
      eventid: 5,
      defaultitemid: 101,
      itemname: 'Cake',
      quantity: '1',
      categoryid: 1,
      ownerid: 3,
      description: 'To feed 50 people saying "Robertson\'s Family Reunion 2017". Preferably half vanilla, half chocolate with vanilla frosting'
    },
    {
      eventid: 5,
      defaultitemid: 401,
      itemname: 'Soda',
      quantity: '5',
      categoryid: 2,
      ownerid: 3,
      description: 'Dr Pepper, Coke, diet Coke'
    },
    {
      eventid: 5,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '3',
      categoryid: 2,
      ownerid: 3,
      description: 'Pino Noir'
    },
    {
      eventid: 5,
      defaultitemid: 402,
      itemname: 'Forks',
      quantity: '100',
      categoryid: 2,
      ownerid: 3,
      description: 'white plastic'
    },
    {
      eventid: 5,
      defaultitemid: 404,
      itemname: 'Spoons',
      quantity: '100',
      categoryid: 2,
      ownerid: 3,
      description: 'white plastic'
    },
    {
      eventid: 5,
      defaultitemid: 403,
      itemname: 'Knives',
      quantity: '100',
      categoryid: 2,
      ownerid: 3,
      description: 'white plastic'
    },
    {
      eventid: 5,
      defaultitemid: 401,
      itemname: 'Plates',
      quantity: '50',
      categoryid: 2,
      ownerid: 3,
      description: 'Large navy blue'
    },
    {
      eventid: 5,
      defaultitemid: 401,
      itemname: 'Plates',
      quantity: '50',
      categoryid: 2,
      ownerid: 3,
      description: 'Small navy blue'
    },
    {
      eventid: 5,
      defaultitemid: 117,
      itemname: 'Burgers',
      quantity: '20',
      categoryid: 1,
      ownerid: 3,
      description: 'Turkey burgers pre-made'
    },
    {
      eventid: 5,
      defaultitemid: 118,
      itemname: 'Hotdogs',
      quantity: '20',
      categoryid: 1,
      ownerid: 3,
      description: 'Jumbo'
    },
    {
      eventid: 5,
      defaultitemid: 118,
      itemname: 'Buns',
      quantity: '50',
      categoryid: 1,
      ownerid: 3,
      description: '25 Hotdog and 25 buger buns'
    },
    {
      eventid: 5,
      defaultitemid: 121,
      itemname: 'Side Item',
      quantity: '3',
      categoryid: 1,
      ownerid: 3,
      description: 'need more side items!'
    },
    {
      eventid: 5,
      defaultitemid: 119,
      itemname: 'Other Meat Option',
      quantity: '10',
      categoryid: 1,
      ownerid: 3,
      description: 'Chicken Breasts'
    },
    {
      eventid: 5,
      defaultitemid: 123,
      itemname: 'Condements',
      quantity: '2',
      categoryid: 1,
      ownerid: 3,
      description: 'Ketchup'
    },
    {
      eventid: 5,
      defaultitemid: 123,
      itemname: 'Condements',
      quantity: '2',
      categoryid: 1,
      ownerid: 3,
      description: 'Mustard'
    },
    {
      eventid: 5,
      defaultitemid: 123,
      itemname: 'Condements',
      quantity: '2',
      categoryid: 1,
      ownerid: 3,
      description: 'Sweet Relish'
    },
    {
      eventid: 5,
      defaultitemid: 123,
      itemname: 'Condements',
      quantity: '2',
      categoryid: 1,
      ownerid: 3,
      description: 'Spicy Mustard'
    },
    {
      eventid: 5,
      defaultitemid: 125,
      itemname: 'Salad',
      quantity: '1',
      categoryid: 1,
      ownerid: 3,
      description: 'Large Pasta Salad'
    },
    {
      eventid: 5,
      defaultitemid: 125,
      itemname: 'Salad',
      quantity: '1',
      categoryid: 1,
      ownerid: 3,
      description: 'Spinach and fruit salad'
    },
    {
      eventid: 5,
      defaultitemid: 130,
      itemname: 'Fruit',
      quantity: '1',
      categoryid: 1,
      ownerid: 3,
      description: 'Assorted large platter. Whatever is in season'
    },
    {
      eventid: 5,
      defaultitemid: 127,
      itemname: 'Fruit',
      quantity: '1',
      categoryid: 1,
      ownerid: 3,
      description: 'Ranch and Balsamic'
    },
    {
      eventid: 5,
      defaultitemid: 304,
      itemname: 'Table Cloth',
      quantity: '4',
      categoryid: 3,
      ownerid: 3,
      description: 'Navy blue picnic table size'
    },
    {
      eventid: 5,
      defaultitemid: 307,
      itemname: 'Balloons',
      quantity: '20',
      categoryid: 3,
      ownerid: 3,
      description: 'Navy blue and white assorted'
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventInventories', null, {});
  }
};