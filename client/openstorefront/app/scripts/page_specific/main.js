'use strict';

/*global floatBelowTop*/

/***************************************************************
* This function handles the default-search offset on resizing the window
***************************************************************/
$(window).resize(function() {
  setTimeout(function() {
    $('.defaultSearch').data('offset', $('.defaultSearch').offset().top + parseInt($('.defaultSearch').css('padding-top'), 10) - 52);
    floatBelowTop($('.defaultSearch'), 768, $(window), $('.top').height());
  }, 10);
});

/***************************************************************
* This function handles the default-search offset on scrolling
***************************************************************/
$(window).scroll(function() {
  floatBelowTop($('.defaultSearch'), 768, $(window), $('.top').height());
});

/***************************************************************
* This function handles the default-search offset on load
***************************************************************/
$(document).ready(function() {
  setTimeout(function() {
    $('.defaultSearch').data('offset', $('.defaultSearch').offset().top + parseInt($('.defaultSearch').css('padding-top'), 10) - 52);
    floatBelowTop($('.defaultSearch'), 768, $(window), $('.top').height());
  }, 10);
});