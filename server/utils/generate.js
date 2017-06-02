// let Idle = require('../databases/table/Idle');
// let ImgGroup = require('../databases/table/ImgGroup');
//
// let idles = [
//   { imgUrl: 'idle1.jpg', path: 'tentalk1', imgGroup: 1, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521111875'},
//   { imgUrl: 'idle2.jpg', path: 'tentalk2', imgGroup: 2, description: '好，很好，非常好！', name: '键盘', price: 28.8, seller: '李四', phone: '15521112875'},
//   { imgUrl: 'idle3.jpg', path: 'tentalk3', imgGroup: 3, description: '好，很好，非常好！', name: '鼠标', price: 21.9, seller: '王五', phone: '15521113875'},
//   { imgUrl: 'idle4.jpg', path: 'tentalk4', imgGroup: 4, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521114875'},
//   { imgUrl: 'idle5.jpg', path: 'tentalk5', imgGroup: 5, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521115875'},
//   { imgUrl: 'idle6.jpg', path: 'tentalk6', imgGroup: 6, description: '好，很好，非常好！', name: '水杯', price: 128.8, seller: '张三', phone: '15521116875'},
//   { imgUrl: 'idle7.jpg', path: 'tentalk7', imgGroup: 7, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521117875'},
//   { imgUrl: 'idle8.jpg', path: 'tentalk8', imgGroup: 8, description: '好，很好，非常好！', name: '篮球', price: 28.8, seller: '张三', phone: '15521118875'},
//   { imgUrl: 'idle0.jpg', path: 'tentalk9', imgGroup: 9, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521119875'},
//   { imgUrl: 'idle10.jpg', path: 'tentalk10', imgGroup: 10, description: '好，很好，非常好！', name: '笔记本', price: 2228.8, seller: '张三', phone: '15521111875'},
//   { imgUrl: 'idle11.jpg', path: 'tentalk11', imgGroup: 11, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521121875'},
//   { imgUrl: 'idle12.jpg', path: 'tentalk12', imgGroup: 12, description: '好，很好，非常好！', name: '鼠标', price: 58.8, seller: '张三', phone: '15521131875'},
//   { imgUrl: 'idle13.jpg', path: 'tentalk13', imgGroup: 13, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521141875'},
//   { imgUrl: 'idle14.jpg', path: 'tentalk14', imgGroup: 14, description: '好，很好，非常好！', name: '水瓶', price: 48.8, seller: '张三', phone: '15521151875'},
//   { imgUrl: 'idle15.jpg', path: 'tentalk15', imgGroup: 15, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521161875'},
//   { imgUrl: 'idle16.jpg', path: 'tentalk16', imgGroup: 16, description: '好，很好，非常好！', name: '鼠标', price: 48.8, seller: '张三', phone: '15521171875'},
//   { imgUrl: 'idle17.jpg',  path: 'tental17', imgGroup: 17, description: '好，很好，非常好！', name: '球鞋', price: 38.8, seller: '张三', phone: '15521181875'},
//   { imgUrl: 'idle18.jpg',  path: 'tentalk18', imgGroup: 18, description: '好，很好，非常好！', name: '鼠标', price: 23.8, seller: '张三', phone: '15521191875'},
//   { imgUrl: 'idle19.jpg',  path: 'tentalk19', imgGroup: 19, description: '好，很好，非常好！', name: '足球', price: 28.8, seller: '张三', phone: '15521111875'},
//   { imgUrl: 'idle20.jpg',  path: 'tentalk20', imgGroup: 20, description: '好，很好，非常好！', name: '鼠标', price: 22.8, seller: '张三', phone: '15521111875'},
//   { imgUrl: 'idle21.jpg', path: 'tentalk21', imgGroup: 21, description: '好，很好，非常好！', name: '海报', price: 28.8, seller: '张三', phone: '15521211875'},
//   { imgUrl: 'idle22.jpg', path: 'tentalk22', imgGroup: 22, description: '好，很好，非常好！', name: '鼠标', price: 65.8, seller: '张三', phone: '15521311875'},
//   { imgUrl: 'idle23.jpg', path: 'tentalk23', imgGroup: 23, description: '好，很好，非常好！', name: '雨伞', price: 28.8, seller: '张三', phone: '15521411875'},
//   { imgUrl: 'idle24.jpg', path: 'tentalk24', imgGroup: 24, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521511875'},
//   { imgUrl: 'idle25.jpg', path: 'tentalk25', imgGroup: 25, description: '好，很好，非常好！', name: '键盘', price: 235.8, seller: '张三', phone: '15521611875'},
//   { imgUrl: 'idle26.jpg', path: 'tentalk26', imgGroup: 26, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521711875'},
//   { imgUrl: 'idle27.jpg', path: 'tentalk27', imgGroup: 27, description: '好，很好，非常好！', name: '数据线', price: 32.8, seller: '张三', phone: '15521811875'},
//   { imgUrl: 'idle28.jpg', path: 'tentalk28', imgGroup: 28, description: '好，很好，非常好！', name: 'IPhone6', price: 28.8, seller: '张三', phone: '15521911875'},
//   { imgUrl: 'idle29.jpg', path: 'tentalk29', imgGroup: 29, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521111875'},
//   { imgUrl: 'idle30.jpg', path: 'tentalk30', imgGroup: 30, description: '好，很好，非常好！', name: '小米5', price: 28.8, seller: '张三', phone: '15522111875'},
//   { imgUrl: 'idle31.jpg', path: 'tentalk31', imgGroup: 31, description: '好，很好，非常好！', name: '鼠标', price: 48.8, seller: '张三', phone: '15523111875'},
//   { imgUrl: 'idle32.jpg', path: 'tentalk32', imgGroup: 32, description: '好，很好，非常好！', name: '插座', price: 22.8, seller: '张三', phone: '15524111875'},
//   { imgUrl: 'idle33.jpg', path: 'tentalk33', imgGroup: 33, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15525111875'},
//   { imgUrl: 'idle34.jpg', path: 'tentalk34', imgGroup: 34, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15526111875'},
//   { imgUrl: 'idle35.jpg', path: 'tentalk35', imgGroup: 35, description: '好，很好，非常好！', name: '充电宝', price: 18.8, seller: '张三', phone: '15527111875'},
//   { imgUrl: 'idle36.jpg', path: 'tentalk36', imgGroup: 36, description: '好，很好，非常好！', name: '电话', price: 78.8, seller: '张三', phone: '15528111875'},
//   { imgUrl: 'idle37.jpg', path: 'tentalk37', imgGroup: 37, description: '好，很好，非常好！', name: '蚊帐', price: 28.8, seller: '张三', phone: '15529111875'},
//   { imgUrl: 'idle38.jpg', path: 'tentalk38', imgGroup: 38, description: '好，很好，非常好！', name: '洗衣机', price: 568.8, seller: '张三', phone: '15521111875'},
//   { imgUrl: 'idle39.jpg', path: 'tentalk39', imgGroup: 39, description: '好，很好，非常好！', name: '鼠标', price: 28.8, seller: '张三', phone: '15521212875'},
//   { imgUrl: 'idle40.jpg', path: 'tentalk40', imgGroup: 40, description: '好，很好，非常好！', name: '鼠标', price: 68.8, seller: '张三', phone: '15521133875'},
// ];
//
// let imgGroup = [
//   { imgGroup: 1, urls: 'idle11.ipg,idle12.ipg,idle13.ipg,idle14.ipg'},
//   { imgGroup: 2, urls: 'idle21.ipg,idle22.ipg,idle23.ipg,idle24.ipg'},
//   { imgGroup: 3, urls: 'idle31.ipg,idle32.ipg,idle33.ipg,idle34.ipg'},
//   { imgGroup: 4, urls: 'idle41.ipg,idle42.ipg,idle43.ipg,idle44.ipg'},
//   { imgGroup: 5, urls: 'idle51.ipg,idle52.ipg,idle53.ipg,idle54.ipg'},
//   { imgGroup: 6, urls: 'idle61.ipg,idle62.ipg,idle63.ipg,idle64.ipg'},
//   { imgGroup: 7, urls: 'idle71.ipg,idle72.ipg,idle73.ipg,idle74.ipg'},
//   { imgGroup: 8, urls: 'idle81.ipg,idle82.ipg,idle83.ipg,idle84.ipg'},
//   { imgGroup: 9, urls: 'idle91.ipg,idle92.ipg,idle93.ipg,idle94.ipg'},
// ]
//
// Idle.create().then(() => {
//   Idle.insert(idles).then(() => {
//     console.log('插入Idle成功')
//   }).catch((err) => {
//     console.log('插入失败', err);
//   })
// });

// ImgGroup.create().then(() => {
//   ImgGroup.insert(imgGroup).then(() => {
//     console.log('插入ImgGroup成功')
//   }).catch((err) => {
//     console.log('插入失败', err);
//   })
// });

var obj = {
  a: 1,
  b: 2
};

for(let key, index in obj) {
  console.log(key, index)
}