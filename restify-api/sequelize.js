const Secret = require('./secret_info');
var Sequelize = require('sequelize');
const sequelize = new Sequelize( Secret.DB , Secret.USER, Secret.PW, {
    operatorAlisases: false,
    host: Secret.HOST,
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
