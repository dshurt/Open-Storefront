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

/*global isEmpty*/

app.factory('business', ['localCache', '$http', '$q', function (localCache, $http, $q) { /*jshint unused: false*/
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

  business.saveTags = function(id, tags) {
    var a = _.findWhere(MOCKDATA.assets.assets, {'id': id});
    if (a === undefined  || isEmpty(a)) {
      a.assetTags = tags;
    }
    return true;
  };

  business.setWatches = function(watches){
    MOCKDATA.watches = watches;
    return true;
  };

  business.search = function(type, key, wait){
    var deferred = $q.defer();
    var searchKey = null;
    if (!(type && key)) {
      var reCallRequired = true;
      searchKey = localCache.get('searchKey', 'object');
      if (searchKey) {
        var cacheTime = localCache.get('searchKey-time', 'date');
        var timeDiff = new Date() - cacheTime;
        // we take a quarter of a minute before the search expires
        if (timeDiff < expireTime * 1440)
        {
          deferred.resolve(searchKey);
        } else {
          deferred.reject('The searchKey has expired.');
          searchKey = null;
        }
      } else {
        deferred.reject('The search key has not been set. Search has been reset to Default.');
        searchKey = null;
      }
    } else if (!type && key) {
      localCache.save('searchKey', [ { 'key': 'search', 'code': key } ]);
      localCache.save('searchKey-time', new Date());
      searchKey = key;
      deferred.resolve(searchKey);
    } else if (type && key) {
      localCache.save('searchKey', [ { 'key': type, 'code': key } ]);
      localCache.save('searchKey-time', new Date());
      searchKey = key;
      deferred.resolve(searchKey);
    } else {
      deferred.reject('There was an unexpected or unknownn error.');
      searchKey = null;
    }
    if (wait) {
      return deferred.promise;
    }
    return searchKey;
  };

  business.typeahead = function(target, pluckItem){
    var collection = null;
    var result = localCache.get('typeahead', 'object');
    if (result) {
      var cacheTime = localCache.get('typeahead-time', 'date');
      var timeDiff = new Date() - cacheTime;
      // expire time is set to a day here
      if (timeDiff < expireTime * 1440) {
        return result;
      } else if (target) {
        collection = target();
        if (pluckItem !== undefined && pluckItem !== null) {
          collection = _.pluck(collection, pluckItem);
        }
      } else {
        collection = _.pluck(this.getData(), 'name');
      }
    } else {
      collection = _.pluck(this.getData(), 'name');
    }
    if (collection) {
      localCache.save('typeahead', collection);
      localCache.save('typeahead-time', new Date());
      return collection;
    } else {
      throw new Error('We need a new target in order to refresh the data');
    }
  };
  


  return business;

}]);
