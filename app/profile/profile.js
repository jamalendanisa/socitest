'use strict';
 
angular.module('myApp.profile', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/profile', {
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl',
		css: 'profile/profile.css'
    });
}])
 
.controller('ProfileCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
   $scope.companyProfile = {};
   $scope.askUs = {};
   $scope.provinces = ["Province","DKI Jakarta", "Jawa Barat", "Jawa Tengah", "Jawa Timur"];
   $scope.companyProfile.province = $scope.provinces[0];
   $scope.divisions = ["Technology","Customer Service"];
   $scope.askUs.division = $scope.divisions[0];
   $scope.url = "http://ptsv2.com/t/socitest/post";
   $scope.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'	
   }
   $scope.submitProfile = function() {
	   console.log($scope.companyProfile)
        $http.post(
           $scope.url, $scope.companyProfile,
		   {headers: $scope.headers }
        ).then(function(response) {
			$scope.companyProfile = {};
			$window.alert('Company Profile has been saved.');
		}, function(response) {
			$window.alert('Company Profile failed to save.');
		});
    };
   $scope.submitAskUs = function() {
	   $scope.askUs = {
		   division : $scope.askUs.division,
		   name : $scope.askUs.name,
		   questions : $scope.askUs.questions
	   }
	   console.log($scope.askUs)
        $http.post(
            $scope.url, $scope.askUs,
			{headers: $scope.headers }
        ).then(function(response) {
			$scope.askUs = {};
			$window.alert('Company Profile has been saved.');
		}, function(response) {
			$window.alert('Company Profile failed to save.');
		});
    };
	$scope.cancel = function() {
	 $scope.companyProfile = {};
	 $scope.askUs = {};
	};
}]);