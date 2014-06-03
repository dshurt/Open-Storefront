'use strict';

/* global setPageHeight, setPageMargin */

$(document).ready(function(){
  var details = $('.page2');
  var results = $('.page1');
  var filters = $('.filters');
  if ($(window).width() < 767) {
    details.attr('style', '');
    filters.attr('style', '');
    results.attr('style', '');
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
    details.attr('style', '');
    filters.attr('style', '');
    results.attr('style', '');
  }
  setRightOpenWidth(details);
  setPageHeight($('.resultsContainer'));
  setPageHeight(filters);
  setPageHeight(results);
  setPageHeight(details);
  setPageMargin(details);
});
$(window).scroll(function() {
  // setPageHeight($('.resultsContainer'));
});
