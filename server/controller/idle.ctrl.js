let Idle = require('../databases/table/Idle');

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