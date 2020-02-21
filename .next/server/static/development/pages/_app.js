module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/App.css":
/*!******************************!*\
  !*** ./frontend/src/App.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./frontend/src/components/card-image-row.jsx":
/*!****************************************************!*\
  !*** ./frontend/src/components/card-image-row.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-image */ "./frontend/src/components/card-image.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CardImageRow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    const style = {
      margin: "10px"
    };
    return __jsx("div", {
      class: "row",
      style: style
    }, __jsx(_card_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imagePath: "/images/empresarios.jpg",
      alt: "",
      title: "Capital de giro para pequenas e m\xE9dias empresas",
      content: "AAAAAAAAAAAAAAAAAAAAA"
    }), __jsx(_card_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imagePath: "/images/dinheiro.jpg",
      alt: "",
      title: "Empr\xE9stimo consignado",
      content: "Para aposentados e pensionistas do INSS e servidores p\xFAblicos (estaduais, municipais e federais), com atendimento personalizado e condi\xE7\xF5es especiais."
    }), __jsx(_card_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imagePath: "/images/casa.jpg",
      alt: "",
      title: "Empr\xE9stimo com garantia de im\xF3vel",
      content: "AAAAAAAAAAAAAAAAAAAAA"
    }), __jsx(_card_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imagePath: "",
      alt: "",
      title: "Cr\xE9dito com garantia de ve\xEDculo",
      content: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardImageRow);

/***/ }),

/***/ "./frontend/src/components/card-image.jsx":
/*!************************************************!*\
  !*** ./frontend/src/components/card-image.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CardImage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {});
  }

  render() {
    return __jsx("div", {
      class: "card"
    }, __jsx("img", {
      src: this.props.imagePath,
      alt: this.props.alt
    }), __jsx("div", {
      class: "card-body"
    }, __jsx("h5", {
      class: "card-title"
    }, this.props.title), __jsx("p", {
      class: "card-text"
    }, this.props.content)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardImage);

/***/ }),

/***/ "./frontend/src/components/footer.jsx":
/*!********************************************!*\
  !*** ./frontend/src/components/footer.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("div", {
    class: "footer"
  }, __jsx("footer", {
    class: "footer bg-light"
  }, __jsx("div", {
    class: "row"
  }, getAddress(), getContact())));
};

const getAddress = () => {
  return __jsx("div", {
    class: "col-xs-12 col-sm-6 col-md-3"
  }, __jsx("div", {
    class: "widget subscribe no-box"
  }, __jsx("h5", {
    class: "widget-title"
  }, __jsx("span", null, "ValorizaCred")), __jsx("p", null, "Rua Dorival de Barros Leite, 55, Centro - Salto de Pirapora ")));
};

const getContact = () => {
  return __jsx("div", {
    class: "col-xs-12 col-sm-6 col-md-3"
  }, __jsx("div", {
    class: "widget no-box"
  }, __jsx("h5", {
    class: "widget-title"
  }, __jsx("span", null, "Contato")), __jsx("ul", {
    class: "thumbnail-widget"
  }, __jsx("li", null, getPhoneItem("(15) 3333-1111")), __jsx("li", null, getPhoneItem("(15) 3333-1111")), __jsx("li", null, getPhoneItem("(15) 3333-1111")))));
};

const getPhoneItem = phone => {
  let style = {
    textAlign: "left"
  };
  return __jsx("div", {
    class: "thumb-content",
    style: style
  }, __jsx("p", null, phone));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./frontend/src/components/main-image.jsx":
/*!************************************************!*\
  !*** ./frontend/src/components/main-image.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import "../css/image.css";

const MainImage = () => {
  const isTabletOrMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])({
    query: "(max-width: 1000px)"
  });
  const deviceType = isTabletOrMobile ? "mobile" : "desktop";
  return __jsx("div", {
    class: "image-div"
  }, __jsx("img", {
    class: "img-fluid",
    src: `/images/main_${deviceType}.png`,
    alt: ""
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainImage);

/***/ }),

