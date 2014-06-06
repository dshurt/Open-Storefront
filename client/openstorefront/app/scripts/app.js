'use strict';

/* global setupTypeahead, resetAnimGlobals*/
/* exported app */

/***************************************************************
* This is where THE app is configured
***************************************************************/
var app = angular
// Here we add the dependancies for the app
.module('openstorefrontApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', ])
// Here we configure the route provider
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/userprofile', {
    templateUrl: 'views/userprofile.html',
    controller: 'UserProfileCtrl'
  })
  .when('/results', {
    templateUrl: 'views/results.html',
    controller: 'ResultsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
// here we add the .run function for intial setup and other useful functions
.run(['$rootScope', 'tempData', '$location', '$route', function ($rootScope, tempData, $location, $route) {
  
  /***************************************************************
  * This function watches for a route change start and does a few things
  * params: event -- keeps track of which event is happening
  * params: next -- The next route we're headed for
  * params: current -- The current route we're at
  * 
  *
  * This is where we re-apply some functions on route-change
  *
  * This might also be where we do our 'is-logged-in' check
  ***************************************************************/
  $rootScope.$on('$routeChangeStart', function (event, next, current) {/* jshint unused:false */
    if (current && current.loadedTemplateUrl === 'views/results.html') {
      resetAnimGlobals();
    }
    if (sessionStorage.restorestate === 'true') {
      //let everything know we need to restore state
      $rootScope.$broadcast('restorestate');
      sessionStorage.restorestate = false;
    }
    setTimeout(function () {
      $('.searchBar:input[type=\'text\']').on('click', function () {
        $(this).select();
      });
    }, 500);
  });

  /***************************************************************
  * This function  handles events very similar to the event handler for the
  * route change. I'm not completely positive on the difference, but this is
  * what was required to trigger the tempData savestate event
  * params: event -- keeps track of which event is happening
  * params: newUrl -- The next route we're headed for
  * params: oldUrl -- The current route we're at
  ***************************************************************/
  $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {/* jshint unused:false */
    $rootScope.$broadcast('savestate');
  });

  /***************************************************************
  * This function is what is called when the view had finally been loaded
  * So far all it does is set up the typeaheads for each input field with the
  * class 'typeahead'
  ***************************************************************/
  $rootScope.$on('$viewContentLoaded', function() {
    setupTypeahead();
  });

  /***************************************************************
  * This function is used to send the route to the results page whenever someone
  * uses the search bar in the navigation
  * params: param name -- param description
  * returns: Return name -- return description
  ***************************************************************/
  $rootScope.goToSearchWithSearch = function(search){ /*jshint unused:false*/
    tempData.setData([ { 'key': 'search', 'code': search } ]);
    tempData.saveState();
    if ($location.path() === '/results') {
      $route.reload();
    } else {
      $location.path('/results');
    }
  };


}])
// This is where we built the tempData factory that is used to transfer data to
// the results page
.factory('tempData', ['$rootScope', function($rootScope) {
  // set up the variables
  var searchService   = {};
  searchService.data  = {};

  /***************************************************************
  * This function sets the data in the factory
  * params: item -- an object to fill the data with
  ***************************************************************/
  searchService.setData = function(item) {
    searchService.data = item;
  };

  /***************************************************************
  * This function retrieves the data from the factory
  * returns: data -- The object that was stored in the tempData
  ***************************************************************/
  searchService.getData = function() {
    return searchService.data;
  };

  /***************************************************************
  * This function restores the state by retrieving the session information
  ***************************************************************/
  searchService.restoreState = function () {
    if (sessionStorage.tempData !== undefined && sessionStorage.tempData !== null)
    {
      searchService.data = angular.fromJson(sessionStorage.tempData);
    }
    else
    {
      searchService.data = {'type': [ 'APPS' ], 'category': [], 'state': []};
    }
  };

  /***************************************************************
  * This function saves the state of tempData by storing it in the session
  * information
  ***************************************************************/
  searchService.saveState = function () {
    sessionStorage.tempData = angular.toJson(searchService.getData());
  };


  /***************************************************************
  * These are event handlers for the custom broadcast events
  ***************************************************************/
  $rootScope.$on('savestate', searchService.saveState);
  $rootScope.$on('restorestate', searchService.restoreState);

  return searchService;
}]);
