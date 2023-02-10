"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUser = exports.getUserByID = exports.deleteUser = exports.updateUserPassword = exports.updateUser = void 0;

var _userModel = _interopRequireDefault(require("../model/user.model.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//UPDATE
var updateUser = function updateUser(req, res, next) {
  var _updateUser;

  return regeneratorRuntime.async(function updateUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 3:
          _updateUser = _context.sent;
          res.status(200).json(_updateUser);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //UPDATE PASSWORD


exports.updateUser = updateUser;

var updateUserPassword = function updateUserPassword(req, res, next) {
  var pass, salt, hashPass, updateUserPass;
  return regeneratorRuntime.async(function updateUserPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          pass = req.body.password;

          if (!(!pass || pass.length < 6)) {
            _context2.next = 6;
            break;
          }

          res.status(405).json({
            message: "Password phải có trên 6 kí tự!"
          });
          _context2.next = 12;
          break;

        case 6:
          salt = _bcryptjs["default"].genSaltSync(10);
          hashPass = _bcryptjs["default"].hashSync(pass, salt);
          _context2.next = 10;
          return regeneratorRuntime.awrap(_userModel["default"].findByIdAndUpdate(req.params.id, {
            $set: {
              password: hashPass
            }
          }, {
            "new": true
          }));

        case 10:
          updateUserPass = _context2.sent;
          res.status(200).json({
            updateUserPass: updateUserPass,
            message: "Thay đổi mật khẩu thành công!!"
          });

        case 12:
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
}; //DELETE


exports.updateUserPassword = updateUserPassword;

var deleteUser = function deleteUser(req, res, next) {
  return regeneratorRuntime.async(function deleteUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findByIdAndDelete(req.params.id));

        case 3:
          res.status(200).json("user đã được xóa!");
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; // GET 


exports.deleteUser = deleteUser;

var getUserByID = function getUserByID(req, res, next) {
  var user;
  return regeneratorRuntime.async(function getUserByID$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findById(req.params.id));

        case 3:
          user = _context4.sent;
          res.status(200).json(user);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // GET ALL


exports.getUserByID = getUserByID;

var getAllUser = function getAllUser(req, res, next) {
  var userAll;
  return regeneratorRuntime.async(function getAllUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].find());

        case 3:
          userAll = _context5.sent;
          res.status(200).json(userAll);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllUser = getAllUser;