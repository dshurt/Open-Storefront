'use strict';

// This is where we'll put the document.ready functions that apply globally
$(document).ready(function() {

});


// This is where all of the useful shared functions will go.
var setupPopovers = function() {  /* exported setupPopovers */
  if ($('[data-toggle="popover"]').length > 2) {
    $('.lastPopover[data-toggle="popover"]').popover({trigger: 'hover','placement': 'top', 'html': true});
  }
  $('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'bottom', 'html': true});
};
