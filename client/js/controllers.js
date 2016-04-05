var noteShareApp = angular.module('noteShareApp', []);

noteShareApp.controller('NoteCtrl', function($scope) {
  $scope.question = 'Q';
  $scope.answer = 'A';
});
