'use strict';
 
angular.module('myApp.essay', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/essay', {
        templateUrl: 'essay/essay.html',
        controller: 'EssayCtrl',
		css: 'essay/essay.css'
    });
}])
 
.controller('EssayCtrl', ['$scope','$location', function($scope,$location) {
  $scope.profile = function(){
	  $location.path('/profile');
  }
}]);