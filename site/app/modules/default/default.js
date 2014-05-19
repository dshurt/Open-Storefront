'use strict';
var app = angular.module('storefront');

app.controller('defaultCtrl', ['$scope', 'Business', '$timeout', 'tempData', function($scope, Business, $timeout, tempData){
  $scope._scopename = 'default';
  $scope.types = Business.getTypes();
  $scope.pageTitle = "DI2E Storefront Catalog";
  $scope.defaultTitle = "Browse Categories";
  console.log("Practice", $scope.practice);

  $scope.goToSearch = function(type){
    tempData.setData({"type": [ type ], "category": [], "state": []});
    console.log(tempData.getData());
    
    window.location.href ="app/modules/results/results.html";
  }
  
}]);