/**
 * Created by qweqwe on 7/12/13.
 */

interface IWebSocketService {
	onMessage(callback:(message: any) => void);
	onOpen(callback:() => void);
  onClose(callback:() => void);
	send(message: any);
}

angular.module('escype.services')
	.factory('websocket', function (
		$rootScope: ng.IRootScopeService
	): IWebSocketService {
		var ws = new WebSocket('ws://localhost:8765/hermonda');
		ws.onopen = function () {
			console.log('socket has been opened');
			$rootScope.$emit('websocket:open')
		};
		ws.onclose = function () {
			console.log('socket has been closed');
			$rootScope.$emit('websocket:close')
		};
		ws.onmessage = function (message) {
			console.log('websocket:', message);
			$rootScope.$emit('websocket:message', message);
		};
		return {
			onMessage: function(callback:(message: any) => void){
				$rootScope.$on('websocket:message', function(e, message){
					$rootScope.$apply(function(){
						callback(JSON.parse(message.data));
					});
				});
			},
			onOpen: function(callback:() => void){
				$rootScope.$on('websocket:open', callback)
			},
			onClose: function(callback:() => void){
				$rootScope.$on('websocket:close', callback)
			},
			send: function(message:{}){
				ws.send(JSON.stringify(message));
			}
		}
	});