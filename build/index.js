"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
var port = process.env.PORT || 3000;
var redirectUrl = process.env.REDIRECT_URL || "https://www.whalegram.com";
server.get("*", function (req, res) {
  res.redirect(redirectUrl);
});
server.listen(port, function () {
  return console.log("Server listening on ".concat(port));
});