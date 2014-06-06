'use strict';

// app.factory('business', ['$scope', 'localCache', '$http', '$q', function ($scope, LocalCache, $http, $q) {
app.factory('business', function () {

  var business = {};

  business.getFilters = function() {
    return MOCKDATA.filters;
  };

  business.getWatches = function() {
    return MOCKDATA.watchTypes.watches;
  };

  business.getData = function() {
    return MOCKDATA.assets.assets;
  };

  business.getDataByType = function(input){
    return _.filter(MOCKDATA.assets.assets, function(item){
      return item.type === input;
    });
  };
  
  business.getWatches = function(){
    return MOCKDATA.watches;
  };

  business.setWatches = function(watches){
    MOCKDATA.watches = watches;
    return true;
  };
  

  return business;
  
});
// }]);
