/* 
* Copyright 2014 Space Dynamics Laboratory - Utah State University Research Foundation.
*
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';

/*global isEmpty, jQuery*/

app.controller('UserProfileCtrl', ['$scope', 'business', '$rootScope', function($scope, Business, $rootScope){
  // Set up the controller's varibles
  $scope._scopename       = 'userprofile';
  $scope.pageTitle        = 'DI2E Storefront Catalog';
  $scope.defaultTitle     = 'Browse Categories';
  $scope.watches          = Business.getWatches();
  $scope.total            = Business.getData();
  $scope.feedbackDetails  = [
    //
    {'id':'1','date':'Jan 4, 2014 8:25 am','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jim Calhoun'},
    {'id':'2','date':'01/05/2014 9:25 am','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jill Calhoun'},
    {'id':'3','date':'01/06/2014 10:25 am','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jay Calhoun'}
    /*,
    {'id':'4','date':'01/07/2014 11:25 am','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jade Calhoun'},
    {'id':'5','date':'01/08/2014 12:25 pm','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'Jesse Calhoun'},
    {'id':'6','date':'01/09/2014 8:25 pm','comments':'This VANTAGE WESS OZONE Widget is really cool','author':'JaLayne Calhoun'}*/
  //
  ];
  $scope.user             = {
    'userName': 'John Q. Sample',
    'userRole': 'Admin',
    'userMemberSince': '01/10/2012',
    'userEmail': 'john.q.sample@gmail.com'
  };
  $scope.userBackup       = jQuery.extend(true, {}, $scope.user);
  var immageHack          = 0;
  var images              = [
    //
    'images/wess_logo.png',
    'images/core-map-api.png',
    'images/maps-icon.png'
  //
  ];

  $scope.nav = {
    'current': null,
    'bars': [
      //
      {
        'title': 'User Profile',
        'include': 'views/userprofiletab.html'
      },
      {
        'title': 'Watches',
        'include': 'views/watchestab.html'
      },
      {
        'title': 'Component Feedback',
        'include': 'views/feedbacktab.html'
      }
    //
    ]
  };

  $rootScope.$on('$profileModal', function(event) { /*jshint unused: false*/
    if ($rootScope.current) {
      $scope.nav.current = $rootScope.current;
    } else {
      $scope.nav.current = 'User Profile';
    }
    resetData();
    // we re-initialize anything else here

  });

  /***************************************************************
  * This function takes the watch list, and the total data we got back, and 
  * grabs the data items that are really on the watch list. This will change
  * once we actually have a database to query from.
  ***************************************************************/
  var resetData = function() {
    $scope.data = [];
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
  };
  resetData();

  /***************************************************************
  * This function saves the profile changes in the scope by copying them from
  * the user variable into the backup variable (this function would be where
  * you send the saved data to the database to store it)
  ***************************************************************/
  $scope.saveProfileChanges = function () {
    $scope.userBackup = jQuery.extend(true, {}, $scope.user);
  };

  /***************************************************************
  * This function reverts the changes in the profile form by just copying back
  * the details in the backup. This function most likely won't change when
  * we get a database to work with.
  ***************************************************************/
  $scope.revertProfileChanges = function () {
    $scope.user = jQuery.extend(true, {}, $scope.userBackup);
  };


  /***************************************************************
  * This function removes a watch from the watch list. It probably won't change
  * when we get a database to work with.
  * params: id -- the id of the component we want to take off our watch list.
  ***************************************************************/
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

