'use strict';

app.controller('ResultsCtrl', ['$scope', 'tempData', function ($scope, tempData) {
  console.log('Data', tempData.getData());
}]);
