var app = angular.module('NodeDirectoryApp', ['DirectoryCtrls','ui.router']);


app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('first', {
    cache: false,
    url: '/',
    templateUrl: 'views/template.html',
    controller: 'MainCtrl'
  })
  .state('second', {
    cache: false,
    url: '/:firstLevel',
    templateUrl: 'views/template.html',
    controller: 'MainCtrl'
  })
  .state('third', {
  cache: false,
  url: '/:firstLevel/:secondLevel',
  templateUrl: 'views/template.html',
  controller: 'MainCtrl'
  })

    $locationProvider.html5Mode(true);

}]);

