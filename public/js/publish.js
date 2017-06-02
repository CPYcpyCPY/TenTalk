Vue.use(VueMaterial)

var store = {
  name: '',
  price: '',
  seller: '',
  phone: '',
  description: '',
}

var app = new Vue({
  el: '#app',
  data: {
    text: '闲置发布',
    store: store,
    images: [],
    err: {
      name: '',
      price: '',
      description: '',
    }
  },
  methods: {
    check: function () {
      this.reset();
      if(!this.store.name) { this.err.name = '请输入物品名'; return false; }
      if(!this.store.price) { this.err.price = '请输入价格'; return false; }
      if(!this.store.description) { this.err.description = '请输入物品描述'; return false; }
      return true
    },
    reset: function () {
      for(var key in this.err) this.err[key] = ''
    },
    selectImg: function () {
      var self = this;
      if(this.images.length >= 4) return mui.toast('最多上传四张图片');
      if(!this.token) {
        callNative.getToken(function (msg) {
          var data = msg.split(',');
          self.seller = data[1];
          self.phone = data[2];
          console.log(data);
        })
      }
      callNative.selectImg({}, function (data) {
        console.log(data)
        var url = data.split('/');
        var imgData = {
          name: url[url.length - 1],
          url: 'tentalk://' + data
        };
        self.images.push(imgData)
      })
    },
    submit: function () {
      if(!this.check()) return;
      // if(this.images.length == 0)   return mui.toast('至少上传一张图片');
      console.log(this.store);
      api.publishIdle(this.store).then(function (res) {   //现获取Idleid，再传给原生
        var idleId = res.data.idleId;
        callNative.uploadImg(idleId, function (data) {
          mui.toast('发布成功！');
          location.href = '/sell';
        })
      });
    }
  }
});