/*
The MIT License (MIT)

Copyright (c) 2013 Nick Perkins

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
'use strict';

/* global treeData:true */

app.directive('abnTree', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    template: '<ul class="nav nav-list nav-pills nav-stacked abn-tree">\n  <li ng-repeat="row in treeRows | filter:{visible:true} track by row.branch.uid" ng-animate="\'abn-tree-animate\'" ng-class="\'level-\' + {{ row.level }} + (row.branch.selected ? \' active\':\'\')" class="abn-tree-row">\n    <a ng-click="userClicksBranch(row.branch)">\n      <i ng-class="row.treeIcon" ng-click="row.branch.expanded = !row.branch.expanded" class="indented tree-icon"> </i>\n      <span class="indented tree-label">{{ row.label }} </span>\n    </a>\n  </li>\n</ul>',
    replace: true,
    scope: {
      treeData: '=',
      onSelect: '&',
      initialSelection: '@',
      treeControl: '='
    },
    link: function(scope, element, attrs) {
      
      var error, expandAllParents, expandLevel, forAllAncestors, forEachBranch, getParent, n, onTreeChange, selectBranch, selectedBranch, tree;
      error = function(s) {
        console.log('ERROR:' + s);
        // debugger;
        return void 0;
      };
      if (attrs.iconExpand === null) {
        attrs.iconExpand = 'icon-plus  glyphicon glyphicon-plus  fa fa-plus';
      }
      if (attrs.iconCollapse === null) {
        attrs.iconCollapse = 'icon-minus glyphicon glyphicon-minus fa fa-minus';
      }
      if (attrs.iconLeaf === null) {
        attrs.iconLeaf = 'icon-file  glyphicon glyphicon-file  fa fa-file';
      }
      if (attrs.expandLevel === null) {
        attrs.expandLevel = '3';
      }
      expandLevel = parseInt(attrs.expandLevel, 10);
      if (!scope.treeData) {
        // alert('no treeData defined for the tree!');
        return;
      }
      if (scope.treeData.length === null) {
        if (treeData.label !== null &&  treeData.label !== undefined) {
          scope.treeData = [treeData];
        } else {
          // alert('treeData should be an array of root branches');
          return;
        }
      }
      forEachBranch = function(f) {
        var doF, rootBranch, _i, _len, _ref, _results;
        doF = function(branch, level) {
          var child, _i, _len, _ref, _results;
          f(branch, level);
          if (branch.children !== null && branch.children !== undefined) {
            _ref = branch.children;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              child = _ref[_i];
              _results.push(doF(child, level + 1));
            }
            return _results;
          }
        };
        _ref = scope.treeData;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rootBranch = _ref[_i];
          _results.push(doF(rootBranch, 1));
        }
        return _results;
      };
      selectedBranch = null;
      selectBranch = function(branch) {
        if (!branch) {
          if (selectedBranch !== null && selectedBranch !== undefined) {
            selectedBranch.selected = false;
          }
          selectedBranch = null;
          return;
        }
        if (branch !== selectedBranch) {
          if (selectedBranch !== null && selectedBranch !== undefined) {
            selectedBranch.selected = false;
          }
          branch.selected = true;
          selectedBranch = branch;
          expandAllParents(branch);
          if (branch.onSelect !== null && branch.onSelect !== undefined) {
            return $timeout(function() {
              return branch.onSelect(branch);
            });
          } else {
            if (scope.onSelect !== null && scope.onSelect !== undefined) {
              return $timeout(function() {
                return scope.onSelect({
                  branch: branch
                });
              });
            }
          }
        }
      };
      scope.userClicksBranch = function(branch) {
        if (branch !== selectedBranch) {
          return selectBranch(branch);
        }
      };
      getParent = function(child) {
        var parent;
        parent = void 0;
        if (child.parentUid) {
          forEachBranch(function(b) {
            if (b.uid === child.parentUid) {
              parent = b;
              return parent;
            }
          });
        }
        return parent;
      };
      forAllAncestors = function(child, fn) {
        var parent;
        parent = getParent(child);
        if (parent !== null && parent !== undefined) {
          fn(parent);
          return forAllAncestors(parent, fn);
        }
      };
      expandAllParents = function(child) {
        return forAllAncestors(child, function(b) {
          b.expanded = true;
          return b.expanded;
        });
      };
      scope.treeRows = [];
      onTreeChange = function() {
        var addBranchToList, rootBranch, _i, _len, _ref, _results;
        forEachBranch(function(b, level) { /*jshint unused: false*/
          if (!b.uid) {
            b.uid = '' + Math.random();
            return b.uid;
          }
        });
        // console.log('UIDs are set.');
        forEachBranch(function(b) {
          var child, _i, _len, _ref, _results;
          if (angular.isArray(b.children)) {
            _ref = b.children;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              child = _ref[_i];
              _results.push(child.parentUid = b.uid);
            }
            return _results;
          }
        });
        scope.treeRows = [];
        forEachBranch(function(branch) {
          var child, f;
          if (branch.children) {
            if (branch.children.length > 0) {
              f = function(e) {
                if (typeof e === 'string') {
                  return {
                    label: e,
                    children: []
                  };
                } else {
                  return e;
                }
              };
              branch.children = (function() {
                var _i, _len, _ref, _results;
                _ref = branch.children;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                  child = _ref[_i];
                  _results.push(f(child));
                }
                return _results;
              })();
              return branch.children;
            }
          } else {
            branch.children = [];
            return branch.children;
          }
        });
        addBranchToList = function(level, branch, visible) {
          var child, childVisible, treeIcon, _i, _len, _ref, _results;
          if (branch.expanded === null) {
            branch.expanded = false;
          }
          if (!branch.children || branch.children.length === 0) {
            treeIcon = attrs.iconLeaf;
          } else {
            if (branch.expanded) {
              treeIcon = attrs.iconCollapse;
            } else {
              treeIcon = attrs.iconExpand;
            }
          }
          scope.treeRows.push({
            level: level,
            branch: branch,
            label: branch.label,
            treeIcon: treeIcon,
            visible: visible
          });
          if (branch.children !== null && branch.children !== undefined) {
            _ref = branch.children;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              child = _ref[_i];
              childVisible = visible && branch.expanded;
              _results.push(addBranchToList(level + 1, child, childVisible));
            }
            return _results;
          }
        };
        _ref = scope.treeData;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rootBranch = _ref[_i];
          _results.push(addBranchToList(1, rootBranch, true));
        }
        return _results;
      };
      scope.$watch('treeData', onTreeChange, true);
      if (attrs.initialSelection !== null && attrs.initialSelection !== undefined) {
        forEachBranch(function(b) {
          if (b.label === attrs.initialSelection) {
            return $timeout(function() {
              return selectBranch(b);
            });
          }
        });
      }
      n = scope.treeData.length;
      //console.log('num root branches = ' + n);
      forEachBranch(function(b, level) {
        b.level = level;
        b.expanded = b.level < expandLevel;
        return b.expanded;
      });
      if (scope.treeControl !== null && scope.treeControl !== undefined) {
        if (angular.isObject(scope.treeControl)) {
          tree = scope.treeControl;
          tree.expandAll = function() {
            return forEachBranch(function(b, level) { /*jshint unused: false*/
              b.expanded = true;
              return b.expanded;
            });
          };
          tree.collapseAll = function() {
            return forEachBranch(function(b, level) { /*jshint unused: false*/
              b.expanded = false;
              return b.expanded;
            });
          };
          tree.getFirstBranch = function() {
            n = scope.treeData.length;
            if (n > 0) {
              return scope.treeData[0];
            }
          };
          tree.selectFirstBranch = function() {
            var b;
            b = tree.getFirstBranch();
            return tree.selectBranch(b);
          };
          tree.getSelectedBranch = function() {
            return selectedBranch;
          };
          tree.getParentBranch = function(b) {
            return getParent(b);
          };
          tree.selectBranch = function(b) {
            selectBranch(b);
            return b;
          };
          tree.getChildren = function(b) {
            return b.children;
          };
          tree.selectParentBranch = function(b) {
            var p;
            if (b === null) {
              b = tree.getSelectedBranch();
            }
            if (b !== null && b !== undefined) {
              p = tree.getParentBranch(b);
              if (p !== null && p !== undefined) {
                tree.selectBranch(p);
                return p;
              }
            }
          };
          tree.addBranch = function(parent, newBranch) {
            if (parent !== null && parent !== undefined) {
              parent.children.push(newBranch);
              parent.expanded = true;
            } else {
              scope.treeData.push(newBranch);
            }
            return newBranch;
          };
          tree.addRootBranch = function(newBranch) {
            tree.addBranch(null, newBranch);
            return newBranch;
          };
          tree.expandBranch = function(b) {
            if (b === null) {
              b = tree.getSelectedBranch();
            }
            if (b !== null && b !== undefined) {
              b.expanded = true;
              return b;
            }
          };
          tree.collapseBranch = function(b) {
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              b.expanded = false;
              return b;
            }
          };
          tree.getSiblings = function(b) {
            var p, siblings;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              p = tree.getParentBranch(b);
              if (p) {
                siblings = p.children;
              } else {
                siblings = scope.treeData;
              }
              return siblings;
            }
          };
          tree.getNextSibling = function(b) {
            var i, siblings;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              siblings = tree.getSiblings(b);
              n = siblings.length;
              i = siblings.indexOf(b);
              if (i < n) {
                return siblings[i + 1];
              }
            }
          };
          tree.getPrevSibling = function(b) {
            var i, siblings;
            if (b === null) {
              b = selectedBranch;
            }
            siblings = tree.getSiblings(b);
            n = siblings.length;
            i = siblings.indexOf(b);
            if (i > 0) {
              return siblings[i - 1];
            }
          };
          tree.selectNextSibling = function(b) {
            var next;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              next = tree.getNextSibling(b);
              if (next !== null && next !== undefined) {
                return tree.selectBranch(next);
              }
            }
          };
          tree.selectPrevSibling = function(b) {
            var prev;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              prev = tree.getPrevSibling(b);
              if (prev !== null && prev !== undefined) {
                return tree.selectBranch(prev);
              }
            }
          };
          tree.getFirstChild = function(b) {
            var _ref;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              if ((((_ref = b.children) !== null &&  (_ref = b.children) !== undefined)? _ref.length : void 0) > 0) {
                return b.children[0];
              }
            }
          };
          tree.getClosestAnsestorNextSibling = function(b) {
            var next, parent;
            next = tree.getNextSibling(b);
            if (next !== null && next !== undefined) {
              return next;
            } else {
              parent = tree.getParentBranch(b);
              return tree.getClosestAnsestorNextSibling(parent);
            }
          };
          tree.getNextBranch = function(b) {
            var next;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              next = tree.getFirstChild(b);
              if (next !== null && next !== undefined) {
                return next;
              } else {
                next = tree.getClosestAnsestorNextSibling(b);
                return next;
              }
            }
          };
          tree.selectNextBranch = function(b) {
            var next;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              next = tree.getNextBranch(b);
              if (next !== null && next !== undefined) {
                tree.selectBranch(next);
                return next;
              }
            }
          };
          tree.lastDecendant = function(b) {
            var lastChild;
            if (b === null) {
              // debugger;
            }
            n = b.children.length;
            if (n === 0) {
              return b;
            } else {
              lastChild = b.children[n - 1];
              return tree.lastDecendant(lastChild);
            }
          };
          tree.betPreviousBranch = function(b) {
            var parent, prevSibling;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              prevSibling = tree.getPrevSibling(b);
              if (prevSibling !== null && prevSibling !== undefined) {
                return tree.lastDecendant(prevSibling);
              } else {
                parent = tree.getParentBranch(b);
                return parent;
              }
            }
          };
          tree.selectPreviousBranch = function(b) {
            var prev;
            if (b === null) {
              b = selectedBranch;
            }
            if (b !== null && b !== undefined) {
              prev = tree.betPreviousBranch(b);
              if (prev !== null && prev !== undefined) {
                tree.selectBranch(prev);
                return prev;
              }
            }
          };
          return tree.selectPreviousBranch;
        }
      }
    }
  };
}]);


