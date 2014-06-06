'use strict';

/* global setPageHeight, setPageMargin, setRightOpenWidth, 
fullClick:true, filtClick:true, floatBelowTop, moveButtons,
setLeftOpenWidth, resetAnimations, resetAnimGlobals*/
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

/*********************
* This handles the empty # of rows per page
* and empty page number bug
*********************/
$('.pagination :input').on('blur', function() {
  console.log("We did it");

  if (isNaN($(this).val()) || $(this).val() === '') {
    $(this).val($(this).data('default'));
    $(this).trigger('input');
  }
})

$(document).ready(function(){


  $('.pagination').mouseleave(function(){
    var html = $('.page1');
    html.css('overflow', 'auto');
  });

  $('.pagination').mouseenter(function(){
    var html = $('.page1');
    html.css('overflow', 'hidden');
  });


  var details = $('.page2');
  var results = $('.page1');
  var filters = $('.filters');

  if ($(window).width() < 767) {
    if (!fullClick) {
      resetAnimations(details, results, filters);
      resetAnimGlobals();
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
      resetAnimations(details, results, filters);
      resetAnimGlobals();
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
