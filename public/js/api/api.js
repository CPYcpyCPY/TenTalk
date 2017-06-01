var api = {
  getHomeByPoint: function (data) {
    return axios.post('http://tincent.edzh.me/api/filter', data)
  },
  publishIdle: function (data) {
    return axios.post('http://112.74.124.10/publishIdle', data);
  }
}