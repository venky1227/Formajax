var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log("Hey");
  res.render("hello");
});

module.exports = router;
