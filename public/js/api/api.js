var api = {
  getHomeByPoint: function (data) {
    return axios.post('http://tincent.edzh.me/api/filter', data)
  },
  publishIdle: function (data) {
    return axios.post('/api/publishIdle', data);
  },
  getFirstIdle: function () {
    return axios.get('/api/getFirstIdle');
  },
  getMoreIdle: function (count) {
    console.log(count);
    return axios.get('/api/getMoreIdle?count=' + count);
  },
  getImgsGroup: function (imgGroup) {
    return axios.get('/api/getImgGroup?imgGroup=' + imgGroup);
  }
};