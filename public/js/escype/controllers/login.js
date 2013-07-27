angular.module('escype.controllers').controller('LoginCtrl', function ($scope, userService) {
    $scope.login = function () {
        userService.login({ username: $scope.username });
    };
});
//@ sourceMappingURL=login.js.map
