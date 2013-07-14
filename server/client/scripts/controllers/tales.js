'use strict';

angular.module('SmallTalesApp')
  .controller('TalesCtrl', function ($scope, Tales) {

    $scope.tales = Tales.query();
  });
