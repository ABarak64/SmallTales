'use strict';

app.controller('UpdatedTalesCtrl', function ($scope, $rootScope, $timeout, ServerTime, Tales) {

  var update = function(callback) {
    ServerTime.get().then(function(promise) {
      $scope.currentTime = promise.data.time;
    }).then(function() {
      return Tales.getUpdated(5);
    }).then(function(promise) {
      $scope.tales = promise.data;
      if (typeof callback === 'function') {
        callback();
      }
    });
  };

  $rootScope.loading = true;
  update(function() {
    $rootScope.loading = false;
  });

  $scope.onTimeout = function(){
    update();
    mytimeout = $timeout($scope.onTimeout,1000 * 60 * 1);
  };
  var mytimeout = $timeout($scope.onTimeout,1000 * 60 * 1);

});