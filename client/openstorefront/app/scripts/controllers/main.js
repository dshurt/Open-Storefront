'use strict';

app.controller('MainCtrl', ['$scope', 'business', 'tempData', '$location', '$rootScope', function ($scope, Business, tempData, $location, $rootScope) {
  // So far we're using the tempData factory, but we could easily change this 
  // to use the localCache factory that has more functions and capabilities
  // and then combine it with our business factory since that was their original
  // purpose.
  tempData.restoreState();

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
    tempData.setData([ { 'key': 'type', 'code': type } ]);
    tempData.saveState();
    $location.path('/results');
  };

  $scope.goToSearchWithCategory = function(type){ /*jshint unused:false*/
    tempData.setData([ { 'key': 'categories', 'code': type } ]);
    tempData.saveState();
    $location.path('/results');
  };

  $scope.goToSearchWithState = function(type){ /*jshint unused:false*/
    tempData.setData([ { 'key': 'conformanceState', 'code': type } ]);
    tempData.saveState();
    $location.path('/results');
  };

  $scope.goToSearchWithSearch = function(search){ /*jshint unused:false*/
    tempData.setData([ { 'key': 'search', 'code': search } ]);
    tempData.saveState();
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