var express = require('express');
var router = express.Router();
let value = {
  name: 'Venky',
  address: 'asd',
  age: 20,
  email: {
    sender: 'username@mail.com',
    reciver: 'asddas@mail.com'

  }
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'venkatesh',values: value });
});

module.exports = router;
