'use strict';

app.filter('ratingFilter', function () {
  return function (input, rating) {
    if (!isNaN(rating) && (rating >= 0 && rating <= 5)) {
      var out = null;
      out = _.filter(input, function(entry) {
        return entry.stats.averageRating >= rating;
      });
      return out;
    } else {
      return input;
    }
  };
});
