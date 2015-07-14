'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseApp
 */
angular.module('firebaseApp')
  .controller('MainCtrl', function ($scope, Person, $location) {

  	// para agregar un usuario (sin validacion)
  	$scope.add = function(){
  		var save = Person.$add({
  			nombre: $scope.nombre,
  			apellido: $scope.apellido
  		});

  		$scope.nombre = '';
  		$scope.apellido = '';

  		if(save){
  			alert('guardado exitosamente');
  		} else {
  			alert('algo paso error');
  		}
  	}

  	// para mostrar todos los usuarios 
  	$scope.person = Person;

  	// borrar un usuario
  	$scope.remove = function(id){
  		Person.$remove(id);
  		$location.path('/');
  	}

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('EditCtrl', function ($scope, $location, $routeParams, $firebaseObject, fbURL){
  	var personURL = new Firebase(fbURL+'/users/'+ $routeParams.id);
  	// asigno objeto que viene con el id al scope.person para editarlo
  	$scope.person = $firebaseObject(personURL);

  	$scope.edit = function(){
  		//guardo a firebase
  		$scope.person.$save();
  		$location.path('/');
  	}
  });
