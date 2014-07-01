'use strict';

angular.module('openstorefrontApp').directive('popover', function() {
	return function(scope, elem) {
		elem.popover();
	};
});