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
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '20',
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
      description: 'Budlight and Stella please'
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
      description: 'white'
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
      itemname: 'Beer',
      quantity: '12',
      categoryid: 2,
      ownerid: 3,
      description: 'Budlight and Stella please'
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
      description: 'bacholorette theme'
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
      quantity: '12',
      categoryid: 2,
      ownerid: 3,
      description: 'Budlight and Stella please'
    },
    {
      eventid: 4,
      defaultitemid: 407,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 2,
      ownerid: 3,
      description: 'Champagine'
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
      defaultitemid: 303,
      itemname: 'Streamers',
      quantity: '15',
      categoryid: 3,
      ownerid: 3,
      description: 'white'
    },
    {
      eventid: 5,
      defaultitemid: 307,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 3,
      ownerid: 3,
      description: 'bacholorette theme'
    },
    {
      eventid: 5,
      defaultitemid: 101,
      itemname: 'Cupcakes',
      quantity: '100',
      categoryid: 1,
      ownerid: 3,
      description: 'mini chocolate and vanilla'
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
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventInventories', null, {});
  }
};
