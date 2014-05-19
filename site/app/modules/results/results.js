'use strict';
var app = angular.module('storefront');

app.controller('resultsCtrl', ['$scope', 'Business', '$timeout', 'tempData', function($scope, Business, $timeout, tempData){
  tempData.restoreState();
  $scope._scopename = 'results';
  $scope.practice = Business.getTypes();
  $scope.pageTitle = "DI2E Storefront Catalog";
  $scope.defaultTitle = "Browse Categories";
  console.log("Practice", $scope.practice);
  console.log("tempData", tempData);
  var searchData = tempData.getData();
  $scope.searchType = searchData.type.length > 0? searchData.type: [];
  $scope.searchCategory =  searchData.category.length > 0? searchData.category: [];
  $scope.searchState = searchData.state.length > 0? searchData.state: [];

  console.log("searchType", $scope.searchType);
  
  $scope.data = Business.getData();

  console.dir($scope.data);
  
}]);

app.filter('typeFilter', function() {
  return function(input, scope) {
    if (scope.searchType.length < 1)
      return input;
    var out = [];
    for (var i = 0; i < input.length; i++){

      if(_.contains(scope.searchType, input[i].type))
        out.push(input[i]);
    }      
    return out;
  };
});

app.filter('categoryFilter', function() {
  return function(input, scope) {
    if (scope.searchCategory.length < 1)
      return input;
    var out = [];
    var flag = true;
    for (var i = 0; i < input.length && flag; i++){
      flag = true;
      _.each(input[i].categories, function(item){
        console.log("Categories", item);
        console.log("searchCategory", scope.searchCategory);
        if(_.contains(scope.searchCategory, item.code) && flag) {
          out.push(input[i]);
          flag = false;
        }
      });
    }      
    return out;
  };
});

app.filter('stateFilter', function() {
  return function(input, scope) {
    if (scope.searchState.length < 1)
      return input;
    var out = [];
    for (var i = 0; i < input.length; i++){

      if(_.contains(scope.searchState, input[i].conformanceState))
        out.push(input[i]);
    }      
    return out;
  };
});