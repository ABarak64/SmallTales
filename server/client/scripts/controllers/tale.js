'use strict';

app.controller('TaleCtrl', function ($scope, $rootScope, $routeParams, Tales) {

  $rootScope.loading = true;
  $scope.tale = Tales.get({ taleId: $routeParams.taleId }, function(result) {
    $rootScope.loading = false;
  });
  $scope.newPhrase = {
  	isNewParagraph: false
  };

  $scope.add = function() {
  	$rootScope.loading = true;
    $scope.tale = Tales.update({ taleId: $scope.tale._id }, $scope.newPhrase, function(result) {
    	$rootScope.loading = false;
    });
  };
});
