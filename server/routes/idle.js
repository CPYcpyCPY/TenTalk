let express = require('express');
let idle = require('../controller/idle.ctrl');
let router = express.Router();

module.exports = () => {
  router.get('/getFirstIdle', idle.getFirst);
  router.get('/getMoreIdle', idle.getByCount);
  router.get('/getImgGroup', idle.getImgGroup);
  router.post('/uploadImg', idle.uploadImg);
  router.post('/publishIdle', idle.publishIdle);
  return router
};
