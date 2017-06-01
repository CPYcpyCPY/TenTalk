Vue.use(VueMaterial)
function handleData(data) {
  var startIndex = data.indexOf('(');
  if (startIndex != -1) return data.substr(0, startIndex);
  else return data
};

var app = new Vue({
  el: '#app',
  data: {
    text: '租房',
    showLine: false,
    showStation: false,
    curLine: '',
    rooms: [],
    loading: false,
    noData: '请根据线路地点选择房源',
    userPicker: null,
    routes: routes
  },
  beforeCreate: function () {
    for (var i = 0; i < routes.length; i++) {
      var len = routes[i].route.length;
      var start = handleData(routes[i].route[0].station),
        end = handleData(routes[i].route[len - 1].station);
      routes[i].text = routes[i].line + ' ' + start + '-' + end;
    }
  },
  created: function () {
    this.rooms = localStorage.getItem('rooms') ?
      JSON.parse(localStorage.getItem('rooms')) : [];
    mui.init({
      pullRefresh: {
        container: '#pullrefresh',
        down: {
          callback: this.pulldownRefresh
        }
      }
    });
  },
  mounted: function() {
    this.bindATag();
  },
  methods: {
    pulldownRefresh: function () {
      this.getRooms(this.curData, function () {
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh()
      })
    },
    chooseLine: function () {
      this.showLine = !this.showLine;
      var self = this;
      this.userPicker = new mui.PopPicker();
      this.userPicker.setData(this.routes);
      this.userPicker.show(function (items) {
        var item = items[0]
        for (var i = 0; i < item.route.length; i++)
          item.route[i].text = item.route[i].station
        self.curLine = item.route
        mui.toast('已经选择线路:' + item.text)
      });
    },
    chooseStation: function () {
      var self = this;
      this.showStation = !this.showStation;
      this.userPicker = new mui.PopPicker();
      this.userPicker.setData(this.curLine)
      this.userPicker.show(function (items) {
        var item = items[0];
        var data = {
          distance: 1000,
          points: [[item.longitude, item.latitude]]
        };
        self.curData = data;
        self.getRooms(data);
      })
    },
    bindATag: function () {
      mui('#pullrefresh').on('tap', 'a', function (e) {
        var target = e.target;
        while (target.tagName != 'A') {
          target = target.parentNode;
        }
        location.href = target.href
      })
    },
    getRooms: function (data, cb) {
      this.loading = true;
      var self = this;
      var start = new Date().getSeconds(), end;
      api.getHomeByPoint(data).then(function (res) {
        end = new Date().getSeconds();
        if(end - start <= 1) {
          setTimeout(function () {
            self.showResult(res.data, cb)
          }, 1000)
        } else {
          self.showResult(res.data, cb)
        }
      })
    },
    showResult: function (data, cb) {
      if (cb) cb();
      this.loading = false;
      if (!data || !data.data || data.data.length == 0) return mui.alert("暂无新的租房信息");
      mui.toast('以获取最新租房信息');
      this.rooms = data.data;
      localStorage.setItem('rooms', JSON.stringify(this.rooms));
    }
  }
})
