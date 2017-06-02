/**
 * Created by hualy on 2017/5/28.
 */

var app = new Vue({
  el: '#app',
  data: {
    cardInfo: [],
    refleshCount: 1,
    loading: false
  },
  created: function () {
    //开始请求数据，获得初始数据
    // if(localStorage.getItem('cardInfo')) {
    //     this.cardInfo = JSON.parse(localStorage.getItem('cardInfo'));
    // } else {
        api.getFirstIdle().then((res)=> {
          var data = res.data.idles;
          this.refleshCount = 0;
          this.cardInfo = data;
          // })
        });
    // }
    mui.init({
      pullRefresh: {
        container: "#refreshContainer",//下拉刷新容器标识
        down: {
          callback: this.pulldownRefresh
        },
        up: {
          contentrefresh: "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
          contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
          callback: this.pullupRefresh
        }
      }
    });
    //启动图片预览功能
    mui.previewImage();

    mui('.mui-scroll-wrapper').scroll({
      indicators: false, //是否显示滚动条
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  mounted: function () {
    // this.previewImage();
  },
  methods: {
    pulldownRefresh: function () {
      //获得刷新数据
      this.getCardInfo(function () {
        mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
      })
    },
    pullupRefresh: function () {
      //获得上拉加载数据
      this.getCardInfoMore(function () {
        mui('#refreshContainer').pullRefresh().endPullupToRefresh();
      })
    },
    getCardInfo: function (cb) {
          this.loading = true;
          var self = this;
          var start = new Date().getSeconds(), end;
          self.cardInfo = [];
          api.getFirstIdle().then((res)=> {
              end = new Date().getSeconds();
              var data = res.data.idles;
              if(end - start <=1){
                  setTimeout(function () {
                      self.rentData(data,cb);
                  },1000);
              }else {
                  self.rentData(data,cb);
              }
          })

        },
      rentData: function (data,cb) {
          if(cb) cb();
          this.loading = false;
          if(!data || data.length == 0){
              return mui.alert('暂无数据');
          }
          mui.toast('已刷新');
          //渲染数据
          this.cardInfo = data;
          //本地存储
          localStorage.setItem('cardInfo', JSON.stringify(self.cardInfo));
      },
      getCardInfoMore:function (cb) {
          var self = this;
          if (cb) cb();
          api.getMoreIdle(this.refleshCount++).then((res)=> {
              var data = res.data.idles;
            self.cardInfo.concat(data);

              if(data.length < 8) mui.toast("没有更多数据！");
          })
          //本地存储
          localStorage.setItem('cardInfo', JSON.stringify(self.cardInfo));
      },
    goToPublish: function () {
      location.href = '/publish'
    }
  }
});

