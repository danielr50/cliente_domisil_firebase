
var app = angular.module('domisilapp', ['domisilapp.controllers', 'domisilapp.services']);

//Configuración de rutas de la aplicacion web
app.config(function($stateProvider, $authProvider, $urlRouterProvider){

	// parametros de configuracion
	$authProvider.loginUrl = "http://localhost:5000/auth/login";
	$authProvider.signupUrl = "http://localhost:5000/auth/signup";

	// $authProvider.tokenName = "token";
	$authProvider.tokenPrefix = "Domisil_App";
	$authProvider.withCredentials = false;
	// $authProvider.tokenName = 'access_token';
	// $authProvider.tokenName = 'code';
	$authProvider.authHeader = 'Authorization';

	$urlRouterProvider.otherwise('/');

	$authProvider.facebook({
      clientId: '1080671775296171', // TEST FACE 
      url: 'http://localhost:5000/auth/facebook'
    });



	// OAuth 2.0
	$authProvider.oauth2({
	  url: null,
	  name: null,
	  scope: null,
	  scopeDelimiter: null,
	  clientId: null,
	  redirectUri: null,
	  popupOptions: null,
	  authorizationEndpoint: null,
	  responseParams: null,
	  requiredUrlParams: null,
	  optionalUrlParams: null,
	  defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
	  responseType: 'code'
	});




    // Facebook
	// $authProvider.facebook({
	//   clientId: '1080671775296171',
	//   url: 'http://localhost:5000/auth/facebook',
	//   authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
	//   redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host + '/',
	//   scope: 'email',
	//   scopeDelimiter: ',',
	//   requiredUrlParams: ['display', 'scope'],
	//   display: 'popup',
	//   type: '2.0',
	//   popupOptions: { width: 481, height: 269 }
	// });


    $authProvider.twitter({
      url: '/auth/twitter'
    });

	// defino rutas 
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		})

		.state('registro',{
			url: '/registro',
			templateUrl: 'partials/registro.html',
			controller: 'RegistroCtrl'

		})

		.state('service',{
			url: '/service',
			templateUrl: 'partials/service.html',
			controller: 'ServiceCrtl',
			controllerAs: 'login',

		})

		.state('resumen',{
			url:'/resumen',
			templateUrl: 'partials/resumen.html',
			controller: 'ResumenCrtl'
		})
		.state('login', {
			url:'/login',
			templateUrl: 'partials/login.html',
			controller: 'LoginController',
			controllerAs: 'login'
		})

		.state('signup', {
			url: '/signup',
			templateUrl: 'partials/signup.html',
			controller: 'SignUpController',
			controllerAs: 'signup'
		})
		.state('logout', {
			url: '/logout',
			templateUrl: null,
			controller: 'LogoutController'
		})
		.state('private', {
			url: '/private',
			templateUrl: 'partials/private.html',
			controller: 'PrivateController',
			controllerAs: 'private'
		})
		// prueba facebook login
		.state('face', {
			url: '/auth/facebook',
			templateUrl: 'partials/private.html',
			controller: 'LoginCtrl'
		});
});



















