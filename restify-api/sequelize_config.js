// const Secret = require('./secret_info');
const dotenv = require('dotenv').config()
var Sequelize = require('sequelize');
const sequelize = new Sequelize( dotenv.DB_NAME , dotenv.DB_USERNAME, dotenv.DB_PASSWORD, {
    operatorAliases: false,
    host: dotenv.DB_HOST,
    dialect: 'postgres',
    port: dotenv.DB_PORT
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



