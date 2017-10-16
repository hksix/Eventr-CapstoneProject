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
        fName: 'Chris',
        lName: 'Aquino',
        profPic: 'chris.jpg',
        email: 'chris@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 8,
        fName: 'Will',
        lName: 'Elliot',
        profPic: 'will.jpg',
        email: 'will@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 9,
        fName: 'Natalie',
        lName: 'Ventura',
        profPic: 'Natalie.jpg',
        email: 'Natalie@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 10,
        fName: 'Tim',
        lName: 'Brady',
        profPic: 'Tim.jpg',
        email: 'Tim@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 11,
        fName: 'Tom',
        lName: "D'Ostillo",
        profPic: 'Tom.jpg',
        email: 'Tom@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 12,
        fName: 'Aaron',
        lName: "Sosa",
        profPic: 'Aaron.jpg',
        email: 'Aaron@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 13,
        fName: 'John',
        lName: "Hartert",
        profPic: 'John.jpg',
        email: 'John@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 14,
        fName: 'Liz',
        lName: "Obermeyer",
        profPic: 'Liz.jpg',
        email: 'Liz@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 15,
        fName: 'Andrew',
        lName: "Kroll",
        profPic: 'Andrew.jpg',
        email: 'Andrew@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 16,
        fName: 'Max',
        lName: "Irvine",
        profPic: 'Max.jpg',
        email: 'Max@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 17,
        fName: 'James',
        lName: "Hong",
        profPic: 'James.jpg',
        email: 'James@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 18,
        fName: 'Jake',
        lName: "Haden",
        profPic: 'Jake.jpg',
        email: 'Jake@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 19,
        fName: 'Max',
        lName: "McChensey",
        profPic: 'Max.jpg',
        email: 'Max@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 20,
        fName: 'Tamby',
        lName: "Kojak",
        profPic: 'Tamby.jpg',
        email: 'Tamby@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },
      {
        id: 21,
        fName: 'Zakia',
        lName: "Whiteside",
        profPic: 'Zakia.jpg',
        email: 'Zakia@gmail.com',
        phone: '4043332266',
        location: 'Atlanta'
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};