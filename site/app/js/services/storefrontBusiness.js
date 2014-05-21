'use strict';

var app = angular.module('storefront');

app.factory('Business', ['localCache', '$http', '$q', function(LocalCache, $http, $q){
  
  var getCategories = function() {
    return MOCKDATA.componentCategories.categories;
  }


  var getData = function() {
    return MOCKDATA.assets.assets;
  }

  var getDataByType = function(input){
    return _.filter(MOCKDATA.assets.assets, function(item){
      return item.type == input;
    });
  }
  
  var getStates = function() {
    return MOCKDATA.componentStates.states;
  }
  
  var getTypes = function() {
    return MOCKDATA.componentTypes.types;
  }



  return {
    getCategories: getCategories,
    getData: getData,
    getDataByType: getDataByType,
    getStates: getStates,
    getTypes: getTypes
  };
}])