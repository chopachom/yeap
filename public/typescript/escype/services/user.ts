/**
 * Created by qweqwe on 7/12/13.
 */


class UserService implements IUserService {
	authenticated: boolean;
	name: string;
	onauthenticated: () => void;
	onlogout: () => void;
	private $http: ng.IHttpService;
	private websocket: IWebSocketService;
	private $cookie: ng.cookies.ICookiesService;

	constructor($http: ng.IHttpService, websocket: IWebSocketService, $cookie: ng.cookies.ICookiesService){
		this.$http = $http;
		this.websocket = websocket;
		this.$cookie = $cookie;
	}

	authenticate(){
		if(this.$cookie['username']){
			this.login({username: localStorage['username']})
		}
	}

	login(credentials: {username:string; password?:string}){
		/*
		this.$http.post('/login', credentials).success(() => {
			this.authenticated = true;
			this.onauthenticated();
		})*/
		this.authenticated = true;
		this.name = credentials.username;
		this.$cookie['username'] = credentials.username;

		if(angular.isFunction(this.onauthenticated)) this.onauthenticated();
	}

	logout(){
		delete this.$cookie['username'];
		if(angular.isFunction(this.onlogout)) this.onlogout();
	}

	online(){
		this.websocket.send({message: 'online'});
	}
}

angular.module('escype.services')
	.factory('userService', function(
		$http: ng.IHttpService,
		websocket: IWebSocketService,
		$cookies: ng.cookies.ICookiesService
	){
		return new UserService($http, websocket, $cookies);
	});