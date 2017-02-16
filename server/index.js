var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create App
var app = express();

// Connect to Mongodb
mongoose.connect("mongodb://localhost/stocksDB");
mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));
mongoose.connection.once('open', function(){ });
 
// Middleware for REST API 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
 
// CORS Support
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static('public'));
app.disable('x-powered-by');


// Listen on Port 3000
app.listen(3000);


 
module.exports = app;
