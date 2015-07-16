app.directive('signIn', function(Auth) {
    return {
        restrict: 'E',
        templateUrl: '/browser/app/auth/signin.html',
        scope: {
            submitAction: '=submit'
        },
        link: function(scope, elem, attrs) {
            console.log('ran signin link');
            scope.signin = null;
            scope.submit = function() {
                console.log(scope.submitAction, scope.signin);
                if (scope.submitAction === 'Login') {
                    Auth.login(scope.signin)
                        .then(function(user) {
                            console.log(user);
                        });
                } else {
                    Auth.signup(scope.signin)
                        .then(function(user) {
                            console.log(user);
                        });
                }
            };
        }
    };
});
