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


/* exported setupPopovers, setupTypeahead, isEmpty */

/*****************************
* This function sets up the popovers for the results page, but could be 
* re-used anywhere that you use the data-toggle="popover" attribute on a div
* It has been configured to give the last popover a different direction in order
* to avoid page overflow.
*****************************/
var setupPopovers = function() {
  if ($('[data-toggle="popover"]').length > 2) {
    $('.lastPopover[data-toggle="popover"]').last().popover({trigger: 'hover','placement': 'top', 'html': true});
  }
  $('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'bottom', 'html': true});
};

/*****************************
* This function is used for the typeahead setup.
*****************************/
var substringMatcher = function(objs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substringRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(objs, function(i, obj) {
      if (substringRegex.test(obj.name)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: obj.name });
      }
    });

    cb(matches);
  };
};


$('.typeahead').on("keypress", function() {
  $(this).trigger('input').trigger('change').trigger('keydown');
})

$('.typeahead').on("change", function() {
  $(this).trigger('input').trigger('change').trigger('keydown');
})

$('.typeahead').on("blur", function() {
  $(this).trigger('input').trigger('change').trigger('keydown');
})

/*****************************
* This function is used for the typeahead setup.
*****************************/
var setupTypeahead = function() {
  setTimeout(function() {
    $('.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      displayKey: 'value',
      source: substringMatcher(MOCKDATA.assets.assets)
    });
    $('.typeahead').toggleClass('typeahead');
  }, 300);
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
  if (obj === null) {
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
