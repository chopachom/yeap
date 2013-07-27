/**
 * Created by qweqwe on 7/10/13.
 */

angular.module('escype.services', ['ngCookies']);
angular.module('escype.controllers', ['escype.services']);
angular.module('escype', ['escype.controllers']).config(function($routeProvider: ng.IRouteProvider){
	$routeProvider
		.when('/', {templateUrl:'/partials/index.html', controller: 'IndexCtrl'})
		.when('/login', {templateUrl: '/partials/login.html', controller: 'LoginCtrl'})
}).run(function(
	$rootScope: ng.IRootScopeService,
	$location: ng.ILocationService,
	userService: IUserService
){
	userService.authenticate();
	$rootScope.$on("$routeChangeStart", function (event, next, current) {
		if (!userService.authenticated) {
			$location.path('/login');
		}
	});
	userService.onauthenticated = function(){
		$location.path('/')
	};
	userService.onlogout = function(){
		$location.path('/login')
	};
});