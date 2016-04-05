var noteRouter = require('express').Router();
var noteController = require('../controllers/noteController');

noteRouter.route('/note')
  .post(noteController.createNote);

noteRouter.route('/notes')
  .get(noteController.retrieve);

module.exports = noteRouter;
