/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 20px;
  background: #e0e0e0; /* Light grey background */
  color: #333333; /* Dark grey text */
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff; /* White card */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  position: relative;
}

input,
button {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
}

input {
  background: #e0e0e0; /* Light grey input */
  flex: 1;
  color: #333333;
}

input:focus {
  outline: 2px solid #f5a623; /* Pastel orange focus */
}

button {
  background: #f5a623; /* Pastel orange */
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #e0911e; /* Darker orange */
}

#autocomplete-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.suggestion {
  padding: 10px;
  cursor: pointer;
  color: #333333;
}

.suggestion:hover {
  background: #f5a623;
  color: #ffffff;
}

section {
  margin: 20px 0;
}

.current-weather {
  background: #ffffff; /* White card */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.current-weather p {
  margin: 5px 0;
  color: #333333;
}

.forecast-day {
  border-top: 1px solid #e0e0e0;
  padding: 10px 0;
}

.forecast-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.forecast-details p {
  margin: 5px 0;
  color: #333333;
}

.weather-icon {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

.toggle-forecast {
  display: block;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background: #f5a623; /* Pastel orange */
  color: #ffffff;
  border: none;
  border-radius: 8px;
  text-align: center;
  transition: background 0.2s;
}

.toggle-forecast:hover {
  background: #e0911e; /* Darker orange */
}

#daily-data.collapsed {
  display: none;
}

.loading {
  display: none;
  text-align: center;
  font-size: 16px;
  margin: 20px 0;
  color: #f5a623;
}

.loading::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #f5a623;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  margin-left: 8px;
}

.error {
  display: none;
  color: #f5a623;
  text-align: center;
  margin: 10px 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,8EAA8E;EAC9E,SAAS;EACT,aAAa;EACb,mBAAmB,EAAE,0BAA0B;EAC/C,cAAc,EAAE,mBAAmB;AACrC;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,mBAAmB,EAAE,eAAe;EACpC,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,mBAAmB,EAAE,qBAAqB;EAC1C,OAAO;EACP,cAAc;AAChB;;AAEA;EACE,0BAA0B,EAAE,wBAAwB;AACtD;;AAEA;EACE,mBAAmB,EAAE,kBAAkB;EACvC,cAAc;EACd,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB,EAAE,kBAAkB;AACzC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB,EAAE,eAAe;EACpC,aAAa;EACb,kBAAkB;EAClB,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,aAAa;EACb,eAAe;EACf,eAAe;EACf,mBAAmB,EAAE,kBAAkB;EACvC,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB,EAAE,kBAAkB;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,6BAA6B;EAC7B,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  margin: 0;\n  padding: 20px;\n  background: #e0e0e0; /* Light grey background */\n  color: #333333; /* Dark grey text */\n}\n\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #ffffff; /* White card */\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\nform {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n  position: relative;\n}\n\ninput,\nbutton {\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 8px;\n}\n\ninput {\n  background: #e0e0e0; /* Light grey input */\n  flex: 1;\n  color: #333333;\n}\n\ninput:focus {\n  outline: 2px solid #f5a623; /* Pastel orange focus */\n}\n\nbutton {\n  background: #f5a623; /* Pastel orange */\n  color: #ffffff;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\nbutton:hover {\n  background: #e0911e; /* Darker orange */\n}\n\n#autocomplete-suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: #ffffff;\n  border-radius: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  width: 100%;\n  z-index: 10;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.suggestion {\n  padding: 10px;\n  cursor: pointer;\n  color: #333333;\n}\n\n.suggestion:hover {\n  background: #f5a623;\n  color: #ffffff;\n}\n\nsection {\n  margin: 20px 0;\n}\n\n.current-weather {\n  background: #ffffff; /* White card */\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n.current-weather p {\n  margin: 5px 0;\n  color: #333333;\n}\n\n.forecast-day {\n  border-top: 1px solid #e0e0e0;\n  padding: 10px 0;\n}\n\n.forecast-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.forecast-details p {\n  margin: 5px 0;\n  color: #333333;\n}\n\n.weather-icon {\n  width: 40px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.toggle-forecast {\n  display: block;\n  margin: 10px 0;\n  padding: 10px;\n  font-size: 16px;\n  cursor: pointer;\n  background: #f5a623; /* Pastel orange */\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  text-align: center;\n  transition: background 0.2s;\n}\n\n.toggle-forecast:hover {\n  background: #e0911e; /* Darker orange */\n}\n\n#daily-data.collapsed {\n  display: none;\n}\n\n.loading {\n  display: none;\n  text-align: center;\n  font-size: 16px;\n  margin: 20px 0;\n  color: #f5a623;\n}\n\n.loading::after {\n  content: '';\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #f5a623;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: spin 1s linear infinite;\n  margin-left: 8px;\n}\n\n.error {\n  display: none;\n  color: #f5a623;\n  text-align: center;\n  margin: 10px 0;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons lazy recursive ^\\.\\/.*\\.svg$":
/*!***************************************************************!*\
  !*** ./src/assets/icons/ lazy ^\.\/.*\.svg$ namespace object ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cloudy.svg": [
		"./src/assets/icons/cloudy.svg",
		"src_assets_icons_cloudy_svg"
	],
	"./rainy.svg": [
		"./src/assets/icons/rainy.svg",
		"src_assets_icons_rainy_svg"
	],
	"./snowy.svg": [
		"./src/assets/icons/snowy.svg",
		"src_assets_icons_snowy_svg"
	],
	"./sunny.svg": [
		"./src/assets/icons/sunny.svg",
		"src_assets_icons_sunny_svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/assets/icons lazy recursive ^\\.\\/.*\\.svg$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayError: () => (/* binding */ displayError),
