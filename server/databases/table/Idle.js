let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 图片url, 图片组别, 物品详情介绍, 物品名称, 物品价格, 卖家名称, 卖家手机号
 */

function Idle() {
  let name = 'Idle';
  let keys = [
    { val: 'imgUrl', type: 'varchar(200)'},
    { val: 'imgGroup', type: 'varchar(200)'},
    { val: 'path', type: 'varchar(200)'},
    { val: 'description', type: 'varchar(200)'},
    { val: 'name', type: 'varchar(200)'},
    { val: 'price', type: 'float'},
    { val: 'seller', type: 'varchar(200)'},
    { val: 'phone', type: 'varchar(200)'},
  ];
  BaseTable.call(this, name, keys);

  // 第一次获取前20条记录
  this.getFirst = () => {
    let query = `select * from ${name} order by id desc limit 20;`
    return new Promise((resolve, reject) =>{
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  };

  // 根据下拉刷新的次数获取数据
  this.getByCount = (count) => {
    let query = `select * from ${name} order by id desc limit ${20 + 8*(count-1)}, 8`;
    return new Promise((resolve, reject) =>{
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  }
}

Idle.prototype = new BaseTable();
Idle.prototype.constructor = Idle;

module.exports = new Idle();
