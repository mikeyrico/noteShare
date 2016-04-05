var Note = require('../models/note.js');
var data = require('../data/notes.js');
console.log(data);

var seedDatabase = function() {
  console.log('seeding database');
  Note.create({
    "question": "What are 4 instantiation patterns?",
    "answer": "functional, functional shared, prototypal, psuedoclassical"
  }, function(err, data) {
    if (err) {
      console.error('><>< Error seeding db:', err, '<><>');
      return;
    }
    console.log('SUCCESS!', data);
  });
};

// var seedDatabase = function(data) {
//   data.forEach(function(note) {
//     Note.create(note, function(err, note) {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log('adding note: ', note);
//     });
//   });
// };

// seedDatabase();

exports.createNote = function(req, res) {
  console.log('><>< Creating a note ><><');
  var newNote = req.body;
  console.log('<> new note is:', newNote, '<><>');
  Note.create(newNote, function(err, newNote) {
    if (err) {
      return res.json(err);
    }
    res.json(newNote);
  });
};

exports.retrieve = function(req, res) {
  console.log('><>< Getting all notes <><>');
  Note.find(function(err, allNotes) {
    if(err) {
      console.error('><>< Problem retrieving all data:', err, '<><>');
      return;
    }
    res.json(allNotes);
  });
};

Note.create({
  "question": "What are 4 instantiation patterns?",
  "answer": "functional, functional shared, prototypal, psuedoclassical"
}, function(err, data) {
  if (err) {
    console.error('><>< Error seeding db:', err, '<><>');
    return;
  }
  console.log('SUCCESS!', data);
});
