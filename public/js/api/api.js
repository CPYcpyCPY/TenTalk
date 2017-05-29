var api = {
  getHomeByPoint: function (data) {
    return axios.post('http://gay.edzh.me/api/filter', data)
  }
}