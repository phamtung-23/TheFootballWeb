"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/user.controller.js");

var _verifyToken = require("../util/verifyToken.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); //UPDATE


router.put('/:id', _verifyToken.verifyUser, _userController.updateUser);
router.put('/confirmOtp/:id/changePass', _userController.updateUserPassword); //DELETE

router["delete"]('/:id', _verifyToken.verifyUser, _userController.deleteUser); // GET 

router.get('/confirmOtp/:id', _userController.getUserByID);
router.get('/:id', _verifyToken.verifyUser, _userController.getUserByID); // GET ALL

router.get('/', _verifyToken.verifyAdmin, _userController.getAllUser);
var _default = router;
exports["default"] = _default;