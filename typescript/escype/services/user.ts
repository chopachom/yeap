/**
 * Created by qweqwe on 7/12/13.
 */
class UserService implements IUserService {
	authenticated: boolean;
	name: string;
	onauthenticated: () => void;
	private $http: ng.IHttpService;
	constructor($http: ng.IHttpService){
		this.$http = $http;
	}
	login(credentials: {username:string; password:string}){
		/*
		this.$http.post('/login', credentials).success(() => {
			this.authenticated = true;
			this.onauthenticated();
		})*/
		this.authenticated = true;
		if(angular.isFunction(this.onauthenticated)) this.onauthenticated();
	}
}

angular.module('escype.services')
	.factory('userService', function($http: ng.IHttpService){
		return new UserService($http);
	});