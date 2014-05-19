'use strict';

var app = angular.module('storefront', []);


app.run(function ($rootScope) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    if (sessionStorage.restorestate == "true") {
      console.log("Session storage", sessionStorage);
      $rootScope.$broadcast('restorestate'); //let everything know we need to restore state
      sessionStorage.restorestate = false;
    }
  });


  window.onbeforeunload = function (event) {
    $rootScope.$broadcast('savestate');
  };
});

app.factory('tempData', ['$rootScope', function($rootScope) {
  var searchService = {};

  searchService.data = {
    type: ''
  };

  searchService.setData = function(item) {
    searchService.data = item;
  };

  searchService.getData = function() {
    return searchService.data;
  }

  searchService.restoreState = function () {
    console.log("Session storage", sessionStorage);
    searchService.data = angular.fromJson(sessionStorage.tempData);
  }

  searchService.saveState = function () {
    sessionStorage.tempData = angular.toJson(searchService.getData());
    console.log("Session storage", sessionStorage);
  },


  $rootScope.$on("savestate", searchService.saveState);
  $rootScope.$on("restorestate", searchService.restoreState);

  return searchService;
}]);
