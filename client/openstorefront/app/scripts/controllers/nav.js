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

app.controller('NavCtrl', ['$scope', '$location', '$rootScope', 'localCache', '$route', function ($scope, $location, $rootScope, localCache, $route) { /*jshint unused: false*/

  /*******************************************************************************
  * This Controller gives us a place to add functionality to the navbar
  *******************************************************************************/
  $scope._scopename = 'nav'; 

  // Here we grab the rootScope searchkey in order to preserve the last search
  $scope.searchKey = $rootScope.searchKey;
  

  $scope.goToSearchWithSearch = function(search){ /*jshint unused:false*/
    updateNavTypeahead();
    localCache.save('searchKey', [ { 'key': 'search', 'code': search } ]);
    if($location.path() === '/results') {
      $route.reload();
    } else {
      $location.path('/results');
    }
  };


  /*******************************************************************************
  * This function sets the rootScope's search key so that if you did it in the
  * controller search, it is still preserved across the page.
  * params: param name -- param description
  * returns: Return name -- return description
  *******************************************************************************/
  $rootScope.$watch('searchKey', function() {
    $scope.searchKey = $rootScope.searchKey;
  });
  $scope.$watch('searchKey', function() {
    $rootScope.searchKey = $scope.searchKey;
  });


}]);
