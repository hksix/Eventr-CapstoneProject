var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res, next) {
<<<<<<< HEAD
  db.any(`
  select * from event_categories ORDER BY category_id;
  `)
  .then((results)=>{
      res.json(results)
  });
});


=======
    db.query(`
      select * from event_categories;
    `)
      .then((result)=>{
        res.json(results)

      });
});
>>>>>>> fc84781b6250dfa876053ec45aa64af90179f907

module.exports = router;

