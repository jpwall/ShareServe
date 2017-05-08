var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/listings/', function(req, res, next) {
    res.render('listings');
});

router.get('/newListing/', function(req, res, next) {
    res.render('newListing');
});

router.get('/login/', function(req, res, next) {
    res.render('login');
});

router.get('/user/dashboard/', function(req, res, next) {
    res.render('dashboard');
});

router.get('/user/reviews/', function(req, res, next) {
    res.render('reviews');
});

module.exports = router;
