 'use strict';
    
    angular.module('myApp')
          .controller('courseController', courseController);
    courseController.$inject = ['course_service','$scope','$window'];
    function courseController(course_service,$scope,$window) {
      //var vm=this;
      

    $scope.redirect= function(){
      $window.location = "/#!/course";
    }

    course_service.readall().then(function (response) {
        if (response) {
            $scope.course=response;
        } else {
          console.log("error")
        }    
    })

     $scope.delete=function(c){
       console.log("name")
      var name=c.name;
      console.log(name)
      course_service.del(name).then(function (response) {
        console.log(response)
        if (response) {
          console.log("success");
          $window.location.reload();
        } else {
          console.log("error")
        }
      });
    }

}
    
    
