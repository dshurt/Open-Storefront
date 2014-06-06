'use strict';

/* global isEmpty, setupPopovers, openClick:true, openWindowToggle, moveButtons, fullClick, openFiltersToggle */

app.controller('ResultsCtrl', ['$scope', 'tempData', 'business', '$filter', '$timeout', function ($scope, tempData, Business, $filter, $timeout) {
  tempData.restoreState();
  $scope.searchGroup = tempData.getData();
  tempData.setData($scope.searchGroup);

  $scope._scopename = 'results';
  $scope.searchKey = null;
  $scope.searchCode = null;
  $scope.searchTitle = null;
  $scope.showSearch = false;
  $scope.isPage1 = true;
  $scope.filters = Business.getFilters();
  $scope.orderProp = '';
  $scope.query = '';

  $scope.noDataMessage = 'You have filtered out all of the results.';

  $scope.total = Business.getData();
  $scope.watches = Business.getWatches();
  $scope.showWatchButton = false;


  $scope.filteredTotal = $scope.total;
  $scope.data = $scope.total;
  $scope.rowsPerPage = 10;
  $scope.pageNumber = 1;
  $scope.maxPageNumber = Math.ceil($scope.data.length / $scope.rowsPerPage);
  $scope.details = null;
  $scope.showDetails = false;



  if (!isEmpty($scope.searchGroup)) {
    var keys = _.pluck($scope.filters, 'key');
    if (_.contains(keys, $scope.searchGroup[0].key)) {
      
      $scope.searchKey = $scope.searchGroup[0].key;
      $scope.searchCode = $scope.searchGroup[0].code;
      $scope.showSearch = true;
      $scope.searchTitle =  _.where(_.where($scope.filters, {'key': $scope.searchGroup[0].key})[0].collection, {'code': $scope.searchGroup[0].code})[0].type;
    } else if ($scope.searchGroup[0].key === 'search') {
      $scope.searchKey = 'DOALLSEARCH';
      $scope.showSearch = true;
      $scope.searchTitle = $scope.searchGroup[0].code;
    } else {
      $scope.searchKey = 'DOALLSEARCH';
      $scope.showSearch = true;
      $scope.searchTitle = 'All';
    }
  } else {
    $scope.searchKey = 'DOALLSEARCH';
    $scope.showSearch = true;
    $scope.searchTitle = 'All';
  }

  $scope.$on('$viewContentLoaded', function(){
    $timeout(function() {
      moveButtons($('#showPageRight'), $('.page1'));
      moveButtons($('#showPageLeft'), $('.page2'));
      if (fullClick === 0) {
        if ($(window).width() >= 768) {
          openFiltersToggle();
        }
      }
    }, 100);
  });

  /* global buttonOpen, buttonClose */
  $scope.doButtonOpen = function() {
    buttonOpen();
  };

  $scope.doButtonClose =  function() {
    buttonClose();
  };

  $scope.$watch('pageNumber',function(val, old){ /* jshint unused:false */

    $scope.pageNumber = parseInt(val);
    if ($scope.pageNumber < 1) {
      $scope.pageNumber = 1;
    }
    if ($scope.pageNumber > $scope.maxPageNumber) {
      $scope.pageNumber = $scope.maxPageNumber;
    }

    var page = $scope.pageNumber;
    if (page < 1 || page === '' || isNaN(page) || page === null){
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
    var rowPP = $scope.rowsPerPage;
    if (rowPP < 1 || rowPP === '' || isNaN(rowPP) || rowPP === null){
      rowPP = 1;
    }
    $scope.pageNumber = 1;
    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / rowPP);
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


  $scope.updateDetails = function(id){

    $scope.showWatchButton = !!!(_.where($scope.watches, {'id': id}).length);
    if (!openClick) {
      openWindowToggle();
    }
    var temp =  _.where($scope.data, {'id': id})[0];
    if (temp)
    {
      $scope.details = temp;
    }
    $scope.showDetails = true;
  };

  $scope.addToWatches = function(id){
    $scope.watches.push({'id': id, 'watched': true});
    $scope.showWatchButton = false;
    Business.setWatches($scope.watches);
  };

  $scope.applyFilters = function() {
    var results =  $filter('orderBy')($filter('componentFilter')($filter('filter')($scope.total, $scope.query), $scope.filters), $scope.orderProp);
    $scope.filteredTotal = [''];
    $scope.filteredTotal = results;

    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / $scope.rowsPerPage);
    if (($scope.pageNumber - 1) * $scope.rowsPerPage >= $scope.filteredTotal.length) {
      $scope.pageNumber = 1;
    }
    $scope.data = $scope.filteredTotal.slice((($scope.pageNumber - 1) * $scope.rowsPerPage), ($scope.pageNumber * $scope.rowsPerPage));

    $timeout(function() {
      setupPopovers();
    }, 300);
  };
}]);

