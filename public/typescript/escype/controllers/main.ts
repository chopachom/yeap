/**
 * Created by qweqwe on 7/10/13.
 */

/// <reference path="../../d.ts/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../d.ts/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../d.ts/DefinitelyTyped/angularjs/angular-cookies.d.ts" />
/// <reference path="../services/user.ts" />

interface IMainScope extends ng.IScope {
	hello: string
}

angular.module('escype.controllers')
	.controller('MainController', function(
		$scope: IMainScope
	){
		$scope.hello = 'World'
	});


