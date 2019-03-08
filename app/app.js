var app = angular.module('myApp', [
  'ui.router'
])

.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider){
  $locationProvider.hashPrefix('!');
}]);


