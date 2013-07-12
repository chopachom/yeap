/**
 * Created by qweqwe on 7/12/13.
 */
//TODO: authentication
angular.module('escype.services').factory('websocket', function(){
	var ws = new WebSocket('ws://localhost:8000/');
	ws.onopen = function(){
		console.log('socket has been opened');
	};
	ws.onclose = function(){
		console.log('socket has been closed');
	};
	ws.onmessage = function(message){
		console.log(message);
	}
	return ws
});