var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res, next) {
    db.query(`
      select * from event_categories;
    `)
      .then((result)=>{
        res.json(results)

      });
});

module.exports = router;

