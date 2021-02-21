/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"main_container": "stylesheet__main_container___13hAm",
	"header": "stylesheet__header___2O5cG",
	"footer": "stylesheet__footer___3G1Mi",
	"launch_detail": "stylesheet__launch_detail___10IkI",
	"type_list": "stylesheet__type_list___1hIT0",
	"detail_label": "stylesheet__detail_label___2x9ex",
	"detail_value": "stylesheet__detail_value___c6tlV",
	"filter_item": "stylesheet__filter_item___tyKIg",
	"filter_item_active": "stylesheet__filter_item_active___aMcKh",
	"filter_category": "stylesheet__filter_category___3v2a7",
	"filter_type": "stylesheet__filter_type___yhkuo",
	"filter_values": "stylesheet__filter_values___3xuvU",
	"launch_filters": "stylesheet__launch_filters___FVIhR",
	"figure_item": "stylesheet__figure_item___1-ZWt",
	"launch_item": "stylesheet__launch_item___C6vUj",
	"launch_name": "stylesheet__launch_name___33ww5",
	"launch_list": "stylesheet__launch_list___Sdfjh"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(12);

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    })]

})];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchSpaceXdata = exports.FETCH_SPACEXDATA = undefined;

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_SPACEXDATA = exports.FETCH_SPACEXDATA = 'fetch_spacexdata';
var fetchSpaceXdata = exports.fetchSpaceXdata = function fetchSpaceXdata(filters) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _axios2.default.get('https://api.spacexdata.com/v3/launches?limit=' + filters.limit + '&launch_success=' + filters.launch_success + '&land_success=' + filters.landing_status + '&launch_year=' + filters.launch_year);

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: FETCH_SPACEXDATA,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(19);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(23);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {

    var store = (0, _createStore2.default)();

    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(function () {
        res.send((0, _renderer2.default)(req, store));
    });
});

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(6);

var _reactHelmet = __webpack_require__(7);

var _Header = __webpack_require__(14);

var _Header2 = _interopRequireDefault(_Header);

var _FilterComponent = __webpack_require__(15);

var _FilterComponent2 = _interopRequireDefault(_FilterComponent);

var _LaunchListComponent = __webpack_require__(16);

var _LaunchListComponent2 = _interopRequireDefault(_LaunchListComponent);

var _stylesheet = __webpack_require__(1);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchSpaceXdata({
                limit: '100',
                launch_success: '',
                landing_status: '',
                launch_year: ''
            });
        }
    }]);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            limit: '100',
            launch_success: '',
            landing_status: '',
            launch_year: ''
        };
        _this.applyFilter = _this.applyFilter.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'updateLaunchList',
        value: function updateLaunchList() {
            this.props.fetchSpaceXdata({
                limit: this.state.limit,
                launch_success: this.state.launch_success,
                landing_status: this.state.landing_status,
                launch_year: this.state.launch_year
            });
        }
    }, {
        key: 'applyFilter',
        value: function applyFilter(filterType, value) {
            var _this2 = this;

            if (filterType === "launch_year") {
                value = value === this.state.launch_year ? '' : value;
                this.setState({
                    launch_year: value
                }, function () {
                    return _this2.updateLaunchList();
                });
            } else if (filterType === "launch_success") {
                value = value === this.state.launch_success ? '' : value;
                this.setState({
                    launch_success: value
                }, function () {
                    return _this2.updateLaunchList();
                });
            } else if (filterType === "land_success") {
                value = value === this.state.landing_status ? '' : value;
                this.setState({
                    landing_status: value
                }, function () {
                    return _this2.updateLaunchList();
                });
            } else {
                return;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'SpaceX program launches'
                    ),
                    _react2.default.createElement('meta', { property: 'og:title', content: 'SpaceX Programs' })
                ),
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'main',
                    { className: _stylesheet2.default.main_container },
                    _react2.default.createElement(_FilterComponent2.default, { applyFilter: this.applyFilter, active: this.state }),
                    _react2.default.createElement(_LaunchListComponent2.default, { data: this.props.spacexdata })
                ),
                _react2.default.createElement(
                    'footer',
                    { className: _stylesheet2.default.footer },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            'Developed by: '
                        ),
                        'Deepesh Bhavsar'
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

;

function loadData(store) {
    return store.dispatch((0, _actions.fetchSpaceXdata)({ limit: '100', launch_success: '', landing_status: '', launch_year: '' }));
}

