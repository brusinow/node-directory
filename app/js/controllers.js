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
   var splitPath = $location.$$path.split("/");

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