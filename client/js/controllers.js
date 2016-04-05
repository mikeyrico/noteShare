'use strict';

var noteShareControllers = angular.module('noteShareControllers', []);

noteShareControllers.controller('AddNoteCtrl', ['$scope', 'Note',
  function($scope, Note) {
    $scope.question = '';
    $scope.answer = '';
  }
]);

noteShareControllers.controller('NoteDetailCtrl', ['$scope', '$routeParams', 'Note',
  function($scope, $routeParams, Note) {
    $scope.noteId = $routeParams.noteId;
    $scope.question = '';
    $scope.answer = '';
  }]);

noteShareControllers.controller('NoteListCtrl', ['$scope', 'Note',
  function($scope, Note) {
    $scope.notes = Note.query();
  }]);
