'use strict';

angular.module('smallTalesServices', ['ngResource']).
  factory('Tales', function($resource) {

    return $resource('tales/:taleId', {taleId:'@id'},
      { update: { method: 'PUT' }}
	);
  });