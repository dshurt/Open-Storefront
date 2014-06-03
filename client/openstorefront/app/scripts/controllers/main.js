'use strict';

app.controller('MainCtrl', ['$scope', 'business', 'tempData', '$location', '$rootScope', function ($scope, Business, tempData, $location, $rootScope) {
  tempData.restoreState();
  $scope.searchKey = $rootScope.searchKey;
  $scope._scopename = 'landing';
  $scope.pageTitle = 'DI2E Storefront Catalog';

  $scope.types            = Business.getTypes();
  $scope.categories       = Business.getCategories();
  $scope.states           = Business.getStates();
  $scope.typesTitle       = 'Browse Types';
  $scope.categoriesTitle  = 'Browse Categories';
  $scope.statesTitle      = 'Browse States';

  $scope.goToSearchWithType = function(type){ /*jshint unused:false*/
    tempData.setData({'type': [ type ], 'category': [], 'state': [], 'search': []});
    tempData.saveState();
    $location.path('/results');
  };

  $scope.goToSearchWithCategory = function(type){ /*jshint unused:false*/
    tempData.setData({'type': [], 'category': [type], 'state': [], 'search': []});
    tempData.saveState();
    $location.path('/results');
  };

  $scope.goToSearchWithState = function(type){ /*jshint unused:false*/
    tempData.setData({'type': [], 'category': [], 'state': [ type ], 'search': []});
    tempData.saveState();
    $location.path('/results');
  };

  $scope.$watch('searchKey', function() {
    $rootScope.searchKey = $scope.searchKey;
  });

  $scope.goToSearchWithSearch = function(search){ /*jshint unused:false*/
    tempData.setData({'type': [], 'category': [], 'state': [], 'search': [search]});
    tempData.saveState();
    $location.path('/results');
  };

}]);
