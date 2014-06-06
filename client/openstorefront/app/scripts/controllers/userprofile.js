'use strict';

app.controller('UserProfileCtrl', ['$scope', '$timeout', function($scope, $timeout){
	$scope._scopename = 'userprofile';
	/*  $scope.types = Business.getTypes();*/
	$scope.pageTitle = "DI2E Storefront Catalog";
	$scope.defaultTitle = "Browse Categories";

	$scope.userName = "John Q. Sample";
	$scope.userRole = "Admin";
	$scope.userMemberSince = "01/10/2012";
	$scope.userEmail = "john.q.sample@gmail.com";

	
	$scope.removeWatch = function(){ 
		alert("Remove this item from watches");
	};

}]);

