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
  $scope.filters = Business.getFilters();
  $scope.orderProp = '';
  $scope.query = '';

  $scope.total = Business.getData();

  $scope.filteredTotal = $scope.total;
  $scope.data = $scope.total;
  $scope.rowsPerPage = 20;
  $scope.pageNumber = 1;
  $scope.maxPageNumber = Math.ceil($scope.data.length / $scope.rowsPerPage);

  // if (!isEmpty($scope.searchGroup)) {
  //   if (!isEmpty($scope.searchGroup.category)) {
  //     $scope.searchKey = $scope.searchGroup.category;
  //     $scope.showSearch = true;
  //     $scope.searchType = 'category';
  //   } else if (!isEmpty($scope.searchGroup.type)) {
  //     $scope.searchKey = $scope.searchGroup.type;
  //     $scope.showSearch = true;
  //     $scope.searchType = 'type';
  //   } else if (!isEmpty($scope.searchGroup.state)) {
  //     $scope.searchKey = $scope.searchGroup.state;
  //     $scope.showSearch = true;
  //     $scope.searchType = 'state';
  //   } else if (!isEmpty($scope.searchGroup.search)) {
  //     if ($scope.searchGroup.search[0] !== null) {
  //       $scope.searchKey = $scope.searchGroup.search;
  //       $scope.showSearch = true;
  //       $scope.searchType = 'search';
  //     } else {
  //       $scope.searchKey = 'DOALLSEARCH';
  //       $scope.showSearch = true;
  //       $scope.searchType = 'all';
  //     }
  //   }
  // }


  $scope.$on('$includeContentLoaded', function() {
    setupPopovers();
  });


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
    $scope.applyFilters();

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
  
  // function to flip the switch on checkboxes
  $scope.toggleChecks = function(collection){
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

  $scope.details = $scope.data[0];

  $scope.updateDetails = function(id){
    var temp =  _.where($scope.data, {'id': id})[0];
    if (temp)
    {
      $scope.details = temp;
    }
  };

  $scope.applyFilters = function() {
    $scope.filteredTotal = $filter('orderBy')($filter('componentFilter')($filter('filter')($scope.total, $scope.query), $scope.filters), $scope.orderProp);
    
    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / $scope.rowsPerPage);
    if (($scope.pageNumber - 1) * $scope.rowsPerPage <= $scope.filteredTotal.length) {
      $scope.pageNumber = 1;
    }
    $scope.data = $scope.filteredTotal.slice((($scope.pageNumber - 1) * $scope.rowsPerPage), ($scope.pageNumber * $scope.rowsPerPage));


    // TODO:: FIX THIS BUG WITH POPOVERS NOT SHOWING UP AFTER FILTERING.....
    // setupPopovers();

    $timeout(function() {
    }, 20);
  };
}]);

