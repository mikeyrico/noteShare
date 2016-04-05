var noteServices = angular.module('noteServices', ['$ngResource']);

noteServices.factory('Note', ['$resource',
  function($resource) {
    return $resource('data/notes.json', {}, {
      query: {method: 'GET', params: {id: 'notes'}, isArray: true}
    });
}]);
