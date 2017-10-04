var express = require('express');
var router = express.Router();
const db = require('../db');

router.post('/events/:location/:date/:time/:name/:description/:host_id', function(req, res, next) {
  
});

module.exports = router;
