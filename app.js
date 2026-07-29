(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = {"package":"com.project.catering","name":"餐饮创业智能助手","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1070,"icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"}],"permissions":[{"origin":"*"}],"template/official":"demo-template","config":{"logLevel":"debug"},"router":{"entry":"pages/Demo","pages":{"pages/Demo":{"component":"index"},"pages/DemoDetail":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","description":"快应用卡片展示","component":"index","path":"/CardDemo","minPlatformVersion":1032,"targetManufactorys":["vivo"],"features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"pages/Demo":{"titleBarText":"快应用示例模版"},"pages/DemoDetail":{"titleBarText":"详情页"}}}}
    var createAppHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\manifest-loader.js?path=d:\\AIGC\\catering-agent\\catering\\src!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\AIGC\\catering-agent\\catering&cacheDirectory&comments=false&configFile=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\manifest-loader.js?path=d:\AIGC\catering-agent\catering\src!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\babel-loader\lib\index.js?cwd=d:\AIGC\catering-agent\catering&cacheDirectory&comments=false&configFile=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const $utils = (__webpack_require__(/*! ./helper/utils */ "./src/helper/utils.js")["default"]);
const $apis = (__webpack_require__(/*! ./helper/apis */ "./src/helper/apis/index.js")["default"]);
const hook2global = __webpack_require__.g.__proto__ || __webpack_require__.g;
hook2global.$utils = $utils;
hook2global.$apis = $apis;
var _default = exports.default = {
  onCreate() {}
};}

/***/ }),

/***/ "./src/helper/ajax.js":
/*!****************************!*\
  !*** ./src/helper/ajax.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/helper/utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * 封装了一些网络请求方法，方便通过 Promise 的形式请求接口
 */

const TIMEOUT = 20000;
Promise.prototype.finally = function (callback) {
  const P = this.constructor;
  return this.then(value => P.resolve(callback()).then(() => value), reason => P.resolve(callback()).then(() => {
    throw reason;
  }));
};

/**
 * 调用快应用 fetch 接口做网络请求
 * @param params
 */
function fetchPromise(params) {
  return new Promise((resolve, reject) => {
    _system.default.fetch({
      url: params.url,
      method: params.method,
      data: params.data
    }).then(response => {
      const result = response.data;
      const content = JSON.parse(result.data);
      /* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */
      content.success ? resolve(content.value) : resolve(content.message);
    }).catch((error, code) => {
      console.log(`🐛 request fail, code = ${code}`);
      reject(error);
    }).finally(() => {
      console.log(`✔️ request @${params.url} has been completed.`);
      resolve();
    });
  });
}

/**
 * 处理网络请求，timeout 是网络请求超时之后返回，默认 20s 可自行修改
 * @param params
 */
function requestHandle(params, timeout = TIMEOUT) {
  try {
    return Promise.race([fetchPromise(params), new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('网络状况不太好，再刷新一次？'));
      }, timeout);
    })]);
  } catch (error) {
    console.log(error);
  }
}
var _default = exports["default"] = {
  post: function (url, params) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    });
  },
  get: function (url, params) {
    return requestHandle({
      method: 'get',
      url: _utils.default.queryString(url, params)
    });
  },
  put: function (url, params) {
    return requestHandle({
      method: 'put',
      url: url,
      data: params
    });
  }
  // 如果，method 您需要更多类型，可自行添加更多方法；
};

/***/ }),

/***/ "./src/helper/apis/example.js":
/*!************************************!*\
  !*** ./src/helper/apis/example.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ajax = _interopRequireDefault(__webpack_require__(/*! ../ajax */ "./src/helper/ajax.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @desc 在实际开发中，您可以将 baseUrl 替换为您的请求地址前缀；
 *
 * 已将 $apis 挂载在 global，您可以通过如下方式，进行调用：
 * $apis.example.getApi().then().catch().finally()
 *
 * 备注：如果您不需要发起请求，删除 apis 目录，以及 app.ux 中引用即可；
 */
const baseUrl = 'https://api.exampel.com/';
var _default = exports["default"] = {
  getApi(data) {
    return _ajax.default.get(`${baseUrl}your-project-api`, data);
  },
  postOtherApi(data) {
    return _ajax.default.post(`${baseUrl}your-project-api`, data);
  }
};

