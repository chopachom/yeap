angular.module('escype.controllers').controller('LoginCtrl', function ($scope, userService) {
    $scope.login = function (username) {
        userService.login(username);
    };
});
//@ sourceMappingURL=login.js.map
