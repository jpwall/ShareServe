var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/listings/', function(req, res, next) {
    res.render('LISTINGS');
});

router.get('/newListing/', function(req, res, next) {
    res.render('newListingPre');
});

router.get('/newHomeServer', function(req, res, next) {
    res.render('newListing');
});

router.get('/newPerformanceServer', function(req, res, next) {
    res.render('newListing');
});

router.get('/newGraphicsServer', function(req, res, next) {
    res.render('newListing');
});

router.get('/newServer2', function(req, res, next) {
    res.render('newListing2');
});

router.get('/newListingAvailability', function(req, res, next) {
    res.render('newListingAvailability');
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
