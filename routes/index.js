var express = require('express');
var router = express.Router();
var app = require('../app');
var uuid = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Creative Space' });
});

/* LOGIN PAGE */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* REGISTRATION PAGE */
router.get('/register', function(req, res, next) {
  res.render('register');
});

module.exports = router;
