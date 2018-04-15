'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.profile',
  'myApp.essay'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
      redirectTo: '/profile'
  });
 
}]);
