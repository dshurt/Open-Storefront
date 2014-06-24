'use strict';

app.controller('LandingCtrl', ['$scope', 'business', '$location', function ($scope, Business, $location) {
  $scope.landingRoute = null;
  Business.landingPage(false, false, true).then(function (result) {
    console.log('Title', result);
    $scope.landingRoute = result.value;
  });
  $scope.sendToResults = function() {
    $location.search({
      'type': 'categories',
      'code': 'IDAM'
    });
    $location.path('/results');
  };
}]);
