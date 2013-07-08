'use strict';

describe('Controller: TalesCtrl', function () {

  // load the controller's module
  beforeEach(module('SmallTalesApp'));

  var TalesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TalesCtrl = $controller('TalesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
