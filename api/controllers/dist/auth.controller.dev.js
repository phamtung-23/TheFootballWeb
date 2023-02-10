"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyOtp = exports.forget = exports.login = exports.register = void 0;

var _userModel = _interopRequireDefault(require("../model/user.model.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _error = require("../util/error.js");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//handle register
var register = function register(req, res, next) {
  var reg, user, salt, hashPass, newUser;
  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          reg = /^\w+@[^ ]+\.[a-z]{2,3}$/;
          _context.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            username: req.body.username
          }));

        case 4:
          user = _context.sent;

          if (!user) {
            _context.next = 9;
            break;
          }

          res.status(401).json({
            message: "User đã tồn tại!!!"
          });
          _context.next = 23;
          break;

        case 9:
          if (reg.test(req.body.email)) {
            _context.next = 13;
            break;
          }

          res.status(404).json({
            message: "Email không họp lệ!"
          });
          _context.next = 23;
          break;

        case 13:
          if (!(req.body.password.length < 6)) {
            _context.next = 17;
            break;
          }

          res.status(405).json({
            message: "Password phải có trên 6 kí tự!"
          });
          _context.next = 23;
          break;

        case 17:
          salt = _bcryptjs["default"].genSaltSync(10);
          hashPass = _bcryptjs["default"].hashSync(req.body.password, salt);
          newUser = new _userModel["default"]({
            username: req.body.username,
            password: hashPass,
            email: req.body.email
          });
          _context.next = 22;
          return regeneratorRuntime.awrap(newUser.save());

        case 22:
          res.status(200).json({
            success: "Tạo tài khoản thành công!"
          });

        case 23:
          _context.next = 28;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);
          next(_context.t0); // res.status(500).json({err:"Tạo tài khoản thất bại!"})

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 25]]);
}; // handle login


exports.register = register;

var login = function login(req, res, next) {
  var user, isPasswordCorrect, token, _user$_doc, password, isAdmin, otherDetails;

  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            username: req.body.username
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", next((0, _error.createError)(404, "Không tìm thấy user!")));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(req.body.password, user.password));

        case 8:
          isPasswordCorrect = _context2.sent;

          if (isPasswordCorrect) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", next((0, _error.createError)(400, "Username hoặc Password đã sai!")));

        case 11:
          token = _jsonwebtoken["default"].sign({
            id: user._id,
            isAdmin: user.isAdmin
          }, process.env.JWT);
          _user$_doc = user._doc, password = _user$_doc.password, isAdmin = _user$_doc.isAdmin, otherDetails = _objectWithoutProperties(_user$_doc, ["password", "isAdmin"]);
          res.cookie("access_token", token, {
            httpOnly: true
          }).status(200).json(_objectSpread({}, otherDetails));
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 16]]);
};

exports.login = login;

var forget = function forget(req, res, next) {
  var reg, user, randomOTP, transporter;
  return regeneratorRuntime.async(function forget$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          reg = /^\w+@[^ ]+\.[a-z]{2,3}$/;
          _context4.prev = 1;

          if (reg.test(req.body.email)) {
            _context4.next = 6;
            break;
          }

          res.status(405).json({
            message: "Email không họp lệ!"
          });
          _context4.next = 17;
          break;

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: req.body.email
          }));

        case 8:
          user = _context4.sent;

          if (user) {
            _context4.next = 13;
            break;
          }

          res.status(404).json({
            message: "Email không tồn tại!"
          });
          _context4.next = 17;
          break;

        case 13:
          randomOTP = Math.floor(Math.random() * (999999 - 100000) + 100000); // let testAccount = await nodemailer.createTestAccount();
          // create reusable transporter object using the default SMTP transport

          transporter = _nodemailer["default"].createTransport({
            service: 'gmail',
            auth: {
              user: 'pttung23082001@gmail.com',
              // generated ethereal user
              pass: 'btomgqdwtjnskvxd' // generated ethereal password
              // btomgqdwtjnskvxd

            }
          });
          _context4.next = 17;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "pttung23082001@gmail.com",
            // sender address
            to: req.body.email,
            // list of receivers
            subject: "OTP-Restore Password",
            // Subject line
            // text: "Mã xác minh của bạn là: 123456", // plain text body
            html: "<p>".concat(randomOTP, " l\xE0 m\xE3 x\xE1c minh c\u1EE7a b\u1EA1n.</p>") // html body

          }, function _callee(err) {
            var newOTP, updateUser;
            return regeneratorRuntime.async(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!err) {
                      _context3.next = 4;
                      break;
                    }

                    res.status(505).json({
                      message: "Đã xãy ra lỗi gửi mail!"
                    });
                    _context3.next = 9;
                    break;

                  case 4:
                    newOTP = {
                      otp: randomOTP
                    };
                    _context3.next = 7;
                    return regeneratorRuntime.awrap(_userModel["default"].findByIdAndUpdate(user._id, {
                      $set: newOTP
                    }, {
                      "new": true
                    }));

                  case 7:
                    updateUser = _context3.sent;
                    res.status(200).json({
                      updateUser: updateUser,
                      message: 'Gửi mã code đến email thành công!!!'
                    });

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }));

        case 17:
          _context4.next = 21;
          break;

        case 19:
          _context4.prev = 19;
          _context4.t0 = _context4["catch"](1);

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 19]]);
};

exports.forget = forget;

var verifyOtp = function verifyOtp(req, res, next) {
  var id, user;
  return regeneratorRuntime.async(function verifyOtp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            _id: id
          }));

        case 4:
          user = _context5.sent;

          if (!user) {
            res.status(404).json({
              message: "User không tồn tại!"
            });
          } else {
            if (user.otp == req.body.otp) {
              res.status(200).json({
                message: "Xác nhận OTP thành công!"
              });
            } else {
              res.status(405).json({
                message: "OTP không chính xác!"
              });
            }
          }

          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.verifyOtp = verifyOtp;