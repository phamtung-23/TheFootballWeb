"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _auth = _interopRequireDefault(require("./routes/auth.js"));

var _pitch = _interopRequireDefault(require("./routes/pitch.js"));

var _teams = _interopRequireDefault(require("./routes/teams.js"));

var _user = _interopRequireDefault(require("./routes/user.js"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

_mongoose["default"].set("strictQuery", false);

var connect = function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(process.env.MONGO));

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

_mongoose["default"].connection.on('disconnected', function () {
  console.log("MongoDb disconnected!");
});

_mongoose["default"].connection.on('connected', function () {
  console.log("MongoDB connected!");
}); //


app.use(_express["default"].json());
app.use((0, _cookieParser["default"])()); // middleware

app.use('/api/auth', _auth["default"]);
app.use('/api/pitch', _pitch["default"]);
app.use('/api/teams', _teams["default"]);
app.use('/api/user', _user["default"]);
app.use(function (err, req, res, next) {
  var errorStatus = err.status || 500;
  var errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
});
app.listen(8080, function () {
  connect();
});