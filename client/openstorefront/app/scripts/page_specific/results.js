'use strict';

/* global setPageHeight, setPageMargin, setRightOpenWidth, openClick:true, fullClick:true, filtClick:true */

$(document).ready(function(){

  var details = $('.page2');
  var results = $('.page1');
  var filters = $('.filters');
  if ($(window).width() < 767) {
    if (!fullClick) {
      details.attr('style', '');
      filters.attr('style', '');
      results.attr('style', '');
      openClick = 0;
      fullClick = 0;
      filtClick = 0;
    }
  }
  setPageHeight($('.resultsContainer'));
  setRightOpenWidth(details);
  setPageHeight(filters);
  setPageHeight(results);
  setPageHeight(details);
  setPageMargin(details);
});
$(window).resize(function() {
  var details = $('.page2');
  var results = $('.page1');
  var filters = $('.filters');
  if ($(window).width() < 767) {
    if (!fullClick) {
      details.attr('style', '');
      filters.attr('style', '');
      results.attr('style', '');
      openClick = 0;
      fullClick = 0;
      filtClick = 0;
    }
  } else if (!fullClick){
    setPageMargin(details);
  }
  setRightOpenWidth(details);
  setPageHeight($('.resultsContainer'));
  setPageHeight(filters);
  setPageHeight(results);
  setPageHeight(details);
});
$(window).scroll(function() {
  // setPageHeight($('.resultsContainer'));
});
