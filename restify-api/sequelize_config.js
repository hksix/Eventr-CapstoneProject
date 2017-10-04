// const Secret = require('./secret_info');
const dotenv = require('dotenv').config()
var Sequelize = require('sequelize');
const sequelize = new Sequelize( dotenv.DB , dotenv.USER, dotenv.PW, {
    operatorAliases: false,
    host: dotenv.HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




  
  