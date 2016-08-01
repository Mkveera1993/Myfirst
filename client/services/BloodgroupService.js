'use strict';
angular.module('BloodgroupService', []).factory('Bloodgroup', ['$http', function($http){
	var dataFactory = {};
 	var baseUrl="/api/bloodgroup/";
 	dataFactory.getBloodgroups = function (bloodgroup){
 		
 		 return $http.get(baseUrl+bloodgroup); 
 			}


 	dataFactory.addDoner=function(doner){
       return $http.post(baseUrl, doner)
 	}		

 		return dataFactory;

}])