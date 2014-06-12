/* 
* Copyright 2014 Space Dynamics Laboratory - Utah State University Research Foundation.
*
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
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
          return searchKey;
        } else {
          throw new Error('The searchKey has expired.');
          return null
        }
      } else {
        throw new Error('The searchKey has not been set.');
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
      throw new Error('There was an unexpected & unknown error.');
      return null;
    }
  };


  return business;

}]);
