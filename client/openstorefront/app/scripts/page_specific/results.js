'use strict';

/* global setPageHeight, setPageMargin, setRightOpenWidth, openClick:true, 
fullClick:true, filtClick:true, resetStyles, floatBelowTop, moveButtons,
unStretchFilterbutton*/
$('#filtersButton').on('mouseenter', function() {
  if (!filtClick) {
    $('.filtersButton').stop(true,true).animate({'margin-left':'0px'}, 200, function(){});
  }
});
$('#filtersButton').on('mouseleave', function() {
  if (!filtClick) {
    $('.filtersButton').stop(true,true).animate({'margin-left':'-55px'}, 200, function(){});
  }
});

$(document).ready(function(){


  var details = $('.page2');
  var results = $('.page1');
  var filters = $('.filters');
  if ($(window).width() < 767) {
    if (!fullClick) {
      unStretchFilterbutton();
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
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 52);
  moveButtons($('#showPageRight'), $('.page1'));
});
$(window).resize(function() {
  var details = $('.page2');
  var results = $('.page1');
  var filters = $('.filters');
  if ($(window).width() < 767) {
    if (!fullClick) {
      unStretchFilterbutton();
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
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 52);
  moveButtons($('#showPageRight'), $('.page1'));
});
$('.page1').scroll(function() {
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 52);
  moveButtons($('#showPageRight'), this);
  // setPageHeight($('.resultsContainer'));
});
$('.page2').scroll(function() {
  moveButtons($('#showPageLeft'), this);
});
