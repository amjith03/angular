'use strict';

//var app = angular.module('myApp')

app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('signin', {
    url :'/signin',  
    templateUrl: 'signin/signin.html',
    controller: 'signinController',
    controllerAs: 'vm'
  });
}]);

// app.controller('signincontroller', [function($scope, $location, $http) {
//     $scope.submit = function(){
//         var email = $scope.email;
//         var password = $scope.password;
//         console.log(email);

//         $http({
//             url: 'http://localhost:3004/signin',
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             data: 'email='+email+'&password='+password
//         }).then(handleSuccess, handleError('Error login'));

//         function handleSuccess(res) {
//             if(res.data.status == 200) {
//                 $location.path('/view1')
//             }
//             else {
//                 alert('invalid login');
//             }
//             return res.data;
//         }

//         function handleError(error) {
//             return function () {
//                 return {
//                     success: false, message: error 
//                 };
//                 };
//             }
//         }
// }]);