var UserService = (function () {
    function UserService($http) {
        this.$http = $http;
    }
    UserService.prototype.login = function (credentials) {
        this.authenticated = true;
        if (angular.isFunction(this.onauthenticated))
            this.onauthenticated();
    };
    return UserService;
})();

angular.module('escype.services').factory('userService', function ($http) {
    return new UserService($http);
});
//@ sourceMappingURL=user.js.map
