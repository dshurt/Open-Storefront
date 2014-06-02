'use strict';

app.controller('ResultsCtrl', ['$scope', 'tempData', function ($scope, tempData) {
  tempData.restoreState();
  $scope.searchGroup = tempData.getData();
  tempData.setData($scope.searchGroup);

  $scope.searchKey = null;
  $scope.searchType = null;
  $scope.showSearch = false;

  if (!isEmpty($scope.searchGroup)) {
    console.log($scope.searchGroup)
    if (!isEmpty($scope.searchGroup.category)) {
      $scope.searchKey = $scope.searchGroup.category;
      $scope.showSearch = true;
      $scope.searchType = 'category';
    } else if (!isEmpty($scope.searchGroup.type)) {
      $scope.searchKey = $scope.searchGroup.type;
      $scope.showSearch = true;
      $scope.searchType = 'type';
    } else if (!isEmpty($scope.searchGroup.state)) {
      $scope.searchKey = $scope.searchGroup.state;
      $scope.showSearch = true;
      $scope.searchType = 'state';
    } else if (!isEmpty($scope.searchGroup.search)) {
      if ($scope.searchGroup.search[0] !== null) {
        $scope.searchKey = $scope.searchGroup.search;
        $scope.showSearch = true;
        $scope.searchType = 'search';
      } else {
        // $scope.searchKey = 'DOALLSEARCH';
        // $scope.showSearch = true;
        // $scope.searchType = 'all';
      }
    }
  }


  $scope.goToSearchWithSearch = function(search){ /*jshint unused:false*/
    tempData.setData({'type': [], 'category': [], 'state': [], 'search': [search]});
    tempData.saveState();
    $location.path('/results');
  };


}]);
