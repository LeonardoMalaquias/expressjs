var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/:name', function(req, res, next) {
  
  /*Get all Products*/
  request.get(process.env.API_URL + "/product", {filter:{"marketplaceId":req.param.name}}, (err, response, data)=>{
  	
  	if(err){
  		return next(err);
  	}

  	productList = JSON.parse(data);
  	
  	forList = [];
  	
  	productList.forEach((element, index)=>{
  		forList.indexOf(element.for) == -1 ? forList.push(element.for) : '';
  	});
  	
  	console.log(productList);
  	console.log(forList);
  	
  	res.render('index-by-market', {'allProduct': productList, 'allFor': forList});
  });
  
});
/*router.get('/home2', function(req, res, next){
	res.render('home-02', {title: 'Express'});
});
router.get('/home3', function(req, res, next){
	res.render('home-03', {title: 'Express'});
});*/
module.exports = router;
