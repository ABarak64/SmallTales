'use strict';

app.controller('NewTaleCtrl', function ($scope, $location, Tales) {

  $scope.tale = {
    title: '',
    text: '',
    isNewParagraph: false
  };

  $scope.create = function() {
    $scope.tale = Tales.save($scope.tale);
    $location.path('/tales');
  };
});
