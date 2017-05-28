var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/renting', function(req, res, next) {
  res.render('renting', { title: '租房' });
});

router.get('/publish', function(req, res, next) {
  res.render('publish', { title: '闲置发布' });
});

module.exports = router;
