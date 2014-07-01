/* 
* Copyright 2014 Space Dynamics Laboratory - Utah State University Research Foundation.
*
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';

/* global isEmpty, setupPopovers, openClick:true, setupResults, moveButtons,
fullClick, openFiltersToggle, buttonOpen, buttonClose, toggleclass*/

app.controller('ResultsCtrl', ['$scope', 'localCache', 'business', '$filter', '$timeout', '$location', '$rootScope', '$q', '$route',  function ($scope,  localCache, Business, $filter, $timeout, $location, $rootScope, $q, $route) { /*jshint unused: false*/
  // Set up the results controller's variables.
  $scope._scopename         = 'results';
  $scope.tagsList           = Business.getTagsList();
  $scope.prosConsList       = Business.getProsConsList();
  $scope.scoreCard          = Business.getScoreCard();
  $scope.externalDepend     = Business.getExternalDepend();
  $scope.localAssetArtifacts = Business.getLocalAssetArtifacts();
  $scope.componentVitals    = Business.getComponentVitals();
  $scope.pointsContact      = Business.getPointsContact();
  $scope.componentSummary      = Business.getComponentSummary();
  $scope.componentEvalProgressBar      = Business.getComponentEvalProgressBar();
  $scope.componentEvalProgressBarDates      = Business.getComponentEvalProgressBarDates();
  $scope.componentState      = Business.getComponentState();

  $scope.tagsList.sort();

  $scope.lastUsed = new Date();

 // $scope.date1 = moment();

  $scope.expertise = [
    //
    {'value':'1', 'label': 'Less than 1 month'},
    {'value':'2', 'label': 'Less than 3 months'},
    {'value':'3', 'label': 'Less than 6 months'},
    {'value':'4', 'label': 'Less than 1 year'},
    {'value':'5', 'label': 'Less than 3 years'},
    {'value':'6', 'label': 'More than 3 years'}
  //
  ];

  $scope.tabs = {
    'current': null,
    'bars': [
      //
      {
        'title': 'Summary',
        'include': 'views/details/summary.html'
      },
      {
        'title': 'Details',
        'include': 'views/details/details.html'
      },
      {
        'title': 'Reviews',
        'include': 'views/details/reviews.html'
      },
      {
        'title': 'Comments',
        'include': 'views/details/comments.html'
      }
    //
    ]
  };

  $scope.selectedTab = $scope.tabs[0];

  //console.log("hi") ;
  $scope.setSelectedTab = function(tab) {
    $scope.selectedTab = tab;
  };

  $scope.tabClass = function(tab) {
    if ($scope.selectedTab === tab) {
      return 'active';
    } else {
      return '';
    }
  };

  $scope.getTimes=function(n){
    return new Array(parseInt(n));
  };

  $scope.tabs2 = [
    //
    { title:'SUMMARY', content:'1', relpath:'views/details/summary.html' },
    { title:'DETAILS', content:'2', relpath:'views/details/details.html' },
    { title:'REVIEWS', content:'3', relpath:'views/details/reviews.html' },
    { title:'COMMENTS', content:'4', relpath:'views/details/comments.html' },
   /* { title:'EVALUATION', content:'5', relpath:'views/details/evaluation.html' }*/
  //
  ];
  $scope.tab = $scope.tabs2[0];

  /***************************************************************
  * This function is looked at for auto suggestions for the tag list
  * if a ' ' is the user's entry, it will auto suggest the next 20 tags that
  * are not currently in the list of tags. Otherwise, it will look at the
  * string and do a substring search.
  ***************************************************************/
  $scope.checkTagsList = function(query, list, source) {
    var deferred = $q.defer();
    var subList = null;
    if (query === ' ') {
      subList = _.reject(source, function(item) {
        return !!(_.where(list, {'text': item}).length);
      });
    } else {
      subList = _.filter(source, function(item) {
        return item.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    }
    deferred.resolve(subList);
    return deferred.promise;
  };

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
  $scope.typeahead          = null;
  $scope.searchGroup        = null;
  $scope.searchKey          = null;
  $scope.filters            = null;
  $scope.total              = null;
  $scope.watches            = null;
  $scope.ratingsFilter      = 0;
  $scope.isLanding          = false;


  /***************************************************************
  * Set up typeahead, and then watch for selection made
  ***************************************************************/
  if ($rootScope.typeahead) {
    $scope.typeahead  = $rootScope.typeahead;
  } else {
    $scope.typeahead  = Business.typeahead(Business.getData, 'name');
  }


  // These variables are used for the pagination
  $scope.filteredTotal  = null;
  $scope.data           = null;
  $scope.rowsPerPage    = 10;
  $scope.pageNumber     = 1;
  $scope.maxPageNumber  = 1;

  // currently this is a hack that grabs a short description and adds it to the
  // component information


  var getBody = function(route) {
    var deferred = $q.defer();
    $.get(route).then(function(responseData) {
      deferred.resolve(responseData);
    });
    return deferred.promise;
  };


  /***************************************************************
  * This function is called once we have the search request from the business layer
  ***************************************************************/
  $scope.reAdjust = function(key) {
    $scope.searchGroup        = key;
    $scope.searchKey          = $rootScope.searchKey;
    $scope.filters            = Business.getFilters();
    $scope.total              = Business.getData();
    $scope.watches            = Business.getWatches();
    $scope.filteredTotal      = $scope.total;
    $scope.data               = $scope.total;

    _.each($scope.data, function(item){
      item.shortdescription = item.description.match(/^(.*?)[.?!]\s/)[1] + '.';
    });
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
      var foundFilter = null;
      var foundCollection = null;
      var type = '';

      if (_.contains(keys, $scope.searchGroup[0].key)) {
        $scope.searchKey          = $scope.searchGroup[0].key;
        $scope.searchCode         = $scope.searchGroup[0].code;
        $scope.searchGroupItem    = _.where($scope.filters, {'key': $scope.searchKey})[0];
        $scope.searchType         = $scope.searchGroupItem.name;
        $scope.showSearch         = true;
        
        foundFilter = _.where($scope.filters, {'key': $scope.searchGroup[0].key})[0];
        foundCollection = _.where(foundFilter.collection, {'code': $scope.searchGroup[0].code})[0];

        // if the search group is based on one of those filters do this
        if ($scope.searchCode !== 'all') {
          $scope.searchColItem      = _.where($scope.searchGroupItem.collection, {'code': $scope.searchCode})[0];
          $scope.searchTitle        = $scope.searchType + ', ' + $scope.searchColItem.type;
          $scope.modalTitle         = $scope.searchType + ', ' + $scope.searchColItem.type;
          $scope.searchDescription  = $scope.searchColItem.desc;
          if (foundCollection.landing !== undefined && foundCollection.landing !== null) {
            getBody(foundCollection.landing).then(function(result) {
              $scope.modalBody = result;
              $scope.isLanding = true;
            });
          } else {
            $scope.modalBody          = $scope.searchColItem.longDesc;
            $scope.isLanding = false;
          }
        } else {
          $scope.searchTitle        = $scope.searchType + ', All';
          $scope.modalTitle         = $scope.searchType + ', All';
          $scope.searchDescription  = 'The results on this page are restricted by an implied filter on the attribute: ' + $scope.searchType;
          $scope.modalBody          = 'This will eventually hold a description for this attribute type.';
          $scope.isLanding = false;
        }
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

    $scope.applyFilters();
  };

  /***************************************************************
  * This function grabs the search key and resets the page in order to update the search
  ***************************************************************/
  var callSearch = function() {
    Business.search(false, false, true).then(

    //This is the success function on returning a value from the business layer 
    function(key) {
      var type = 'all';
      var code = '';
      var query = null;
      if (key === null || key === undefined) {
        if (!isEmpty($location.search()))
        {
          query = $location.search();
          if (query.type && query.code) {
            type = query.type;
            code = query.code;
          }
        }
        $scope.reAdjust([{ 'key': type, 'code': code }]);
      } else {
        type = '';
        code = '';
        // console.log('search', $location.search());
        
        if (!isEmpty($location.search()))
        {
          query = $location.search();
          if (query.type && query.code) {
            type = query.type;
            code = query.code;
          } else {
            type = 'all';
          }
          key = [{ 'key': type, 'code': code }];
        }
        // console.log('key', key);
        
        $scope.reAdjust(key);
      }
    },
    // This is the failure function that handles a returned error
    function(error) {
      console.error('ERROR: ', error);
      
      var type = 'all';
      var code = '';
      if (!isEmpty($location.search()))
      {
        var query = $location.search();
        if (query.type && query.code) {
          type = query.type;
          code = query.code;
        }
      }
      $scope.reAdjust([{ 'key': type, 'code': code }]);
    });
    //
  };

  /***************************************************************
  * This function is used by the reviews section in the details to remove
  * and add the ellipsis
  ***************************************************************/
  $scope.toggleclass = function(id, className) {
    toggleclass(id, className);
  };


  $scope.setupModal = function(classNames) {
    var deferred = $q.defer();
    if (classNames !== '') {
      $scope.classes = classNames;
      $scope.nav = {
        'current': 'Reviews',
        'bars': [
          //
          {
            'title': 'Reviews',
            'include': 'views/reviews/reviews.html'
          },
          {
            'title': 'Write a Review',
            'include': 'views/reviews/newfeedback.html'
          }
        //  
        ]
      };
      deferred.resolve();
    } else {
      $scope.nav = '';
      deferred.resolve();
    }

    if (classNames === '' && $scope.isLanding) {
      $scope.classes = 'fullWidthModal';
    } else if (classNames === '') {
      $scope.classes = '';
    }
    return deferred.promise;
  };

  /***************************************************************
  * Event for callSearch caught here. This is triggered by the nav
  * search bar when you are already on the results page.
  ***************************************************************/
  $scope.$on('$callSearch', function(event) {/*jshint unused: false*/
    callSearch();
  });


  /***************************************************************
  * Catch the enter/select event here for typeahead
  ***************************************************************/
  $scope.$on('$typeahead.select', function(event, value, index) {/*jshint unused: false*/
    $scope.applyFilters();
  });

  /***************************************************************
  * This function removes the inherent filter (if you click on apps, types no longer applies etc)
  ***************************************************************/
  var adjustFilters = function() {
    if ($scope.searchGroup[0].key) {
      $scope.filters = _.reject($scope.filters, function(item) {
        return item.key === $scope.searchGroup[0].key;
      });
    }
  };

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

    if ($scope.filteredTotal) {
      $scope.data = $scope.filteredTotal.slice(((page - 1) * $scope.rowsPerPage), (page * $scope.rowsPerPage));
    } else {
      $scope.data = [];
    }
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
  * This function is used to watch the query variable. When it changes
  * re-filter the data
  ***************************************************************/
  $scope.$watch('ratingsFilter',function(val, old){ /* jshint unused:false */
    $scope.applyFilters();
  });

  /***************************************************************
  * This function is used to watch filters in order to show the 'applied'
  * message so that they won't forget one of the filters is applied.
  ***************************************************************/
  $scope.$watch('filters',function(val, old){ /* jshint unused:false */
    _.each($scope.filters, function(filter){
      filter.hasChecked = _.some(filter.collection, function(item){
        return item.checked;
      });
      if (!filter.hasChecked) {
        filter.checked = false;
      }
    });
  }, true);

  $scope.$on('$descModal', function(event) { /*jshint unused: false*/
    // re-initialize the modal content here if we must
    if ($scope.nav !== undefined && $scope.nav !== null) {

      if ($rootScope.current) {
        $scope.nav.current = $rootScope.current;
      } else {
        $scope.nav.current = 'Reviews';
      }
    }
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
  $scope.toggleChecks = function(collection, override){
    var master = false;
    if (override === undefined || override === null || override === '') {
      override = false;
    }

    var found = _.where(collection, {'checked': true});
    
    if (override) {
      master = false;
    } else {
      if (!isEmpty(found)) {
        if (found.length !== collection.length) {
          master = true;
        } else {
          master = false;
        }
      } else {
        master = true;
      }
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
    $scope.getEvaluationState();
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
  * This function saves a component's tags
  ***************************************************************/
  $scope.saveTags = function(id, tags){
    Business.saveTags(id, tags);
    $scope.applyFilters();
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
  * This function does the route redirection to the user profile path in order
  * to allow the user to view their watches.
  ***************************************************************/
  $scope.getEvaluationState = function () {
    if ($scope.details && $scope.details.evaluationLevel !== undefined) {
      var code = $scope.details.evaluationLevel[0].code;
      var stateFilter = _.where($scope.filters, {'key': 'evaluationLevel'})[0];
      var item = _.where(stateFilter.collection, {'code': code})[0];
      return item.type;
    }
    return '';
  };

  /***************************************************************
  * This function resets the filters in the results page in order to clear
  * the filters as quickly as possible
  ***************************************************************/
  $scope.clearFilters = function() {
    $scope.orderProp = '';
    $scope.ratingsFilter = null;
    $scope.tagsFilter = null;
    $scope.query = null;
    _.each($scope.filters, function(item) {
      item.checked = false;
      $scope.toggleChecks(item.collection, true);
    });
    $scope.applyFilters();
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
    ($filter('ratingFilter')
      ($filter('tagFilter')
        ($filter('componentFilter')
          ($filter('filter')($scope.total, $scope.query),
    // filter the data by the query and return the result to the componentFilter input
    $scope.filters),
          $scope.tagsFilter),
        $scope.ratingsFilter),
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

  callSearch();
  setupResults();
}]);

