'use strict';

/* global isEmpty */

app.filter('tagFilter', function () {
  return function (input, filters) {
    if (!isEmpty(filters)) {
      var out = null;
      out = _.filter(input, function(entry) {
        return _.every(filters, function(filter) {
          return _.some(entry.assetTags, function(tag) {
            return filter.text  === tag.text;
          });
        });
      });
      return out;
    } else {
      return input;
    }
  };
});
