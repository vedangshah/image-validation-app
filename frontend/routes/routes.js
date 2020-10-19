const express = require('express');
var router = express.Router();

const http = require('http'); //importing core http module to use it to send web layer requests to API server/Business Layer
const endpointURL = 'http://localhost:3000'; //API Server/Business Layer endpoint URL


/* GET home page */
router.get('/', function(req, res, next) {
  var responseData = '';
  //Using core http module to send request to and receive response from the API server/Business Layer
  http.get(endpointURL.concat('/'), (response) => {
    response.on('data', chunk => {
      responseData += chunk;
    });
    response.on('end', () => {
      try {
        responseData = JSON.parse(responseData);
        res.render('index', responseData);
      }
      catch (error) {
          console.error('Got error in parsing data:',error.message);
          throw error;
      }
    });
    response.on('error', (error) => {
      console.log('Got error in response:',error.message);
      throw error;
    });
  }).on('error', (error) => {
      console.log('Got error in http/https.get():',error.message);
      throw error;
  });
});

/* GET image upload page */
router.get('/upload', function(req, res, next) {
  var responseData = '';
  //Using core http module to send request to and receive response from the API server/Business Layer
  http.get(endpointURL.concat('/upload'), (response) => {
    response.on('data', chunk => {
      responseData += chunk;
    });
    response.on('end', () => {
      try {
        responseData = JSON.parse(responseData);
        res.render('upload', responseData);
      }
      catch (error) {
          console.error('Got error in parsing data:',error.message);
          throw error;
      }
    });
    response.on('error', (error) => {
      console.log('Got error in response:',error.message);
      throw error;
    });
  }).on('error', (error) => {
      console.log('Got error in http/https.get():',error.message);
      throw error;
  });
});

module.exports = router;
