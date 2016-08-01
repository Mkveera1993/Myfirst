'use strict';
angular.module('BloodcampService', []).factory('Bloodcamp', ['$http', function($http){
	var dataFactory = {};
 	var baseUrl="/api/bloodcampdetails";
 	dataFactory.getBloodcamps = function (){		
 		 return $http.get(baseUrl); 
 			}
 	dataFactory.addCamp=function(data){
 				return $http.post(baseUrl, data)
 			}

 		return dataFactory;

}]);

