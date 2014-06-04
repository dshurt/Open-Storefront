'use strict';

describe('Filter: componentFilter', function () {

  // load the filter's module
  beforeEach(module('openstorefrontApp'));

  // initialize a new instance of the filter before each test
  var componentFilter;
  beforeEach(inject(function ($filter) {
    componentFilter = $filter('componentFilter');
  }));

  it('should return the input prefixed with "componentFilter filter:"', function () {
    var text = 'angularjs';
    expect(componentFilter(text)).toBe('componentFilter filter: ' + text);
  });

});