/* harmony export */   displayWeather: () => (/* binding */ displayWeather),
/* harmony export */   setLoading: () => (/* binding */ setLoading)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");


async function displayWeather(data) {
  try {
    console.log('display.js: Displaying weather data:', data);
    const currentDiv = document.getElementById('hourly-data');
    const dailyDiv = document.getElementById('daily-data');

    if (!currentDiv)
      console.error('display.js: Current div #hourly-data not found');
    if (!dailyDiv) console.error('display.js: Daily div #daily-data not found');

    const currentCondition = data.current?.condition || 'sunny';
    console.log('display.js: Current condition:', currentCondition);

    try {
      const iconModule = await __webpack_require__("./src/assets/icons lazy recursive ^\\.\\/.*\\.svg$")(`./${currentCondition}.svg`);
      console.log('display.js: SVG loaded for condition:', currentCondition);

      currentDiv.innerHTML = `
        <div class="current-weather">
          <img src="${
            iconModule.default
          }" alt="${currentCondition}" class="weather-icon">
          <p>Current Time: ${new Date(
            data.current.time
          ).toLocaleTimeString()}</p>
          <p>Temperature: ${data.current.temperature.toFixed(1)}°${
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)() ? 'C' : 'F'
      }</p>
          <p>Feels Like: ${data.current.apparentTemperature.toFixed(1)}°${
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)() ? 'C' : 'F'
      }</p>
          <p>Humidity: ${data.current.relativeHumidity}%</p>
          <p>Precipitation Probability: ${
            data.current.precipitationProbability
          }%</p>
          <p>Precipitation: ${data.current.precipitation}mm</p>
          <p>Rain: ${data.current.rain}mm</p>
          <p>Showers: ${data.current.showers}mm</p>
          <p>Snowfall: ${data.current.snowfall}cm</p>
          <p>Sea-Level Pressure: ${data.current.pressureMsl}hPa</p>
          <p>Surface Pressure: ${data.current.surfacePressure}hPa</p>
          <p>Cloud Cover: ${data.current.cloudCover}%</p>
          <p>Wind Speed: ${data.current.windSpeed}km/h</p>
          <p>Visibility: ${data.current.visibility}m</p>
          <p>Sunrise: ${new Date(
            data.daily[0].sunrise
          ).toLocaleTimeString()}</p>
          <p>Sunset: ${new Date(data.daily[0].sunset).toLocaleTimeString()}</p>
        </div>
      `;
      currentDiv.dataset.current = JSON.stringify(data.current);
    } catch (error) {
      console.error('display.js: Current SVG or HTML error:', error);
    }

    try {
      // Check for existing toggle button
      let toggleButton = dailyDiv.parentNode.querySelector('.toggle-forecast');
      if (!toggleButton) {
        // Create new button only if it doesn't exist
        toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-forecast';
        dailyDiv.parentNode.insertBefore(toggleButton, dailyDiv);
      }

      // Initialize as collapsed and set button text
      dailyDiv.classList.add('collapsed');
      toggleButton.textContent = 'Show 14-Day Forecast';

      // Update or attach toggle event
      toggleButton.onclick = () => {
        dailyDiv.classList.toggle('collapsed');
        toggleButton.textContent = dailyDiv.classList.contains('collapsed')
          ? 'Show 14-Day Forecast'
          : 'Hide 14-Day Forecast';
        console.log('display.js: Toggled 14-day forecast visibility');
      };

      dailyDiv.innerHTML = await Promise.all(
        data.daily.map(async (day, i) => {
          try {
            const dayIconModule = await __webpack_require__("./src/assets/icons lazy recursive ^\\.\\/.*\\.svg$")(`./${day.condition}.svg`);
            console.log(
              'display.js: Daily SVG loaded for condition:',
              day.condition
            );
            return `
              <div class="forecast-day">
                <div class="forecast-header">
                  <img src="${dayIconModule.default}" alt="${
              day.condition
            }" class="weather-icon">
                  <span>${new Date(day.date).toLocaleDateString()}</span>
                </div>
                <div class="forecast-details">
                  <p>High: ${day.tempMax.toFixed(1)}°${
              (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)() ? 'C' : 'F'
            }</p>
                  <p>Low: ${day.tempMin.toFixed(1)}°${
              (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)() ? 'C' : 'F'
            }</p>
                  <p>Feels Like High: ${day.apparentTempMax.toFixed(1)}°${
              (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)() ? 'C' : 'F'
            }</p>
                  <p>Feels Like Low: ${day.apparentTempMin.toFixed(1)}°${
              (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)() ? 'C' : 'F'
            }</p>
                  <p>Precipitation Probability: ${
                    day.precipitationProbability
                  }%</p>
                  <p>Rain: ${day.rain}mm</p>
                  <p>Showers: ${day.showers}mm</p>
                  <p>Snowfall: ${day.snowfall}cm</p>
                  <p>Wind Speed: ${day.windSpeed}km/h</p>
                  <p>Visibility: ${day.visibility}m</p>
                  <p>Sunrise: ${new Date(day.sunrise).toLocaleTimeString()}</p>
                  <p>Sunset: ${new Date(day.sunset).toLocaleTimeString()}</p>
                </div>
              </div>
            `;
          } catch (error) {
            console.error(
              'display.js: Daily SVG or HTML error at index:',
              i,
              error
            );
            return '';
          }
        })
      ).then((html) => html.join(''));
      dailyDiv.dataset.daily = JSON.stringify(data.daily);
    } catch (error) {
      console.error('display.js: Daily display error:', error);
    }
  } catch (error) {
    console.error('display.js: displayWeather error:', error);
  }
}

