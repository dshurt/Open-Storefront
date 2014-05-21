'use strict';
var app = angular.module('storefront');

app.controller('resultsCtrl', ['$scope', 'Business', '$timeout', 'tempData', function($scope, Business, $timeout, tempData){
  // makesure to update the tempData
  tempData.restoreState();
  
  // tell the scope whot it is
  $scope._scopename = 'results';

  // set up some variables
  $scope.pageTitle = "DI2E Storefront Catalog";
  $scope.defaultTitle = "Browse Categories";

  // start the filters
  var searchData = tempData.getData();
  if (!searchData){
    searchData = {"type": [ "APPS" ], "category": [], "state": []}
  }
  $scope.searchType = searchData.type.length > 0? searchData.type: [];
  $scope.searchCategory =  searchData.category.length > 0? searchData.category: [];
  $scope.searchState = searchData.state.length > 0? searchData.state: [];

  // grab the data  
  $scope.data = Business.getData();

  $scope.dataTypes = Business.getTypes();
  $scope.categoryTypes = Business.getCategories();
  console.log("Categories", $scope.categoryTypes);
  
  //
  console.dir($scope.data);
  
}]);

app.filter('typeFilter', function() {
  return function(input, scope) {
    scope.searchType = _.filter(scope.dataTypes, function(item){
      if (_.contains(scope.searchType.type, item)){
        return false;
      }
      var found = _.where(scope.dataTypes, {"code": item.code});
      
      if (isEmpty(found))
        return true;
      else
        return found[0].checked;
    })
    scope.searchType = _.pluck(scope.searchType, 'code');
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
    scope.searchCategory = _.filter(scope.categoryTypes, function(item){
      if (_.contains(scope.searchCategory.type, item)){
        return false;
      }
      var found = _.where(scope.categoryTypes, {"code": item.code});
      
      if (isEmpty(found))
        return true;
      else
        return found[0].checked;
    })
    scope.searchCategory = _.pluck(scope.searchCategory, 'code');
    if (scope.searchCategory.length < 1)
      return input;
    var out = [];
    _.each(input, function(temp){
      _.each(scope.searchCategory, function(item){
        var found = _.where(temp.categories, {"code": item});
        if (!isEmpty(found))        
          out.push(temp);
      });
    });  
    out = _.uniq(out);    
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