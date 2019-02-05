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

  	companyList = JSON.parse(data);
  	
  	forList = [];
  	
  	companyList.forEach((element, index)=>{
  		forList.indexOf(element.for) == -1 ? forList.push(element.for) : '';
  	});
  	
  	console.log(companyList);
  	console.log(forList);
  	
  	res.render('index', {'allCompany': companyList, 'allFor': forList});
  });
  
});
/*router.get('/home2', function(req, res, next){
	res.render('home-02', {title: 'Express'});
});
router.get('/home3', function(req, res, next){
	res.render('home-03', {title: 'Express'});
});*/
module.exports = router;
