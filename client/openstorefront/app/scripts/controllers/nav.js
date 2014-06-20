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

/*global setUpDropdown*/

app.controller('NavCtrl', ['$scope', '$location', '$rootScope', 'business', '$route', '$timeout', function ($scope, $location, $rootScope, Business, $route, $timeout) { /*jshint unused: false*/

  /*******************************************************************************
  * This Controller gives us a place to add functionality to the navbar
  *******************************************************************************/
  $scope._scopename = 'nav';

  // Here we grab the rootScope searchkey in order to preserve the last search
  $scope.searchkey = $rootScope.searchkey;
  
  $scope.typeahead  = null;


  /***************************************************************
  * Set up typeahead, and then watch for selection made
  ***************************************************************/
  if ($rootScope.typeahead) {
    $scope.typeahead  = $rootScope.typeahead;
  } else {
    $scope.typeahead  = Business.typeahead(Business.getData, 'name');
  }

  /***************************************************************
  * Catch the enter/select event here
  ***************************************************************/
  $scope.$on('$typeahead.select', function(event, value, index) {
    $scope.goToSearch();
    $scope.$apply();
  });
  

  /***************************************************************
  * This function sends the routing to the results page with a specified
  * search key saved in the localCache
  ***************************************************************/
  $scope.goToSearch = function(){ /*jshint unused:false*/
    $rootScope.searchkey = $scope.searchkey;
    Business.search('search', $scope.searchKey, true).then(function (key) {
      if($location.path() === '/results') {
        $rootScope.$broadcast('$callSearch');
      } else {
        $location.path('/results');
      }
    });
  };

  /***************************************************************
  * This function sends the person home
  ***************************************************************/
  $scope.sendHome = function(){ /*jshint unused:false*/
    Business.search('search', $scope.searchKey);
    $location.path('/');
  };

  /***************************************************************
  * This function sends the navigation to a specified route.
  ***************************************************************/
  $scope.send = function(route) {
    $location.path(route);
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


  // We have to manually connect the list item to the dropdown toggle because the
  // routing and nav load somehow delays it which makes the dropdown not work
  // until the second click. This makes it work on first click.
  setUpDropdown('dropTheMenu');

}]);
