angular.module('SidenavCtrl', []).controller('SidenavController',['$rootScope','$scope', '$location','$mdSidenav','$mdBottomSheet',
 function($rootScope,$scope,$location,$mdSidenav,$mdBottomSheet) {
     $rootScope.sampleFunction = function( menuId ){
      $mdSidenav(menuId ).toggle();
     }

  	$scope.menu = [
    {
      link : '/',
      title: 'Bloodgroup',
      icon: 'opacity'
    },
    {
      link : '/bloodcamps',
      title: 'Bloodcamps',
      icon: 'event'
    }
  ];
  $scope.admin = [
    {
      link : '/about',
      title: 'About',
      icon: 'error',
      click:''
    },
    {
      link : '/feedback',
      title: 'Feedback',
      icon: 'feedback',
      click:''
    },
    {
      link:'',
      title:'Share',
      icon:'share',
      click:'showGridBottomSheet($event)'
    },
    {
      link:'',
      title:'Get App',
      icon:'android',
      click:''
    }
    
  ];

  $scope.showGridBottomSheet = function() {

    console.log('Bootom shareBottom');
    $mdBottomSheet.show({
      templateUrl: 'views/templates/shareBottom.html',     
      clickOutsideToClose: true
    })
  }

   $scope.close=function(ev){
 $mdSidenav('left').close()
   }
	

}]);