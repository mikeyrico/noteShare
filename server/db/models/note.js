var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  answer: String,
});

module.exports = mongoose.model('notes', noteSchema);

// should require db (located at ../db-config)

// should require mongoose

// should define schema for card
  // question
  // answer

// initialize model with schema
