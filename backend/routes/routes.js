const express = require('express');

var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.json({title: 'Welcome to Upload Validate'});
});

/* GET image upload page */
router.get('/upload', function(req, res, next) {
  res.json({title: 'Upload Image & Category', categories: [1,2,3,4,5,6,7,8,9,10]});
});

module.exports = router;
