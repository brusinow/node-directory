angular.module('DirectoryCtrls', ['DirectoryServices'])

.controller('MainCtrl', ['$scope', '$location','$stateParams','DirService', function($scope, $location, $stateParams, DirService) {
    console.log("location: ",$location);
    console.log("state params: ",$stateParams);
    var path = $location.$$path;
    $scope.pathDisplay = $location.$$path;
    if ($location.$$path === "/"){
        $scope.path = "";
    } else {
        $scope.path = $location.$$path;
    }
    

    $scope.$watch('path', function(newValue, oldValue) {
        if ($scope.path === "/"){
            $scope.path === "";
        }
    });
    // $scope.path = function(path){
    //     if (path === "/"){
    //         console.log("path is /");
    //         return "";
    //     } else {
    //         console.log("actual path");
    //         return $location.$$path;
    //     }
    // }
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