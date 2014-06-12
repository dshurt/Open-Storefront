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

app.controller('MainCtrl', ['$scope', 'business', 'localCache', '$location', '$rootScope', '$timeout', function ($scope, Business, localCache, $location, $rootScope, $timeout) {
  // Here we grab the rootScope searchkey in order to preserve the last search
  $scope.searchKey  = $rootScope.searchKey;
  
  // Set up the main controller's variables.
  $scope._scopename = 'main';
  $scope.pageTitle  = 'DI2E Storefront Catalog';

  // grab the custom filters (aka groups).
  $scope.filters    = Business.getFilters();

  // currently this is hard coded, but this controller could be adjusted 
  // to do all of this dynamically.
  // $scope.types            = $scope.filters[0].collection;
  // $scope.categories       = $scope.filters[1].collection;
  // $scope.states           = $scope.filters[2].collection;
  // $scope.typesTitle       = 'Browse Types';
  // $scope.categoriesTitle  = 'Browse Categories';
  // $scope.statesTitle      = 'Browse States';

  /*******************************************************************************
  * This and the following functions send the user to the search filling the 
  * data object with the search key 
  * params: type -- This is the code of the type that was clicked on
  *******************************************************************************/
  $scope.goToSearch = function(searchType, searchKey){ /*jshint unused:false*/
    updateMainTypeahead();
    $timeout(function() {
      Business.search(searchType, searchKey);
      $location.path('/results');
    }, 200);
  };

  /*******************************************************************************
  * This function sets the rootScope's search key so that if you did it in the
  * controller search, it is still preserved across the page.
  * params: param name -- param description
  * returns: Return name -- return description
  *******************************************************************************/
  $scope.$watch('searchKey', function() {
    $rootScope.searchKey = $scope.searchKey;
  });

  // this calls the setup for the page-specific js
  setupMain();

}]);