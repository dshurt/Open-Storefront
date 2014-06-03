'use strict';

var openClick = 0;
var fullClick = 0;
var filtClick = 0;

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

var setRightOpenWidth = function(element) {
  var windowWidth;
  var width = 400;
  if (filtClick === 1)
  {
    width = 650;
  }
  if (!fullClick) {
    windowWidth = $(window).width() - width;
  } else {
    windowWidth = $(window).width();
  }
  element.css({
    'width': windowWidth + 'px'
  });
};

var setPageHeight = function(element) {
  var windowHeight = $(window).height() - $('.top').height();
  element.css({
    'height': windowHeight + 'px'
  });
};

var setPageMargin = function (element) {
  var windowHeight = $(window).height() - $('.top').height();
  element.css({
    'margin-top': -windowHeight + 'px'
  });
};


var openDetails = function(results, details, windowWidth) {
  var width = 400;
  if (filtClick === 1)
  {
    width = 650;
  }
  var marginAndResults = windowWidth - width;
  results.stop(true, true).animate({
    'width': width + 'px'
  }, 200 , function() {/*complete animation*/});
  details.stop(true, true).animate({
    'margin-left': '-='+marginAndResults+'px',
    'width': (windowWidth - width) + 'px'
  }, 200 , function() {/*complete animation*/});
};

var closeDetails = function(results, details) {
  results.css({'display': 'inherit'});
  setPageMargin(details);
  results.stop(true, true).animate({
    'width': '100%'
  }, 200 , function() {/*complete animation*/});
  details.stop(true, true).animate({
    'width': '0px',
    'margin-left': '100%'
  }, 200 , function() { details.css({'width': '100%'}); });
};

var openFullDetails = function(results, details, windowWidth) {
  results.stop(true, true).animate({
    'width': '0px',
  }, 200 , function() {
    results.css({'display': 'none'});
    details.css({'margin-top': '0px'});
  });
  details.stop(true, true).animate({
    'width': windowWidth + 'px',
    'margin-left': '0px'
  }, 200 , function() {/*complete animation*/});
};

var closePartialDetails = function(results, details, windowWidth) {
  var width = 400;
  if (filtClick === 1)
  {
    width = 650;
  }
  results.css({'display': 'inherit'});
  setPageMargin(details);
  results.stop(true, true).animate({
    'width': width + 'px'
  }, 200 , function() {});
  details.stop(true, true).animate({
    'width': windowWidth - width + 'px',
    'margin-left': width + 'px'
  }, 200 , function() {/*complete animation*/});
};


var openFilter = function (filters, results, details, windowWidth) {
  results.css({'display': 'inherit'});
  filters.css({'display': 'inherit'});
  setPageMargin(details);
  if (openClick === 1) {
    results.stop(true, true).animate({
      'padding-left': '250px',
      'width': '650px'
    }, 200 , function() {});
    filters.stop(true, true).animate({
      'width': '250px'
    }, 200 , function() {/*complete animation*/});
    details.stop(true, true).animate({
      'margin-left': '650px',
      'width': windowWidth - 650 + 'px'
    }, 200 , function() {});
  } else {
    results.stop(true, true).animate({
      'padding-left': '250px',
    }, 200 , function() {});
    filters.stop(true, true).animate({
      'width': '250px'
    }, 200 , function() {/*complete animation*/});
  }
};

var closeFilter = function (filters, results, details, windowWidth) {
  results.css({'display': 'inherit'});
  setPageMargin(details);
  if (openClick === 1) {
    results.stop(true, true).animate({
      'padding-left': '0px',
      'width': '400px'
    }, 200 , function() {});
    filters.stop(true, true).animate({
      'width': '0px'
    }, 200 , function() {filters.css({'display': 'none'});});
    details.stop(true, true).animate({
      'margin-left': '400px',
      'width': windowWidth - 400 + 'px'
    }, 200 , function() {});
  } else {
    results.stop(true, true).animate({
      'padding-left': '0px',
      'width': '100%'
    }, 200 , function() {});
    filters.stop(true, true).animate({
      'width': '0px'
    }, 200 , function() {filters.css({'display': 'none'});});
  }
};


var openWindowToggle = function () {
  var windowWidth = $(window).width();
  var results = $('.page1');
  var details = $('.page2');
  setTimeout(function() {
    if (openClick === 0)
    {
      openDetails(results, details, windowWidth);
      openClick = 1;
    } else {
      closeDetails(results, details);
      openClick = 0;
    }
  }, 100);
};


var fullDetailsToggle = function () {
  var windowWidth = $(window).width();
  var filters = $('.filters');
  var results = $('.page1');
  var details = $('.page2');
  setTimeout(function() {
    if (fullClick === 0) {
      closeFilter(filters, results, details, windowWidth);
      filtClick = 0;
      openFullDetails(results, details, windowWidth);
      fullClick = 1;
    } else if (fullClick === 1) {
      closePartialDetails(results, details, windowWidth);
      fullClick = 0;
    }
  }, 100);
};

var closeDetailsFull = function () {
  var windowWidth = $(window).width();
  var results = $('.page1');
  var details = $('.page2');
  setTimeout(function() {
    closeDetails(results, details);
    fullClick = 0;
  }, 100);
};

var openFiltersToggle = function () {
  var windowWidth = $(window).width();
  var results = $('.page1');
  var filters = $('.filters');
  var details = $('.page2');
  setTimeout(function() {
    if (filtClick === 0) {
      if (windowWidth <= 992) {
        if (openClick) {
          closeDetails(results, details);
          openClick = 0;
        }
      }
      openFilter(filters, results, details, windowWidth);
      filtClick = 1;
    } else {
      closeFilter(filters, results, details, windowWidth);
      filtClick = 0;
    }
  }, 100);
};

var buttonOpen = function() {

  if ( $(window).width() > 767 ) {
    if (openClick) {
      if (fullClick) {
        return;
      } else {
        fullDetailsToggle();
      }
    } else {
      openWindowToggle();
    }
  }
  else {
    if (openClick) {
      if (fullClick) {
        return;
      } else {
        fullDetailsToggle();
      }
    } else {
      openWindowToggle();
      fullDetailsToggle();
    }
  }
  setTimeout(function () {
    console.log('openClick', openClick);
    console.log('fullClick', fullClick);
    console.log('filtClick', filtClick);
  }, 400);
};

var buttonClose = function() {

  if ( $(window).width() > 767 ) {
    if (openClick) {
      if (fullClick) {
        fullDetailsToggle();
      } else {
        openWindowToggle();
      }
    } else {
      return;
    }
  }
  else {
    if (openClick) {
      if (fullClick) {
        fullDetailsToggle();
        openWindowToggle();
      } else {
        openWindowToggle();
      }
    } else {
      return;
    }
  }
  setTimeout(function () {
    console.log('openClick', openClick);
    console.log('fullClick', fullClick);
    console.log('filtClick', filtClick);
  }, 400);
  return;
};

// this line is also added to make jslint happy....
/* jshint unused:false */
/* exported floatBelowTop */