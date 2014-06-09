'use strict';

app.controller('NavCtrl', ['$scope', '$location', '$rootScope', 'localCache', '$route', function ($scope, $location, $rootScope, localCache, $route) { /*jshint unused: false*/

  /*******************************************************************************
  * This Controller gives us a place to add functionality to the navbar
  *******************************************************************************/
  $scope._scopename = 'nav'; 

  // Here we grab the rootScope searchkey in order to preserve the last search
  $scope.searchKey = $rootScope.searchKey;
  

  $scope.goToSearchWithSearch = function(search){ /*jshint unused:false*/
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
  $scope.$watch('searchKey', function() {
    $rootScope.searchKey = $scope.searchKey;
  });


}]);
