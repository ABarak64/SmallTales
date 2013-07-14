'use strict';

angular.module('SmallTalesApp', ['smallTalesServices'])
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
      .when('/newtale', {
        templateUrl: 'views/newtale.html',
        controller: 'NewTaleCtrl'
      })
      .when('/tale/:taleId', {
        templateUrl: 'views/tale.html',
        controller: 'TaleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
