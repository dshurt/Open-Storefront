'use strict';
var app = angular.module('storefront');

app.controller('resultsCtrl', ['$scope', 'Business', '$timeout', 'tempData', '$filter', function($scope, Business, $timeout, tempData, $filter){
  // makesure to update the tempData
  // tempData.restoreState();
  
  // tell the scope whot it is
  $scope._scopename = 'results';
  $scope.orderProp = '';
  $scope.query = '';

  // set up some variables
  $scope.pageTitle = "DI2E Storefront Catalog";
  $scope.defaultTitle = "Browse Categories";

  // start the filters
  // var searchData = tempData.getData();
  var searchData = null;
  if (!searchData){
    searchData = {"type": [ "APPS" ], "category": [], "state": []}
  }
  $scope.searchType = searchData.type.length > 0? searchData.type: [];
  $scope.searchCategory =  searchData.category.length > 0? searchData.category: [];
  $scope.searchState = searchData.state.length > 0? searchData.state: [];

  // grab the data  
  $scope.total = Business.getData();
  $scope.filteredTotal = $scope.total;
  $scope.data = $scope.total;
  $scope.rowsPerPage = 20;
  $scope.pageNumber = 1;
  $scope.maxPageNumber = Math.ceil($scope.data.length / $scope.rowsPerPage);

  $scope.$watch('pageNumber',function(val, old){
    $scope.pageNumber = parseInt(val); 
    if ($scope.pageNumber < 1)
      $scope.pageNumber = 1;
    if ($scope.pageNumber > $scope.maxPageNumber)
      $scope.pageNumber = $scope.maxPageNumber;
    $scope.data = $scope.filteredTotal.slice((($scope.pageNumber - 1) * $scope.rowsPerPage), ($scope.pageNumber * $scope.rowsPerPage));
  });

  $scope.$watch('orderProp',function(val, old){
    $scope.applyFilters();
  });
  $scope.$watch('query',function(val, old){
    $scope.applyFilters();
  });

  $scope.$watch('rowsPerPage',function(val, old){
    $scope.pageNumber = 1;
    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / $scope.rowsPerPage);
    $scope.applyFilters();
  });

  _.each($scope.data, function(item){
    item.shortdescription = item.description.match(/^(.*?)[.?!]\s/)[1] + ".";
  })
  console.log("data", $scope.data);
  

  $scope.dataTypes = Business.getTypes();
  $scope.categoryTypes = Business.getCategories();
  $scope.stateTypes = Business.getStates();
  
  // function to flip the switch on checkboxes
  var toggleChecks = function(collection){
    var master = false;
    var found = _.where(collection, {"checked": true});
    
    if (!isEmpty(found)) {
      if (found.length !== collection.length)
        master = true;
      else
        master = false;
    }
    else
      master = true;
    _.each(collection, function(item){
      item.checked = master;
    });
    $scope.applyFilters();
  };


  $scope.toggleTypeChecks = function(){
    toggleChecks($scope.dataTypes);
  };
  $scope.toggleCategoryChecks = function(){
    toggleChecks($scope.categoryTypes);
  };

  $scope.toggleStateChecks = function(){
    toggleChecks($scope.stateTypes);
  };


  $scope.details = $scope.data[0];

  $scope.updateDetails = function(id){
    var temp =  _.where($scope.data, {'id': id})[0];
    if (temp)
    {
      $scope.details = temp;
    }
  }

  $scope.applyFilters = function() {
    $scope.filteredTotal = $filter('orderBy')($filter('stateFilter')($filter('categoryFilter')($filter('typeFilter')($filter('filter')($scope.total, $scope.query), $scope), $scope), $scope), $scope.orderProp);
    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / $scope.rowsPerPage);
    if (($scope.pageNumber - 1) * $scope.rowsPerPage <= $scope.filteredTotal.length)
      $scope.pageNumber = 1;
    $scope.data = $scope.filteredTotal.slice((($scope.pageNumber - 1) * $scope.rowsPerPage), ($scope.pageNumber * $scope.rowsPerPage));
    $timeout(function() {
      PageTransitions.init();
    }, 20);
  }
  $scope.resetPageTransition = function(){
    $scope.applyFilters();
  }

}]);

app.filter('typeFilter', function() {
  return function(input, scope) {
    scope.searchType = _.filter(scope.dataTypes, function(item){
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
    scope.searchState = _.filter(scope.stateTypes, function(item){
      var found = _.where(scope.stateTypes, {"type": item.type});
      if (isEmpty(found))
        return true;
      else
        return found[0].checked;
    })
    scope.searchState = _.pluck(scope.searchState, 'type');
    
    var results = [];
    _.each(scope.searchState, function(item){
      results.push(item.toString().toLowerCase());
    });
    
    if (results.length < 1)
      return input;
    var out = [];
    for (var i = 0; i < input.length; i++){

      if(_.contains(results, input[i].conformanceState.toString().toLowerCase()))
        out.push(input[i]);
    }      
    return out;
  };
});

