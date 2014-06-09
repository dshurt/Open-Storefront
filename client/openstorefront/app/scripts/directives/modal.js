'use strict';

angular.module('openstorefrontApp')
.directive('modal', function () {
  return {
    restrict: "AE",
    scope: {},
    controller: '@',
    name: 'controllerName',
    template: '<div class="modal fade" id="{{id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <div ng-include="header"></div> </div> <div class="modal-body"> <div ng-include="body"></div> </div> <div class="modal-footer"> <div ng-include="footer"></div> </div> </div> </div </div>',
    link: function postLink(scope, element, attrs) {
      scope.header = attrs.header;
      scope.footer = attrs.footer;
      scope.body = attrs.body;
      scope.id = attrs.modalid;
    }
  };
});
