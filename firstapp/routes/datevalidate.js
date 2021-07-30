var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  console.log("Inside get route");
  res.render('date');

});

router.post("/", function (req, res, next) {
  console.log("Post call");
  console.log(req.body);
  let date = req.body.date;
  console.log("Enter Date: " + date);
  let validator = /^\d{2}[-]\d{2}[-]\d{4}$/;
  if (date.match(validator)) {
    console.log("Date is Correct");
  }
  else {
    console.log("Date is Invalid");
  }
});

module.exports = router;
