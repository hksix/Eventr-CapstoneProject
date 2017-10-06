var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/:table/:order', function(req, res, next) {
    db.query(`
    select * from ${req.params.table} ORDER BY ${req.params.order};
    `)
      .then((results)=>{
        res.json(results)
        console.log(results)

      });
});

module.exports = router;
