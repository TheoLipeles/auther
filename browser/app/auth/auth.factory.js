app.factory('Auth', function(User, $http) {

    function signup(props) {
        return new User(props).save();
    }

    function login(props) {
        return $http.get('/api/users/login', {
                params: props
            })
            .then(function(data) {
                console.log('data', data);
                return data;
            });
    }

    return {
        signup: signup,
        login: login
    };
});
