'use strict';


/* exported setupPopovers, setupTypeahead */
// This is where we'll put the document.ready functions that apply globally
$(document).ready(function() {
});


// This is where all of the useful shared functions will go.
var setupPopovers = function() {
  if ($('[data-toggle="popover"]').length > 2) {
    $('.lastPopover[data-toggle="popover"]').last().popover({trigger: 'hover','placement': 'top', 'html': true});
  }
  $('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'bottom', 'html': true});
};


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