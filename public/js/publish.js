Vue.use(VueMaterial)

var store = {
  name: '',
  price: '',
  token: '',
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
        callNative.getToken(function (token) {
          self.token = token;
          console.log(token);
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
      // if(this.images.length == 0) return mui.toast('至少上传一张图片');
      this.store.images = this.images;
      this.store.images = ['idle1.png', 'idle2.jpg', 'idle3.png'];
      console.log(this.store);
      api.publishIdle(this.store).then(function (res) {
        console.log(res);
      })
    }
  }
});