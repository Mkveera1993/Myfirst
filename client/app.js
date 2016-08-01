angular.module('Bloodapp', [
	// DEPENDENCIES
	'ngMaterial',
	'ngAnimate',
	'ngRoute',
	'ngMdIcons',	
	'mdPickers',	
	'BloodRoute',
	'toolbarDirective',
	'treasure-overlay-spinner',
	'sidenavDirective',
	'mobileDirective',
	'capitalizeFilter',
	'ng.deviceDetector',
	'material.svgAssetsCache',
	
	// CONTROLLERS
	
	'MainCtrl',
	'BloodcampCtrl',
	'ToolbarCtrl',
	'SidenavCtrl',

	// SERVICES
	'BloodgroupService',
	'BloodcampService'
	
	 ])
	 // .run(['$rootScope', '$window', function($rootScope, $window) {
	 // 	(function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "//connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk')
  //  )
	 // }])


.config(function ($mdThemingProvider) {  
   $mdThemingProvider.theme('default')
       .primaryPalette('red')
       .accentPalette('cyan')
       .warnPalette('orange')
       .backgroundPalette('grey')
})
// .config(['GooglePlusProvider', function(GooglePlusProvider) {
//      GooglePlusProvider.init({
//         clientId: '860002504025-v41ltru5l1f0112d6u19sj1lm77avtip.apps.googleusercontent.com',
//         apiKey: 'AIzaSyCQKZYdmjc4PwpVqX2IuzQLuJ00iQzBJfY'
//      });
// }])
// .config( function( $facebookProvider ) {
//   $facebookProvider.setAppId('1736041916667849').setPermissions(['public_profile,email']);
// })
    
   






