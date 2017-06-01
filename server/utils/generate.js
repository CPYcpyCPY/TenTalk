let Idle = require('../databases/table/Idle');

let idles = [
  { imgUrl: 'idle1.jpg', imgGroup: 1, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521111875'},
  { imgUrl: 'idle2.jpg', imgGroup: 2, description: '好，很好，非常好！', name: '键盘', price: 28.8, seller: '李四', phone: '15521112875'},
  { imgUrl: 'idle3.jpg', imgGroup: 3, description: '好，很好，非常好！', name: '鼠标', price: 21.9, seller: '王五', phone: '15521113875'},
  { imgUrl: 'idle4.jpg', imgGroup: 4, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521114875'},
  { imgUrl: 'idle5.jpg', imgGroup: 5, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521115875'},
  { imgUrl: 'idle6.jpg', imgGroup: 6, description: '好，很好，非常好！', name: '水杯', price: 128.8, seller: '张三', phone: '15521116875'},
  { imgUrl: 'idle7.jpg', imgGroup: 7, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521117875'},
  { imgUrl: 'idle8.jpg', imgGroup: 8, description: '好，很好，非常好！', name: '篮球', price: 28.8, seller: '张三', phone: '15521118875'},
  { imgUrl: 'idle0.jpg', imgGroup: 9, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521119875'},
  { imgUrl: 'idle10.jpg', imgGroup: 10, description: '好，很好，非常好！', name: '笔记本', price: 2228.8, seller: '张三', phone: '15521111875'},
  { imgUrl: 'idle11.jpg', imgGroup: 11, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521121875'},
  { imgUrl: 'idle12.jpg', imgGroup: 12, description: '好，很好，非常好！', name: '鼠标', price: 58.8, seller: '张三', phone: '15521131875'},
  { imgUrl: 'idle13.jpg', imgGroup: 13, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521141875'},
  { imgUrl: 'idle14.jpg', imgGroup: 14, description: '好，很好，非常好！', name: '水瓶', price: 48.8, seller: '张三', phone: '15521151875'},
  { imgUrl: 'idle15.jpg', imgGroup: 15, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521161875'},
  { imgUrl: 'idle16.jpg', imgGroup: 16, description: '好，很好，非常好！', name: '鼠标', price: 48.8, seller: '张三', phone: '15521171875'},
  { imgUrl: 'idle17.jpg', imgGroup: 17, description: '好，很好，非常好！', name: '球鞋', price: 38.8, seller: '张三', phone: '15521181875'},
  { imgUrl: 'idle18.jpg', imgGroup: 18, description: '好，很好，非常好！', name: '鼠标', price: 23.8, seller: '张三', phone: '15521191875'},
  { imgUrl: 'idle19.jpg', imgGroup: 19, description: '好，很好，非常好！', name: '足球', price: 28.8, seller: '张三', phone: '15521111875'},
  { imgUrl: 'idle20.jpg', imgGroup: 20, description: '好，很好，非常好！', name: '鼠标', price: 22.8, seller: '张三', phone: '15521111875'},
  { imgUrl: 'idle21.jpg', imgGroup: 21, description: '好，很好，非常好！', name: '海报', price: 28.8, seller: '张三', phone: '15521211875'},
  { imgUrl: 'idle22.jpg', imgGroup: 22, description: '好，很好，非常好！', name: '鼠标', price: 65.8, seller: '张三', phone: '15521311875'},
  { imgUrl: 'idle23.jpg', imgGroup: 23, description: '好，很好，非常好！', name: '雨伞', price: 28.8, seller: '张三', phone: '15521411875'},
  { imgUrl: 'idle24.jpg', imgGroup: 24, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521511875'},
  { imgUrl: 'idle25.jpg', imgGroup: 25, description: '好，很好，非常好！', name: '键盘', price: 235.8, seller: '张三', phone: '15521611875'},
  { imgUrl: 'idle26.jpg', imgGroup: 26, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521711875'},
  { imgUrl: 'idle27.jpg', imgGroup: 27, description: '好，很好，非常好！', name: '数据线', price: 32.8, seller: '张三', phone: '15521811875'},
  { imgUrl: 'idle28.jpg', imgGroup: 28, description: '好，很好，非常好！', name: 'IPhone6', price: 28.8, seller: '张三', phone: '15521911875'},
  { imgUrl: 'idle29.jpg', imgGroup: 29, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521111875'},
  { imgUrl: 'idle30.jpg', imgGroup: 30, description: '好，很好，非常好！', name: '小米5', price: 28.8, seller: '张三', phone: '15522111875'},
  { imgUrl: 'idle31.jpg', imgGroup: 31, description: '好，很好，非常好！', name: '鼠标', price: 48.8, seller: '张三', phone: '15523111875'},
  { imgUrl: 'idle32.jpg', imgGroup: 32, description: '好，很好，非常好！', name: '插座', price: 22.8, seller: '张三', phone: '15524111875'},
  { imgUrl: 'idle33.jpg', imgGroup: 33, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15525111875'},
  { imgUrl: 'idle34.jpg', imgGroup: 34, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15526111875'},
  { imgUrl: 'idle35.jpg', imgGroup: 35, description: '好，很好，非常好！', name: '充电宝', price: 18.8, seller: '张三', phone: '15527111875'},
  { imgUrl: 'idle36.jpg', imgGroup: 36, description: '好，很好，非常好！', name: '电话', price: 78.8, seller: '张三', phone: '15528111875'},
  { imgUrl: 'idle37.jpg', imgGroup: 37, description: '好，很好，非常好！', name: '蚊帐', price: 28.8, seller: '张三', phone: '15529111875'},
  { imgUrl: 'idle38.jpg', imgGroup: 38, description: '好，很好，非常好！', name: '洗衣机', price: 568.8, seller: '张三', phone: '15521111875'},
  { imgUrl: 'idle39.jpg', imgGroup: 39, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521212875'},
  { imgUrl: 'idle40.jpg', imgGroup: 40, description: '好，很好，非常好！', name: '鼠标', price: 68.8, seller: '张三', phone: '15521133875'},
];

Idle.create().then(() => {
  Idle.insert(idles).then(() => {
    console.log('插入Idle成功')
  }).catch((err) => {
    console.log('插入失败', err);
  })
});