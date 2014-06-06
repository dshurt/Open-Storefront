'use strict';


/* exported setupPopovers, setupTypeahead */

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