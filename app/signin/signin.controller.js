

app.controller('signinController', signinController);

signinController.$inject = ['signin_service'];
function signinController(signin_service) {
    var vm=this;
    vm.submit=function(){
        
        signin_service.signin(vm.user).then(function(response){
            console.log(response)
            if(response.status==200) {
                console.log("success")
            } else {
                console.log("error")
            }
        })
    }
}