'use strict';

app.controller('LandingCtrl', ['$scope', 'business', function ($scope, Business) {
  $scope.landingRoute = null;
  Business.landingPage(false, false, true).then(function (result) {
    console.log('Title', result);
    $scope.landingRoute = result.value;
  });
}]);
