// require express
// require body parser

// require a request handler, potentially located in scripts/request-handler.js

// if you are going to use user authentication, then need to require express sessions

// the body should route to appropriate request handler
// based on path

var express = require('express');
var handler = require('./scripts/request-handler'); // use this to route
var bodyParser = require('body-parser');
var db = require('db/db-config');

var port = 6767;

var app = express();

app.use(bodyPaser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.json({message: '<><> Success connecting server'});
});

applisten(port, function(err) {
  if (err) {
    console.log(err);
  }
});

module.exports = app;

