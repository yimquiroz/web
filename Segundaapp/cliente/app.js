(function() {
  'use strict';

  var app = angular.module('contactsApp', []);

  app.controller('contactsController', function($scope, $http) {

    $http.get('http://localhost:3000/api/contacts')
      .then(function(response) {
        $scope.contacts = response.data;
      });
    
    $scope.saveContact = function(contact) {
      $http.post('http://localhost:3000/api/contacts/', contact)
        .then(function(response) {
          $scope.contacts.push(response.data);
      });
      //$scope.saveContact
    };

  });
})();



//The AngularJS $http service makes a request to the server, and returns a response

/* The scope is the binding part between the HTML (view) and the JavaScript (controller).

The scope is an object with the available properties and methods.

The scope is available for both the view and the controller.*/