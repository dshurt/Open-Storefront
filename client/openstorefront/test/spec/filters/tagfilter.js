'use strict';

describe('Filter: tagFilter', function () {

  // load the filter's module
  beforeEach(module('openstorefrontApp'));

  // initialize a new instance of the filter before each test
  var tagFilter;
  beforeEach(inject(function ($filter) {
    tagFilter = $filter('tagFilter');
  }));

  it('should return the input prefixed with "tagFilter filter:"', function () {
    var text = 'angularjs';
    expect(tagFilter(text)).toBe('tagFilter filter: ' + text);
  });

});
