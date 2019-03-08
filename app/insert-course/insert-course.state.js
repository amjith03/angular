angular.module('myApp')
.config(['$stateProvider', function($stateProvider) {
       
$stateProvider.state('insert-course', {
url:'/insert-course',

       templateUrl: 'insert-course/insert-course.html',
       controller: 'insertcourseController',
       controllerAs: 'vm',
});
}])