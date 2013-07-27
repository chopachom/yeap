interface IContactsScope extends ng.IScope {
	contacts: Contact[]
}

angular.module('escype.controllers')
  .controller('ContactsCtrl', function(
		$scope: IContactsScope,
		contactsService: ContactsService
	){
		$scope.contacts = contactsService.contacts;
  });