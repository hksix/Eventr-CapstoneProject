'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      id: 1,
      host_id: 3,
      name: "Grandma's Birthday Party",
      description: "Come celebrate Grandma's 90th Birthday!",
      date: '2017-10-25',
      time: '7:00 pm',
      location: '999 Belle Isle Cir NE Atlanta GA 30329',
      category_id: 1,
    },
    {
      id: 2,
      host_id: 3,
      name: 'Family Celebration',
      description: 'Come celebrate Grandma\'s 90th birthday!',
      date: '2017-11-20',
      location: '2222 Belle Isle Cir NE Atlanta GA 30329',
      category_id: 4,
    },
    {
      id: 3,
      host_id: 4,
      name: 'Bachelorette Party',
      description: 'Bachelorette Party',
      date: '2017-10-28',
      time: '9:00 pm',
      location: '444 Belle Isle Cir NE Atlanta GA 30329',
      category_id: 3,
    },
    {
      id: 4,
      host_id: 2,
      name: 'Halloween Party',
      description: 'BOO!',
      date: '2017-10-31',
      location: '404 East Bay St Savannah GA 31401',
      category_id: 1,
    },
    {
      id: 5,
      host_id: 10213816111942068,
      name: 'My Birthday!',
      description: 'Celebrate my bday!',
      date: '2017-11-15',
      time: '17:00',
      location: 'Downtown Atlanta',
      category_id: 4,
    },
    {
      id: 6,
      host_id: 10213816111942068,
      name: 'DigitalCrafts Demo Day!',
      description: 'Come celebrate our graduation with us!',
      date: '2017-10-17',
      time: '5:00 pm',
      location: '3423 Piedmont Rd NE, Atlanta, GA 30305',
      category_id: 8,
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};