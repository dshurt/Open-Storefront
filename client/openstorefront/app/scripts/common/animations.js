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

/*globals openFiltersToggle:true*/

/**********************
* These are global variables to handle the open page states
**********************/
var openClick = 0;
var fullClick = 0;
var filtClick = 0;

/**********************
* This function resets an element's styles
* params: element -- a JQuery object
**********************/
var resetStyles = function(element) {
  element.attr('style', '');
};

/**********************
* This function resets keeps a div floating just below the navigation
* params: element -- a JQuery object
* params: width -- under which width does this take affect
* params: parent -- a JQuery object that contains the element we want to move
* params: top -- How many pixels from the top are we going to keep this element
**********************/
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

/**********************
* This function keeps the description flyout buttons in the middle of the screen
* params: element -- a JQuery object
* params: parent -- a JQuery object that contains the element we want to move
**********************/
var moveButtons = function (element, parent) {
  var top = $(parent).scrollTop();
  var height = ($(parent).height() / 2);
  var offset = top + height - 45;
  
  element.css({'top': offset + 'px'});
};

/**********************
* This function sets the width of the element to the 'details page' width
* params: element -- a JQuery object
**********************/
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

/**********************
* This function sets the width of the element to the 'results page' width
* params: element -- a JQuery object
**********************/
var setLeftOpenWidth = function(element) {
  var windowWidth = $(window).width();
  
  if (filtClick === 1) {
    if (openClick === 1) {
      windowWidth = 650;
    }
    windowWidth = windowWidth - 250;
  } else if (openClick === 1) {
    windowWidth = 400;
  }

  element.css({
    'width': windowWidth + 'px'
  });
};

/**********************
* This function sets the height of the element to the page height minus the offset
* params: element -- a JQuery object
* params: offset -- an integer value detailing the offset from the bottom
**********************/
var setPageHeight = function(element, offset) {
  var windowHeight = $(window).height() - $('.top').height();
  element.css({
    'height': windowHeight - offset + 'px'
  });
};

/**********************
* This function sets the margin-top of the element to the height of the window 
* plus the offset
* params: element -- a JQuery object
* params: offset -- an integer value detailing the offset from the top
**********************/
var setPageMargin = function (element, offset) {
  element.css({
    'margin-top': offset + 'px'
  });
};

/**********************
* This funciton stertches the filter button and moves it left to hover over
* the filter div.
**********************/
var stretchFilterbutton = function() {
  var button = $('.filtersButton');
  button.stop(true, true).animate({
    'width':'248px',
    'margin-left': '-250px'
  }, 200, function() {/*complete animation*/});
};

/**********************
* This function unstretches the filters button and moves it back to its original
* position
**********************/
var unStretchFilterbutton = function() {
  var button = $('.filtersButton');
  button.stop(true, true).animate({
    'width':'74px',
    'margin-left': '-55px'
  }, 200, function() {/*complete animation*/});

};









/******************************************************************************/
/*This section starts the actual page animations that do the flyout actions*/
/******************************************************************************/
/**********************
* This function does the animation to move the details page open and collapse
* the results page to 400px
* params: results -- a JQuery object that contains the results page
* params: details -- a JQuery object that contains the details page
* params: windowWidth -- an integer value detailing the window width
**********************/
var openDetails = function(results, details, windowWidth) {
  details.css({'display': 'inherit'});
  var offset = $(window).height() - $('.top').height() - 40;
  setPageMargin(details, -offset);
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

/**********************
* This function closes the details page and gives results the remaining width
* params: results -- a JQuery object that contains the results page
* params: details -- a JQuery object that contains the details page
* params: windowWidth -- an integer value detailing the window width
**********************/
var closeDetails = function(results, details, windowWidth) {
  results.css({'display': 'inherit'});
  var offset = $(window).height() - $('.top').height() - 40;
  setPageMargin(details, -offset);
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
  }, 200 , function() { details.css({'width': '100%', 'display': 'none'}); });
};


/**********************
* This function gives the details the full width of the page and closes the 
* results page
* params: results -- a JQuery object that contains the results page
* params: details -- a JQuery object that contains the details page
* params: windowWidth -- an integer value detailing the window width
**********************/
var openFullDetails = function(results, details, windowWidth) {
  details.css({'display': 'inherit'});
  results.stop(true, true).animate({
    'width': '0px'
  }, 200 , function() {
    results.css({'display': 'none'});
    details.css({'margin-top': '0px'});
  });
  details.stop(true, true).animate({
    'width': windowWidth + 'px',
    'margin-left': '0px'
  }, 200 , function() {/*complete animation*/});
};


