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
        $location.path('/notes');
      });
    };
  }
]);

noteShareControllers.controller('NoteDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $scope.notes = [];

    $scope.que = 'question';
    $scope.ans = 'answer';

    $scope.getNotes = function() {
      $http({
        method:'GET',
        url: '/notes',
      }).then(function(response) {
        console.log('response =', response.data);
       $scope.notes = response.data;
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.getNotes();
  }]);
