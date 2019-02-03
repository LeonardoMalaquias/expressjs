var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  /*Get all Products*/
  request.get(process.env.API_URL + "/company", (err, response, data)=>{
  	if(err){
  		return next(err);
  	}
  	console.log(data);
  	//res.render('index', {'allCompany': data});
  	res.render('index', {'allCompany': JSON.parse(data)});
  });
  
});
/*router.get('/home2', function(req, res, next){
	res.render('home-02', {title: 'Express'});
});
router.get('/home3', function(req, res, next){
	res.render('home-03', {title: 'Express'});
});*/

module.exports = router;
