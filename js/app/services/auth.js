function authService($rootScope, $location, userService) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!userService.authenticated) {
            $location.path('/login');
        }
    });
}
angular.module('escype.services').factory('authService', authService);
//@ sourceMappingURL=auth.js.map