/***/ }),

/***/ "./src/helper/apis/index.js":
/*!**********************************!*\
  !*** ./src/helper/apis/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * 导出 apis 下目录的所有接口
 */
const files = __webpack_require__("./src/helper/apis sync recursive \\.js");
const modules = {};
files.keys().forEach(key => {
  if (key === './index.js') {
    return;
  }
  modules[key.replace(/(^\.\/|\.js$)/g, '')] = files(key).default;
});
var _default = exports["default"] = modules;

/***/ }),

/***/ "./src/helper/utils.js":
/*!*****************************!*\
  !*** ./src/helper/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * 您可以将常用的方法、或系统 API，统一封装，暴露全局，以便各页面、组件调用，而无需 require / import.
 */
const prompt = $app_require$('@app-module/system.prompt');

/**
 * 拼接 url 和参数
 */
function queryString(url, query) {
  let str = [];
  for (let key in query) {
    str.push(key + '=' + query[key]);
  }
  let paramStr = str.join('&');
  return paramStr ? `${url}?${paramStr}` : url;
}
function showToast(message = '', duration = 0) {
  if (!message) return;
  prompt.showToast({
    message: message,
    duration
  });
}
var _default = exports["default"] = {
  showToast,
  queryString
};

/***/ }),

/***/ "./src/helper/apis sync recursive \\.js":
/*!************************************!*\
  !*** ./src/helper/apis/ sync \.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./example.js": "./src/helper/apis/example.js",
	"./index.js": "./src/helper/apis/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/helper/apis sync recursive \\.js";

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.project.catering","name":"餐饮创业智能助手","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1070,"icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"}],"permissions":[{"origin":"*"}],"template/official":"demo-template","config":{"logLevel":"debug"},"router":{"entry":"pages/Demo","pages":{"pages/Demo":{"component":"index"},"pages/DemoDetail":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","description":"快应用卡片展示","component":"index","path":"/CardDemo","minPlatformVersion":1032,"targetManufactorys":["vivo"],"features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"pages/Demo":{"titleBarText":"快应用示例模版"},"pages/DemoDetail":{"titleBarText":"详情页"}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

var $app_style$ = {}
var $app_script$ = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\manifest-loader.js?path=d:\AIGC\catering-agent\catering\src!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\babel-loader\lib\index.js?cwd=d:\AIGC\catering-agent\catering&cacheDirectory&comments=false&configFile=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\manifest-loader.js?path=d:\\AIGC\\catering-agent\\catering\\src!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\AIGC\\catering-agent\\catering&cacheDirectory&comments=false&configFile=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  
  $app_script$($app_module$, $app_exports$, $app_require$)
  if ($app_exports$.__esModule && $app_exports$.default) {
    $app_module$.exports = $app_exports$.default
  }
  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
  $app_module$.exports.style = { list: [ $app_style$ ] }
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "2.1.0" })

})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaUI7QUFDM0QsaUNBQWlDO0FBQ2pDO0FBQ0EsQ0FBQztBQUNELDBDQUEwQyxpQkFBaUIsT0FBd0IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdGVyaW5nLy4vc3JjL2FwcC51eD8yM2MzIiwid2VicGFjazovL2NhdGVyaW5nLy4vc3JjL2hlbHBlci9hamF4LmpzPzE4MWQiLCJ3ZWJwYWNrOi8vY2F0ZXJpbmcvLi9zcmMvaGVscGVyL2FwaXMvZXhhbXBsZS5qcz82ZDJlIiwid2VicGFjazovL2NhdGVyaW5nLy4vc3JjL2hlbHBlci9hcGlzL2luZGV4LmpzPzFlMmIiLCJ3ZWJwYWNrOi8vY2F0ZXJpbmcvLi9zcmMvaGVscGVyL3V0aWxzLmpzPzg5ZGYiLCJ3ZWJwYWNrOi8vY2F0ZXJpbmcvLi9zcmMvaGVscGVyL2FwaXMvIHN5bmMgXFwuanM/OWQ2OSIsIndlYnBhY2s6Ly9jYXRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcD83ZjgwIiwid2VicGFjazovL2NhdGVyaW5nL3dlYnBhY2svcnVudGltZS9nbG9iYWw/OTkzNyIsIndlYnBhY2s6Ly9jYXRlcmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kPzhiYzUiLCJ3ZWJwYWNrOi8vY2F0ZXJpbmcvLi9zcmMvYXBwLnV4Pzk2NTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbi8qKlxuICog5bqU55So57qn5Yir55qE6YWN572u77yM5L6b5omA5pyJ6aG16Z2i5YWs55SoXG4gKi9cblxuY29uc3QgJHV0aWxzID0gcmVxdWlyZSgnLi9oZWxwZXIvdXRpbHMnKS5kZWZhdWx0XG5jb25zdCAkYXBpcyA9IHJlcXVpcmUoJy4vaGVscGVyL2FwaXMnKS5kZWZhdWx0XG5cbi8qIEBkZXNjOiDms6jlhaXmlrnms5Xoh7PlhajlsYAgZ2xvYmFsLOS7peS+v+mhtemdouiwg+eUqCAqL1xuY29uc3QgaG9vazJnbG9iYWwgPSBnbG9iYWwuX19wcm90b19fIHx8IGdsb2JhbFxuaG9vazJnbG9iYWwuJHV0aWxzID0gJHV0aWxzXG5ob29rMmdsb2JhbC4kYXBpcyA9ICRhcGlzXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25DcmVhdGUoKSB7fVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIOWwgeijheS6huS4gOS6m+e9kee7nOivt+axguaWueazle+8jOaWueS+v+mAmui/hyBQcm9taXNlIOeahOW9ouW8j+ivt+axguaOpeWPo1xuICovXG5pbXBvcnQgJGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnXG5pbXBvcnQgJHV0aWxzIGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IFRJTUVPVVQgPSAyMDAwMFxuXG5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgY29uc3QgUCA9IHRoaXMuY29uc3RydWN0b3JcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICB2YWx1ZSA9PiBQLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXG4gICAgcmVhc29uID0+XG4gICAgICBQLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRocm93IHJlYXNvblxuICAgICAgfSlcbiAgKVxufVxuXG4vKipcbiAqIOiwg+eUqOW/q+W6lOeUqCBmZXRjaCDmjqXlj6PlgZrnvZHnu5zor7fmsYJcbiAqIEBwYXJhbSBwYXJhbXNcbiAqL1xuZnVuY3Rpb24gZmV0Y2hQcm9taXNlKHBhcmFtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICRmZXRjaFxuICAgICAgLmZldGNoKHtcbiAgICAgICAgdXJsOiBwYXJhbXMudXJsLFxuICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QsXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5kYXRhXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKVxuICAgICAgICAvKiBAZGVzYzog5Y+v6Lef5YW35L2T5LiN5ZCM5Lia5Yqh5o6l5Y+j5pWw5o2u77yM6L+U5Zue5L2g5omA6ZyA6KaB55qE6YOo5YiG77yM5L2/5b6X5L2/55So5bC95Y+v6IO95L6/5o23ICovXG4gICAgICAgIGNvbnRlbnQuc3VjY2VzcyA/IHJlc29sdmUoY29udGVudC52YWx1ZSkgOiByZXNvbHZlKGNvbnRlbnQubWVzc2FnZSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yLCBjb2RlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5CbIHJlcXVlc3QgZmFpbCwgY29kZSA9ICR7Y29kZX1gKVxuICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhg4pyU77iPIHJlcXVlc3QgQCR7cGFyYW1zLnVybH0gaGFzIGJlZW4gY29tcGxldGVkLmApXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSlcbiAgfSlcbn1cblxuLyoqXG4gKiDlpITnkIbnvZHnu5zor7fmsYLvvIx0aW1lb3V0IOaYr+e9kee7nOivt+axgui2heaXtuS5i+WQjui/lOWbnu+8jOm7mOiupCAyMHMg5Y+v6Ieq6KGM5L+u5pS5XG4gKiBAcGFyYW0gcGFyYW1zXG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3RIYW5kbGUocGFyYW1zLCB0aW1lb3V0ID0gVElNRU9VVCkge1xuICB0cnkge1xuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgICAgZmV0Y2hQcm9taXNlKHBhcmFtcyksXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ+e9kee7nOeKtuWGteS4jeWkquWlve+8jOWGjeWIt+aWsOS4gOasoe+8nycpKVxuICAgICAgICB9LCB0aW1lb3V0KVxuICAgICAgfSlcbiAgICBdKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcG9zdDogZnVuY3Rpb24odXJsLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZSh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogcGFyYW1zXG4gICAgfSlcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbih1cmwsIHBhcmFtcykge1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlKHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICB1cmw6ICR1dGlscy5xdWVyeVN0cmluZyh1cmwsIHBhcmFtcylcbiAgICB9KVxuICB9LFxuICBwdXQ6IGZ1bmN0aW9uKHVybCwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGUoe1xuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogcGFyYW1zXG4gICAgfSlcbiAgfVxuICAvLyDlpoLmnpzvvIxtZXRob2Qg5oKo6ZyA6KaB5pu05aSa57G75Z6L77yM5Y+v6Ieq6KGM5re75Yqg5pu05aSa5pa55rOV77ybXG59XG4iLCJpbXBvcnQgJGFqYXggZnJvbSAnLi4vYWpheCdcblxuLyoqXG4gKiBAZGVzYyDlnKjlrp7pmYXlvIDlj5HkuK3vvIzmgqjlj6/ku6XlsIYgYmFzZVVybCDmm7/mjaLkuLrmgqjnmoTor7fmsYLlnLDlnYDliY3nvIDvvJtcbiAqXG4gKiDlt7LlsIYgJGFwaXMg5oyC6L295ZyoIGdsb2JhbO+8jOaCqOWPr+S7pemAmui/h+WmguS4i+aWueW8j++8jOi/m+ihjOiwg+eUqO+8mlxuICogJGFwaXMuZXhhbXBsZS5nZXRBcGkoKS50aGVuKCkuY2F0Y2goKS5maW5hbGx5KClcbiAqXG4gKiDlpIfms6jvvJrlpoLmnpzmgqjkuI3pnIDopoHlj5Hotbfor7fmsYLvvIzliKDpmaQgYXBpcyDnm67lvZXvvIzku6Xlj4ogYXBwLnV4IOS4reW8leeUqOWNs+WPr++8m1xuICovXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLmV4YW1wZWwuY29tLydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRBcGkoZGF0YSkge1xuICAgIHJldHVybiAkYWpheC5nZXQoYCR7YmFzZVVybH15b3VyLXByb2plY3QtYXBpYCwgZGF0YSlcbiAgfSxcbiAgcG9zdE90aGVyQXBpKGRhdGEpIHtcbiAgICByZXR1cm4gJGFqYXgucG9zdChgJHtiYXNlVXJsfXlvdXItcHJvamVjdC1hcGlgLCBkYXRhKVxuICB9XG59XG4iLCIvKipcbiAqIOWvvOWHuiBhcGlzIOS4i+ebruW9leeahOaJgOacieaOpeWPo1xuICovXG5jb25zdCBmaWxlcyA9IHJlcXVpcmUuY29udGV4dCgnLicsIHRydWUsIC9cXC5qcy8pXG5jb25zdCBtb2R1bGVzID0ge31cblxuZmlsZXMua2V5cygpLmZvckVhY2goa2V5ID0+IHtcbiAgaWYgKGtleSA9PT0gJy4vaW5kZXguanMnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbW9kdWxlc1trZXkucmVwbGFjZSgvKF5cXC5cXC98XFwuanMkKS9nLCAnJyldID0gZmlsZXMoa2V5KS5kZWZhdWx0XG59KVxuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVzXG4iLCIvKipcbiAqIOaCqOWPr+S7peWwhuW4uOeUqOeahOaWueazleOAgeaIluezu+e7nyBBUEnvvIznu5/kuIDlsIHoo4XvvIzmmrTpnLLlhajlsYDvvIzku6Xkvr/lkITpobXpnaLjgIHnu4Tku7bosIPnlKjvvIzogIzml6DpnIAgcmVxdWlyZSAvIGltcG9ydC5cbiAqL1xuY29uc3QgcHJvbXB0ID0gcmVxdWlyZSgnQHN5c3RlbS5wcm9tcHQnKVxuXG4vKipcbiAqIOaLvOaOpSB1cmwg5ZKM5Y+C5pWwXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nKHVybCwgcXVlcnkpIHtcbiAgbGV0IHN0ciA9IFtdXG4gIGZvciAobGV0IGtleSBpbiBxdWVyeSkge1xuICAgIHN0ci5wdXNoKGtleSArICc9JyArIHF1ZXJ5W2tleV0pXG4gIH1cbiAgbGV0IHBhcmFtU3RyID0gc3RyLmpvaW4oJyYnKVxuICByZXR1cm4gcGFyYW1TdHIgPyBgJHt1cmx9PyR7cGFyYW1TdHJ9YCA6IHVybFxufVxuXG5mdW5jdGlvbiBzaG93VG9hc3QobWVzc2FnZSA9ICcnLCBkdXJhdGlvbiA9IDApIHtcbiAgaWYgKCFtZXNzYWdlKSByZXR1cm5cbiAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBkdXJhdGlvblxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNob3dUb2FzdCxcbiAgcXVlcnlTdHJpbmdcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9leGFtcGxlLmpzXCI6IFwiLi9zcmMvaGVscGVyL2FwaXMvZXhhbXBsZS5qc1wiLFxuXHRcIi4vaW5kZXguanNcIjogXCIuL3NyYy9oZWxwZXIvYXBpcy9pbmRleC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9oZWxwZXIvYXBpcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIlxudmFyICRhcHBfc3R5bGUkID0ge31cbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcc2NyaXB0LWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxtb2R1bGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXG1hbmlmZXN0LWxvYWRlci5qcz9wYXRoPWQ6XFxcXEFJR0NcXFxcY2F0ZXJpbmctYWdlbnRcXFxcY2F0ZXJpbmdcXFxcc3JjIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz9jd2Q9ZDpcXFxcQUlHQ1xcXFxjYXRlcmluZy1hZ2VudFxcXFxjYXRlcmluZyZjYWNoZURpcmVjdG9yeSZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vYXBwLnV4P3V4VHlwZT1hcHBcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWFwcGxpY2F0aW9uL2FwcCcsIFtdLCBmdW5jdGlvbiAoJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gIFxuICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gIH1cbiAgJGFwcF9tb2R1bGUkLmV4cG9ydHMubWFuaWZlc3QgPSByZXF1aXJlKFwiLi9tYW5pZmVzdC5qc29uXCIpXG4gICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0geyBsaXN0OiBbICRhcHBfc3R5bGUkIF0gfVxuICBcbn0pXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJywgeyBwYWNrYWdlclZlcnNpb246IFFVSUNLQVBQX1RPT0xLSVRfVkVSU0lPTiB9KVxuIl0sIm5hbWVzIjpbIiR1dGlscyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiJGFwaXMiLCJob29rMmdsb2JhbCIsImdsb2JhbCIsIl9fcHJvdG9fXyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm9uQ3JlYXRlIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfdXRpbHMiLCJlIiwiX19lc01vZHVsZSIsIlRJTUVPVVQiLCJQcm9taXNlIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiUCIsImNvbnN0cnVjdG9yIiwidGhlbiIsInZhbHVlIiwicmVzb2x2ZSIsInJlYXNvbiIsImZldGNoUHJvbWlzZSIsInBhcmFtcyIsInJlamVjdCIsIiRmZXRjaCIsImZldGNoIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInJlc3BvbnNlIiwicmVzdWx0IiwiY29udGVudCIsIkpTT04iLCJwYXJzZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEhhbmRsZSIsInRpbWVvdXQiLCJyYWNlIiwic2V0VGltZW91dCIsIkVycm9yIiwicG9zdCIsImdldCIsInF1ZXJ5U3RyaW5nIiwicHV0IiwiX2FqYXgiLCJiYXNlVXJsIiwiZ2V0QXBpIiwiJGFqYXgiLCJwb3N0T3RoZXJBcGkiLCJmaWxlcyIsImNvbnRleHQiLCJtb2R1bGVzIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJyZXBsYWNlIiwicHJvbXB0IiwicXVlcnkiLCJzdHIiLCJwdXNoIiwicGFyYW1TdHIiLCJqb2luIiwic2hvd1RvYXN0IiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9