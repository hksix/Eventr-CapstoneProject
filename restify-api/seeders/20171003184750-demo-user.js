'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        id: 10159438029050500,
        fName: 'Hamaz',
        lName: 'Haseeb',
        profPic: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12669436_10156519015535501_7356841501209691754_n.jpg?oh=7937348260ae567fd7c51b416802b4a6&oe=5A7B0972',
        email: 'hamza@haseeb.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        id: 10104962580450882,
        fName: 'Steph',
        lName: 'Asmar',
        profPic: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20638087_10104780656323292_8939046881194157868_n.jpg?oh=f92fae4c296b7b2cbdfe22097f46deed&oe=5A75D2D8',
        email: 'steph@asmar.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        id: 10155604585297184,
        fName: 'Katie',
        lName: 'Lane',
        profPic: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c0.0.50.50/p50x50/18740237_10155180569332184_4613134102951380289_n.jpg?oh=67f081b1b460bec30fd725f709eceae3&oe=5A7C0739',
        email: 'katie@lane.com',
        phone: '4045056789',
        location: 'Atlanta'
      },
      {
        id: 10213816111942068,
        fName: 'Jennifer',
        lName: 'Johnson',
        profPic: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20621819_10213269519157589_7085536892452020603_n.jpg?oh=7e186116e7f4cfa3b4017c4c7cf353a7&oe=5A6868FE',
        email: 'jen@johnson.com',
        phone: '4041234567',
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