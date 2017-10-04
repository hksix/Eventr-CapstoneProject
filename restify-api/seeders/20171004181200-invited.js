'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      user_id: 135,
      attending: true,
      event_id: 1
    },
    {
      user_id: 246,
      attending: true,
      event_id: 1
    },
    {
      user_id: 357,
      attending: false,
      event_id: 1
    },
    {
     user_id: 468,
      attending: false,
      event_id: 2
    },
    {
      user_id: 246,
      attending: true,
      event_id: 2
    },
    {
      user_id: 357,
      attending: false,
      event_id: 2
    },
    {
      user_id: 468,
       attending: false,
       event_id: 3
     },
     {
       user_id: 246,
       attending: true,
       event_id: 3
    },
    {
      user_id: 357,
      attending: false,
      event_id: 3
    },
    {
      user_id: 135,
      attending: false,
      event_id: 3
    },
    {
      user_id: 468,
       attending: false,
       event_id: 4
     },
     {
       user_id: 246,
       attending: true,
       event_id: 4
    },
    {
      user_id: 357,
      attending: true,
      event_id: 4
    },
    {
      user_id: 135,
      attending: true,
      event_id: 4
    },
    {
      user_id: 468,
       attending: true,
       event_id: 5
     },
     {
       user_id: 246,
       attending: true,
       event_id: 5
    },
    {
      user_id: 357,
      attending: false,
      event_id: 5
    },
    {
      user_id: 135,
      attending: true,
      event_id: 5
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Invited', null, {});
  }
};
