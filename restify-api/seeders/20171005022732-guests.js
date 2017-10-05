'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guests', [{
      userid: 135,
      attending: true,
      eventid: 1
    },
    {
      userid: 246,
      attending: true,
      eventid: 1
    },
    {
      userid: 357,
      attending: false,
      eventid: 1
    },
    {
     userid: 468,
      attending: false,
      eventid: 2
    },
    {
      userid: 246,
      attending: true,
      eventid: 2
    },
    {
      userid: 357,
      attending: false,
      eventid: 2
    },
    {
      userid: 468,
       attending: false,
       eventid: 3
     },
     {
       userid: 246,
       attending: true,
       eventid: 3
    },
    {
      userid: 357,
      attending: false,
      eventid: 3
    },
    {
      userid: 135,
      attending: false,
      eventid: 3
    },
    {
      userid: 468,
       attending: false,
       eventid: 4
     },
     {
       userid: 246,
       attending: true,
       eventid: 4
    },
    {
      userid: 357,
      attending: true,
      eventid: 4
    },
    {
      userid: 135,
      attending: true,
      eventid: 4
    },
    {
      userid: 468,
       attending: true,
       eventid: 5
     },
     {
       userid: 246,
       attending: true,
       eventid: 5
    },
    {
      userid: 357,
      attending: false,
      eventid: 5
    },
    {
      userid: 135,
      attending: true,
      eventid: 5
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Guests', null, {});
  }
};
