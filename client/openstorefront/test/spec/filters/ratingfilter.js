'use strict';

describe('Filter: ratingFilter', function () {

  // load the filter's module
  beforeEach(module('openstorefrontApp'));

  // initialize a new instance of the filter before each test
  var ratingfilter;
  beforeEach(inject(function ($filter) {
    ratingfilter = $filter('ratingfilter');
  }));

  it('should return the input prefixed with "ratingfilter filter:"', function () {
    var text = 'angularjs';
    expect(ratingfilter(text)).toBe('ratingfilter filter: ' + text);
  });

});
