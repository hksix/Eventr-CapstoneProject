var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
<<<<<<< HEAD
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
=======
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
>>>>>>> be0f841b33820c01ea49b6bc0b2bbd6a1167353b
});

module.exports = router;
