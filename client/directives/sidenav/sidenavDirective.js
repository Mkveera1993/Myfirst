
'use strict';
angular.module('sidenavDirective', [])
.directive('sidenav', function () {
   return {
     restrict: 'E',
     templateUrl: 'directives/sidenav/sidenav.html',
    controller: 'SidenavController',
   };
});