var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*router.get('/home2', function(req, res, next){
	res.render('home-02', {title: 'Express'});
});
router.get('/home3', function(req, res, next){
	res.render('home-03', {title: 'Express'});
});*/

module.exports = router;
