'use strict';

app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('signup', {
    url :'/signup',  
    templateUrl: 'signup/signup.html',
    controller: 'signupController',
    controllerAs: 'vm'
  });
}]);