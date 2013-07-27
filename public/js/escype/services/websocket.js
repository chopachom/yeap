angular.module('escype.services').factory('websocket', function ($rootScope) {
    var ws = new WebSocket('ws://localhost:8765/hermonda');
    ws.onopen = function () {
        console.log('socket has been opened');
        $rootScope.$emit('websocket:open');
    };
    ws.onclose = function () {
        console.log('socket has been closed');
        $rootScope.$emit('websocket:close');
    };
    ws.onmessage = function (message) {
        console.log('websocket:', message);
        $rootScope.$emit('websocket:message', message);
    };
    return {
        onMessage: function (callback) {
            $rootScope.$on('websocket:message', function (e, message) {
                $rootScope.$apply(function () {
                    callback(JSON.parse(message.data));
                });
            });
        },
        onOpen: function (callback) {
            $rootScope.$on('websocket:open', callback);
        },
        onClose: function (callback) {
            $rootScope.$on('websocket:close', callback);
        },
        send: function (message) {
            ws.send(JSON.stringify(message));
        }
    };
});
//@ sourceMappingURL=websocket.js.map
