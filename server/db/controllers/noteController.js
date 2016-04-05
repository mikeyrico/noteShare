var Note = require('../models/note');

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
