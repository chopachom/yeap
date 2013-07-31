interface IContactsScope extends ng.IScope {
	contacts: Contact[];
	call(contact: Contact);
}

angular.module('escype.controllers')
  .controller('ContactsCtrl', function(
		$scope: IContactsScope,
		contactsService: ContactsService
	){
		$scope.contacts = contactsService.contacts;
		$scope.call = function(contact: Contact){

		}
  });