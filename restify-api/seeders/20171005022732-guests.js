'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guests', [{
      userid: 10159438029050500,
      attending: true,
      eventid: 6
    },
    {
      userid: 10104962580450882,
      attending: true,
      eventid: 6
    },
    {
      userid: 10155604585297184,
      attending: true,
      eventid: 6
    },
    {
     userid: 10213816111942068,
      attending: true,
      eventid: 6
    },
    {
      userid: 10213816111942068,
      attending: true,
      eventid: 1
    },
    {
      userid: 3,
      attending: false,
      eventid: 2
    },
    {
      userid: 1,
       attending: false,
       eventid: 3
     },
     {
       userid: 10213816111942068,
       attending: true,
       eventid: 3
    },
    {
      userid: 3,
      attending: false,
      eventid: 3
    },
    {
      userid: 4,
      attending: false,
      eventid: 3
    },
    {
      userid: 1,
       attending: false,
       eventid: 4
     },
     {
       userid: 2,
       attending: true,
       eventid: 4
    },
    {
      userid: 3,
      attending: true,
      eventid: 4
    },
    {
      userid: 4,
      attending: true,
      eventid: 4
    },
    {
      userid: 1,
       attending: true,
       eventid: 5
     },
     {
       userid: 2,
       attending: true,
       eventid: 5
    },
    {
      userid: 3,
      attending: false,
      eventid: 5
    },
    {
      userid: 4,
      attending: true,
      eventid: 5
    },
    {
      userid: 1,
      attending: true,
      eventid: 6
   },
   {
     userid: 2,
     attending: true,
     eventid: 6
   },
   {
     userid: 3,
     attending: true,
     eventid: 6
   },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Guests', null, {});
  }
};