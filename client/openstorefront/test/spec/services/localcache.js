'use strict';

describe('Service: localCache', function () {

  // load the service's module
  beforeEach(module('openstorefrontApp'));

  // instantiate service
  var localCache;
  beforeEach(inject(function (_localCache_) {
    localCache = _localCache_;
  }));

  it('should do something', function () {
    expect(!!localCache).toBe(true);
  });

});
