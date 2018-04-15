'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.profile'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
      redirectTo: '/profile'
  });
}]);
