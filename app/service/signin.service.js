app.factory('signin_service', signin_service);

signin_service.$inject = ['$http']

function signin_service($http) {
    var service = {};
    service.signin = signin;
    return service

    function signin(user) {
        
        return $http.post('http://localhost:3004/signin', user).then(handleSuccess, handleError('Error signin'));

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