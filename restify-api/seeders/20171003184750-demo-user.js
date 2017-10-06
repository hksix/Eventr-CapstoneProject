'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        id: 1,
        fName: 'Hamaz',
        lName: 'Haseeb',
        profPic: 'hh.jpg',
        email: 'hamza@haseeb.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        id: 2,
        fName: 'Steph',
        lName: 'Asmar',
        profPic: 'sh.jpg',
        email: 'steph@asmar.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        id: 3,
        fName: 'Katie',
        lName: 'Lane',
        profPic: 'kl.jpg',
        email: 'katie@lane.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        id: 4,
        fName: 'Jen',
        lName: 'Johnson',
        profPic: 'jj.jpg',
        email: 'jen@johns.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
