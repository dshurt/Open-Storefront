'use strict';

angular.module('openstorefrontApp')
.directive('raty', function () {
  return {
    restrict: 'AE',
    link: function(scope, elem, attrs) {
      attrs.$observe('score', function(data) { /*jshint unused:false*/
        $(elem).raty({score: attrs.score, number: attrs.number, path: attrs.path});
      }, true);
    }
  };
});
