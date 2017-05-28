window.onload = function () {
  var reload = document.getElementById('reload');
  var useNative = document.getElementById('useNative');
  var sendMsg = document.getElementById('sendMsg');
  reload.onclick = function () {
    location.reload();
  }
  sendMsg.onclick = function () {
    WebViewJavascriptBridge.send("呵呵哒", function (res) {
      console.log(res);
    })
  }
  new Vue({
    el: '#app'
  })
}
