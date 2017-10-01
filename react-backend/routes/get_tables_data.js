var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/:table/:order', function(req, res, next) {
    db.any('select * from ${table:name} ORDER BY ${order:raw}', req.params)
      .then(results => {
        res.json(results)
      });
});

module.exports = router;
