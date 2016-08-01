angular.module('BloodRoute',[])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainController'
		})
		.when('/bloodcamps',{
			templateUrl: 'views/bloodcamp.html',
			controller: 'BloodcampController'
		})
		

	$locationProvider.html5Mode(true);

}])
