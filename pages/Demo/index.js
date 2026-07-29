(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\AIGC\\catering-agent\\catering&cacheDirectory&plugins[]=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\babel-loader\lib\index.js?cwd=d:\AIGC\catering-agent\catering&cacheDirectory&plugins[]=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  private: {
    title: '欢迎体验快应用开发'
  },
  onInit() {
    this.$page.setTitleBar({
      text: '欢迎体验快应用开发'
    });
    if (this.$page.setMeta) {
      this.$page.setMeta({
        title: '快应用示例模版',
        description: '快应用是移动互联网新型应用生态，与手机系统深度整合，为用户提供更加场景化的体验。具备传统APP完整的应用体验，但无需安装、即点即用。'
      });
    }
  },
  onDetailBtnClick() {
    _system.default.push({
      uri: '/pages/DemoDetail'
    });
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

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\less-loader\dist\cjs.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
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

/***/ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        "value": function () {return this.title}
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "跳转到详情页"
      },
      "classList": [
        "btn"
      ],
      "events": {
        "click": "onDetailBtnClick"
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
/*!*********************************************!*\
  !*** ./src/pages/Demo/index.ux?uxType=page ***!
  \*********************************************/

var $app_script$ = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\babel-loader\lib\index.js?cwd=d:\AIGC\catering-agent\catering&cacheDirectory&plugins[]=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\AIGC\\catering-agent\\catering&cacheDirectory&plugins[]=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\less-loader\dist\cjs.js!c:\Users\hzz\.quickapp-studio\extensions\hapteam.hap-toolbar-1.4.0\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\hzz\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.4.0\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXERlbW9cXGluZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFBLFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsS0FBQUUsT0FBQSxFQUFBRixDQUFBO0FBQUEsSUFBQUcsUUFBQSxHQUFBQyxPQUFBLENBQUFGLE9BQUEsR0FFQTtFQUVBRyxPQUFBO0lBQ0FDLEtBQUE7RUFDQTtFQUVBQyxPQUFBO0lBSUEsS0FBQUMsS0FBQSxDQUFBQyxXQUFBO01BQUFDLElBQUE7SUFBQTtJQUNBLFNBQUFGLEtBQUEsQ0FBQUcsT0FBQTtNQUNBLEtBQUFILEtBQUEsQ0FBQUcsT0FBQTtRQUNBTCxLQUFBO1FBQ0FNLFdBQUEsRUFDQTtNQUNBO0lBQ0E7RUFFQTtFQUVBQyxpQkFBQTtJQUVBQyxlQUFBLENBQUFDLElBQUE7TUFDQUMsR0FBQTtJQUNBO0VBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3JCQSxtQkFBbUIsbUJBQU8sQ0FBQyx3a0VBQWdrQztBQUMzbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDBwQkFBOFU7QUFDMVgsaUNBQWlDLG1CQUFPLENBQUMsMjRCQUEyYztBQUNwZixDQUFDO0FBQ0QseUNBQXlDLGlCQUFpQixPQUF3QixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXRlcmluZy8uL3NyYy9wYWdlcy9EZW1vL2luZGV4LnV4PzdlODYiLCJ3ZWJwYWNrOi8vY2F0ZXJpbmcvLi9zcmMvcGFnZXMvRGVtby9pbmRleC51eD8xZmZmIiwid2VicGFjazovL2NhdGVyaW5nLy4vc3JjL3BhZ2VzL0RlbW8vaW5kZXgudXg/NWRmOCIsIndlYnBhY2s6Ly9jYXRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcD83ZjgwIiwid2VicGFjazovL2NhdGVyaW5nLy4vc3JjL3BhZ2VzL0RlbW8vaW5kZXgudXg/YjZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gdGVtcGxhdGXph4zlj6rog73mnInkuIDkuKrmoLnoioLngrkgLS0+XG4gIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC90ZXh0PlxuICAgIDwhLS0g54K55Ye76Lez6L2s6K+m5oOF6aG1IC0tPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJidG5cIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICB2YWx1ZT1cIui3s+i9rOWIsOivpuaDhemhtVwiXG4gICAgICBvbmNsaWNrPVwib25EZXRhaWxCdG5DbGlja1wiXG4gICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyDpobXpnaLnuqfnu4Tku7bnmoTmlbDmja7mqKHlnovvvIzlvbHlk43kvKDlhaXmlbDmja7nmoTopobnm5bmnLrliLbvvJpwcml2YXRl5YaF5a6a5LmJ55qE5bGe5oCn5LiN5YWB6K646KKr6KaG55uWXG4gIHByaXZhdGU6IHtcbiAgICB0aXRsZTogJ+asoui/juS9k+mqjOW/q+W6lOeUqOW8gOWPkScsXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBPcHRpbWl6ZSBTRU8gU3RhcnRcbiAgICAvLyDlvZMgdGl0bGViYXIg55qE5paH5qGI5LiO5pCc57Si55qE5qCH6aKY5LiN5LiA6Ie05pe277yM6K+35YWI6K6+572uIHRpdGxlYmFyXG4gICAgLy8g5aSH5rOo77yadGhpcy4kcGFnZS5zZXRNZXRhIOmcgOimgeW8leaTjiAxMDkwIOeJiOacrOWPiuS7peS4iuaJjeaUr+aMge+8jOWboOatpOi/meauteWBmuazqOmHiuWkhOeQhu+8m1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoeyB0ZXh0OiAn5qyi6L+O5L2T6aqM5b+r5bqU55So5byA5Y+RJyB9KVxuICAgIGlmICh0aGlzLiRwYWdlLnNldE1ldGEpIHtcbiAgICAgIHRoaXMuJHBhZ2Uuc2V0TWV0YSh7XG4gICAgICAgIHRpdGxlOiAn5b+r5bqU55So56S65L6L5qih54mIJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ+W/q+W6lOeUqOaYr+enu+WKqOS6kuiBlOe9keaWsOWei+W6lOeUqOeUn+aAge+8jOS4juaJi+acuuezu+e7n+a3seW6puaVtOWQiO+8jOS4uueUqOaIt+aPkOS+m+abtOWKoOWcuuaZr+WMlueahOS9k+mqjOOAguWFt+Wkh+S8oOe7n0FQUOWujOaVtOeahOW6lOeUqOS9k+mqjO+8jOS9huaXoOmcgOWuieijheOAgeWNs+eCueWNs+eUqOOAgicsXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3B0aW1pemUgU0VPIEVuZFxuICB9LFxuXG4gIG9uRGV0YWlsQnRuQ2xpY2soKSB7XG4gICAgLy8g6Lez6L2s5Yiw5bqU55So5YaF55qE5p+Q5Liq6aG16Z2i77yMcm91dGVy55So5rOV6K+m6KeB77ya5paH5qGjIC0+IOaOpeWPoyAtPiDpobXpnaLot6/nlLFcbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICB1cmk6ICcvcGFnZXMvRGVtb0RldGFpbCcsXG4gICAgfSlcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcblxuLndyYXBwZXIge1xuICAuZmxleC1ib3gtbWl4aW5zKGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogOCAqIEBzaXplLWZhY3RvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IEBibGFjaztcbiAgfVxuXG4gIC5idG4ge1xuICAgIHdpZHRoOiA5MCAqIEBzaXplLWZhY3RvcjtcbiAgICBoZWlnaHQ6IDE2ICogQHNpemUtZmFjdG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDggKiBAc2l6ZS1mYWN0b3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJyYW5kO1xuICAgIGNvbG9yOiBAd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDE2ICogQHNpemUtZmFjdG9yO1xuICB9XG59XG48L3N0eWxlPlxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLndyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi53cmFwcGVyIC50aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ3cmFwcGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0aXRsZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLndyYXBwZXIgLmJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ1MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0MHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDliYTA3XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiODBweFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwid3JhcHBlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiYnRuXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpdGxlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIui3s+i9rOWIsOivpuaDhemhtVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ0blwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25EZXRhaWxCdG5DbGlja1wiXG4gICAgICB9XG4gICAgfVxuICBdXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzY3JpcHQtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXG1vZHVsZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzP2N3ZD1kOlxcXFxBSUdDXFxcXGNhdGVyaW5nLWFnZW50XFxcXGNhdGVyaW5nJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxhY2Nlc3MtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGh6elxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjQuMFxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhYzpcXFxcVXNlcnNcXFxcaHp6XFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFxsZXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcyFjOlxcXFxVc2Vyc1xcXFxoenpcXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS40LjBcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxufSk7XG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pOyJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwidGl0bGUiLCJvbkluaXQiLCIkcGFnZSIsInNldFRpdGxlQmFyIiwidGV4dCIsInNldE1ldGEiLCJkZXNjcmlwdGlvbiIsIm9uRGV0YWlsQnRuQ2xpY2siLCJyb3V0ZXIiLCJwdXNoIiwidXJpIl0sInNvdXJjZVJvb3QiOiIifQ==