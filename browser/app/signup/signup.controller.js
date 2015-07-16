'use strict';

app.controller('SignupCtrl', function($scope, Auth, $state, $location, $window) {
    $scope.signupUser = function(userData) {
        Auth.signup(userData)
            .then(function() {
                $state.go('stories');
            });
    };
    var forceSSL = function() {
        if ($location.protocol() !== 'https') {
            $window.location.href = $location.absUrl().replace('http', 'https').replace("8000", "8080");
        }
    };
    forceSSL();
});
