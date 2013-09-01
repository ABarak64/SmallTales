'use strict';

app.directive('loading', function ($rootScope) {
  return {
    restrict: 'E',
    replace:true,
    templateUrl: 'views/partials/loading.html',
    link: function ($rootScope, element, attr) {
      $rootScope.$watch('loading', function (val) {
        if (val)  $(element).show();
        else  $(element).hide();
      });
    }
  }
});