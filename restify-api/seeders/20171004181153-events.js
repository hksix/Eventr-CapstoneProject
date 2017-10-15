'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      id: 1,
      host_id: 3,
      name: 'Birthday Party',
      description: 'Come celebrate Stephanie\'s birthday!',
      date: '2017-10-25',
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
      name: 'Dance Party',
      description: 'Bachelorette Party',
      date: '2017-12-05',
      location: '444 Belle Isle Cir NE Atlanta GA 30329',
      category_id: 3,
    },
    {
      id: 4,
      host_id: 2,
      name: 'Beach Weekend',
      description: 'Renting a beachouse for the weekend and excited to see everyone',
      date: '2018-01-25',
      location: '404 East Bay St Savannah GA 31401',
      category_id: 1,
    },
    {
      id: 5,
      host_id: 1,
      name: 'Family Reunion',
      description: 'Celebrating our family',
      date: '2017-10-25',
      location: '1212 Peachtree Cir NE Atlanta GA 30329',
      category_id: 4,
    },
    {
      id: 6,
      host_id: 2,
      name: 'Demo Day Party',
      description: 'Come celebrate with us!',
      date: '2016-10-17',
      time: '19:00:00',
      location: '3423 Piedmont Rd NE, Atlanta, GA 30305',
      category_id: 8,
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};