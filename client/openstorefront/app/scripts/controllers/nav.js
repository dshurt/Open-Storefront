'use strict';

app.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

  /*******************************************************************************
  * This function sends the route view back to the index page (main controller)
  *******************************************************************************/
  $scope.goHome = function () {
    $location.path('/');
  };

}]);
