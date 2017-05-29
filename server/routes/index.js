var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

router.get('/sell', function(req, res, next) {
    res.render('sell', { title: '跳蚤市场' });
});

module.exports = router;
