'use strict';

app.controller('UpdatedTalesCtrl', function ($scope, $timeout, ServerTime, Tales) {

  ServerTime.get().success(function(data) {
    $scope.currentTime = data.time;
  });

  var update = function() {
    Tales.getUpdated(5).success(function(data) {
      $scope.tales = data;
    });
  };

  update();

  $scope.onTimeout = function(){
    update();
    mytimeout = $timeout($scope.onTimeout,1000 * 60 * 5);
  };
  var mytimeout = $timeout($scope.onTimeout,1000 * 60 * 5);

});