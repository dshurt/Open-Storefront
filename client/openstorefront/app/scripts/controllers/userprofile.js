'use strict';

/*global alert*/

app.controller('UserProfileCtrl', ['$scope', 'business', function($scope, Business){
	$scope._scopename = 'userprofile';
	/*  $scope.types = Business.getTypes();*/

  $scope.pageTitle = 'DI2E Storefront Catalog';
  $scope.defaultTitle = 'Browse Categories';
  $scope.user = {
  'userName': 'John Q. Sample',
  'userRole': 'Admin',
  'userMemberSince': '01/10/2012',
  'userEmail': 'john.q.sample@gmail.com'
  }
  $scope.userBackup = jQuery.extend(true, {}, $scope.user);

  var immageHack = 0;
  var images = [
  'images/wess_logo.png',
  'images/core-map-api.png',
  'images/maps-icon.png'
  ]
  $scope.watches = Business.getWatches();
  $scope.total = Business.getData();
  var resetData = function() {
    $scope.data = new Array();
    _.each($scope.watches, function(watch) {
      _.each(_.where($scope.total, {'id': watch.id}), function(component) {
        if (immageHack > 2) {
          immageHack = 0;
        }
        component.src = images[immageHack];
        immageHack = immageHack + 1;
        component.watched = watch.watched;
        $scope.data.push(component);
      });
    });
  }
  resetData();

  $scope.feedbackDetails = [
  {'id':'1','date':'Jan 4, 2014 8:25 am','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jim Calhoun'},
  {'id':'2','date':'01/05/2014 9:25 am','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jill Calhoun'},
  {'id':'3','date':'01/06/2014 10:25 am','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jay Calhoun'}/*,
  {'id':'4','date':'01/07/2014 11:25 am','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jade Calhoun'},
  {'id':'5','date':'01/08/2014 12:25 pm','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jesse Calhoun'},
  {'id':'6','date':'01/09/2014 8:25 pm','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'JaLayne Calhoun'}
  */];
  
  $scope.saveProfileChanges = function () {
    $scope.userBackup = jQuery.extend(true, {}, $scope.user);
  };

  $scope.revertProfileChanges = function () {
    $scope.user = jQuery.extend(true, {}, $scope.userBackup);
  };


  $scope.removeFromWatches = function(id){
    var a = _.findWhere($scope.watches, {'id': id});

    if (a !== undefined  && !isEmpty(a)) {
      $scope.watches.splice(_.indexOf($scope.watches, a), 1);
    }

    $scope.showWatchButton = true;
    Business.setWatches($scope.watches);
    resetData();
  };

}]);

