'use strict';

app.controller('TalesCtrl', function ($scope, ServerTime, Tales) {

  ServerTime.get().success(function(data) {
    $scope.currentTime = data.time;
  });
  $scope.tales = Tales.query();
});
