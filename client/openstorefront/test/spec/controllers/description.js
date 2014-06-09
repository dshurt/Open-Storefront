'use strict';

describe('Controller: DescriptionCtrl', function () {

  // load the controller's module
  beforeEach(module('openstorefrontApp'));

  var DescriptionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DescriptionCtrl = $controller('DescriptionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
