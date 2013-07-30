'use strict';

app.controller('UpdatedTalesCtrl', function ($scope, $timeout, ServerTime, Tales) {

  var update = function() {
    ServerTime.get().then(function(promise) {
      $scope.currentTime = promise.data.time;
    }).then(function() {
      return Tales.getUpdated(5);
    }).then(function(promise) {
      $scope.tales = promise.data;
    });
  };

  update();

  $scope.onTimeout = function(){
    update();
    mytimeout = $timeout($scope.onTimeout,1000 * 60 * 1);
  };
  var mytimeout = $timeout($scope.onTimeout,1000 * 60 * 1);

});