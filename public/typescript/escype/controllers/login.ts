/**
 * Created by qweqwe on 7/12/13.
 */

interface ILoginScope extends ng.IScope {
	username: string
	login();
}

angular.module('escype.controllers')
	.controller('LoginCtrl', function($scope: ILoginScope, userService: UserService){
		$scope.login = function(){
			userService.login({username: $scope.username})
		}
	});