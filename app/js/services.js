angular.module('DirectoryServices', ['ngResource'])

.factory('DirectoryService', function(){
    return function(path){
      // console.log("what's id? ",productId);
      var req = {
        method: 'GET',
        url: '/directory',
        params: {
          path: path
        }
      }
      $http(req).success(function(data){
        // console.log("success!!!")
        return(data);
      })
    }
})