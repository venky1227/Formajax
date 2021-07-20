var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  console.log("Inside get route");
  res.render("formajax");
});
router.post("/", function (req, res, next) {
  console.log("inside post call");
  console.log(req.body);
  let name = req.body.name;
  console.log("Name: " + name);
  let address = req.body.address;
  console.log("Address: " + address);
  let gender = req.body.gender;
  console.log("Gender: " + gender);
  let age = req.body.age;
  console.log("Age: " + age);
});
module.exports = router;
