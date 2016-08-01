angular.module('MainCtrl', []).controller('MainController',['$scope','$rootScope','Bloodgroup','$mdDialog', '$interval',
  '$timeout','deviceDetector','$filter',
    function($scope,$rootScope,Bloodgroup,$mdDialog,$interval,$timeout,deviceDetector,$filter) {
     $scope.isMobile=deviceDetector.isMobile();
     $scope.isTablet=deviceDetector.isTablet();
     $scope.isDesktop=deviceDetector.isDesktop();
     
	$scope.bloodgroups=['A+','A-','B+','B-','AB+','AB-','O+'];
    $scope.selectedItem;  
    $scope.showSearch=false;   
    $scope.getbloodsgroups= function(){
      $scope.showSearch=true;
      console.log($scope.selectedItem)
     	 Bloodgroup.getBloodgroups($scope.selectedItem).then(function (response) {     
        $scope.bloodlist=response.data  
        },
        function (err) {
             console.log(err)
        });
     }

    $scope.viewAdrs=function(item,ev){
      var address= item.originaladdress.split('::::');      
       $mdDialog.show({
     controller: viewAdrsController,
     template:'<md-dialog aria-label="Address"> <form> <md-toolbar> <div class="md-toolbar-tools"> <h2>'+item.name+'</h2> <span flex></span> <md-button class="md-icon-button" ng-click="cancel()"> <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon> </md-button> </div> </md-toolbar> <md-dialog-content style="max-width:800px;max-height:810px; "> <md-tabs md-dynamic-height md-border-bottom> <md-tab label="Address1"> <md-content class="md-padding"> <p>'+address[0]+'</p> </md-content> </md-tab> <md-tab label="Address2"> <md-content class="md-padding"> <p>'+address[1]+'</p> </md-content> </md-tab> </md-dialog-content> <md-dialog-actions layout="row"> <md-button ng-click="cancel()" style="margin-right:20px;" > OK </md-button> </md-dialog-actions> </form> </md-dialog>',
      targetEvent: ev,      
    })    
    }
     $scope.addDoner = function(ev) {
    $mdDialog.show({
      controller: addDonerController,
      templateUrl: 'views/templates/addDoner.html',
      targetEvent: ev,      
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };



  // $scope.glogin = function () {
  //       GooglePlus.login().then(function (authResult) {
  //           console.log(authResult);

  //           GooglePlus.getUser().then(function (user) {
  //               console.log(user);
  //           });
  //       }, function (err) {
  //           console.log(err);
  //       });
  //   };


  //   $scope.fblogin = function() {
  //   $facebook.login().then(function() {
  //     refresh();
  //   });
  // }
  // function refresh() {
  //   $facebook.api('/me?fields=id,name,email,picture,first_name,last_name').then( 
  //     function(response) {
  //       console.log(response);
  //       $scope.welcomeMsg = "Welcome " + response.name;
  //       $scope.isLoggedIn = true;
  //     },
  //     function(err) {
  //       $scope.welcomeMsg = "Please log in";
  //     });
  // }
  
  // refresh();





function viewAdrsController($scope, $mdDialog) { 
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
}

  function addDonerController($scope, $mdDialog,Bloodgroup,$filter,$mdToast) {  
  $scope.groups=['A+','A-','B+','B-','AB+','AB-','O+'];
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

    
  $scope.share=true;
  $scope.makesame = function(){    
    if($scope.same_as){
       $scope.currentaddress = angular.copy($scope.address) 
     }else{
      $scope.currentaddress=""; 
     }   
  }  
  $scope.addDoner = function() {

    var doner={
    'name':$scope.name,
    'bloodgroup':$scope.bloodgroup,
    'mobile':$scope.mobile,
    'email':$scope.email,
    'address':$filter('lowercase')($scope.address),
    'currentaddress':$filter('lowercase')($scope.currentaddress),
    'originaladdress':$scope.address+"::::"+$scope.currentaddress,
    'altermobile':$scope.altermobile,
    'share':$scope.share
  }
    console.log(doner);
  Bloodgroup.addDoner(doner).then(function(response){
        var result=response.data;
       if(result ==='Successfully Registered'){     
        $mdDialog.hide();   
        $mdToast.show(
        $mdToast.simple()
        .textContent('Successfully Registered')
        .position('top')
        .hideDelay(5000)
        .theme("success-toast")
    );
      

       }else if(result.mobile.message==="Mobile Number already used"){
        var err=result.mobile.message;
           $mdToast.show(
        $mdToast.simple()
        .textContent(err)
        .position('bottom left' )
        .parent(angular.element(document.querySelector('#errorspace')))
        .hideDelay(5000)
        .theme("error-toast")
    )
       }else{
        $mdToast.show(
        $mdToast.simple()
        .textContent('Internal Server Error')
        .position('top right')
        .hideDelay(5000)
        .theme("error-toast")
       );

       }
  });
    
  };
};
    
}]);



