let express = require('express');
let idle = require('../controller/idle.ctrl');
let router = express.Router();

module.exports = () => {
  router.get('/getFirstIdle', idle.getFirst);
  router.get('/getMoreIdle', idle.getByCount);
  return router
};
