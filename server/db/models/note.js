var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  answer: String,
});

var Note = mongoose.model('Note', noteSchema);

module.exports = Note;


// should require db (located at ../db-config)

// should require mongoose

// should define schema for card
  // question
  // answer

// initialize model with schema
