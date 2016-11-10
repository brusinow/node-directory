angular.module('DirectoryCtrls', ['DirectoryServices'])

.controller('MainCtrl', ['$scope', '$location','$stateParams','DirService', function($scope, $location, $stateParams, DirService) {
    var path = $location.$$path;
    $scope.pathDisplay = $location.$$path;
    if ($location.$$path === "/"){
        $scope.path = "";
    } else {
        $scope.path = $location.$$path;
    }
   var splitPath = $location.$$path.split("/");
   var openFolder = splitPath[splitPath.length - 1];



   splitPath.pop();
   var prevPath = splitPath.join("/");
   if (prevPath === ""){
       prevPath = "/";
   }
   
   $scope.prevPath = prevPath;
   $scope.prevPathDisplay = prevPath;
   if ($scope.prevPath = "/"){
       $scope.prevPath = "";
   }
    
    DirService(path, prevPath).then(function(data){
        console.log(data);
        $scope.currentFiles = data.current;
        $scope.prevFiles = data.prev;
    
    });

       $scope.isOpenFolder = function(file){
       if (openFolder === file){
           return true;
       } else {
           return false;
       }
   }


    $scope.notFile = function(file){
        if (file.length > 0){
            if (file.indexOf(".") > -1){
                return false;
            } else {
                return true;
            }
        }
    }
    

}]); 