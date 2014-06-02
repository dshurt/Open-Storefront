'use strict';

// app.factory('business', ['$scope', 'localCache', '$http', '$q', function ($scope, LocalCache, $http, $q) {
app.factory('business', function () {

  var business = {};
  business.getCategories = function() {
    return MOCKDATA.componentCategories.categories;
  };


  business.getData = function() {
    return MOCKDATA.assets.assets;
  };

  business.getDataByType = function(input){
    return _.filter(MOCKDATA.assets.assets, function(item){
      return item.type === input;
    });
  };
  
  business.getStates = function() {
    return MOCKDATA.componentStates.states;
  };
  
  business.getTypes = function() {
    return MOCKDATA.componentTypes.types;
  };

  business.getWatches = function() {
    return MOCKDATA.watchTypes.watches;
  };

  return business;
  
});
// }]);
