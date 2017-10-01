var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  db.any(`
  select * from users;
  `)
  .then((results)=>{
      console.log(results)
      res.json(results)
  });

  // res.json([{
  // 	id: 1,
  // 	username: "YAYYY"
  // }, {
  // 	id: 2,
  // 	username: "User"
  // }]);

});

module.exports = router;
