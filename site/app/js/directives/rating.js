'use strict';

var app = angular.module('storefront');

app.directive("raty", function() {
    return {
        restrict: 'AE',
        link: function(scope, elem, attrs) {
            $(elem).raty({score: attrs.score, number: attrs.number, path: attrs.path});
        }
    }
});