var myApp = angular.module('myApp', 
  ['ngRoute', 'firebase', 'appControllers'])
.constant('FIREBASE_URL', 'https://attendableapp.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller:  'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller:  'RegistrationController'
    }).
    when('/events', {
      templateUrl: 'views/events.html',
      controller:  'EventsController'
    }).
    when('/checkins/:uId/:eId', {
      templateUrl: 'views/checkins.html',
      controller:  'CheckInsController'
    }).
    when('/checkins/:uId/:eId/checkinsList', {
      templateUrl: 'views/checkinslist.html',
      controller:  'CheckInsController'
    }).
    when('/welcome', {
      templateUrl: 'views/welcome.html',
      controller: 'WelcomeController'
    }).
    when('/event/:uId/:eId', {
      templateUrl: 'views/event-settings.html',
      controller: 'EventSettingsController'
    }).
    when('/bracket', {
      templateUrl: 'views/bracket.html',
      controller: 'BracketController'
  }).
    otherwise({
      redirectTo: '/welcome'
    });
}]);