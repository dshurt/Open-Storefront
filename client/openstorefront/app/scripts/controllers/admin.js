'use strict';

/*global getCkConfig*/

app.controller('AdminCtrl', ['$scope', 'business', function ($scope, Business) {

  //this object is used to contain the tree functions
  $scope.myTree = {};


  $scope.filters = Business.getFilters();
  $scope.collection = null;
  $scope.collectionSelection = null;
  $scope.collectionContent = null;
  // console.log('filters', $scope.filters);
  $scope.incLoc = '';
  $scope.data = [];
  $scope.editedTopic = 'Types';
  $scope.toolTitle = 'idAM Landing Page';
  if (!$scope.landingRoute) {
    Business.landingPage('IDAM', 'views/temp/landingpage.html', true).then(function (result) { /*jshint unused:false*/
      Business.landingPage(false, false, true).then(function (result) {
        $scope.landingRoute = result.value;

      });
    });
  }
  $scope.saveContent = '';

  $scope.$watch('landingRoute', function() {
    $.get($scope.landingRoute).then(function(responseData) {
      $scope.editorContent = $scope.parseForEditor(responseData);
      $scope.$apply();
    });
  });


  $scope.$watch('editorContent', function() {
    $scope.saveData();
  });

  var setUpData = function() {
    var attributes = {};
    attributes.label = 'Edit Attributes';
    attributes.location='views/admin/editattributes.html';
    attributes.children = [];
    attributes.toolTitle = 'Edit Attributes';
    attributes.key = 'attributes';
    attributes.parentKey = null;
    attributes.data = $scope.filters;

    attributes.children.push({'label':'Edit Attribute Landing Pages', 'location':'views/admin/editlanding.html', 'toolTitle': 'Edit Topic Landing Pages', 'key': 'landing', 'parentKey': 'attributes'});
    attributes.children.push({'label':'Edit Codes', 'location':'views/admin/editcodes.html', 'toolTitle': 'Edit Attribute Codes', 'key': 'codes', 'parentKey': 'attributes'});

    $scope.data.push({'label': 'About Admin Tools', 'location':'views/admin/about.html', 'toolTitle': 'About Admin Tools', 'key': 'tools' });
    $scope.data.push(attributes);
    $scope.data.push({'label': 'Edit Components', 'location':'views/admin/editcomponents.html', 'toolTitle': 'Edit Components', 'key': 'components' });
    $scope.data.push({'label': 'Edit Branding', 'location': 'views/admin/editbranding.html', 'toolTitle': 'Edit Branding', 'key': 'branding' });


    $scope.collection = [];
    _.each($scope.filters, function(filter) {
      // var label = 'Edit ' + filter.name + ' Codes';
      // var location = 'views/admin/editcodes.html';
      // var children = [];
      // _.each(filter.collection, function(code){
      //   children.push({'label':code.type, 'location':'views/admin/editcode.html'});
      // });
        //
      // attributes.children.push({'label':label, 'location': location, 'toolTitle': label, 'key': filter.key, 'parentKey': 'attributes', 'data': filter /*, 'children': children*/});
      $scope.collection.push({'name': filter.name, 'key': filter.key});
    });
  };

  setUpData();


  /***************************************************************
  * This function changes the content in the admin tool section to the tool the
  * admin clicks on
  ***************************************************************/
  $scope.editor = function(branch) {
    $scope.incLoc = branch.location;
    if (branch.parentKey === 'attributes' && branch.key !== 'landing') {
      $scope.grabCollection($scope.collectionSelection.key);
    }
    $scope.toolTitle = branch.toolTitle;
    $scope.myTree.selectBranch(branch);
  };


  /***************************************************************
  * This function recursively searches through the tree in order to find the
  * branch that we want to go to (used to set location and active class)
  ***************************************************************/
  var checkCollection = function(branch, index, key) {
    while (branch[index]) {
      if (branch[index].key === key) {
        return branch[index];
      }
      if (branch[index].children && branch[index].children.length > 0) {
        return checkCollection(branch[index].children, 0, key);
      }
      index = index + 1;
    }
    return null;
  };

  /***************************************************************
  * This function will grab a collection from a filter given the key
  * of the filter.
  ***************************************************************/
  $scope.grabCollection = function(key) {
    var filter = _.where($scope.filters, {'key': key})[0];
    $scope.collectionContent = filter.collection;
  };

  /***************************************************************
  * This function takes a key, finds the branch with that key, and then
  * sends us there 
  ***************************************************************/
  $scope.editCollection = function(key) {
    var branch = checkCollection($scope.data, 0, 'codes');
    $scope.collectionSelection = _.where($scope.collection, {'key': key})[0];
    $scope.editor(branch);
  };
  /***************************************************************
  * This function takes a key, finds the branch with that key, and then
  * sends us there 
  ***************************************************************/
  $scope.editLanding = function(route) {
    var branch = checkCollection($scope.data, 0, 'landing');
    $scope.landingRoute = route;
    $scope.editor(branch);
  };

  /***************************************************************
  * This function checks our tree to see if there was a parent collection
  ***************************************************************/
  $scope.checkParent = function() {
    var branch = $scope.myTree.getSelectedBranch();
    if (branch) {
      return $scope.myTree.getParentBranch(branch);
    } else {
      return false;
    }
  };

  /***************************************************************
  * This function takes us back to the parent tool
  ***************************************************************/
  $scope.goToParent = function () {
    $scope.editor($scope.checkParent());
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
    // console.log('Save', $scope.saveContent);
  };


  // setup editor options
  $scope.editorOptions = getCkConfig();


}]);