Vue.use(VueMaterial)

var app = new Vue({
  el: '#app',
  data: {
    text: '闲置发布',
    images: [{}, {}, {}, {}]
  },
  methods: {
    addImg: function () {

    },
    submit: function () {
      console.log('提交')
    }
  }
});