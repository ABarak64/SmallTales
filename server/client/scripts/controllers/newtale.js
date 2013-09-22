'use strict';

app.controller('NewTaleCtrl', function ($scope, $rootScope, $location, Tales) {

  $scope.tale = {
    title: '',
    text: '',
    isNewParagraph: false
  };

  $scope.create = function() {
    $rootScope.loading = true;
    $scope.tale = Tales.save($scope.tale);
    $location.path('/tales');

    $rootScope.message = {
      text: 'You successfully created the \'' + $scope.tale.title + '\' tale.',
      success: true
    };
  };
});
