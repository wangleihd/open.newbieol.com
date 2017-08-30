var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../collections');
var moment = require('moment');
var salt = 10;


router.get('/', (req, res, next) => {
    if(req.session.name){
        db.stu.find().sort({'_id': -1}).exec(function(err, doc){
            console.log(doc);
            res.render('stuinfo', {title: '学生信息', stus: doc, moment: moment});
        });
    } else {
        res.redirect('/login');
    }
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
