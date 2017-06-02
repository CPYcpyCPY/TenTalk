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
    getToken: function (cb) {
      bridge.callHandler('getToken', {},
        function (responseData) {
          cb(responseData);
        }
      )
    },
    selectImg: function (params, cb) {
      bridge.callHandler('selectImg',
        { param: params},
        function (responseData) {
          cb(responseData);
        }
      )
    },
    uploadImg: function (idle_id, cb) {
      bridge.callHandler('uploadImg', idle_id, function (responseData) {
        cb(responseData);
      })
    }
  }
})