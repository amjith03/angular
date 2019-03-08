angular.module('myApp').controller('signupController', signupController);

signupController.$inject = ['signup_service'];
function signupController(signup_service) {
    var vm=this;
    vm.submit=function(){
        
        signup_service.signup(vm.user).then(function(response){
            console.log(response)
            if(response) {
                console.log("success")
            } else {
                console.log("error")
            }
        });
    }
}