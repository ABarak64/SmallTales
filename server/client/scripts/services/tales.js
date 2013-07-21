'use strict';

app.factory('Tales', function($resource) {

  return $resource('tales/:taleId', {taleId:'@id'},
    { update: { method: 'PUT' }}
  );
});
