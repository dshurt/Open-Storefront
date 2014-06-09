'use strict';

angular.module('openstorefrontApp')
.directive('modal', function () {
  return {
    restrict: "AE",
    scope: {},
    controller: '@',
    name: 'controllerName',
    template: '<div class="modal fade {{classes}}" id="{{id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <div ng-include="header"></div> </div> <div class="modal-body"> <div ng-include="body"></div> </div> <div class="modal-footer"> <div ng-include="footer"></div> </div> </div> </div </div>',
    link: function postLink(scope, element, attrs) {

      scope.header = 'views/modalDefaults/header.html';

      scope.footer = 'views/modalDefaults/footer.html';

      scope.body = 'views/modalDefaults/body.html';
      
      scope.id = attrs.modalid;

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
