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
      {
        id: 5,
        fName: 'Sarah',
        lName: 'Abbey',
        profPic: 'sa.jpg',
        email: 'sarah@37.com',
        phone: '4045554433',
        location: 'Atlanta'
      },
      {
        id: 6,
        fName: 'Bob',
        lName: 'Ross',
        profPic: 'Bob.jpg',
        email: 'bob@ross.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 7,
        fName: 'Bobby',
        lName: 'Bob',
        profPic: 'bobby.jpg',
        email: 'bobby@bob.com',
        phone: '4043332266',
        location: 'Atlanta'
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};