'use strict';
var app = angular.module('storefront');

app.controller('defaultCtrl', ['$scope', 'Business', '$timeout', function($scope, Business ,$timeout){
  $scope._scopename = 'default';
  $scope.practice = Business.getTypes();
  $scope.pageTitle = "DI2E Storefront Catalog";
  console.log("Practice", $scope.practice);
  
}]);