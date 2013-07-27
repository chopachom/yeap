angular.module('escype.services', ['ngCookies']);
angular.module('escype.controllers', ['escype.services']);
angular.module('escype', ['escype.controllers']).config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: '/partials/index.html', controller: 'IndexCtrl' }).when('/login', { templateUrl: '/partials/login.html', controller: 'LoginCtrl' });
}).run(function ($rootScope, $location, userService) {
    userService.authenticate();
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!userService.authenticated) {
            $location.path('/login');
        }
    });
    userService.onauthenticated = function () {
        $location.path('/');
    };
    userService.onlogout = function () {
        $location.path('/login');
    };
});
//@ sourceMappingURL=app.js.map
