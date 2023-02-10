"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose["default"].Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  icon: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    "default": false
  },
  otp: {
    type: Number
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model('User', userSchema);

exports["default"] = _default;