
'use strict';
angular.module('toolbarDirective', [])
.directive('toolbar', function () {
   return {
     restrict: 'E',
     templateUrl: 'directives/toolbar/toolbar.html',
    controller: 'ToolbarController',
   };
});