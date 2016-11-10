angular.module('DirectoryServices', ['ngResource'])


.factory('DirService', ["$http", "$q", function($http, $q){
  return function(path){
      var deferred = $q.defer();
      var req = {
        method: 'GET',
        url: '/directory',
        params: {
          path: path
        }
      }
      $http(req).success(function(data){
        // console.log("success!!!")
        deferred.resolve(data);
      })
      return deferred.promise;
    }
}])