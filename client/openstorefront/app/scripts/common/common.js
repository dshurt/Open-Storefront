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


/* exported setupPopovers, setupTypeahead, isEmpty, toggleclass, setUpDropdown, setupParallax*/

/*****************************
* This function sets up the popovers for the results page, but could be 
* re-used anywhere that you use the data-toggle="popover" attribute on a div
* It has been configured to give the last popover a different direction in order
* to avoid page overflow.
*****************************/
var setupPopovers = function() {
  if ($('[data-toggle=\'popover\']').length > 2) {
    $('.lastPopover[data-toggle=\'popover\']').last().popover({trigger: 'hover','placement': 'top', 'html': true});
  }
  $('[data-toggle=\'popover\']').popover({trigger: 'hover','placement': 'bottom', 'html': true});
};

/***************************************************************
* This function toggles a class name for a specified id
***************************************************************/
var toggleclass = function(id, className) {
  $('#'+id).toggleClass(className);
};

/***************************************************************
* This function makes a dropdown menu work on first click.
***************************************************************/
var setUpDropdown= function(id) {
  $('#' + id).on('click', function(e) {
    e.stopPropagation();

    //The dropdown has to be somewhere inside the element (not in the element itself)
    $(this).next('.dropdown').find('[data-toggle=dropdown]').dropdown('toggle');
  });
};

/***************************************************************
* Speed up calls to hasOwnProperty (somewhat of an hasOwnPropert override)
***************************************************************/
var hasOwnProperty2 = Object.prototype.hasOwnProperty;

/***************************************************************
* This function checks to see if the object is empty
* params: obj -- the object to check
* returns: boolean -- a true or false value of whether the object is empty or not
***************************************************************/
function isEmpty(obj) {
  // null and undefined are 'empty'
  if (obj === null || obj === undefined) {
    return true;
  }

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) {
    return false;
  }

  if (obj.length === 0) {
    return true;
  }

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty2.call(obj, key)) {
      return false;
    }
  }

  return true;
}


/***************************************************************
* This function sets up the parallax backgrounds on the page. It could be improved
* to dynamically set up the height and width of the images more accurately.
*
* The parallax relies on image size in order to work, so if you want different results
* mess with the image size here.
***************************************************************/
var setupParallax = function() {
  // Declare parallax on layers
  setTimeout(function(){
    var width = $('.banner').width();
    var height = $('.banner').height();
    
    var i = 5;
    var opacity = 0.2;
    _.each($('.parallax-layer'), function(element) {
      $(element).css('width', width + i + 'px');
      $(element).css('height', height + i + 'px');
      // $(element).css('height', height + 'px');
      // $(element).css('opacity', opacity);
      i = i + 25;
      opacity = opacity + 0.02;
    });
    jQuery('.parallax-layer').parallax({
      mouseport: jQuery('#port')
    });
  }, 10);
};