'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      id: 1,
      host_id: 135,
      name: 'Birthday Party',
      description: 'Come celebrate Stephanie\'s birthday!',
      date: '2017-10-25',
      location: '999 Belle Isle Cir NE Atlanta GA 30329',
      category_id: 1,
    },
    {
      id: 2,
      host_id: 135,
      name: 'Family Celebration',
      description: 'Come celebrate Grandma\'s 90th birthday!',
      date: '2017-11-20',
      location: '2222 Belle Isle Cir NE Atlanta GA 30329',
      category_id: 4,
    },
    {
      id: 3,
      host_id: 135,
      name: 'Dance Party',
      description: 'Let\'s dance!',
      date: '2017-12-05',
      location: '444 Belle Isle Cir NE Atlanta GA 30329',
      category_id: 3,
    },
    {
      id: 4,
      host_id: 135,
      name: 'Beach Weekend',
      description: 'Renting a beachoutse for the weekend and excited to see everyone',
      date: '2018-01-25',
      location: '404 East Bay St Savannah GA 31401',
      category_id: 1,
    },
    {
      id: 5,
      host_id: 135,
      name: 'Family Reunion',
      description: 'Celebrating our family',
      date: '2017-10-25',
      location: '1212 Belle Isle Cir NE Atlanta GA 30329',
      category_id: 4,
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
