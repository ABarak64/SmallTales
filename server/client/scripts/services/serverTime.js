'use strict';

app.factory('ServerTime', function($http) {
  return {
    get: function() {
      return $http.get('time/');
    }
  };
});