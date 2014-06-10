'use strict';

app.controller('MainCtrl', ['$scope', 'business', 'localCache', '$location', '$rootScope', function ($scope, Business, localCache, $location, $rootScope) {
  // Here we grab the rootScope searchkey in order to preserve the last search
  $scope.searchKey        = $rootScope.searchKey;
  
  // Set up the main controller's variables.
  $scope._scopename       = 'main';
  $scope.pageTitle        = 'DI2E Storefront Catalog';

  // grab the custom filters (aka groups).
  $scope.filters          = Business.getFilters();

  // currently this is hard coded, but this controller could be adjusted 
  // to do all of this dynamically.
  $scope.types            = $scope.filters[0].collection;
  $scope.categories       = $scope.filters[1].collection;
  $scope.states           = $scope.filters[2].collection;
  $scope.typesTitle       = 'Browse Types';
  $scope.categoriesTitle  = 'Browse Categories';
  $scope.statesTitle      = 'Browse States';

  /*******************************************************************************
  * This and the following functions send the user to the search filling the 
  * data object with the search key 
  * params: type -- This is the code of the type that was clicked on
  *******************************************************************************/
  $scope.goToSearchWithType = function(type){ /*jshint unused:false*/
    Business.search('type', type);
    $location.path('/results');
  };

  $scope.goToSearchWithCategory = function(type){ /*jshint unused:false*/
    Business.search('categories', type);
    $location.path('/results');
  };

  $scope.goToSearchWithState = function(type){ /*jshint unused:false*/
    Business.search('conformanceState', type);
    $location.path('/results');
  };

  $scope.goToSearchWithSearch = function(search){ /*jshint unused:false*/
    Business.search('search', search);
    $location.path('/results');
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