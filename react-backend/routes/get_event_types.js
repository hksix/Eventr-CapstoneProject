var express = require('express');
var router = express.Router();
const db = require('../db');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('event_types', { title: 'HELLO' });
// });


router.get('/', function(req, res, next) {
    db.query(`
      select * from event_categories;
    `)
      .then((result)=>{
        res.render('event_types',{
          users: result
        })
        .catch((error) => {

          });
      });
});


module.exports = router;
