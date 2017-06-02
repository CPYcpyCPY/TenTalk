let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 图片url, 图片组别, 物品详情介绍, 物品名称, 物品价格, 卖家名称, 卖家手机号
 */

function ImgGroup() {
  let name = 'ImgGroup';
  let keys = [
    { val: 'imgGroup', type: 'BIGINT UNSIGNED'},
    { val: 'urls', type: 'varchar(2000)'},
  ];
  BaseTable.call(this, name, keys);

  // 根据下拉刷新的次数获取数据
  this.getByNumber = (number) => {
    let query = `select * from ${name} where imgGroup = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  }
}

ImgGroup.prototype = new BaseTable();
ImgGroup.prototype.constructor = ImgGroup;

module.exports = new ImgGroup();
