'use strict';

app.controller('TalesCtrl', function ($scope, $rootScope, ServerTime, Tales) {

  $rootScope.loading = true;
  ServerTime.get().success(function(data) {
    $scope.currentTime = data.time;
  });

  $scope.tales = Tales.query({}, function(result) {
    $rootScope.loading = false;
  });
});
