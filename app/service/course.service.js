angular.module('myApp')
        .factory('course_service', course_service);

course_service.$inject = ['$http'];

function course_service($http) {
    var service = {};
    service.readall = readall;
    service.del = del;
    return service

    function readall(){
        return $http.get('http://localhost:3004/course').then(handleSuccess, handleError('Error'));
  
    }

    function del(name){
      return $http.delete(`http://localhost:3004/course/delete/${name}`).then(handleSuccess, handleError('Error'));

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