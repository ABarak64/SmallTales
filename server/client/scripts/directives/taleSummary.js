'use strict';

app.directive('taleSummary', function() {
  return {
    restrict: 'E',
    scope: {
      tale: '=',
      time: '='
    },
    templateUrl: 'views/partials/taleSummary.html',
    controller: function($scope, $location) {

      $scope.click = function() {
        $location.path('/tale/' + $scope.tale._id);
      };
    }
  };
});