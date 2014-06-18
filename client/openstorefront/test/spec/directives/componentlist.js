'use strict';

describe('Directive: componentList', function () {

  // load the directive's module
  beforeEach(module('openstorefrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<component-list></component-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the componentList directive');
  }));
});
