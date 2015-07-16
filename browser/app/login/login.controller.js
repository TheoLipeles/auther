'use strict';

app.controller('LoginCtrl', function($scope, Auth, $state, $location, $window) {
    $scope.loginUser = function(userData) {
        Auth.login(userData)
            .then(function() {
                $state.go('stories');
            })
            .catch(function(e) {
                console.log('error logging in', e);
            });
    };
    var forceSSL = function() {
        if ($location.protocol() !== 'https') {
            $window.location.href = $location.absUrl().replace('http', 'https').replace("8000", "8080");
        }
    };
    forceSSL();
});
