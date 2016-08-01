angular.module('ToolbarCtrl', []).controller('ToolbarController',['$rootScope','$scope', '$location','$mdSidenav','$mdDialog',
 function($rootScope,$scope,$location,$mdSidenav,$mdDialog) {
    
     $scope.toggleSidenav = function(menuId) {
    $scope.sampleFunction( menuId) ;
  };

   $scope.OpenMenu = function(ev){   
   	console.log('menu')
   	originatorEv = ev;
      $mdOpenMenu(ev);
   }	

}]);