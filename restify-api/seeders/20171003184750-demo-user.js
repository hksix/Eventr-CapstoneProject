'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        user_id: 135,
        fName: 'Hamaz',
        lName: 'Haseeb',
        profPic: 'hh.jpg',
        email: 'hamza@haseeb.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        user_id: 246,
        fName: 'Steph',
        lName: 'Asmar',
        profPic: 'sh.jpg',
        email: 'steph@asmar.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        user_id: 357,
        fName: 'Katie',
        lName: 'Lane',
        profPic: 'kl.jpg',
        email: 'katie@lane.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        user_id: 468,
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
