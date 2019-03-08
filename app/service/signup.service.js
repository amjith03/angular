app.factory('signup_service', signup_service);

signup_service.$inject = ['$http']

function signup_service($http) {
    var service = {};
    service.signup = signup;
    return service

    function signup(user) {
        
        return $http.post('http://localhost:3004/signup', user).then(handleSuccess, handleError('Error signin'));

        // .then(function(handleSuccess,handleError)

    }

    function handleSuccess(res) {
       return res.data;
    }
    
    function handleError(error) {
        return function() {
            return { success: false, message: error };
        }
    }
}