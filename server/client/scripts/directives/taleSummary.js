'use strict';

app.directive('taleSummary', function() {
  return {
    restrict: 'E',
    scope: {
      tale: '=',
      time: '='
    },
    templateUrl: 'views/partials/taleSummary.html'
  };
});