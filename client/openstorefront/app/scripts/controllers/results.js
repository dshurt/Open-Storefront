'use strict';

/* global isEmpty, setupPopovers */

app.controller('ResultsCtrl', ['$scope', 'tempData', 'business', '$filter', '$timeout', function ($scope, tempData, Business, $filter, $timeout) {
  tempData.restoreState();
  $scope.searchGroup = tempData.getData();
  tempData.setData($scope.searchGroup);

  $scope._scopename = 'results';
  $scope.searchKey = null;
  $scope.searchType = null;
  $scope.showSearch = false;
  $scope.isPage1 = true;
  $scope.weHaveData = true;

  if (!isEmpty($scope.searchGroup)) {
    if (!isEmpty($scope.searchGroup.category)) {
      $scope.searchKey = $scope.searchGroup.category;
      $scope.showSearch = true;
      $scope.searchType = 'category';
    } else if (!isEmpty($scope.searchGroup.type)) {
      $scope.searchKey = $scope.searchGroup.type;
      $scope.showSearch = true;
      $scope.searchType = 'type';
    } else if (!isEmpty($scope.searchGroup.state)) {
      $scope.searchKey = $scope.searchGroup.state;
      $scope.showSearch = true;
      $scope.searchType = 'state';
    } else if (!isEmpty($scope.searchGroup.search)) {
      if ($scope.searchGroup.search[0] !== null) {
        $scope.searchKey = $scope.searchGroup.search;
        $scope.showSearch = true;
        $scope.searchType = 'search';
      } else {
        $scope.searchKey = 'DOALLSEARCH';
        $scope.showSearch = true;
        $scope.searchType = 'all';
      }
    }
  }




  /* global buttonOpen, buttonClose */
  $scope.doButtonOpen = function() {
    buttonOpen();
  };

  $scope.doButtonClose =  function() {
    buttonClose();
  };

  $scope.$on('$viewContentLoaded', function() {
    //call onload functions here 
    setTimeout(function() {
      setupPopovers();
    }, 300);
  });

  $scope.orderProp = '';
  $scope.query = '';

  // start the filters
  var searchData = tempData.getData();
  console.log('searchdata', searchData);
  
  // var searchData = null;
  if (!searchData){
    searchData = {'type': [ 'APPS' ], 'category': [], 'state': [], 'search': []};
  }

  $scope.searchType = searchData.type.length > 0? searchData.type: [];
  $scope.searchCategory =  searchData.category.length > 0? searchData.category: [];
  $scope.searchState = searchData.state.length > 0? searchData.state: [];

  // grab the data  
  $scope.total = Business.getData();
  console.log($scope.total);
  $scope.filteredTotal = $scope.total;
  $scope.data = $scope.total;
  $scope.rowsPerPage = 20;
  $scope.pageNumber = 1;
  $scope.maxPageNumber = Math.ceil($scope.data.length / $scope.rowsPerPage);

  $scope.$watch('pageNumber',function(val, old){ /* jshint unused:false */
    $scope.pageNumber = parseInt(val);
    if ($scope.pageNumber < 1) {
      $scope.pageNumber = 1;
    }
    if ($scope.pageNumber > $scope.maxPageNumber) {
      $scope.pageNumber = $scope.maxPageNumber;
    }

    var page = $scope.pageNumber;
    if (page < 1 || page === '' || isNaN(page)){
      page = 1;
    }

    $scope.data = $scope.filteredTotal.slice(((page - 1) * $scope.rowsPerPage), (page * $scope.rowsPerPage));
    // $scope.applyFilters();

  });

  $scope.$watch('orderProp',function(val, old){ /* jshint unused:false */
    $scope.applyFilters();
  });

  $scope.$watch('query',function(val, old){ /* jshint unused:false */
    $scope.applyFilters();
  });

  $scope.$watch('rowsPerPage',function(val, old){ /* jshint unused:false */
    $scope.pageNumber = 1;
    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / $scope.rowsPerPage);
    $scope.applyFilters();
  });

  _.each($scope.data, function(item){
    item.shortdescription = item.description.match(/^(.*?)[.?!]\s/)[1] + '.';
  });
  // console.log('data', $scope.data);
  

  $scope.dataTypes = Business.getTypes();
  $scope.categoryTypes = Business.getCategories();
  $scope.stateTypes = Business.getStates();
  
  // function to flip the switch on checkboxes
  var toggleChecks = function(collection){
    var master = false;
    var found = _.where(collection, {'checked': true});
    
    if (!isEmpty(found)) {
      if (found.length !== collection.length) {
        master = true;
      } else {
        master = false;
      }
    } else {
      master = true;
    }
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
  };

  $scope.applyFilters = function() {
    $scope.filteredTotal = $filter('orderBy')($filter('stateFilter')($filter('categoryFilter')($filter('typeFilter')($filter('filter')($scope.total, $scope.query), $scope), $scope), $scope), $scope.orderProp);
    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / $scope.rowsPerPage);
    if (($scope.pageNumber - 1) * $scope.rowsPerPage <= $scope.filteredTotal.length) {
      $scope.pageNumber = 1;
    }
    $scope.data = $scope.filteredTotal.slice((($scope.pageNumber - 1) * $scope.rowsPerPage), ($scope.pageNumber * $scope.rowsPerPage));
    $timeout(function() {
    }, 20);
  };
  $scope.resetPageTransition = function(){
    $scope.applyFilters();
  };
}]);




app.filter('typeFilter', function() {
  return function(input, scope) {
    scope.searchType = _.filter(scope.dataTypes, function(item){
      var found = _.where(scope.dataTypes, {'code': item.code});
      
      if (isEmpty(found)) {
        return true;
      } else {
        return found[0].checked;
      }
    });
    scope.searchType = _.pluck(scope.searchType, 'code');
    if (scope.searchType.length < 1) {
      return input;
    }
    var out = [];
    for (var i = 0; i < input.length; i++){

      if(_.contains(scope.searchType, input[i].type)) {
        out.push(input[i]);
      }
    }
    return out;
  };
});

app.filter('categoryFilter', function() {
  return function(input, scope) {
    scope.searchCategory = _.filter(scope.categoryTypes, function(item){
      var found = _.where(scope.categoryTypes, {'code': item.code});
      
      if (isEmpty(found)) {
        return true;
      } else {
        return found[0].checked;
      }
    });
    scope.searchCategory = _.pluck(scope.searchCategory, 'code');
    if (scope.searchCategory.length < 1) {
      return input;
    }
    var out = [];
    _.each(input, function(temp){
      _.each(scope.searchCategory, function(item){
        var found = _.where(temp.categories, {'code': item});
        if (!isEmpty(found)) {
          out.push(temp);
        }
      });
    });
    out = _.uniq(out);
    return out;
  };
});

app.filter('stateFilter', function() {
  return function(input, scope) {
    scope.searchState = _.filter(scope.stateTypes, function(item){
      var found = _.where(scope.stateTypes, {'type': item.type});
      if (isEmpty(found)) {
        return true;
      } else {
        return found[0].checked;
      }
    });
    scope.searchState = _.pluck(scope.searchState, 'type');
    
    var results = [];
    _.each(scope.searchState, function(item){
      results.push(item.toString().toLowerCase());
    });
    
    if (results.length < 1) {
      return input;
    }
    var out = [];
    for (var i = 0; i < input.length; i++){

      if(_.contains(results, input[i].conformanceState.toString().toLowerCase())) {
        out.push(input[i]);
      }
    }
    return out;
  };
});

