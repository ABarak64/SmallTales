'use strict';

app.factory('Tales', function($resource, $http) {

  var service = $resource('tales/:taleId', {taleId:'@id'},
    { update: { method: 'PUT' }}
  );
  service.getUpdated = function(count) {
    return $http.get('tales/updated/' + count);
  };
  return service;
});
