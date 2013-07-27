class Contact {
	constructor(public username: string){}
}

class ContactsService {
	contacts: Contact[] = [];
  constructor(websocket: IWebSocketService){
    websocket.onMessage((message) => {
			this[message.type](message);
		});
  }

	connected(message){
		console.log('contact connected', message.username);
		this.contacts.push(new Contact(message.username))
	}
}

angular.module('escype.services')
	.factory('contactsService', function(websocket: IWebSocketService){
		return new ContactsService(websocket)
	});