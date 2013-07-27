var Contact = (function () {
    function Contact(username) {
        this.username = username;
    }
    return Contact;
})();

var ContactsService = (function () {
    function ContactsService(websocket) {
        var _this = this;
        this.contacts = [];
        websocket.onMessage(function (message) {
            _this[message.type](message);
        });
    }
    ContactsService.prototype.connected = function (message) {
        console.log('contact connected', message.username);
        this.contacts.push(new Contact(message.username));
    };
    return ContactsService;
})();

angular.module('escype.services').factory('contactsService', function (websocket) {
    return new ContactsService(websocket);
});
//@ sourceMappingURL=contacts.js.map
