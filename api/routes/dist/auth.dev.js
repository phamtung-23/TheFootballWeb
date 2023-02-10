"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authController = require("../controllers/auth.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/register', _authController.register);
router.post('/login', _authController.login);
router.post('/forget', _authController.forget);
router.post('/confirmOtp/:id', _authController.verifyOtp);
var _default = router;
exports["default"] = _default;