'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      eventid: 1,
      defaultitemid: 1,
      itemname: 'Cups',
      quantity: '50',
      categoryid: 1,
      ownerid: 135,
      description: 'solo cups'
    },
    {
      eventid: 1,
      defaultitemid: 12,
      itemname: 'Plates',
      quantity: '50',
      categoryid: 1,
      ownerid: 135,
      description: 'purple'
    },
    {
      eventid: 1,
      defaultitemid: 10,
      itemname: 'Forks',
      quantity: '50',
      categoryid: 1,
      ownerid: 135,
      description: 'plastic'
    },
    {
      eventid: 1,
      defaultitemid: 13,
      itemname: 'Cupcakes',
      quantity: '50',
      categoryid: 1,
      ownerid: 135,
      description: '25 vanilla, 25 chocolate'
    },
    {
      eventid: 1,
      defaultitemid: 1,
      itemname: 'Beer',
      quantity: '24',
      categoryid: 12,
      ownerid: 135,
      description: 'Budlight and Stella please'
    },
    {
      eventid: 2,
      defaultitemid: 1,
      itemname: 'Cups',
      quantity: '20',
      categoryid: 1,
      ownerid: 246,
      description: 'solo cups'
    },
    {
      eventid: 2,
      defaultitemid: 12,
      itemname: 'Plates',
      quantity: '20',
      categoryid: 1,
      ownerid: 246,
      description: 'purple'
    },
    {
      eventid: 2,
      defaultitemid: 10,
      itemname: 'Forks',
      quantity: '20',
      categoryid: 1,
      ownerid: 246,
      description: 'plastic'
    },
    {
      eventid: 2,
      defaultitemid: 13,
      itemname: 'Cupcakes',
      quantity: '20',
      categoryid: 1,
      ownerid: 246,
      description: '25 strawberry, 25 chocolate'
    },
    {
      eventid: 2,
      defaultitemid: 1,
      itemname: 'Beer',
      quantity: '12',
      categoryid: 12,
      ownerid: 246,
      description: 'Budlight and Stella please'
    },
    {
      eventid: 2,
      defaultitemid: 1,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 17,
      ownerid: 246,
      description: 'Cabernet'
    },
    {
      eventid: 2,
      defaultitemid: 1,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 1,
      ownerid: 246,
      description: 'Chardonnay'
    },
    {
      eventid: 3,
      defaultitemid: 1,
      itemname: 'Cups',
      quantity: '15',
      categoryid: 1,
      ownerid: 246,
      description: 'solo cups'
    },
    {
      eventid: 3,
      defaultitemid: 24,
      itemname: 'Streamers',
      quantity: '15',
      categoryid: 1,
      ownerid: 246,
      description: 'white'
    },
    {
      eventid: 3,
      defaultitemid: 34,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 1,
      ownerid: 246,
      description: 'bacholorette theme'
    },
    {
      eventid: 3,
      defaultitemid: 13,
      itemname: 'Cupcakes',
      quantity: '10',
      categoryid: 1,
      ownerid: 246,
      description: 'chocolate'
    },
    {
      eventid: 3,
      defaultitemid: 1,
      itemname: 'Beer',
      quantity: '12',
      categoryid: 12,
      ownerid: 246,
      description: 'Budlight and Stella please'
    },
    {
      eventid: 3,
      defaultitemid: 1,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 17,
      ownerid: 246,
      description: 'Champagine'
    },
    {
      eventid: 4,
      defaultitemid: 1,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 1,
      ownerid: 246,
      description: 'solo cups'
    },
    {
      eventid: 4,
      defaultitemid: 24,
      itemname: 'Streamers',
      quantity: '15',
      categoryid: 1,
      ownerid: 246,
      description: 'white'
    },
    {
      eventid: 4,
      defaultitemid: 34,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 1,
      ownerid: 246,
      description: 'bacholorette theme'
    },
    {
      eventid: 4,
      defaultitemid: 13,
      itemname: 'Cupcakes',
      quantity: '10',
      categoryid: 1,
      ownerid: 246,
      description: 'chocolate'
    },
    {
      eventid: 4,
      defaultitemid: 1,
      itemname: 'Beer',
      quantity: '12',
      categoryid: 12,
      ownerid: 246,
      description: 'Budlight and Stella please'
    },
    {
      eventid: 4,
      defaultitemid: 1,
      itemname: 'Wine',
      quantity: '4',
      categoryid: 17,
      ownerid: 246,
      description: 'Champagine'
    },
    {
      eventid: 5,
      defaultitemid: 1,
      itemname: 'Cups',
      quantity: '40',
      categoryid: 1,
      ownerid: 246,
      description: 'solo cups'
    },
    {
      eventid: 5,
      defaultitemid: 24,
      itemname: 'Streamers',
      quantity: '15',
      categoryid: 1,
      ownerid: 246,
      description: 'white'
    },
    {
      eventid: 5,
      defaultitemid: 34,
      itemname: 'Party Hats',
      quantity: '15',
      categoryid: 1,
      ownerid: 246,
      description: 'bacholorette theme'
    },
    {
      eventid: 5,
      defaultitemid: 13,
      itemname: 'Cupcakes',
      quantity: '100',
      categoryid: 1,
      ownerid: 246,
      description: 'mini chocolate and vanilla'
    },
    {
      eventid: 5,
      defaultitemid: 11,
      itemname: 'Soda',
      quantity: '5',
      categoryid: 1,
      ownerid: 246,
      description: 'Dr Pepper, Coke, diet Coke'
    },
    {
      eventid: 5,
      defaultitemid: 1,
      itemname: 'Wine',
      quantity: '3',
      categoryid: 17,
      ownerid: 246,
      description: 'Pino Noir'
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventInventory', null, {});
  }
};
