var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.any(`
  select * from users;
  `)
  .then((results)=>{
      console.log(results)
      res.json(results)
  });
});

module.exports = router;
