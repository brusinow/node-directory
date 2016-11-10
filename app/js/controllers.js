angular.module('DirectoryCtrls', ['DirectoryServices'])

.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
    console.log($location);

} 