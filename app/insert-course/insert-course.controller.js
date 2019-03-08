'use strict';
    
    angular.module('myApp')
          .controller('insertcourseController', insertcourseController);
             
    insertcourseController.$inject = ['insertcourse_service','$window'];
    function insertcourseController(insertcourse_service,$window) {
      var vm=this;

    vm.submit=function(){
    insertcourse_service.insert(vm.course).then(function (response) {
        
        if (response) {
            console.log("aa")
            $window.location = "/#!/course";
        } else {
          console.log("error")
        }
    });
    }

}
    
