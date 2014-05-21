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
    if (sessionStorage.tempData != undefined && sessionStorage.tempData != null)
    {
      searchService.data = angular.fromJson(sessionStorage.tempData);
    }
    else
    {
      searchService.data = {"type": [ "APPS" ], "category": [], "state": []};
    }
  }

  searchService.saveState = function () {
    sessionStorage.tempData = angular.toJson(searchService.getData());
    console.log("Session storage", sessionStorage);
  },


  $rootScope.$on("savestate", searchService.saveState);
  $rootScope.$on("restorestate", searchService.restoreState);

  return searchService;
}]);


// Speed up calls to hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}