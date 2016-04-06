'use strict';

var noteShareApp = angular.module('noteShareApp', [
  'ngRoute',
  'noteShareControllers'
  ]);

noteShareApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/notes', {
        templateUrl: 'partials/notes.html',
        controller: 'NoteDetailCtrl'
      }).
      when('/addNote', {
        templateUrl: 'partials/addNote.html',
        controller: 'AddNoteCtrl'
      }).
      otherwise({
        redirectTo: '/notes'
      });
}]);
