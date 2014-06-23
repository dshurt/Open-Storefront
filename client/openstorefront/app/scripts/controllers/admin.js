'use strict';

/*global getCkConfig*/

app.controller('AdminCtrl', ['$scope', 'business', function ($scope, Business) {

  $scope.filters = Business.getFilters();
  // console.log('filters', $scope.filters);
  $scope.incLoc = '';
  $scope.data = [];
  $scope.editedTopic = 'Types';
  $scope.toolTitle = 'idAM Landing Page';
  Business.landingPage('IDAM', 'views/temp/landingpage.html', true).then(function (result) { /*jshint unused:false*/
    Business.landingPage(false, false, true).then(function (result) {
      $scope.landingRoute = result.value;
      $.get($scope.landingRoute).then(function(responseData) {
        $scope.editorContent = $scope.parseForEditor(responseData);
      });
    });
  });
  $scope.saveContent = '';

  $scope.$watch('editorContent', function() {
    $scope.saveData();
  });


  var setUpData = function() {
    var topics = {};
    topics.label = 'Edit Topics';
    topics.location='views/admin/edittopics.html';
    topics.children = [];
    topics.toolTitle = 'Edit Topics';
    _.each($scope.filters, function(filter) {
      var label = 'Edit ' + filter.name + ' Codes';
      var location = 'views/admin/editcodes.html';
      // var children = [];
      // _.each(filter.collection, function(code){
      //   children.push({'label':code.type, 'location':'views/admin/editcode.html'});
      // });
        //
      topics.children.push({'label':label, 'location': location, 'toolTitle': label/*, 'children': children*/});
    });
    topics.children.push({'label':'Edit Topic Landing Pages', 'location':'views/admin/editlanding.html', 'toolTitle': 'Edit Topic Landing Pages'});

    $scope.data.push({'label': 'About Admin Tools', 'location':'views/admin/about.html', 'toolTitle': 'About Admin Tools'});
    $scope.data.push(topics);
    $scope.data.push({'label': 'Edit Components', 'location':'views/admin/editcomponents.html', 'toolTitle': 'Edit Components'});
    $scope.data.push({'label': 'Edit Branding', 'location': 'views/admin/editbranding.html', 'toolTitle': 'Edit Branding'});
  };

  setUpData();

  /***************************************************************
  * This function changes the content in the admin tool section to the tool the
  * admin clicks on
  ***************************************************************/
  $scope.editor = function(branch) {
    $scope.incLoc = branch.location;
    $scope.toolTitle = branch.toolTitle;
  };

  /***************************************************************
  * This function is used to parse the data that may contain one of our custom
  * tags for a list of components
  ***************************************************************/
  $scope.parseComponentInsert = function (content) {
    if (content !== null && content !== undefined && content !== '') {
      var data = content;
      // console.log('data', data);
      var splitData = data.split('### Component List ###');
      // console.log('sp', splitData);
      data = splitData.join('\n<component-list click-callback="updateDetails" class-list="" data="data" cols="3" ></component-list>\n');
      // console.log('data', data);
      return data;
    }
    return content;
  };

  /***************************************************************
  * This function is used to parse the data that may contain one of our custom
  * tags for the editor to be able to represent (since it doesn't like our tags)
  ***************************************************************/
  $scope.parseForEditor = function(content) {
    if (content !== null && content !== undefined && content !== '') {
      var parser = new DOMParser();
      var doc = parser.parseFromString(content, 'text/html');
      $(doc).find('component-list').replaceWith('### Component List ###');
      return $(doc).find('body').html();
    }
    return content;
  };

  /***************************************************************
  * This action is called when the editor is saved on a landing page
  ***************************************************************/
  $scope.saveData = function() {
    $scope.saveContent = $scope.parseComponentInsert($scope.editorContent);
    console.log('Save', $scope.saveContent);
  };

  // setup editor options
  $scope.editorOptions = getCkConfig();


}]);