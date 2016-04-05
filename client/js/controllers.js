'use strict';

var noteShareControllers = angular.module('noteShareControllers', []);

noteShareControllers.controller('AddNoteCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.question = '';
    $scope.answer = '';

    $scope.postNote = function() {
      var newNote = {
        "question" : $scope.question,
        "answer" : $scope.answer
      };
      $http({
        method:'POST',
        url: '/note',
        data: newNote
      }).then(function() {
        $location('/notes');
      });
    };
  }
]);

noteShareControllers.controller('NoteDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $routeParams) {
    $scope.notes = [];

    $scope.getNotes = function() {
      $http({
        method:'GET',
        url: '/notes',
      }).then(function(data) {
       $scope.notes = data;
      });
    }
  }]);
