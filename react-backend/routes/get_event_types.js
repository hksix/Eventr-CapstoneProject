var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res, next) {
  db.any(`
  select * from event_categories ORDER BY category_id;
  `)
  .then((results)=>{
      res.json(results)
  });
});



module.exports = router;

