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

/* global setPageHeight, setPageMargin, setRightOpenWidth, 
fullClick:true, filtClick:true, openClick:true, floatBelowTop, moveButtons,
setLeftOpenWidth, resetAnimations, resetAnimGlobals, unStretchFilterbutton,
closeFilter */

/* exported setupResults */
var setupResults = function(){
  /**********************
  * This handles the animation for the filter button.
  * on-hover it shifts into view, and then shifts out.
  **********************/
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

    if (isNaN($(this).val()) || $(this).val() === '') {
      $(this).val($(this).data('default'));
      $(this).trigger('input');
    }
  });

  /*********************
  * This disables scrolling so that when you drag select, it doesn't scroll
  * down the results page.
  *********************/
  $('.pagination').on('mouseleave', function(){
    var html = $('.page1');
    html.css('overflow', 'auto');
  });

  $('.pagination').on('mouseenter', function(){
    var html = $('.page1');
    html.css('overflow', 'hidden');
  });

  /*********************
  * These croll functions adjust the different buttons that should move with the
  * scroll action on the different pages.
  *********************/
  $('.page1').scroll(function() {
    floatBelowTop($('#filtersButton'), 3000, $('.page1'), 52);
    moveButtons($('#showPageRight'), this);
  });

  $('.page2').scroll(function() {
    moveButtons($('#showPageLeft'), this);
  });

  /*********************
  * This reszies the paged divs in order to maintain the correct view
  *********************/
  var resizeAnimations = function () {
    var details = $('.page2');
    var results = $('.page1');
    var filters = $('.filters');

    var offset = $(window).height() - $('.top').height() - 40;

    if ($(window).width() < 767) {
      if (!fullClick) {
        resetAnimations(details, results, filters);
        resetAnimGlobals();
      }
    } else {
      if (!fullClick) {
        setPageMargin(details, -offset);
      } else {
        setPageMargin(details, 0);
      }
    }
    if ($(window).width() <= 992) {
      if (openClick && filtClick) {
        var paginationDiv = $('.pagination');
        var windowWidth = $(window).width();
        unStretchFilterbutton();
        closeFilter(filters, results, details, paginationDiv, windowWidth);
        filtClick = 0;
      }
    }
    setPageHeight($('.resultsContainer'), 0);
    setRightOpenWidth(details);
    setLeftOpenWidth(results);
    setPageHeight(filters, 0);
    setPageHeight(results, 40);
    setPageHeight(details, 0);

    $('#filtersButton').data('offset', '0');
    floatBelowTop($('#filtersButton'), 3000, $('.page1'), 52);
    moveButtons($('#showPageRight'), $('.page1'));
    moveButtons($('#showPageLeft'), $('.page2'));
  };

  $(document).ready(function(){
    //resize the animations when we load the page
    resizeAnimations();
  });
  $(window).resize(function() {
    //resize the animations when the window size changes
    resizeAnimations();
  });
};
