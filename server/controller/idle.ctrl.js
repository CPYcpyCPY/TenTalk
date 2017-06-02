let Idle = require('../databases/table/Idle');
let path = require('path');
let fs = require('fs');
let formidable = require('formidable');
let ImgGroup = require('../databases/table/ImgGroup');

var idleCache = {};

module.exports.getFirst = (req, res) => {
  Idle.getFirst().then((result) => {
    res.json({idles: result});
  })
};

module.exports.getByCount = (req, res) => {
  Idle.getByCount(req.query.count).then((result) => {
    res.json({idles: result});
  })
};

module.exports.getImgGroup = (req, res) => {
  ImgGroup.getByNumber(req.query.imgGroup).then((result) => {
    res.json({imgs: result});
  })
};

module.exports.uploadImg = (req, res) => {
  let form = new formidable.IncomingForm();
  form.fileDir = path.join(__dirname, '../../public/images');
  form.parse(req, (err, fileds, files) => {
    let idleId = fileds.idleId;
    let imgGroup = idleId.split('tentalk')[1];
    let urls = '';
    for(let key in files) {
      let file = files[key];
      if(key == 'activityPhoto0') idleCache.imgUrl = file.name + '.png';
      urls += (file.name + '.png')
      fs.rename(file.path, path.join(form.fileDir + '/' + idleId, file.name));
    };
    let data = {
      imgGroup: imgGroup,
      urls: urls
    };
    Idle.insert([idleCache]).then(() => {
      console.log('插入Idle成功!');
    });
    imgGroup.insert([data]).then((res) => {
      return res.end('上传成功！');
    })
  })
};

module.exports.publishIdle = (req, res) => {
  idleCache = req.body;
  let ms = new Date().getTime();    //获取时间戳，当做唯一的imgGroup
  let idleId = 'tentalk' + ms;
  console.log(req.body);
  fs.mkdirSync(path.join(__dirname, '../../public/images/' + idleId));
  idleCache.path = idleId;
  idleCache.imgGroup = ms;

  idleCache.seller = '测试者';
  idleCache.phone = '13788113242';
  idleCache.imgUrl = 'img1.png';
  Idle.insert([idleCache]).then(() => {
    console.log('插入Idle成功!');
  });
  res.json({idleId: idleId});
};
