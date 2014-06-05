'use strict';

var openClick = 0;
var fullClick = 0;
var filtClick = 0;

var resetStyles = function(element) {
  element.attr('style', '');
};

var floatBelowTop = function(element, width, parent, top) {
  if (parent.width() <= width) {

    var elementPosition = element.data('offset');
    var fromTop = parent.scrollTop();
    if (fromTop > elementPosition) {
      element.css({
        'position': 'fixed',
        'top':  (top) + 'px',
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

var setPageHeight = function(element, offset) {
  var windowHeight = $(window).height() - $('.top').height();
  element.css({
    'height': windowHeight - offset + 'px'
  });
};

var setPageMargin = function (element, offset) {
  var windowHeight = $(window).height() - $('.top').height();
  element.css({
    'margin-top': -windowHeight + offset + 'px'
  });
};


var stretchFilterbutton = function() {
  var button = $('.filtersButton');
  button.stop(true, true).animate({
    'width':'248px',
    'margin-left': '-250px'
  }, 200, function() {/*complete animation*/});
};

var unStretchFilterbutton = function() {
  var button = $('.filtersButton');
  button.stop(true, true).animate({
    'width':'74px',
    'margin-left': '-55px'
  }, 200, function() {/*complete animation*/});

};

var openDetails = function(results, details, windowWidth) {
  var width = 400;
  if (filtClick === 1)
  {
    width = 650;
  }
  var marginAndResults = windowWidth - width;
  results.stop(true, true).animate({
    'width': '400px'
  }, 200 , function() {/*complete animation*/});
  details.stop(true, true).animate({
    'margin-left': '-='+marginAndResults+'px',
    'width': (windowWidth - width) + 'px'
  }, 200 , function() {/*complete animation*/});
};

var closeDetails = function(results, details, windowWidth) {
  results.css({'display': 'inherit'});
  setPageMargin(details, 40);
  var resultsWidth = windowWidth;
  if (filtClick === 1) {
    resultsWidth = windowWidth - 250;
  }
  results.stop(true, true).animate({
    'width': resultsWidth + 'px'
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
  setPageMargin(details, 40);
  results.stop(true, true).animate({
    'width': width + 'px'
  }, 200 , function() {});
  details.stop(true, true).animate({
    'width': windowWidth - width + 'px',
    'margin-left': width + 'px'
  }, 200 , function() {/*complete animation*/});
};


var openFilter = function (filters, results, details, paginationDiv, windowWidth) {
  console.log("paginationDiv", paginationDiv);
  results.css({'display': 'inherit'});
  filters.css({'display': 'inherit'});
  setPageMargin(details, 40);
  if (openClick === 1) {
    results.stop(true, true).animate({
      'margin-left': '250px',
    }, 200 , function() {});
    paginationDiv.stop(true, true).animate({
      'margin-right':'-250px'
    }, 200, function() {});
    filters.stop(true, true).animate({
      'width': '250px'
    }, 200 , function() {/*complete animation*/});
    details.stop(true, true).animate({
      'margin-left': '650px',
      'width': windowWidth - 650 + 'px'
    }, 200 , function() {});
  } else {
    results.stop(true, true).animate({
      'margin-left': '250px',
      'width': windowWidth - 250 + 'px'
    }, 200 , function() {});
    paginationDiv.stop(true, true).animate({
      'margin-right':'-250px'
    }, 200, function() {});
    filters.stop(true, true).animate({
      'width': '250px'
    }, 200 , function() {/*complete animation*/});
  }
};

var closeFilter = function (filters, results, details, paginationDiv, windowWidth) {
  console.log("paginationDiv", paginationDiv);
  
  results.css({'display': 'inherit'});
  setPageMargin(details, 40);
  if (openClick === 1) {
    results.stop(true, true).animate({
      'margin-left': '0px'
    }, 200 , function() {});
    paginationDiv.stop(true, true).animate({
      'margin-right':'0px'
    }, 200, function() {});
    filters.stop(true, true).animate({
      'width': '0px'
    }, 200 , function() {filters.css({'display': 'none'});});
    details.stop(true, true).animate({
      'margin-left': '400px',
      'width': windowWidth - 400 + 'px'
    }, 200 , function() {});
  } else {
    results.stop(true, true).animate({
      'margin-left': '0px',
      'width': '100%'
    }, 200 , function() {});
    paginationDiv.stop(true, true).animate({
      'margin-right':'0px'
    }, 200, function() {});
    filters.stop(true, true).animate({
      'width': '0px'
    }, 200 , function() {filters.css({'display': 'none'});});
  }
};


var openWindowToggle = function () {
  moveButtons($('#showPageRight'), $('.page1'));
  moveButtons($('#showPageLeft'), $('.page2'));
  var windowWidth = $(window).width();
  var results = $('.page1');
  var details = $('.page2');
  setTimeout(function() {
    if (openClick === 0)
    {
      openDetails(results, details, windowWidth);
      openClick = 1;
    } else {
      closeDetails(results, details, windowWidth);
      openClick = 0;
    }
  }, 100);
};


var fullDetailsToggle = function () {
  moveButtons($('#showPageRight'), $('.page1'));
  moveButtons($('#showPageLeft'), $('.page2'));
  var windowWidth = $(window).width();
  var filters = $('.filters');
  var results = $('.page1');
  var details = $('.page2');
  var paginationDiv = $('.pagination');
  setTimeout(function() {
    if (fullClick === 0) {
      unStretchFilterbutton();
      closeFilter(filters, results, details, paginationDiv, windowWidth);
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
  moveButtons($('#showPageRight'), $('.page1'));
  moveButtons($('#showPageLeft'), $('.page2'));
  var windowWidth = $(window).width();
  var results = $('.page1');
  var details = $('.page2');
  setTimeout(function() {
    closeDetails(results, details, windowWidth);
    fullClick = 0;
  }, 100);
};

var openFiltersToggle = function () {
  var windowWidth = $(window).width();
  var results = $('.page1');
  var filters = $('.filters');
  var details = $('.page2');
  var paginationDiv = $('.pagination');
  setTimeout(function() {
    if (filtClick === 0) {
      if (windowWidth <= 992) {
        if (openClick) {
          closeDetails(results, details, windowWidth);
          openClick = 0;
        }
      }
      stretchFilterbutton();
      openFilter(filters, results, details, paginationDiv, windowWidth);
      filtClick = 1;
    } else {
      unStretchFilterbutton();
      closeFilter(filters, results, details, paginationDiv, windowWidth);
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


var moveButtons = function (element, parent) {
  var top = $(parent).scrollTop();
  var height = ($(parent).height() / 2);
  var offset = top + height - 45;
  
  element.css({'top': offset + 'px'});
};
// this line is also added to make jslint happy....
/* jshint unused:false */
/* exported floatBelowTop, setRightOpenWidth, setPageHeight, closeDetailsFull,
   openFiltersToggle, buttonOpen, buttonClose, moveButtons, windowWidth */