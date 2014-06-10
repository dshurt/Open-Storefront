'use strict';

// app.factory('business', ['$scope', 'localCache', '$http', '$q', function ($scope, LocalCache, $http, $q) {
app.factory('business', ['localCache', function (localCache) {
  // 60 seconds until expiration
  var expireTime = 60 * 1000;
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
  
  business.search = function(type, key){
    // if (!_.isFunction(callback)) {
      // throw new Error('A callback is required for this function.');
    // }
    if (!(type && key)) {
      var reCallRequired = true;
      var searchKey = localCache.get('searchKey', 'object');
      if (searchKey) {
        var cacheTime = localCache.get('searchKey-time', 'date');
        var timeDiff = new Date() - cacheTime;
        // we take a quarter of a minute before the search expires
        if (timeDiff < expireTime * .25)
        {
          reCallRequired = false;
          return searchKey;
        } else {
          throw new Error('A callback is required for this function.');
          return null
        }
      } else {
        throw new Error('A callback is required for this function.');
        return null;
      }
    } else if (!type && key) {
      localCache.save('searchKey', [ { 'key': 'search', 'code': key } ]);
      localCache.save('searchKey-time', new Date());
      return key;
    } else if (type && key) {
      localCache.save('searchKey', [ { 'key': type, 'code': key } ]);
      localCache.save('searchKey-time', new Date());
      return key;
    } else {
      throw new Error('A callback is required for this function.');
      return null;
    }
  };


  return business;

}]);
