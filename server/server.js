var express = require('express');
var handler = require('./scripts/request-handler'); // use this to route
var bodyParser = require('body-parser');
var noteRouter = require('./db/routers/note-router');
var morgan = require('morgan');

var port = 6767;

var app = express();
var db = require('./db/db-config');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
app.use('/', noteRouter);

app.get('/', function(req, res) {
  res.json({message: '<><> Success connecting server'});
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Im listening');
});

module.exports = app;

// require express
// require body parser

// require a request handler, potentially located in scripts/request-handler.js

// if you are going to use user authentication, then need to require express sessions

// the body should route to appropriate request handler
// based on path
