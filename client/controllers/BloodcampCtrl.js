angular.module('BloodcampCtrl', []).controller('BloodcampController',['$scope','Bloodcamp','$mdDialog','$mdpDatePicker', '$mdpTimePicker','$filter','$mdToast',
  function($scope,Bloodcamp,$mdDialog,$mdpDatePicker,$mdpTimePicker,$filter,$mdToast) {


    Bloodcamp.getBloodcamps().then(function (response) { 
      $scope.bloodcamps=response.data  
    },
    function (err) {
      console.log(err)
    });

    $scope.addCamp = function(ev){
      $mdDialog.show({
        controller: addCampController,
        templateUrl: 'views/templates/addCamp.html',
        targetEvent: ev        
      });
    }

    $scope.showDetails=function(ev,items,id){
    $mdDialog.show({
       controller: showDetailsController,
      templateUrl:'views/templates/showcampDetails.html',
      locals:{
        details:items,
        id:id
      },
      targetEvent:ev
      
    })
    }

function  showDetailsController($scope,$mdDialog,details){
          $scope.item =details;
   $scope.cancel = function() {
        $mdDialog.cancel();
      };

}






    function addCampController($scope, $mdDialog,Bloodcamp,$mdpDatePicker, $mdpTimePicker,$filter,$mdToast) {
    
        $scope.currentDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.showDatePicker = function(ev) {
      $mdpDatePicker($scope.currentDate, {
        targetEvent: ev
      }).then(function(selectedDate) {
        $scope.currentDate = $filter('date')(selectedDate, 'dd/MM/yyyy');
      });
    };
    $scope.currentTime = $filter('date')(new Date(), 'hh:mm:ss a');
    $scope.showTimePicker = function(ev) {
      $mdpTimePicker($scope.currentTime, {
        targetEvent: ev
      }).then(function(selectedDate) {
        $scope.currentTime =  $filter('date')(selectedDate, 'hh:mm:ss a');
      });
    }
      
      $scope.submitCamp = function() {
        var camp={
          'event_Name':$scope.event_Name,
          'event_Date':$scope.currentDate +" " +$scope.currentTime,
          'event_Venue':$scope.event_Venue,
          'organizer_Name1':$scope.organizer_Name1,
          'organizer_Name2':$scope.organizer_Name2,
          'mobile':$scope.mobile,
          'altermobile':$scope.altermobile,
          'email':$scope.email 
        }
        console.log(camp);

       Bloodcamp.addCamp(camp).then(function(response){
        var successdata=response.data;
         if(successdata ==='Successfully Registered'){
           $mdDialog.hide();   
        $mdToast.show(
        $mdToast.simple()
        .textContent('Successfully Registered')
        .position('top')
        .hideDelay(5000)
        .theme("success-toast")
    )
      }else{
         $mdToast.show(
        $mdToast.simple()
        .textContent('Unknown Error Please try again')
         .position('bottom left' )
        .parent(angular.element(document.querySelector('#errorspace')))
        .hideDelay(5000)
        .theme("error-toast")
    )
      }



       })
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };


    };

  }]);


