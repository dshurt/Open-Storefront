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

/*global floatBelowTop, setupParallax*/
/*exported setupMain*/
var setupMain = function() {
  /***************************************************************
  * This function handles the default-search offset on resizing the window
  ***************************************************************/
  $(window).resize(function() {
    setupParallax();
    if ($('.defaultSearch') !== undefined) {
      setTimeout(function() {
        $('.defaultSearch').data('offset', $('.defaultSearch').offset().top + parseInt($('.defaultSearch').css('padding-top'), 10) - 52);
        floatBelowTop($('.defaultSearch'), 768, $(window), $('.top').height());
      }, 10);
    }
  });

  /***************************************************************
  * This function handles the default-search offset on scrolling
  ***************************************************************/
  $(window).scroll(function() {
    if ($('.defaultSearch')) {
      floatBelowTop($('.defaultSearch'), 768, $(window), $('.top').height());
    }
  });

  /***************************************************************
  * This function handles the default-search offset on load
  ***************************************************************/
  $(document).ready(function() {
    setupParallax();
    if ($('.defaultSearch')) {
      setTimeout(function() {
        $('.defaultSearch').data('offset', $('.defaultSearch').offset().top + parseInt($('.defaultSearch').css('padding-top'), 10) - 52);
        floatBelowTop($('.defaultSearch'), 768, $(window), $('.top').height());
      }, 10);
    }
  });
};