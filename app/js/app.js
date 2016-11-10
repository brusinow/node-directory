var app = angular.module('NodeDirectoryApp', ['DirectoryCtrls']);


app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('first', {
    url: '/',
    templateUrl: 'views/template.html',
    controller: 'MainCtrl'
  })
  .state('second', {
    url: '/:firstLevel',
    templateUrl: 'views/template.html',
    controller: 'MainCtrl'
  })
  .state('third', {
  url: '/:firstLevel/:secondLevel',
  templateUrl: 'views/template.html',
  controller: 'MainCtrl'
  });

