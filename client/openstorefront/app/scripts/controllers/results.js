'use strict';

/* global isEmpty, setupPopovers, openClick:true, openWindowToggle, moveButtons,
fullClick, openFiltersToggle, buttonOpen, buttonClose */

app.controller('ResultsCtrl', ['$scope', 'localCache', 'business', '$filter', '$timeout', '$location', '$rootScope', function ($scope, localCache, Business, $filter, $timeout, $location, $rootScope) {
  // So far we're using the tempData factory, but we could easily change this 
  // to use the localCache factory that has more functions and capabilities
  // and then combine it with our business factory since that was their original
  // purpose.
  // Set up the results controller's variables.
  $scope._scopename         = 'results';
  $scope.searchGroup        = localCache.get('searchKey', 'object');
  $scope.searchKey          = null;
  $scope.searchCode         = null;
  $scope.searchTitle        = null;
  $scope.searchDescription  = null;
  $scope.details            = null;
  $scope.isPage1            = true;
  $scope.showSearch         = false;
  $scope.showWatchButton    = false;
  $scope.showDetails        = false;
  $scope.orderProp          = '';
  $scope.query              = '';
  $scope.noDataMessage      = 'You have filtered out all of the results.';
  $scope.filters            = Business.getFilters();
  $scope.total              = Business.getData();
  $scope.watches            = Business.getWatches();

  

  if ($scope.searchGroup[0] === null) {
    $scope.searchGroup[0]   = { 'key': 'all', 'code': '' };
  }

  // These variables are used for the pagination
  $scope.filteredTotal  = $scope.total;
  $scope.data           = $scope.total;
  $scope.rowsPerPage    = 10;
  $scope.pageNumber     = 1;
  $scope.maxPageNumber  = Math.ceil($scope.data.length / $scope.rowsPerPage);

  // currently this is a hack that grabs a short description and adds it to the
  // component information
  _.each($scope.data, function(item){
    item.shortdescription = item.description.match(/^(.*?)[.?!]\s/)[1] + '.';
  });

  /***************************************************************
  * This function removes the inherent filter (if you click on apps, types no longer applies etc)
  ***************************************************************/
  var adjustFilters = function() {
    $scope.filters = _.reject($scope.filters, function(item) {
      return item.key === $scope.searchGroup[0].key;
    });
  }

  /*******************************************************************************
  * This is used to initialize the scope title, key, and code. Once we have a 
  * database, this is most likely where we'll do the first pull for data.
  *
  * TODO:: Add query prameters capabilities for this page so that we don't have
  * to rely on the local/session storrage to pass us the search key
  *
  * TODO:: When we do start using actual transfered searches from the main page
  * we need to initialize checks on the filters that were sent to us from that
  * page (or we need to disable the filter all together)
  *******************************************************************************/
  if (!isEmpty($scope.searchGroup)) {
    // grab all of the keys in the filters
    var keys = _.pluck($scope.filters, 'key');

    if (_.contains(keys, $scope.searchGroup[0].key)) {
      // if the search group is based on one of those filters do this
      $scope.searchKey          = $scope.searchGroup[0].key;
      $scope.searchCode         = $scope.searchGroup[0].code;
      $scope.showSearch         = true;
      $scope.searchGroupItem    = _.where($scope.filters, {'key': $scope.searchKey})[0];
      console.log("item", $scope.searchGroupItem);
      
      $scope.searchColItem      = _.where($scope.searchGroupItem.collection, {'code': $scope.searchCode})[0];
      console.log("item", $scope.searchColItem);
      $scope.searchType         = $scope.searchGroupItem.name;
      $scope.searchTitle        = $scope.searchType + ', ' + $scope.searchColItem.type;
      $scope.modalTitle         = $scope.searchType + ', ' + $scope.searchColItem.type;
      $scope.searchDescription  = $scope.searchColItem.desc;
      $scope.modalBody          = $scope.searchColItem.longDesc;
      adjustFilters();
    } else if ($scope.searchGroup[0].key === 'search') {
      // Otherwise check to see if it is a search
      $scope.searchKey          = 'DOALLSEARCH';
      $scope.showSearch         = true;
      $scope.searchTitle        = $scope.searchGroup[0].code;
      $scope.modalTitle         = $scope.searchGroup[0].code;
      $scope.searchDescription  = 'Search resutls based on the search key: ' + $scope.searchGroup[0].code;
      $scope.modalBody          = 'The restuls on this page are restricted by an implied filter on words similar to the search key \'' + $scope.searchGroup[0].code + '\'';
    } else {
      // In this case, our tempData object exists, but has no useable data
      $scope.searchKey          = 'DOALLSEARCH';
      $scope.showSearch         = true;
      $scope.searchTitle        = 'All';
      $scope.modalTitle         = 'All';
      $scope.searchDescription  = 'Search all results';
      $scope.modalBody          = 'The results found on this page are not restricted by any implied filters.';
    }
  } else {
    // In this case, our tempData doesn't exist
    $scope.searchKey          = 'DOALLSEARCH';
    $scope.showSearch         = true;
    $scope.searchTitle        = 'All';
    $scope.modalTitle         = 'All';
    $scope.searchDescription  = 'Search all results';
    $scope.modalBody          = 'The results found on this page are not restricted by any implied filters.';
  }



  /*******************************************************************************
  * This function watches for the view content loaded event and runs a timeout 
  * function to handle the initial movement of the display buttons.
  *******************************************************************************/
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

  /***************************************************************
  * This function is used to watch the pagenumber variable. When it changes
  * we need to readjust the pagination
  ***************************************************************/
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

  /***************************************************************
  * This function is used to watch the rowsPerPage variable. When it changes
  * we need to adjust pagination
  ***************************************************************/
  $scope.$watch('rowsPerPage',function(val, old){ /* jshint unused:false */
    var rowPP = $scope.rowsPerPage;
    if (rowPP < 1 || rowPP === '' || isNaN(rowPP) || rowPP === null){
      rowPP = 1;
    }
    $scope.pageNumber = 1;
    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / rowPP);
    $scope.applyFilters();
  });

  /***************************************************************
  * This function is used to watch the orderProp variable. When it changes
  * re-filter the data
  ***************************************************************/
  $scope.$watch('orderProp',function(val, old){ /* jshint unused:false */
    $scope.applyFilters();
  });

  /***************************************************************
  * This function is used to watch the query variable. When it changes
  * re-filter the data
  ***************************************************************/
  $scope.$watch('query',function(val, old){ /* jshint unused:false */
    $scope.applyFilters();
  });

  /***************************************************************
  * This funciton calls the global buttonOpen function that handles page 
  * flyout animations according to the state to open the details
  ***************************************************************/
  $scope.doButtonOpen = function() {
    buttonOpen();
  };

  /***************************************************************
  * This funciton calls the global buttonClose function that handles page 
  * flyout animations according to the state to close the details
  ***************************************************************/
  $scope.doButtonClose =  function() {
    buttonClose();
  };


  /***************************************************************
  * This function handles toggleing filter checks per filter heading click.
  ***************************************************************/
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

  /***************************************************************
  * This function updates the details when a component title is clicked on
  ***************************************************************/
  $scope.updateDetails = function(id){
    $scope.showWatchButton = !!!(_.where($scope.watches, {'id': id}).length);
    if (!openClick) {
      buttonOpen();
    }
    var temp =  _.where($scope.data, {'id': id})[0];
    if (temp)
    {
      $scope.details = temp;
    }
    $scope.showDetails = true;
  };

  /***************************************************************
  * This function adds a component to the watch list and toggles the buttons
  ***************************************************************/
  $scope.addToWatches = function(id){
    var a = _.findWhere($scope.watches, {'id': id});
    if (a === undefined  || isEmpty(a)) {
      $scope.watches.push({'id': id, 'watched': true});
    }
    $scope.showWatchButton = false;
    Business.setWatches($scope.watches);
  };

  /***************************************************************
  * This function removes a component to the watch list and toggles the buttons
  ***************************************************************/
  $scope.removeFromWatches = function(id){
    var a = _.findWhere($scope.watches, {'id': id});

    if (a !== undefined  && !isEmpty(a)) {
      $scope.watches.splice(_.indexOf($scope.watches, a), 1);
    }

    $scope.showWatchButton = true;
    Business.setWatches($scope.watches);
  };

  /***************************************************************
  * This function does the route redirection to the user profile path in order
  * to allow the user to view their watches.
  ***************************************************************/
  $scope.viewWatches = function () {
    $location.path('/userprofile');
  };

  /***************************************************************
  * This function applies the filters that have been given to us to filter the
  * data with
  ***************************************************************/
  $scope.applyFilters = function() {

    var results =
    // We must use recursive filtering or we will get incorrect results
    // the order DOES matter here.
    $filter('orderBy')
    ($filter('componentFilter')
      ($filter('filter')($scope.total, $scope.query),
    // filter the data by the query and return the result to the componentFilter input
    $scope.filters),
    // then use the componentFilter returned data as the input to the order-by filter
    $scope.orderProp);

    // make sure we reset the data and then copy over the results  
    $scope.filteredTotal = [''];
    $scope.filteredTotal = results;

    // Do the math required to assure that we have a valid page number and 
    // maxPageNumber
    $scope.maxPageNumber = Math.ceil($scope.filteredTotal.length / $scope.rowsPerPage);
    if (($scope.pageNumber - 1) * $scope.rowsPerPage >= $scope.filteredTotal.length) {
      $scope.pageNumber = 1;
    }

    // Set the data that will be displayed to the first 'n' results of the filtered data
    $scope.data = $scope.filteredTotal.slice((($scope.pageNumber - 1) * $scope.rowsPerPage), ($scope.pageNumber * $scope.rowsPerPage));

    // after a slight wait, reapply the popovers for the results ratings.
    $timeout(function() {
      setupPopovers();
    }, 300);
  };

  $rootScope.$on('$descModal', function(event) {
    // re-initialize the modal content here if we must
  });
}]);

