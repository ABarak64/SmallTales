'use strict';

app.controller('TaleCtrl', function ($scope, $routeParams, Tales) {

  $scope.tale = Tales.get({ taleId: $routeParams.taleId });
  $scope.newPhrase = {
  	isNewParagraph: false
  };

  $scope.add = function() {
    $scope.tale = Tales.update({ taleId: $scope.tale._id }, $scope.newPhrase);
  };
});
