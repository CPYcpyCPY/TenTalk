/**
 * Created by hualy on 2017/5/28.
 */

var app = new Vue({
    el: '#app',
    data: {
        cardInfo: []
    },
    created: function () {
        //开始请求数据，获得初始数据
        console.log(localStorage.getItem('cardInfo') )
        this.cardInfo = localStorage.getItem('cardInfo') ? JSON.parse(localStorage.getItem('cardInfo')) : [{
                url:'./images/cbd.jpg',
                group:'1',
                content: '标题',
                name:'MacPro',
                price:'998$',
                detail:'dkfjslkdjflsjdflsdfsdfs',
                seller:'hualyzheng',
                phone:'12345678909'
            }];
          mui.init({
              pullRefresh : {
                  container:"#refreshContainer",//下拉刷新容器标识
                  down: {
                      callback: this.pulldownRefresh
                  },
                  up: {
                      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
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
    mounted: function(){
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
            //获得下拉
            this.getCardInfo(function () {
                mui('#refreshContainer').pullRefresh().endPullupToRefresh();
            })
        },
        getCardInfo: function (cb) {
            var self = this;
            if (cb) cb();
            setTimeout(function () {
                self.cardInfo.push({
                    url:'./images/cbd.jpg',
                    group:'1',
                    content: '标题',
                    name:'MacPro',
                    price:'998$',
                    detail:'dkfjslkdjflsjdflsdfsdfs',
                    seller:'hualyzheng',
                    phone:'12345678909'
                })
            },1500);
            //本地存储
            localStorage.setItem('cardInfo',JSON.stringify(self.cardInfo));
        }
    }
});

