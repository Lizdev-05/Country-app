"use strict";
(self["webpackChunkweb_package"] = self["webpackChunkweb_package"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --Dark-Blue: hsl(209, 23%, 22%);\r\n  --Very-Dark-Blue: hsl(207, 26%, 17%);\r\n  --Very-Dark-Black: hsl(200, 15%, 8%);\r\n  --Dark-Gray: hsl(0, 0%, 52%);\r\n  --Very-Light-Gray: hsl(0, 0%, 98%);\r\n  --White: hsl(0, 0%, 100%);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  text-decoration: none;\r\n  transition: all 0.3s linear;\r\n  font-family: 'Nunito Sans', sans-serif;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: var(--Very-Dark-Blue);\r\n}\r\n\r\n.global {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\nheader {\r\n  background-color: var(--Dark-Blue);\r\n  margin-bottom: 2rem;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  color: var(--White);\r\n  font-size: 1.2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.search {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  color: var(--White);\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.search a {\r\n  color: var(--White);\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.search input {\r\n  padding: 0.5rem;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: var(--Very-Light-Gray);\r\n  color: var(--Dark-Gray);\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.dropbtn {\r\n  background-color: var(--Dark-Blue);\r\n  color: var(--White);\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.dropdown-content {\r\n  margin-top: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.fa-circle-chevron-down {\r\n  background-color: var(--Dark-Blue);\r\n  font-size: 1rem;\r\n}\r\n.showdropdown {\r\n  margin-top: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--Dark-Blue);\r\n  min-width: 160px;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n.dropdown-content li {\r\n  list-style: none;\r\n}\r\n.dropdown-content a {\r\n  color: var(--White);\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown i {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\nmain {\r\n  margin: 0 auto;\r\n}\r\n\r\n.cards {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-gap: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.card .card-image {\r\n  background-color: var(--Dark-Blue);\r\n  height: 13rem;\r\n  width: 100%;\r\n  border-radius: 0.5rem;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.card .card-image img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.card .card-text {\r\n  padding: 2rem 1rem;\r\n  background-color: var(--Dark-Blue);\r\n  line-height: 1.5;\r\n}\r\n\r\n.card-text span {\r\n  line-height: 1.5;\r\n  font-weight: 800;\r\n}\r\n\r\n.card .card-text h3 {\r\n  font-size: 1.2rem;\r\n  font-weight: 800;\r\n  color: var(--White);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.card .card-text p {\r\n  font-size: 1rem;\r\n  color: var(--White);\r\n  font-weight: 300;\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n.global{\r\n  max-width: 100%;\r\n}\r\n\r\nnav{\r\n  max-width: 100%;\r\n}\r\n\r\n  .cards {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .card .card-image {\r\n    height: 15rem;\r\n  }\r\n\r\n  .card .card-text {\r\n    padding: 1rem 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n  .global{\r\n    max-width: 100%;\r\n  }\r\n\r\n  nav{\r\n    max-width: 100%;\r\n    \r\n  }\r\n\r\n  .cards {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    padding: 1rem;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,+BAA+B;EAC/B,oCAAoC;EACpC,oCAAoC;EACpC,4BAA4B;EAC5B,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,aAAa;EACb,qBAAqB;EACrB,2BAA2B;EAC3B,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;EACxC,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,kCAAkC;EAClC,gBAAgB;EAChB,2CAA2C;EAC3C,UAAU;AACZ;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,WAAW;EACX,qBAAqB;EACrB,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;;AAGA;AACA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;EAEE;IACE,qCAAqC;IACrC,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;;EAEjB;;EAEA;IACE,qCAAqC;IACrC,aAAa;EACf;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');\r\n\r\n:root {\r\n  --Dark-Blue: hsl(209, 23%, 22%);\r\n  --Very-Dark-Blue: hsl(207, 26%, 17%);\r\n  --Very-Dark-Black: hsl(200, 15%, 8%);\r\n  --Dark-Gray: hsl(0, 0%, 52%);\r\n  --Very-Light-Gray: hsl(0, 0%, 98%);\r\n  --White: hsl(0, 0%, 100%);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  text-decoration: none;\r\n  transition: all 0.3s linear;\r\n  font-family: 'Nunito Sans', sans-serif;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: var(--Very-Dark-Blue);\r\n}\r\n\r\n.global {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\nheader {\r\n  background-color: var(--Dark-Blue);\r\n  margin-bottom: 2rem;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  color: var(--White);\r\n  font-size: 1.2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.search {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  color: var(--White);\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.search a {\r\n  color: var(--White);\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.search input {\r\n  padding: 0.5rem;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: var(--Very-Light-Gray);\r\n  color: var(--Dark-Gray);\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.dropbtn {\r\n  background-color: var(--Dark-Blue);\r\n  color: var(--White);\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.dropdown-content {\r\n  margin-top: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.fa-circle-chevron-down {\r\n  background-color: var(--Dark-Blue);\r\n  font-size: 1rem;\r\n}\r\n.showdropdown {\r\n  margin-top: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--Dark-Blue);\r\n  min-width: 160px;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n.dropdown-content li {\r\n  list-style: none;\r\n}\r\n.dropdown-content a {\r\n  color: var(--White);\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown i {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\nmain {\r\n  margin: 0 auto;\r\n}\r\n\r\n.cards {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-gap: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.card .card-image {\r\n  background-color: var(--Dark-Blue);\r\n  height: 13rem;\r\n  width: 100%;\r\n  border-radius: 0.5rem;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.card .card-image img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.card .card-text {\r\n  padding: 2rem 1rem;\r\n  background-color: var(--Dark-Blue);\r\n  line-height: 1.5;\r\n}\r\n\r\n.card-text span {\r\n  line-height: 1.5;\r\n  font-weight: 800;\r\n}\r\n\r\n.card .card-text h3 {\r\n  font-size: 1.2rem;\r\n  font-weight: 800;\r\n  color: var(--White);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.card .card-text p {\r\n  font-size: 1rem;\r\n  color: var(--White);\r\n  font-weight: 300;\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n.global{\r\n  max-width: 100%;\r\n}\r\n\r\nnav{\r\n  max-width: 100%;\r\n}\r\n\r\n  .cards {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .card .card-image {\r\n    height: 15rem;\r\n  }\r\n\r\n  .card .card-text {\r\n    padding: 1rem 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n  .global{\r\n    max-width: 100%;\r\n  }\r\n\r\n  nav{\r\n    max-width: 100%;\r\n    \r\n  }\r\n\r\n  .cards {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    padding: 1rem;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_URL = 'https://restcountries.com/v2/all';
const cards = document.querySelector('.cards');
const dropBtn = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');
const search = document.querySelector('#search-box');
const region = document.querySelectorAll('.region');

const showCountry = (data) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  cardContainer.innerHTML = `
  <div class="card-image">
  <img src="${data.flag}" />
  </div>
  <div class="card-text">
  <h3 class="countryName">${data.name}</h3>
  <p><span>Population</span> ${data.population / 1000000}</p>
  <p class="regionName"><span>Region:</span> ${data.region}</p>
  <p><span>Capital city:</span> ${data.capital}</p>
  </div>
    `;
  cards.appendChild(cardContainer);
};

const display = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  data.forEach((country) => {
    showCountry(country);
  });
};

display();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

dropBtn.addEventListener('click', () => {
  dropDownContent.classList.toggle('showdropdown');
});

const regionName = document.getElementsByClassName('regionName');

region.forEach((element) => {
  element.addEventListener('click', () => {
    Array.from(regionName).forEach((elem) => {
      if (
        elem.innerText.includes(element.innerText)
        || element.innerText === 'All'
      ) {
        elem.closest('.card').style.display = 'grid';
      } else {
        elem.closest('.card').style.display = 'none';
      }
    });
  });
});

const countryName = document.getElementsByClassName('countryName');

search.addEventListener('keyup', () => {
  Array.from(countryName).forEach((elem) => {
    if (elem.innerText.toLowerCase().includes(search.value)) {
      elem.closest('.card').style.display = 'grid';
    } else {
      elem.closest('.card').style.display = 'none';
    }
  });
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");



// const menu = document.querySelector('.menu');
const items = document.querySelectorAll('.card');

const itemCounter = () => {
  let counter = 0;
  items.forEach((item) => {
    counter += 1;
  });
  menu.innerHTML = `${counter} items`;
};

itemCounter();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOndnaHRAMzAwOzYwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1EYXJrLUJsdWU6IGhzbCgyMDksIDIzJSwgMjIlKTtcXHJcXG4gIC0tVmVyeS1EYXJrLUJsdWU6IGhzbCgyMDcsIDI2JSwgMTclKTtcXHJcXG4gIC0tVmVyeS1EYXJrLUJsYWNrOiBoc2woMjAwLCAxNSUsIDglKTtcXHJcXG4gIC0tRGFyay1HcmF5OiBoc2woMCwgMCUsIDUyJSk7XFxyXFxuICAtLVZlcnktTGlnaHQtR3JheTogaHNsKDAsIDAlLCA5OCUpO1xcclxcbiAgLS1XaGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxuICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1WZXJ5LURhcmstQmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5nbG9iYWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRGFyay1CbHVlKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGEge1xcclxcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVZlcnktTGlnaHQtR3JheSk7XFxyXFxuICBjb2xvcjogdmFyKC0tRGFyay1HcmF5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EYXJrLUJsdWUpO1xcclxcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS1jaXJjbGUtY2hldnJvbi1kb3duIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURhcmstQmx1ZSk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi5zaG93ZHJvcGRvd24ge1xcclxcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EYXJrLUJsdWUpO1xcclxcbiAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG4uZHJvcGRvd24tY29udGVudCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4uZHJvcGRvd24tY29udGVudCBhIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuY2FyZC1pbWFnZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EYXJrLUJsdWUpO1xcclxcbiAgaGVpZ2h0OiAxM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jYXJkLWltYWdlIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuY2FyZC10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURhcmstQmx1ZSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10ZXh0IHNwYW4ge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jYXJkLXRleHQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jYXJkLXRleHQgcCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4uZ2xvYmFse1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXZ7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiAgLmNhcmRzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQgLmNhcmQtaW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQgLmNhcmQtdGV4dCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gIC5nbG9iYWx7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdntcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkcyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0VBRUU7SUFDRSxxQ0FBcUM7SUFDckMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTs7RUFFakI7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEAzMDA7NjAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLURhcmstQmx1ZTogaHNsKDIwOSwgMjMlLCAyMiUpO1xcclxcbiAgLS1WZXJ5LURhcmstQmx1ZTogaHNsKDIwNywgMjYlLCAxNyUpO1xcclxcbiAgLS1WZXJ5LURhcmstQmxhY2s6IGhzbCgyMDAsIDE1JSwgOCUpO1xcclxcbiAgLS1EYXJrLUdyYXk6IGhzbCgwLCAwJSwgNTIlKTtcXHJcXG4gIC0tVmVyeS1MaWdodC1HcmF5OiBoc2woMCwgMCUsIDk4JSk7XFxyXFxuICAtLVdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVZlcnktRGFyay1CbHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdsb2JhbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EYXJrLUJsdWUpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggaW5wdXQge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tVmVyeS1MaWdodC1HcmF5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1EYXJrLUdyYXkpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURhcmstQmx1ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWNpcmNsZS1jaGV2cm9uLWRvd24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRGFyay1CbHVlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLnNob3dkcm9wZG93biB7XFxyXFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURhcmstQmx1ZSk7XFxyXFxuICBtaW4td2lkdGg6IDE2MHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcclxcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXHJcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24gaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBncmlkLWdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jYXJkLWltYWdlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURhcmstQmx1ZSk7XFxyXFxuICBoZWlnaHQ6IDEzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmNhcmQtaW1hZ2UgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jYXJkLXRleHQge1xcclxcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRGFyay1CbHVlKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRleHQgc3BhbiB7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmNhcmQtdGV4dCBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmNhcmQtdGV4dCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbi5nbG9iYWx7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm5hdntcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuICAuY2FyZHMge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZCAuY2FyZC1pbWFnZSB7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZCAuY2FyZC10ZXh0IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgLmdsb2JhbHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2e1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmRzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjIvYWxsJztcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG5jb25zdCBkcm9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3BidG4nKTtcbmNvbnN0IGRyb3BEb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50Jyk7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWJveCcpO1xuY29uc3QgcmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lvbicpO1xuXG5jb25zdCBzaG93Q291bnRyeSA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gIGNhcmRDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxuICA8aW1nIHNyYz1cIiR7ZGF0YS5mbGFnfVwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gIDxoMyBjbGFzcz1cImNvdW50cnlOYW1lXCI+JHtkYXRhLm5hbWV9PC9oMz5cbiAgPHA+PHNwYW4+UG9wdWxhdGlvbjwvc3Bhbj4gJHtkYXRhLnBvcHVsYXRpb24gLyAxMDAwMDAwfTwvcD5cbiAgPHAgY2xhc3M9XCJyZWdpb25OYW1lXCI+PHNwYW4+UmVnaW9uOjwvc3Bhbj4gJHtkYXRhLnJlZ2lvbn08L3A+XG4gIDxwPjxzcGFuPkNhcGl0YWwgY2l0eTo8L3NwYW4+ICR7ZGF0YS5jYXBpdGFsfTwvcD5cbiAgPC9kaXY+XG4gICAgYDtcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XG59O1xuXG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBkYXRhLmZvckVhY2goKGNvdW50cnkpID0+IHtcbiAgICBzaG93Q291bnRyeShjb3VudHJ5KTtcbiAgfSk7XG59O1xuXG5kaXNwbGF5KCk7XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuXG5kcm9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkcm9wRG93bkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd2Ryb3Bkb3duJyk7XG59KTtcblxuY29uc3QgcmVnaW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlZ2lvbk5hbWUnKTtcblxucmVnaW9uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBBcnJheS5mcm9tKHJlZ2lvbk5hbWUpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZWxlbS5pbm5lclRleHQuaW5jbHVkZXMoZWxlbWVudC5pbm5lclRleHQpXG4gICAgICAgIHx8IGVsZW1lbnQuaW5uZXJUZXh0ID09PSAnQWxsJ1xuICAgICAgKSB7XG4gICAgICAgIGVsZW0uY2xvc2VzdCgnLmNhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbG9zZXN0KCcuY2FyZCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGNvdW50cnlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnRyeU5hbWUnKTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICBBcnJheS5mcm9tKGNvdW50cnlOYW1lKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgaWYgKGVsZW0uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnZhbHVlKSkge1xuICAgICAgZWxlbS5jbG9zZXN0KCcuY2FyZCcpLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xvc2VzdCgnLmNhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Rpc3BsYXkuanMnO1xuXG4vLyBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcblxuY29uc3QgaXRlbUNvdW50ZXIgPSAoKSA9PiB7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfSk7XG4gIG1lbnUuaW5uZXJIVE1MID0gYCR7Y291bnRlcn0gaXRlbXNgO1xufTtcblxuaXRlbUNvdW50ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9