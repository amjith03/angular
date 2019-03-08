'use strict';

angular.module('myApp')
        .factory('insertcourse_service', insertcourse_service);

insertcourse_service.$inject = ['$http'];

function insertcourse_service($http) {
    var service = {};
    service.insert = insert;
    return service
    
   function insert(course) {
      return $http.post('http://localhost:3004/course/insert', course).then(handleSuccess, handleError('Error signing up'));

    }

    function handleSuccess(res) {
      return res.data;
    }

    function handleError(error) {
      return function () {
          return { success: false, message: error };
      };
    }
}