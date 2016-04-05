var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noteSharedb');

var db = mongoose.connection;

mongoos.on('error', function() {
  console.error('Error connecting to database');
});

mongoose.once('open', function() {
  console.log('Database connected!');
});

module.exports = db;

// should initialize a mongoose connectio to mongo db

// require mongoose
// establish connection 'mongodb://localhost/[nameofDB]'

// listen for an error event

// listen for an open event with on

// export the db

