(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\AIGC\\catering-agent\\catering&cacheDirectory&plugins[]=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/CardDemo/index.ux?uxType=card":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\babel-loader\lib\index.js?cwd=d:\AIGC\catering-agent\catering&cacheDirectory&plugins[]=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/CardDemo/index.ux?uxType=card ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  private: {
    text: '欢迎使用快应用卡片',
    des: '卡片是一种轻量级的快应用，快应用卡片使快应用能够在其他app和系统里提供可扩展的app功能'
  }
};
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/CardDemo/index.ux?uxType=card&cardEntry=CardDemo":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/CardDemo/index.ux?uxType=card&cardEntry=CardDemo ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".demo-page": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center"
  }
}

/***/ }),

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/CardDemo/index.ux?uxType=card&&cardEntry=CardDemo&minCardRuntimeVersion=1032":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/CardDemo/index.ux?uxType=card&&cardEntry=CardDemo&minCardRuntimeVersion=1032 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.text}
      }
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.des}
      }
    }
  ]
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************************************************************!*\
  !*** ./src/CardDemo/index.ux?uxType=card&minCardRuntimeVersion=1032&cardEntry=CardDemo&isTargetVivo=false ***!
  \************************************************************************************************************/

var $app_script$ = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\babel-loader\lib\index.js?cwd=d:\AIGC\catering-agent\catering&cacheDirectory&plugins[]=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=card */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\AIGC\\catering-agent\\catering&cacheDirectory&plugins[]=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/CardDemo/index.ux?uxType=card")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=card&&cardEntry=CardDemo&minCardRuntimeVersion=1032 */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/CardDemo/index.ux?uxType=card&&cardEntry=CardDemo&minCardRuntimeVersion=1032")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=card&cardEntry=CardDemo */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/CardDemo/index.ux?uxType=card&cardEntry=CardDemo")
});
$app_bootstrap$('@app-component/index',{ packagerVersion: "2.1.0" });
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZERlbW9cXGluZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FTQTtFQUNBQSxPQUFBO0lBQ0FDLElBQUE7SUFDQUMsR0FBQSxFQUNBO0VBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDckJBLG1CQUFtQixtQkFBTyxDQUFDLHNrRUFBZ2tDO0FBQzNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsb3ZCQUE0WDtBQUN4YSxpQ0FBaUMsbUJBQU8sQ0FBQyxzdEJBQTZXO0FBQ3RaLENBQUM7QUFDRCx5Q0FBeUMsaUJBQWlCLE9BQXdCLEVBQUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdGVyaW5nLy4vc3JjL0NhcmREZW1vL2luZGV4LnV4P2I4ODkiLCJ3ZWJwYWNrOi8vY2F0ZXJpbmcvLi9zcmMvQ2FyZERlbW8vaW5kZXgudXg/YjRkZSIsIndlYnBhY2s6Ly9jYXRlcmluZy8uL3NyYy9DYXJkRGVtby9pbmRleC51eD83Njg0Iiwid2VicGFjazovL2NhdGVyaW5nL3dlYnBhY2svYm9vdHN0cmFwPzdmODAiLCJ3ZWJwYWNrOi8vY2F0ZXJpbmcvLi9zcmMvQ2FyZERlbW8vaW5kZXgudXg/ODFlMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gdGVtcGxhdGXph4zlj6rog73mnInkuIDkuKrmoLnoioLngrkgLS0+XG4gIDxkaXYgY2xhc3M9XCJkZW1vLXBhZ2VcIj5cbiAgICA8dGV4dD57eyB0ZXh0IH19PC90ZXh0PlxuICAgIDx0ZXh0Pnt7IGRlcyB9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcml2YXRlOiB7XG4gICAgdGV4dDogJ+asoui/juS9v+eUqOW/q+W6lOeUqOWNoeeJhycsXG4gICAgZGVzOlxuICAgICAgJ+WNoeeJh+aYr+S4gOenjei9u+mHj+e6p+eahOW/q+W6lOeUqO+8jOW/q+W6lOeUqOWNoeeJh+S9v+W/q+W6lOeUqOiDveWkn+WcqOWFtuS7lmFwcOWSjOezu+e7n+mHjOaPkOS+m+WPr+aJqeWxleeahGFwcOWKn+iDvSdcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5kZW1vLXBhZ2Uge1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuPC9zdHlsZT5cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5kZW1vLXBhZ2VcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiZGVtby1wYWdlXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGV4dH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRlc31cbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHNjcmlwdC1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcbW9kdWxlLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/Y3dkPWQ6XFxcXEFJR0NcXFxcY2F0ZXJpbmctYWdlbnRcXFxcY2F0ZXJpbmcmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGFjY2Vzcy1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1jYXJkXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vaW5kZXgudXg/dXhUeXBlPWNhcmQmJmNhcmRFbnRyeT1DYXJkRGVtbyZtaW5DYXJkUnVudGltZVZlcnNpb249MTAzMlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vaW5kZXgudXg/dXhUeXBlPWNhcmQmY2FyZEVudHJ5PUNhcmREZW1vXCIpXG59KTtcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSk7Il0sIm5hbWVzIjpbInByaXZhdGUiLCJ0ZXh0IiwiZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==