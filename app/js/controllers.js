angular.module('DirectoryCtrls', ['DirectoryServices'])

.controller('MainCtrl', ['$scope', '$location','DirService', function($scope, $location, DirService) {
    console.log($location);
    var path = $location.$$path;
    $scope.pathDisplay = $location.$$path;
    $scope.path = function(path){
        if (path === "/"){
            console.log("path is /");
            return "";
        } else {
            console.log("actual path");
            return $location.$$path;
        }
    }
    DirService(path).then(function(data){
        $scope.files = data;
    });

    $scope.notFile = function(file){
        if (file.indexOf(".") > -1){
            return false;
        } else {
            return true;
        }
    }
    

}]); 