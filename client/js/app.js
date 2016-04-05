'use strict';

var noteShareApp = angular.module('noteShareApp', [
  'ngRoute',
  'noteShareControllers',
  'noteServices'
  ]);

noteShareApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/notes', {
        templateUrl: 'partials/notes.html',
        controller: 'NoteListCtrl'
      }).
      when('/addNote', {
        templateUrl: 'partials/addNote.html',
        controller: 'AddNoteCtrl'
      }).
      otherwise({
        redirectTo: '/addNote'
      });
}]);
