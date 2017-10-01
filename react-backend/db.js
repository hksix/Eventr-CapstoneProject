require('dotenv').config()
const pg_promise = require('pg-promise');
const pg = pg_promise();

const dbConfig = {
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    database: process.env.DB_NAME
};

// const dbConfig = `postgres://${DB_USER}:@${DB_HOST}:5432/${DB_NAME}`;

module.exports = pg(dbConfig);