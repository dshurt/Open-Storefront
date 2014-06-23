'use strict';

/*global getCkConfig*/

app.controller('AdminCtrl', ['$scope', 'business', function ($scope, Business) {
  
  //this object is used to contain the tree functions
  $scope.myTree = {};


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
    topics.key = 'topics';
    topics.parentKey = null;
    _.each($scope.filters, function(filter) {
      var label = 'Edit ' + filter.name + ' Codes';
      var location = 'views/admin/editcodes.html';
      // var children = [];
      // _.each(filter.collection, function(code){
      //   children.push({'label':code.type, 'location':'views/admin/editcode.html'});
      // });
        //
      topics.children.push({'label':label, 'location': location, 'toolTitle': label, 'key': filter.key, 'parentKey': 'topics'/*, 'children': children*/});
    });
    topics.children.push({'label':'Edit Topic Landing Pages', 'location':'views/admin/editlanding.html', 'toolTitle': 'Edit Topic Landing Pages', 'parentKey': 'topics'});

    $scope.data.push({'label': 'About Admin Tools', 'location':'views/admin/about.html', 'toolTitle': 'About Admin Tools', 'key': 'tools' });
    $scope.data.push(topics);
    $scope.data.push({'label': 'Edit Components', 'location':'views/admin/editcomponents.html', 'toolTitle': 'Edit Components', 'key': 'components' });
    $scope.data.push({'label': 'Edit Branding', 'location': 'views/admin/editbranding.html', 'toolTitle': 'Edit Branding', 'key': 'branding' });
  };

  setUpData();

  /***************************************************************
  * This function changes the content in the admin tool section to the tool the
  * admin clicks on
  ***************************************************************/
  $scope.editor = function(branch) {
    $scope.incLoc = branch.location;
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
  * This function takes a key, finds the branch with that key, and then
  * sends us there :)
  ***************************************************************/
  $scope.editCollection = function(key) {
    var branch = checkCollection($scope.data, 0, key);
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

  console.log('myTree', $scope.myTree);

}]);