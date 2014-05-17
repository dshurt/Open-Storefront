'use strict';

var app = angular.module('storefront');

app.factory('Business', ['localCache', '$http', '$q', function(LocalCache, $http, $q){
  var getData = function() {
    return MOCKDATA.assets.assets;
  }

  var getTypes = function() {
    return MOCKDATA.componentTypes.types;
  }


  return {
    getData: getData,
    getTypes: getTypes
  };
}])