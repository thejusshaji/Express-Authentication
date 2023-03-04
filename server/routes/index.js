var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'login' });
});

router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'register' });
});


/*POST Router for processing the Login Page*/

router.post('/login', indexController.processLoginPage);

/*POST Router for processing the register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
