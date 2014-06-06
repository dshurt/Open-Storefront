'use strict';

/* global setPageHeight, setPageMargin, setRightOpenWidth, openClick:true, 0, 40, 
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

var clicking = false;
var clickingInside = false;


$(document).ready(function(){



  $('.pagination').mouseleave(function(){
    var html = $('.page1');
    html.css('overflow', 'auto');
    clickingInside = true;
  });

  $('.pagination').mouseenter(function(){
    var html = $('.page1'); 
    html.css('overflow', 'hidden');
    clickingInside = false;
  });


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
  setPageHeight($('.resultsContainer'), 0);
  setRightOpenWidth(details);
  if (filtClick === 1) {
    setLeftOpenWidth(results);
  }
  setPageHeight(filters, 0);
  setPageHeight(results, 40);
  setPageHeight(details, 0);
  setPageMargin(details, 40);

  $('#filtersButton').data('offset', '0');
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 52);
  moveButtons($('#showPageRight'), $('.page1'));
  moveButtons($('#showPageLeft'), $('.page2'));
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
    setPageMargin(details, 40);
  }
  setRightOpenWidth(details);
  if (filtClick === 1) {
    setLeftOpenWidth(results);
  }
  setPageHeight($('.resultsContainer'), 0);
  setPageHeight(filters, 0);
  setPageHeight(results, 40);
  setPageHeight(details, 0);

  $('#filtersButton').data('offset', '0');
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 52);
  moveButtons($('#showPageRight'), $('.page1'));
  moveButtons($('#showPageLeft'), $('.page2'));
});
$('.page1').scroll(function() {
  floatBelowTop($('#filtersButton'), 3000, $('.page1'), 52);
  moveButtons($('#showPageRight'), this);
  // setPageHeight($('.resultsContainer'), 0);
});
$('.page2').scroll(function() {
  moveButtons($('#showPageLeft'), this);
});
