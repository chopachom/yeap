var UserService = (function () {
    function UserService($http, websocket, $cookie) {
        this.$http = $http;
        this.websocket = websocket;
        this.$cookie = $cookie;
    }
    UserService.prototype.authenticate = function () {
        if (this.$cookie['username']) {
            this.login({ username: localStorage['username'] });
        }
    };

    UserService.prototype.login = function (credentials) {
        this.authenticated = true;
        this.name = credentials.username;
        this.$cookie['username'] = credentials.username;

        if (angular.isFunction(this.onauthenticated))
            this.onauthenticated();
    };

    UserService.prototype.logout = function () {
        delete this.$cookie['username'];
        if (angular.isFunction(this.onlogout))
            this.onauthenticated();
    };

    UserService.prototype.online = function () {
        this.websocket.send({ message: 'online' });
    };
    return UserService;
})();

angular.module('escype.services').factory('userService', function ($http, websocket, $cookies) {
    return new UserService($http, websocket, $cookies);
});
//@ sourceMappingURL=user.js.map
