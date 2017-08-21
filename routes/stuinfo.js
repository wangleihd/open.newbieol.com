var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../collections');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('register', {title: '学生信息'});
});

router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    var user = new db.user({
      user: req.body.user,
      name: req.body.name,
      password: hash
    });
    user.save((err, data) => {
      res.redirect('/login');
    });
  });

});

module.exports = router;
