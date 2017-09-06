var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../collections');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('login', {title: 'Login'});
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  db.user.findOne({
    user: req.body.user
  }, function(err, data) {
    if(data){
      bcrypt.compare(req.body.password, data.password, function(err, hash) {
        if (hash) {
          req.session.name = data.name;
          req.session.id = data._id;
          req.session.user = data.user;
          res.redirect('/admin');
        } else {
          res.redirect('/login');
        }
      });
    }
  });
});

module.exports = router;
