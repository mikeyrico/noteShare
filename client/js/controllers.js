'use strict';

var noteShareControllers = angular.module('noteShareControllers', []);

noteShareControllers.controller('AddNoteCtrl', ['$scope',
  function($scope) {
    $scope.question = '';
    $scope.answer = '';
  }
]);

noteShareControllers.controller('NoteDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.noteId = $routeParams.noteId;
    $scope.question = '';
    $scope.answer = '';
  }]);
