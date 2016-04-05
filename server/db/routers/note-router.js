var noteRouter = require('express').Router();
var noteController = require('../controllers/noteController');

noteRouter.route('/')
  .post(noteController.createNote);
