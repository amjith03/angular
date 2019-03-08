angular.module('myApp')
.config(['$stateProvider', function($stateProvider) {
       
$stateProvider.state('course', {
url:'/course',
    templateUrl: 'course/course.html',
    controller: 'courseController',
    controllerAs: 'vm',

});
}])