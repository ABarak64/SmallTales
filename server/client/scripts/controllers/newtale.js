'use strict';

angular.module('SmallTalesApp')
  .controller('NewTaleCtrl', function ($scope, $location, Tales) {

    $scope.tale = {
      title: '',
      text: ''
    };

    $scope.create = function() {
      $scope.tale = Tales.save($scope.tale);
      $location.path('/tales');
    };
  });
