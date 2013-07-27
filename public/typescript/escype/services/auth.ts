/**
 * Created by qweqwe on 7/12/13.
 */

function authService(
	$rootScope: ng.IRootScopeService,
	$location: ng.ILocationService,
	userService: UserService
){
	$rootScope.$on("$routeChangeStart", function (event, next, current) {
		if (!userService.authenticated) {
			$location.path('/login');
		}
	});
}
angular.module('escype.services').factory('authService', authService);