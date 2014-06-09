'use strict';

describe('Directive: modal', function () {

  // load the directive's module
  beforeEach(module('openstorefrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<modal></modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the modal directive');
  }));
});
