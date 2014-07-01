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

angular.module('openstorefrontApp')
.directive('modal', function () {
  return {
    restrict: 'AE',
    scope: {},
    controller: '@',
    name: 'controllerName',
    template: '<div class="modal fade {{classes}}" id="{{id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <div ng-include="header"></div> </div> <div class="modal-body"> <div ng-include src="body"></div> </div> <div class="modal-footer"> <div ng-include="footer"></div> </div> </div> </div </div>',
    link: function postLink(scope, element, attrs) {
      /***************************************************************
      * Here we set up the directive's variables
      ***************************************************************/
      var parent = scope.$parent;
      scope.header = 'views/modalDefaults/header.html';
      scope.footer = 'views/modalDefaults/footer.html';
      scope.body = 'views/modalDefaults/body.html';
      scope.id = attrs.modalid;

      /***************************************************************
      * This function watches for the updateBody broadcast that will tell it
      * to remove and reapply the modal body.
      ***************************************************************/
      parent.$on('updateBody', function(event) { /* jshint unused: false */
        if (parent.nav !== undefined && parent.nav !== null) {
          scope.nav = parent.nav;
        }
        scope.body = null;
        scope.body = 'views/modalDefaults/body.html';
        if (parent.classes !== undefined && parent.classes !== null) {
          scope.classes = parent.classes;
        }
      });


      /***************************************************************
      * Here we set up the scope variables to be overridden by the directive's
      * attribute values.
      ***************************************************************/
      if (attrs.header !== null && attrs.header !== undefined) {
        scope.header = attrs.header;
      }
      if (attrs.footer !== null && attrs.footer !== undefined) {
        scope.footer = attrs.footer;
      }
      if (attrs.body !== null && attrs.body !== undefined) {
        scope.body = attrs.body;
      }
      if (attrs.modalclasses !== null && attrs.modalclasses !== undefined) {
        scope.classes = attrs.modalclasses;
      }
    }
  };
});
