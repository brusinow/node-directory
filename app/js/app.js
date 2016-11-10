var app = angular.module('NodeDirectoryApp', ['DirectoryCtrls','ui.router']);


app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    cache: false,
    url: '/',
    templateUrl: 'views/template.html',
    controller: 'MainCtrl'
  })
  .state('files', {
    cache: false,
    url: '/{folderPath:.*}',
    templateUrl: 'views/template.html',
    controller: 'MainCtrl'
  })
  

    $locationProvider.html5Mode(true);

}]);

