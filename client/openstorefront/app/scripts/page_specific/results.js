'use strict';

/* global setPageHeight, setPageMargin, setRightOpenWidth, openClick:true, 
   fullClick:true, filtClick:true, resetStyles, floatBelowTop, moveButtons */

$(document).ready(function(){

  var details = $('.page2');
  var results = $('.page1');
  var filters = $('.filters');
  if ($(window).width() < 767) {
    if (!fullClick) {
      resetStyles(details);
      resetStyles(results);
      resetStyles(filters);
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

  $('#filtersButton').data('offset', '0');
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 53);
});
$(window).resize(function() {
  var details = $('.page2');
  var results = $('.page1');
  var filters = $('.filters');
  if ($(window).width() < 767) {
    if (!fullClick) {
      resetStyles(details);
      resetStyles(results);
      resetStyles(filters);
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

  $('#filtersButton').data('offset', '0');
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 53);
});
$('.page1').scroll(function() {
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 53);
  moveButtons($('#showPageRight'), this);
  // setPageHeight($('.resultsContainer'));
});
$('.page2').scroll(function() {
  moveButtons($('#showPageLeft'), this);
});
