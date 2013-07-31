angular.module('escype.controllers').controller('ContactsCtrl', function ($scope, contactsService) {
    $scope.contacts = contactsService.contacts;
    $scope.call = function (contact) {
    };
});
//@ sourceMappingURL=contacts.js.map
