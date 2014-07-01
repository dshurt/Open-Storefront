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

app.controller('LandingCtrl', ['$scope', 'business', 'localCache', '$location', function ($scope, Business, localCache, $location) {
  // set up the landing page route so that we include the right landing page.
  $scope.landingRoute = null;
  Business.landingPage(false, false, true).then(function (result) {
    $scope.landingRoute = result.value;
  });

  /***************************************************************
  * This function is used to send the user to the results page with the correct
  * results.
  ***************************************************************/
  $scope.sendToResults = function() {
    var landingType = localCache.get('landingType');
    var landingCode = localCache.get('landingCode');
    if (landingType && landingCode) {
      $location.search({
        'type': landingType,
        'code': landingCode
      });
    } else {
      $location.search({
        'type': 'categories',
        'code': 'IDAM'
      });
    }
    $location.path('/results');
  };
}]);
