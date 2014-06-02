'use strict';

app.controller('MainCtrl', ['$scope', 'business', function ($scope, Business) {

  $scope._scopename = 'landing';
  $scope.pageTitle = 'DI2E Storefront Catalog';

  $scope.types = Business.getTypes();
  $scope.defaultTitle = "Browse Categories";
  console.log("Practice", $scope.practice);

  $scope.goToSearch = function(type){
    tempData.setData({"type": [ type ], "category": [], "state": []});
    console.log(tempData.getData());
    
    window.location.href ="app/modules/results/results.html";
  }

}]);
