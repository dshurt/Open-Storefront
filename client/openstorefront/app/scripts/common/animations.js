'use strict';

// this line is added to make js lint happy...
var $ = $? $ : null;


var floatBelowTop = function(element) {
  var fromTop = $(window).scrollTop();
  if (fromTop >= 52) {
    var top = $('.top').height();
    element.css({
      'position': 'fixed',
      'top':  top + 'px',
      'z-index': '1010'
    });
  } else {
    element.css({
      'position': 'static',
      'top': 'inherit',
      'z-index': 'inherit'
    });
  }
};


// this line is also added to make jslint happy....
floatBelowTop($());