angular.module('escype.services', []);
angular.module('escype.controllers', ['escype.services']);
angular.module('escype', ['escype.controllers']).config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: '/partials/index.html', controller: 'IndexCtrl' }).when('/login', { templateUrl: '/partials/login.html', controller: 'LoginCtrl' });
}).run(function ($rootScope, $location, userService) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!userService.authenticated) {
            $location.path('/login');
        }
    });
});
//@ sourceMappingURL=app.js.map
