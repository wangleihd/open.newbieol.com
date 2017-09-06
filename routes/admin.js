var express = require('express');
var router = express.Router();
var moment = require('moment')

const db = require('../collections');


router.get('/', function(req, res, next){
    db.stu.find().sort({'_id': -1}).exec(function(err, doc){
        res.render('admin/admin', {name: req.session.name, stus: doc, moment: moment});
    });
});

router.get('/logout', function(req, res, next){
    req.session.destroy(function(err){
        if(err) console.log(err);
    });
    res.redirect('/admin');
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    db.stu.findById(req.params.id, function(err, stu) {
        if (err)
        res.send(err);
        console.log(stu);
        res.render('admin', {title: '', stu: stu, name: req.session.name});
    });
});


router.post('/update', function(req, res, next) {
    console.log(req.body);
    db.stu.findByIdAndUpdate(req.body._id, req.body, function(err, result) {
        if(err) console.log(err);
        console.log(result);
        res.redirect("/stu/" +  req.body._id);
    })
})

module.exports = router;
