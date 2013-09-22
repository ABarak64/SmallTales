'use strict';

app.directive('messageBanner', function ($rootScope, $timeout) {
  return {
    restrict: 'E',
    replace:true,
    templateUrl: 'views/partials/messageBanner.html',
    link: function ($rootScope, element, attr) {
      $rootScope.$watch('message', function (msg) {
        if (typeof msg !== 'undefined') {
          $(element).fadeIn(600);
          $timeout(function() {
            $(element).fadeOut(600);
          }, 1000 * 3);
        }
      });
    }
  }
});