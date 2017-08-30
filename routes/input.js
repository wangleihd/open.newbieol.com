var express = require('express');
var assert = require('assert');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../collections');
var socket = require('../socket');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('input', {title: '报名'});
});

router.post('/', (req, res, next) => {
    //console.log(req.body);
    var info = new db.stu(req.body);
    console.log(info);
    info.save((err, data) => {
        assert.equal(err, null);
        socket.io.emit('new', data);
        res.redirect("/");
    });
});

module.exports = router;
