(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\AIGC\\catering-agent\\catering&cacheDirectory&plugins[]=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/DemoDetail/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\babel-loader\lib\index.js?cwd=d:\AIGC\catering-agent\catering&cacheDirectory&plugins[]=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/DemoDetail/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  private: {
    text: '快应用是什么？'
  },
  onWelcomeBtnClick() {
    $utils.showToast('快应用：复杂生活的简单答案，让生活更顺畅');
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

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/DemoDetail/index.ux?uxType=page":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\less-loader\dist\cjs.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/DemoDetail/index.ux?uxType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "0px",
    "marginRight": "50px",
    "marginBottom": "0px",
    "marginLeft": "50px"
  },
  ".wrapper .title": {
    "fontSize": "40px",
    "textAlign": "center",
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".wrapper .desc": {
    "marginTop": "50px",
    "color": "#9393aa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        }
      ]
    }
  },
  ".wrapper .btn": {
    "width": "450px",
    "height": "80px",
    "borderRadius": "40px",
    "backgroundColor": "#09ba07",
    "color": "#ffffff",
    "fontSize": "30px",
    "marginTop": "80px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "btn"
        }
      ]
    }
  }
}

/***/ }),

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/DemoDetail/index.ux?uxType=page&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/DemoDetail/index.ux?uxType=page& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.text}
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "快应用是移动互联网新型应用生态，与手机系统深度整合，为用户提供更加场景化的体验。具备传统APP完整的应用体验，但无需安装、即点即用。 "
      },
      "classList": [
        "desc"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "标准是由主流手机厂商组成的快应用联盟联合制定。其标准的诞生将在研发接口、能力接入、开发者服务等层面建设标准平台，以平台化的生态模式对个人开发者和企业开发者全品类开放 "
      },
      "classList": [
        "desc"
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "欢迎使用"
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "onWelcomeBtnClick"
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
/*!***************************************************!*\
  !*** ./src/pages/DemoDetail/index.ux?uxType=page ***!
  \***************************************************/

var $app_script$ = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\babel-loader\lib\index.js?cwd=d:\AIGC\catering-agent\catering&cacheDirectory&plugins[]=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\AIGC\\catering-agent\\catering&cacheDirectory&plugins[]=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/DemoDetail/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/DemoDetail/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\less-loader\dist\cjs.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/DemoDetail/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXERlbW9EZXRhaWxcXGluZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FvQkE7RUFDQUEsT0FBQTtJQUNBQyxJQUFBO0VBQ0E7RUFFQUMsa0JBQUE7SUFDQUMsTUFBQSxDQUFBQyxTQUFBO0VBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3JCQSxtQkFBbUIsbUJBQU8sQ0FBQyw4a0VBQWdrQztBQUMzbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLGdxQkFBOFU7QUFDMVgsaUNBQWlDLG1CQUFPLENBQUMsaTVCQUEyYztBQUNwZixDQUFDO0FBQ0QseUNBQXlDLGlCQUFpQixPQUF3QixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXRlcmluZy8uL3NyYy9wYWdlcy9EZW1vRGV0YWlsL2luZGV4LnV4PzRmZTgiLCJ3ZWJwYWNrOi8vY2F0ZXJpbmcvLi9zcmMvcGFnZXMvRGVtb0RldGFpbC9pbmRleC51eD8zYTc2Iiwid2VicGFjazovL2NhdGVyaW5nLy4vc3JjL3BhZ2VzL0RlbW9EZXRhaWwvaW5kZXgudXg/YWFhZCIsIndlYnBhY2s6Ly9jYXRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcD83ZjgwIiwid2VicGFjazovL2NhdGVyaW5nLy4vc3JjL3BhZ2VzL0RlbW9EZXRhaWwvaW5kZXgudXg/NTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gdGVtcGxhdGXph4zlj6rog73mnInkuIDkuKrmoLnoioLngrkgLS0+XG4gIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7IHRleHQgfX08L3RleHQ+XG4gICAgPHRleHQgY2xhc3M9XCJkZXNjXCJcbiAgICAgID7lv6vlupTnlKjmmK/np7vliqjkupLogZTnvZHmlrDlnovlupTnlKjnlJ/mgIHvvIzkuI7miYvmnLrns7vnu5/mt7HluqbmlbTlkIjvvIzkuLrnlKjmiLfmj5Dkvpvmm7TliqDlnLrmma/ljJbnmoTkvZPpqozjgILlhbflpIfkvKDnu59BUFDlrozmlbTnmoTlupTnlKjkvZPpqozvvIzkvYbml6DpnIDlronoo4XjgIHljbPngrnljbPnlKjjgIJcbiAgICA8L3RleHQ+XG4gICAgPHRleHQgY2xhc3M9XCJkZXNjXCJcbiAgICAgID7moIflh4bmmK/nlLHkuLvmtYHmiYvmnLrljoLllYbnu4TmiJDnmoTlv6vlupTnlKjogZTnm5/ogZTlkIjliLblrprjgILlhbbmoIflh4bnmoTor57nlJ/lsIblnKjnoJTlj5HmjqXlj6PjgIHog73lipvmjqXlhaXjgIHlvIDlj5HogIXmnI3liqHnrYnlsYLpnaLlu7rorr7moIflh4blubPlj7DvvIzku6XlubPlj7DljJbnmoTnlJ/mgIHmqKHlvI/lr7nkuKrkurrlvIDlj5HogIXlkozkvIHkuJrlvIDlj5HogIXlhajlk4HnsbvlvIDmlL5cbiAgICA8L3RleHQ+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImJ0blwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHZhbHVlPVwi5qyi6L+O5L2/55SoXCJcbiAgICAgIG9uY2xpY2s9XCJvbldlbGNvbWVCdG5DbGlja1wiXG4gICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcml2YXRlOiB7XG4gICAgdGV4dDogJ+W/q+W6lOeUqOaYr+S7gOS5iO+8nycsXG4gIH0sXG5cbiAgb25XZWxjb21lQnRuQ2xpY2soKSB7XG4gICAgJHV0aWxzLnNob3dUb2FzdCgn5b+r5bqU55So77ya5aSN5p2C55Sf5rS755qE566A5Y2V562U5qGI77yM6K6p55Sf5rS75pu06aG655WFJylcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcblxuLndyYXBwZXIge1xuICAuZmxleC1ib3gtbWl4aW5zKGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xuICBtYXJnaW46IDAgMTAgKiBAc2l6ZS1mYWN0b3I7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA4ICogQHNpemUtZmFjdG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogQGJsYWNrO1xuICB9XG4gIC5kZXNjIHtcbiAgICBtYXJnaW4tdG9wOiAxMCAqIEBzaXplLWZhY3RvcjtcbiAgICBjb2xvcjogQGdyZXk7XG4gIH1cbiAgLmJ0biB7XG4gICAgd2lkdGg6IDkwICogQHNpemUtZmFjdG9yO1xuICAgIGhlaWdodDogMTYgKiBAc2l6ZS1mYWN0b3I7XG4gICAgYm9yZGVyLXJhZGl1czogOCAqIEBzaXplLWZhY3RvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnJhbmQ7XG4gICAgY29sb3I6IEB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTYgKiBAc2l6ZS1mYWN0b3I7XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIud3JhcHBlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi53cmFwcGVyIC50aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ3cmFwcGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0aXRsZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLndyYXBwZXIgLmRlc2NcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOTM5M2FhXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ3cmFwcGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJkZXNjXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIud3JhcHBlciAuYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwOWJhMDdcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI4MHB4XCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ3cmFwcGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJidG5cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50ZXh0fVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aXRsZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IFwi5b+r5bqU55So5piv56e75Yqo5LqS6IGU572R5paw5Z6L5bqU55So55Sf5oCB77yM5LiO5omL5py657O757uf5rex5bqm5pW05ZCI77yM5Li655So5oi35o+Q5L6b5pu05Yqg5Zy65pmv5YyW55qE5L2T6aqM44CC5YW35aSH5Lyg57ufQVBQ5a6M5pW055qE5bqU55So5L2T6aqM77yM5L2G5peg6ZyA5a6J6KOF44CB5Y2z54K55Y2z55So44CCIFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRlc2NcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIuagh+WHhuaYr+eUseS4u+a1geaJi+acuuWOguWVhue7hOaIkOeahOW/q+W6lOeUqOiBlOebn+iBlOWQiOWItuWumuOAguWFtuagh+WHhueahOivnueUn+WwhuWcqOeglOWPkeaOpeWPo+OAgeiDveWKm+aOpeWFpeOAgeW8gOWPkeiAheacjeWKoeetieWxgumdouW7uuiuvuagh+WHhuW5s+WPsO+8jOS7peW5s+WPsOWMlueahOeUn+aAgeaooeW8j+WvueS4quS6uuW8gOWPkeiAheWSjOS8geS4muW8gOWPkeiAheWFqOWTgeexu+W8gOaUviBcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJkZXNjXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIuasoui/juS9v+eUqFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ0blwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25XZWxjb21lQnRuQ2xpY2tcIlxuICAgICAgfVxuICAgIH1cbiAgXVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcc2NyaXB0LWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxtb2R1bGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz9jd2Q9ZDpcXFxcQUlHQ1xcXFxjYXRlcmluZy1hZ2VudFxcXFxjYXRlcmluZyZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYWNjZXNzLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9pbmRleC51eD91eFR5cGU9cGFnZSZcIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcbGVzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanMhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbn0pO1xuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlclZlcnNpb246IFFVSUNLQVBQX1RPT0xLSVRfVkVSU0lPTiB9KTsiXSwibmFtZXMiOlsicHJpdmF0ZSIsInRleHQiLCJvbldlbGNvbWVCdG5DbGljayIsIiR1dGlscyIsInNob3dUb2FzdCJdLCJzb3VyY2VSb290IjoiIn0=