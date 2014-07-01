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

app.filter('partition', function () {
  // first we make sure that the cache is empty
  var cache = {};
  var filter = function(arr, size) {
    // if we don't have an array to search return...
    if (!arr) { return; }
    
    // otherwise start out empty
    var newArr = [];
    
    // and for every piece in the array,
    for (var i=0; i<arr.length; i+=size) {
      // push portions of the array sliced by the input size
      newArr.push(arr.slice(i, i+size));
    }

    // then stringify the array
    var arrString = JSON.stringify(arr);

    // set up the cache
    var fromCache = cache[arrString+size];

    // and from the cache, return the results
    if (JSON.stringify(fromCache) === JSON.stringify(newArr)) {
      return fromCache;
    }
    cache[arrString+size] = newArr;
    return newArr;
  };
  return filter;
});
