var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/renting', function(req, res, next) {
  res.render('renting', { title: '租房' });
});

module.exports = router;
