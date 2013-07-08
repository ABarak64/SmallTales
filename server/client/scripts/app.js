'use strict';

angular.module('SmallTalesApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/intro', {
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl'
      })
      .when('/tales', {
        templateUrl: 'views/tales.html',
        controller: 'TalesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
