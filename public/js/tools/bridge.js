function connectWebViewJavascriptBridge(callback) {
  if(window.WebViewJavascriptBridge) {
    callback(WebViewJavascriptBridge)
  } else {
    document.addEventListener('WebViewJavascriptBridgeReady', function () {
      callback(WebViewJavascriptBridge)
    }, false)
  }
}

connectWebViewJavascriptBridge(function (bridge) {
  bridge.init();

  // 添加调用原生方法
  window.callNative = {
    selectImg: function (params, cb) {
      bridge.callHandler('selectImg',
        { param: params},
        function (responseData) {
          cb(responseData);
        }
      )
    }
  }
})