/**********************
* This function opens the results back to 400 px and gives the remaining width
* to the details page
* params: results -- a JQuery object that contains the results page
* params: details -- a JQuery object that contains the details page
* params: windowWidth -- an integer value detailing the window width
**********************/
var closePartialDetails = function(results, details, windowWidth) {
  var width = 400;
  if (filtClick === 1)
  {
    width = 650;
  }
  results.css({'display': 'inherit'});
  var offset = $(window).height() - $('.top').height() - 40;
  setPageMargin(details, -offset);
  results.stop(true, true).animate({
    'width': width + 'px'
  }, 200 , function() {});
  details.stop(true, true).animate({
    'width': windowWidth - width + 'px',
    'margin-left': width + 'px'
  }, 200 , function() {/*complete animation*/});
};


/**********************
* This function opens the filter panel
* params: results -- a JQuery object that contains the results page
* params: details -- a JQuery object that contains the details page
* params: filters -- a JQuery object that contains the filters page
* params: pagination -- a JQuery object that contains the pagination div
* params: windowWidth -- an integer value detailing the window width
**********************/
var openFilter = function (filters, results, details, paginationDiv, windowWidth) {
  results.css({'display': 'inherit'});
  filters.css({'display': 'inherit'});
  var offset = $(window).height() - $('.top').height() - 40;
  setPageMargin(details, -offset);
  if (openClick === 1) {
    results.stop(true, true).animate({
      'margin-left': '250px'
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

/**********************
* This function closes the filter panel
* params: results -- a JQuery object that contains the results page
* params: details -- a JQuery object that contains the details page
* params: filters -- a JQuery object that contains the filters page
* params: pagination -- a JQuery object that contains the pagination div
* params: windowWidth -- an integer value detailing the window width
**********************/
var closeFilter = function (filters, results, details, paginationDiv, windowWidth) {

  results.css({'display': 'inherit'});
  var offset = $(window).height() - $('.top').height() - 40;
  setPageMargin(details, -offset);
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

/**********************
* This function Will toggle the open window functions
**********************/
var openWindowToggle = function () {
  moveButtons($('#showPageRight'), $('.page1'));
  moveButtons($('#showPageLeft'), $('.page2'));
  var windowWidth = $(window).width();
  var results = $('.page1');
  var details = $('.page2');
  setTimeout(function() {
    if (openClick === 0)
    {
      if (windowWidth <= 992) {
        if (filtClick) {
          openFiltersToggle();
        }
      }
      openDetails(results, details, windowWidth);
      openClick = 1;
    } else {
      closeDetails(results, details, windowWidth);
      openClick = 0;
    }
  }, 100);
};

/**********************
* This function Will toggle the openfull and closepartial functions
**********************/
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


/**********************
* This function will close the details section completely no matter the state
* of the page
**********************/
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

/**********************
* This function will toggle the open state of the filters
**********************/
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
          openWindowToggle();
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
/******************************************************************************/
/* END actual page animations that do the flyout actions*/
/******************************************************************************/









/**********************
* This function does the next action of the button it is tied to
* In this case it first toggles open window, and then openfull if both pages 
* were in a closed state to start with
**********************/
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
      openClick = 1;
      fullDetailsToggle();
    }
  }
  // setTimeout(function () {
  //   console.log('openClick', openClick);
  //   console.log('fullClick', fullClick);
  //   console.log('filtClick', filtClick);
  // }, 400);
};

/**********************
* This function does the next action of the button it is tied to
* In this case it first toggles closepartial, then closefull if both pages
* were in an opened state to start with
**********************/
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
        fullClick = 0;
        openWindowToggle();
      } else {
        openWindowToggle();
      }
    } else {
      return;
    }
  }
  return;
  // setTimeout(function () {
  //   console.log('openClick', openClick);
  //   console.log('fullClick', fullClick);
  //   console.log('filtClick', filtClick);
  // }, 400);
};

/**********************
* This function resets the global variables containing the state of the window
**********************/
var resetAnimGlobals = function() {
  openClick = 0;
  fullClick = 0;
  filtClick = 0;
};

/**********************
* This function resets the actual windows by removing their custom styles
* params: details -- JQuery object that contains the details page
* params: results -- JQuery object that contains the results page
* params: filters -- JQuery object that contains the filters page
**********************/
var resetAnimations = function(details, results, filters) {
  unStretchFilterbutton();
  resetStyles(details);
  resetStyles(results);
  resetStyles(filters);
  resetAnimGlobals();
};



// this line is also added to make jslint happy....
/* jshint unused:false */
/* exported floatBelowTop, setRightOpenWidth, setLeftOpenWidth,
setPageHeight, resetAnimations, resetAnimGlobals, closeDetailsFull,
openFiltersToggle, buttonOpen, buttonClose, moveButtons, windowWidth */