function displayError(message) {
  try {
    console.log('display.js: Displaying error:', message);
    const errorDiv = document.getElementById('error');
    if (!errorDiv) {
      console.error('display.js: Error div #error not found');
      return;
    }
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
      console.log('display.js: Error message hidden');
    }, 5000);
  } catch (error) {
    console.error('display.js: displayError error:', error);
  }
}

function setLoading(isLoading) {
  try {
    console.log('display.js: Setting loading state:', isLoading);
    const loadingDiv = document.getElementById('loading');
    if (!loadingDiv) {
      console.error('display.js: Loading div #loading not found');
      return;
    }
    loadingDiv.style.display = isLoading ? 'block' : 'none';
  } catch (error) {
    console.error('display.js: setLoading error:', error);
  }
}


/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocationSuggestions: () => (/* binding */ getLocationSuggestions),
/* harmony export */   getSelectedLocation: () => (/* binding */ getSelectedLocation)
/* harmony export */ });
async function getLocationSuggestions(query) {
  try {
    console.log('search.js: Fetching suggestions for query:', query);
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      query
    )}&count=5`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error('search.js: Fetch failed with status:', response.status);
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    console.log('search.js: Suggestions data:', data);
    return data.results || [];
  } catch (error) {
    console.error('search.js: getLocationSuggestions error:', error);
    throw error;
  }
}

async function getSelectedLocation(query) {
  try {
    console.log('search.js: Getting location for query:', query);
    const suggestions = await getLocationSuggestions(query);
    const location = suggestions.find(
      (s) => s.name.toLowerCase() === query.toLowerCase()
    );
    if (!location) {
      console.error('search.js: No matching location for:', query);
      return null;
    }
    console.log('search.js: Selected location:', location);
    return {
      name: location.name,
      latitude: location.latitude,
      longitude: location.longitude,
      admin1: location.admin1,
      country: location.country,
    };
  } catch (error) {
    console.error('search.js: getSelectedLocation error:', error);
    throw error;
  }
}


/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCelsius: () => (/* binding */ isCelsius),
/* harmony export */   toggleTempUnit: () => (/* binding */ toggleTempUnit)
/* harmony export */ });
let celsius = true;

function toggleTempUnit() {
  try {
    console.log('utils.js: Toggling temperature unit, current:', celsius);
    celsius = !celsius;
    console.log('utils.js: New unit:', celsius ? 'Celsius' : 'Fahrenheit');
  } catch (error) {
    console.error('utils.js: toggleTempUnit error:', error);
  }
}

function isCelsius() {
  try {
    console.log('utils.js: Checking unit, isCelsius:', celsius);
    return celsius;
  } catch (error) {
    console.error('utils.js: isCelsius error:', error);
    return true;
  }
}


/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");


async function fetchWeatherData(lat, lon) {
  try {
    console.log('weather.js: Fetching weather for lat:', lat, 'lon:', lon);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,surface_pressure,cloud_cover,wind_speed_10m,visibility&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,rain_sum,showers_sum,snowfall_sum,wind_speed_10m_max,visibility_max,sunrise,sunset&forecast_days=14&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        'weather.js: Fetch failed with status:',
        response.status,
        'Response:',
        await response.text()
      );
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    console.log('weather.js: Weather data:', data);

    const now = new Date();
    const currentHour = now.toISOString().slice(0, 13); // e.g., "2025-06-06T18" for 6 PM

    // Find the closest hour in the hourly data
    const currentIndex = data.hourly.time.findIndex((time) =>
      time.startsWith(currentHour)
    );
    if (currentIndex === -1) {
      console.error('weather.js: No current hour data found');
      throw new Error('No current hour data');
    }

    return {
      current: {
        time: data.hourly.time[currentIndex],
        temperature: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)()
          ? data.hourly.temperature_2m[currentIndex]
          : (data.hourly.temperature_2m[currentIndex] * 9) / 5 + 32,
        relativeHumidity: data.hourly.relative_humidity_2m[currentIndex],
        apparentTemperature: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)()
          ? data.hourly.apparent_temperature[currentIndex]
          : (data.hourly.apparent_temperature[currentIndex] * 9) / 5 + 32,
        precipitationProbability:
          data.hourly.precipitation_probability[currentIndex],
        precipitation: data.hourly.precipitation[currentIndex],
        rain: data.hourly.rain[currentIndex],
        showers: data.hourly.showers[currentIndex],
        snowfall: data.hourly.snowfall[currentIndex],
        pressureMsl: data.hourly.pressure_msl[currentIndex],
        surfacePressure: data.hourly.surface_pressure[currentIndex],
        cloudCover: data.hourly.cloud_cover[currentIndex],
        windSpeed: data.hourly.wind_speed_10m[currentIndex],
        visibility: data.hourly.visibility[currentIndex],
        condition: getWeatherCondition(
          data.hourly.precipitation_probability[currentIndex],
          data.hourly.snowfall[currentIndex],
          data.hourly.cloud_cover[currentIndex]
        ),
      },
      daily: data.daily.time
        .map((time, i) => {
          try {
            return {
              date: time,
              tempMax: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)()
                ? data.daily.temperature_2m_max[i]
                : (data.daily.temperature_2m_max[i] * 9) / 5 + 32,
              tempMin: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)()
                ? data.daily.temperature_2m_min[i]
                : (data.daily.temperature_2m_min[i] * 9) / 5 + 32,
              apparentTempMax: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)()
                ? data.daily.apparent_temperature_max[i]
                : (data.daily.apparent_temperature_max[i] * 9) / 5 + 32,
              apparentTempMin: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isCelsius)()
                ? data.daily.apparent_temperature_min[i]
                : (data.daily.apparent_temperature_min[i] * 9) / 5 + 32,
              precipitationProbability:
                data.daily.precipitation_probability_max[i],
              rain: data.daily.rain_sum[i],
              showers: data.daily.showers_sum[i],
              snowfall: data.daily.snowfall_sum[i],
              windSpeed: data.daily.wind_speed_10m_max[i],
              visibility: data.daily.visibility_max[i],
              sunrise: data.daily.sunrise[i],
              sunset: data.daily.sunset[i],
              condition: getWeatherCondition(
                data.daily.precipitation_probability_max[i],
                data.daily.snowfall_sum[i],
                0
              ),
            };
          } catch (error) {
            console.error(
              'weather.js: Daily data processing error at index:',
              i,
              error
            );
            return null;
          }
        })
        .filter((entry) => entry),
    };
  } catch (error) {
    console.error('weather.js: fetchWeatherData error:', error);
    throw error;
  }
}

function getWeatherCondition(precipitationProbability, snowfall, cloudCover) {
  try {
    if (snowfall > 0) return 'snowy';
    if (precipitationProbability > 50) return 'rainy';
    if (cloudCover > 80) return 'cloudy';
    return 'sunny';
  } catch (error) {
    console.error('weather.js: getWeatherCondition error:', error);
    return 'sunny';
  }
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "weather-app-odin-proj:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweather_app_odin_proj"] = self["webpackChunkweather_app_odin_proj"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./src/js/search.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ "./src/js/weather.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/js/display.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");






console.log('index.js: Script loaded');

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

try {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('index.js: DOMContentLoaded fired');

    const form = document.getElementById('location-form');
    const input = document.getElementById('location-input');
    const toggleBtn = document.getElementById('temp-toggle');

    if (!form) console.error('index.js: Form element #location-form not found');
    if (!input)
      console.error('index.js: Input element #location-input not found');
    if (!toggleBtn)
      console.error('index.js: Toggle button #temp-toggle not found');

    // Autocomplete
    input.addEventListener(
      'input',
      debounce(async () => {
        const query = input.value.trim();
        console.log('index.js: Autocomplete triggered for query:', query);
        if (query.length < 3) {
          const suggestionsDiv = document.getElementById(
            'autocomplete-suggestions'
          );
          if (suggestionsDiv) suggestionsDiv.innerHTML = '';
          return;
        }
        try {
          (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.setLoading)(true);
          const suggestions = await (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.getLocationSuggestions)(query);
          console.log('index.js: Suggestions received:', suggestions);
          displaySuggestions(suggestions);
        } catch (error) {
          console.error('index.js: Autocomplete error:', error);
          (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayError)('Error fetching location suggestions: ' + error.message);
        } finally {
          (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false);
        }
      }, 300)
    );

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = input.value.trim();
      console.log('index.js: Form submitted with query:', query);
      if (!query) {
        console.error('index.js: Empty query submitted');
        (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayError)('Please enter a location');
        return;
      }

      try {
        (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.setLoading)(true);
        const location = await (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.getSelectedLocation)(query);
        if (!location) {
          console.error('index.js: Invalid location:', query);
          throw new Error('Invalid location');
        }
        console.log('index.js: Location selected:', location);

        const weatherData = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)(
          location.latitude,
          location.longitude
        );
        console.log('index.js: Weather data received:', weatherData);
        await (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayWeather)(weatherData);
      } catch (error) {
        console.error('index.js: Weather fetch error:', error);
        (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayError)('Error fetching data: ' + error.message);
      } finally {
        (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false);
      }
    });

    // Temperature toggle
    toggleBtn.addEventListener('click', () => {
      console.log('index.js: Temperature unit toggle clicked');
      try {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.toggleTempUnit)();
        const hourlyData =
          document.getElementById('hourly-data').dataset.hourly;
        const dailyData = document.getElementById('daily-data').dataset.daily;
        if (hourlyData && dailyData) {
          console.log('index.js: Re-displaying weather with new unit');
          (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayWeather)({
            hourly: JSON.parse(hourlyData),
            daily: JSON.parse(dailyData),
          });
        } else {
          console.warn('index.js: No weather data to toggle');
        }
      } catch (error) {
        console.error('index.js: Toggle error:', error);
      }
    });

    function displaySuggestions(suggestions) {
      try {
        const suggestionsDiv = document.getElementById(
          'autocomplete-suggestions'
        );
        if (!suggestionsDiv) {
          console.error(
            'index.js: Suggestions div #autocomplete-suggestions not found'
          );
          return;
        }
        console.log('index.js: Displaying suggestions:', suggestions);
        suggestionsDiv.innerHTML = '';
        suggestions.forEach((s) => {
          const div = document.createElement('div');
          div.textContent = `${s.name}, ${s.admin1 || ''}, ${s.country}`;
          div.classList.add('suggestion');
          div.addEventListener('click', () => {
            console.log('index.js: Suggestion clicked:', s.name);
            input.value = s.name;
            suggestionsDiv.innerHTML = '';
          });
          suggestionsDiv.appendChild(div);
        });
      } catch (error) {
        console.error('index.js: displaySuggestions error:', error);
      }
    }
  });
} catch (error) {
  console.error('index.js: Initialization error:', error);
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map