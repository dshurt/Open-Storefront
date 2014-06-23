'use strict';

/*global getCkConfig, CKEDITOR*/

app.controller('AdminCtrl', ['$scope', 'business', function ($scope, Business) {

  $scope.filters = Business.getFilters();
  // console.log('filters', $scope.filters);
  $scope.incLoc = '';
  $scope.data = [];
  $scope.editedTopic = 'Types';
  $scope.toolTitle = 'idAM Landing Page';

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
  
  $scope.setData = function() {
    console.log('Data', $scope.parseComponentInsert());
    $scope.parseComponentInsert();
  };

  $scope.parseComponentInsert = function () {
    var data = CKEDITOR.instances.editor1.getData();
    // console.log('data', data);
    var splitData = data.split('### Component List ###');
    // console.log('sp', splitData);
    data = splitData.join('\n<component-list click-callback="updateDetails" class-list="" data="data" cols="3" ></component-list>\n');
    // console.log('data', data);
    return data;
  };

  $scope.editor = function(branch) {
    $scope.incLoc = branch.location;
    $scope.toolTitle = branch.toolTitle;
    // console.log('branch', branch.label);
    
    // var _ref;
    // $scope.output = 'You selected: ' + branch.label;
    // if ((_ref = branch.data) != null ? _ref.description : void 0) {
    //   return $scope.output += '(' + branch.data.description + ')';
    // }
  };

  // setup editor options
  $scope.editorOptions = getCkConfig();

  // apple_selected = function(branch) {
  //   return $scope.output = 'APPLE! : ' + branch.label;
  // };
  // treedata_avm = [
  // {
  //   label: 'Animal',
  //   children: [
  //   {
  //     label: 'Dog',
  //     data: {
  //       description: 'man's best friend'
  //     }
  //   }, {
  //     label: 'Cat',
  //     data: {
  //       description: 'Felis catus'
  //     }
  //   }, {
  //     label: 'Hippopotamus',
  //     data: {
  //       description: 'hungry, hungry'
  //     }
  //   }, {
  //     label: 'Chicken',
  //     children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
  //   }
  //   ]
  // }, {
  //   label: 'Vegetable',
  //   data: {
  //     definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
  //     data_can_contain_anything: true
  //   },
  //   onSelect: function(branch) {
  //     return $scope.output = 'Vegetable: ' + branch.data.definition;
  //   },
  //   children: [
  //   {
  //     label: 'Oranges'
  //   }, {
  //     label: 'Apples',
  //     children: [
  //     {
  //       label: 'Granny Smith',
  //       onSelect: apple_selected
  //     }, {
  //       label: 'Red Delicous',
  //       onSelect: apple_selected
  //     }, {
  //       label: 'Fuji',
  //       onSelect: apple_selected
  //     }
  //     ]
  //   }
  //   ]
  // }, {
  //   label: 'Mineral',
  //   children: [
  //   {
  //     label: 'Rock',
  //     children: ['Igneous', 'Sedimentary', 'Metamorphic']
  //   }, {
  //     label: 'Metal',
  //     children: ['Aluminum', 'Steel', 'Copper']
  //   }, {
  //     label: 'Plastic',
  //     children: [
  //     {
  //       label: 'Thermoplastic',
  //       children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
  //     }, {
  //       label: 'Thermosetting Polymer',
  //       children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
  //     }
  //     ]
  //   }
  //   ]
  // }
  // ];
  // $scope.my_data = treedata_avm;
  // $scope.try_changing_the_tree_data = function() {
  //   if ($scope.my_data === treedata_avm) {
  //     return $scope.my_data = treedata_geography;
  //   } else {
  //     return $scope.my_data = treedata_avm;
  //   }
  // };
  // $scope.my_tree = tree = {};
  // $scope.try_async_load = function() {
  //   $scope.my_data = [];
  //   $scope.doing_async = true;
  //   return $timeout(function() {
  //     if (Math.random() < 0.5) {
  //       $scope.my_data = treedata_avm;
  //     } else {
  //       $scope.my_data = treedata_geography;
  //     }
  //     $scope.doing_async = false;
  //     return tree.expand_all();
  //   }, 1000);
  // };
  // return $scope.try_adding_a_branch = function() {
  //   var b;
  //   b = tree.get_selected_branch();
  //   return tree.add_branch(b, {
  //     label: 'New Branch',
  //     data: {
  //       something: 42,
  //       'else': 43
  //     }
  //   });
  // };
}]);
