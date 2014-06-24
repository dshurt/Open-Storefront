'use strict';

app.controller('LandingCtrl', ['$scope', 'business', 'localCache', '$location', function ($scope, Business, localCache, $location) {
  $scope.landingRoute = null;
  Business.landingPage(false, false, true).then(function (result) {
    $scope.landingRoute = result.value;
  });
  $scope.sendToResults = function() {
    var landingType = localCache.get('landingType');
    var landingCode = localCache.get('landingCode');
    if (landingType && landingCode) {
      $location.search({
        'type': landingType,
        'code': landingCode
      });
    } else {
      $location.search({
        'type': 'categories',
        'code': 'IDAM'
      });
    }
    $location.path('/results');
  };
}]);
