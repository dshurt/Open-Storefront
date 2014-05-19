'use strict';

var angularApp = angular.module('storefront', []);

angularApp.controller('default', ['$scope', '$timeout', function($scope, $timeout){
  $scope.practice = "Feedback";
  $scope.aboutUs = true;
}]);