function mapStateToProps(state) {
    return { spacexdata: state.spacexdata };
}
exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchSpaceXdata: _actions.fetchSpaceXdata })(Home)
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stylesheet = __webpack_require__(1);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'header',
        { className: _stylesheet2.default.header },
        _react2.default.createElement(
            'h1',
            null,
            'SpaceEx Program Launches'
        )
    );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stylesheet = __webpack_require__(1);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterData = [{
    type: "launch_year",
    displayName: "Launch Year",
    data: new Array(new Date().getFullYear() - 2005).fill().map(function (a, i) {
        return 2006 + i;
    })
}, {
    type: "launch_success",
    displayName: "Successful Launch",
    data: ["true", "false"]
}, {
    type: "land_success",
    displayName: "Successful Landing",
    data: ["true", "false"]
}];

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: _stylesheet2.default.launch_filters },
        _react2.default.createElement(
            'h2',
            null,
            'Filters'
        ),
        filterData.map(function (category) {
            return _react2.default.createElement(
                'section',
                { className: _stylesheet2.default.filter_category, key: category.type },
                _react2.default.createElement(
                    'h3',
                    { className: _stylesheet2.default.filter_type },
                    category.displayName
                ),
                _react2.default.createElement(
                    'div',
                    { className: _stylesheet2.default.filter_values },
                    category.data.map(function (filter) {
                        return _react2.default.createElement(
                            'button',
                            { className: props.active.launch_year === filter.toString() && category.type === 'launch_year' || props.active.landing_status === filter && category.type === 'land_success' || props.active.launch_success === filter && category.type === 'launch_success' ? _stylesheet2.default.filter_item_active : _stylesheet2.default.filter_item,
                                key: filter, onClick: props.applyFilter.bind(undefined, category.type, filter.toString()) },
                            filter
                        );
                    })
                )
            );
        })
    );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stylesheet = __webpack_require__(1);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

var _FigureItem = __webpack_require__(17);

var _FigureItem2 = _interopRequireDefault(_FigureItem);

var _DetailItem = __webpack_require__(18);

var _DetailItem2 = _interopRequireDefault(_DetailItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderData = function renderData(data) {

    return data.map(function (item) {
        return _react2.default.createElement(
            'div',
            { className: _stylesheet2.default.launch_item, key: item.flight_number },
            _react2.default.createElement(_FigureItem2.default, { source: item.links.mission_patch_small, name: item.mission_name }),
            _react2.default.createElement(
                'p',
                { className: _stylesheet2.default.launch_name },
                item.mission_name,
                '  #',
                item.flight_number
            ),
            _react2.default.createElement(_DetailItem2.default, { value: item.mission_id, label: 'Mission Ids' }),
            _react2.default.createElement(_DetailItem2.default, { value: item.launch_year, label: 'Launch Year' }),
            _react2.default.createElement(_DetailItem2.default, { value: item.launch_success ? 'True' : 'False', label: 'Successful Launch' }),
            _react2.default.createElement(_DetailItem2.default, { value: item.rocket.first_stage.cores[0].land_success ? 'True' : 'False', label: 'Successful Landing' })
        );
    });
};

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: _stylesheet2.default.launch_list },
        renderData(props.data)
    );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stylesheet = __webpack_require__(1);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'figure',
        { className: _stylesheet2.default.figure_item },
        _react2.default.createElement('img', { alt: props.name, src: props.source })
    );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stylesheet = __webpack_require__(1);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: props.label == "Mission Ids" ? _stylesheet2.default.launch_detail + " " + _stylesheet2.default.type_list : _stylesheet2.default.launch_detail },
        _react2.default.createElement(
            'p',
            { className: _stylesheet2.default.detail_label },
            props.label,
            ':'
        ),
        props.label == "Mission Ids" ? _react2.default.createElement(
            'ul',
            { className: _stylesheet2.default.detail_value },
            props.value.length ? props.value.map(function (data) {
                return _react2.default.createElement(
                    'li',
                    { key: data },
                    data
                );
            }) : _react2.default.createElement(
                'li',
                null,
                'NA'
            )
        ) : _react2.default.createElement(
            'p',
            { className: _stylesheet2.default.detail_value },
            JSON.stringify(props.value)
        )
    );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(21);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterConfig = __webpack_require__(3);

var _reactHelmet = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();

    return '\n    <!doctype html>\n    <html lang="en">\n        <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <meta charset="UTF-8"/>\n        <meta name="viewport" content="width=device-width, initial-scale=1"/>\n        <meta name="Description" content="SpaceX Programs by Tesla"></meta>\n        </head>\n            <body>\n                <div id=\'root\'>' + content + '</div>\n                <script>\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="bundle.js"></script>\n            </body>\n    </html>\n    ';
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(25);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _usersReducer = __webpack_require__(26);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    spacexdata: _usersReducer2.default
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(6);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_SPACEXDATA:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ })
/******/ ]);