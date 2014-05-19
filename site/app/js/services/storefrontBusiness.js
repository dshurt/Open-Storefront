'use strict';

var app = angular.module('storefront');

app.factory('Business', ['localCache', '$http', '$q', function(LocalCache, $http, $q){
  var getData = function() {
    return MOCKDATA.assets.assets;
  }

  var getTypes = function() {
    return MOCKDATA.componentTypes.types;
  }

  var getDataByType = function(input){
    return _.filter(MOCKDATA.assets.assets, function(item){
      return item.type == input;
    });
  }


  return {
    getData: getData,
    getDataByType: getDataByType,
    getTypes: getTypes
  };
}])