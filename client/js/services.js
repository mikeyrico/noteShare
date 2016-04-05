var noteServices = angular.module('noteServices', ['$ngResource']);

noteServices.factory('Note', ['$resource',
  function($resource) {
    return $resource('data/notes.json', {}, {
      query: {method: 'GET',isArray: true}
    });
}]);

noteServices.factory('NoteFactory', ['$http',
  function($http) {
    $http({
      method:'POST',
      url: '/'
    }).then();
}]);