/***/ "./frontend/src/components/main.jsx":
/*!******************************************!*\
  !*** ./frontend/src/components/main.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./frontend/src/components/navbar.jsx");
/* harmony import */ var _card_image_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-image-row */ "./frontend/src/components/card-image-row.jsx");
/* harmony import */ var _main_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-image */ "./frontend/src/components/main-image.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./frontend/src/components/footer.jsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClickWhatsApp", () => {
      window.open("https://wa.me/5515997413771", "_blank");
    });
  }

  render() {
    const buttonStyle = {
      fontSize: "30px"
    };
    const infoSpanStyle = {
      fontSize: "30px",
      margin: "4px"
    };
    return __jsx("div", {
      className: "App"
    }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], null, __jsx("title", null, "ValorizaCred - T\xEDtulo"), __jsx("link", {
      rel: "canonical",
      href: "http://valorizacred.com"
    })), __jsx(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClickWhatsApp: this.onClickWhatsApp
    }), __jsx(_main_image__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("span", {
      style: infoSpanStyle,
      class: "badge badge-pill badge-dark"
    }, "Conhe\xE7a nossos produtos"), __jsx(_card_image_row__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("button", {
      className: "btn btn-primary btn-sn m-5",
      style: buttonStyle,
      onClick: this.onClickWhatsApp
    }, "Ir para nosso WhatsApp"), __jsx(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./frontend/src/components/navbar-button.jsx":
/*!***************************************************!*\
  !*** ./frontend/src/components/navbar-button.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NavbarButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {});
  }

  render() {
    return __jsx("button", {
      className: "btn btn-primary btn-sn m-2",
      onClick: this.props.onClick
    }, this.props.title);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavbarButton);

/***/ }),

/***/ "./frontend/src/components/navbar.jsx":
/*!********************************************!*\
  !*** ./frontend/src/components/navbar.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-button */ "./frontend/src/components/navbar-button.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class NavBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {});
  }

  getLogo() {
    const logoStyle = {
      margin: "2px"
    };
    const prefixStyle = {
      fontSize: "30px",
      fontWeight: "bold"
    };
    const sufixStyle = {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#335AFF"
    };
    return __jsx("div", {
      className: "row",
      style: logoStyle
    }, __jsx("span", {
      style: prefixStyle
    }, "Valoriza"), __jsx("span", {
      style: sufixStyle
    }, "Cred"));
  }

  getButtons() {
    return __jsx("div", {
      class: "btn-group",
      role: "group",
      "aria-label": "Basic example"
    }, __jsx(_navbar_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "WhatsApp (15) 99741-3771",
      onClick: this.props.onClickWhatsApp
    }));
  }

  render() {
    return __jsx("nav", {
      class: "navbar sticky-top bg-light justify-content-between"
    }, this.getLogo(), this.getButtons());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./frontend/src/css/card.css":
/*!***********************************!*\
  !*** ./frontend/src/css/card.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./frontend/src/css/footer.css":
/*!*************************************!*\
  !*** ./frontend/src/css/footer.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./frontend/src/css/image.css":
/*!************************************!*\
  !*** ./frontend/src/css/image.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_src_App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontend/src/App.css */ "./frontend/src/App.css");
/* harmony import */ var _frontend_src_App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_frontend_src_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_src_css_card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontend/src/css/card.css */ "./frontend/src/css/card.css");
/* harmony import */ var _frontend_src_css_card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_frontend_src_css_card_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frontend_src_css_image_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frontend/src/css/image.css */ "./frontend/src/css/image.css");
/* harmony import */ var _frontend_src_css_image_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_frontend_src_css_image_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _frontend_src_css_footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontend/src/css/footer.css */ "./frontend/src/css/footer.css");
/* harmony import */ var _frontend_src_css_footer_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_frontend_src_css_footer_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _frontend_src_components_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../frontend/src/components/main */ "./frontend/src/components/main.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  return __jsx("div", null, __jsx(_frontend_src_components_main__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map