'use strict';

app.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.goHome = function () {
    $location.path('/');
  };

}]);
