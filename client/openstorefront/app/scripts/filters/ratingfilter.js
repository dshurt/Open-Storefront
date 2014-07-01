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

app.filter('ratingFilter', function () {
  return function (input, rating) {
    // first we make sure that the rating is a possible rating...
    if (!isNaN(rating) && (rating >= 0 && rating <= 5)) {
      // then we start out with nothing
      var out = null;
      // and add everything to the result that passes the filter
      out = _.filter(input, function(entry) {
        // it passes the filter if the average rating for that component
        // is equal to or greater than the given rating.
        return entry.stats.averageRating >= rating;
      });
      return out;
    } else {
      return input;
    }
  };
});
