var express = require('express');
var router = express.Router();
const db = require('../db');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('event_types', { title: 'HALP' });
// });


router.get('/', function(req, res, next) {
    db.query(`
      select * from event_categories;
    `)
      .then((result)=>{
          console.log(result);
        res.render('event_types',{
          events: result
        });

      });
});


module.exports = router;
