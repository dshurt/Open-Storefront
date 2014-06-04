'use strict';

app.filter('componentFilter', ['business', function(Business)  {
  var allChecked = function(collection) {
    var none = _.every(collection, function(item) {
      return (item.checked === false);
    });
    var all = _.every(collection, function(item) {
      return (item.checked === true);
    });
    return (none || all);
  }

  return function (input, filters) {
    var out = null;
    out = _.filter(input, function(item) {  // if value passes with true it remains
      return _.every(filters, function(filter) {  //we return true if it passes all of these filters
        var collection = filter.collection;
        var key = filter.key;
        // if the filter isn't being used, or all are checked, we know its true
        if (!allChecked(collection)) { 
          // otherwise we return true if it passes some portion of the filter
          return _.some(collection, function(checkedFilter) {
            if (checkedFilter.checked === true) {
              var check = _.pluck(item[key], 'code');
              // if the filter is checked, we need to check the item
              return _.contains(check, checkedFilter.code);
            } else {
              // if it isn't checked we default to false
              return false;
            }
          });
        } else {
          return true;
        }
      });
    });
    return out;
  };
}]);
