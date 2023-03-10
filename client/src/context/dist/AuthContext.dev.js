"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthContextReduver = exports.AuthContext = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var INITIAL_STATE = {
  user: null,
  loading: false,
  error: null
};
var AuthContext = (0, _react.createContext)(INITIAL_STATE);
exports.AuthContext = AuthContext;

var AuthReducer = function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload
      };

    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

var AuthContextReduver = function AuthContextReduver(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(AuthReducer, INITIAL_STATE),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return AuthContextReduver;
};

exports.AuthContextReduver = AuthContextReduver;