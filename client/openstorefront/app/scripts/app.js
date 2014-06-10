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
.run(['$rootScope', 'localCache', '$location', '$route', function ($rootScope, localCache, $location, $route) {

  //We must initialize global scope variables.
  $rootScope.Current = null;


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
  * This function is what is called when the view had finally been loaded
  * So far all it does is set up the typeaheads for each input field with the
  * class 'typeahead'
  ***************************************************************/
  $rootScope.$on('$viewContentLoaded', function() {
    setupTypeahead();
  });

  /***************************************************************
  * This function is what is called when the modal event is fired
  * class 'typeahead'
  ***************************************************************/
  $rootScope.$on('$viewModal', function(event, id) {
    $('#' + id).modal('show');
  });

  $rootScope.openModal = function(id, current) {
    $rootScope.current = current;
    $rootScope.$broadcast('$' + id);
    $rootScope.$broadcast('$viewModal', id);
  }


}]);