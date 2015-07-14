'use strict';

/**
 * @ngdoc overview
 * @name firebaseApp
 * @description
 * # firebaseApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  // fbURL referencia link db de firebase
  .value('fbURL', 'http://domisil1.firebaseio.com/')
  // factory Person devuelve los datos en db como lista un array del db de firebase
  .factory('Person', function($firebaseArray){
    var ref = new Firebase('http://domisil1.firebaseio.com/users');
    return $firebaseArray(ref);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      // ruta para editar
      .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });
  });
