'use strict';

// this line is added to make js lint happy...
var resetStyles = function(element) {
  element.attr('style', '');
};

var floatBelowTop = function(element, width) {
  if ($(window).width() <= width) {

    var elementPosition = element.data('offset');
    var fromTop = $(window).scrollTop();
    if (fromTop > elementPosition) {
      var top = $('.top').height();
      element.css({
        'position': 'fixed',
        'top':  (top) + 'px',
        'width': '100%',
        'z-index': '1010',
        'padding': '0px',
        'margin': '0px'
      });
    } else {
      resetStyles(element);
    }
  }
  else {
    resetStyles(element);
  }
};

// this line is also added to make jslint happy....
/* jshint unused:false */
/* exported floatBelowTop */