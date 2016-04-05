var noteShareApp = angular.module('noteShareApp', []);

noteShareApp.controller('NoteCtrl', function($scope) {
  $scope.question = '';
  $scope.answer = '';
});
