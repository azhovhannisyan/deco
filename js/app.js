var decoApp = angular.module('decoApp', ["ngRoute"]);

// decoApp.controller(function($scope) {
//     $scope.storeIsOpen = false;
//     $scope.accountIsOpen = false;
//     $scope.cartIsOpen = false;
// });


decoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
		templateUrl: '/homepage.html',
        controller: ''
      }).
      when('/help', {
		templateUrl: '/help.html',
        controller: ''
	}).
    when('/articles', {
		templateUrl: '/articles.html',
        controller: ''
	}).
    when('/comfirmation', {
		templateUrl: '/comfirmation.html',
        controller: ''
	}).
    when('/comparison', {
		templateUrl: '/comparison.html',
        controller: ''
	}).
    when('/contact-us', {
		templateUrl: '/contact-us.html',
        controller: ''
	}).
    when('/help', {
		templateUrl: '/faq.html',
        controller: ''
	}).
      when('/careers', {
		templateUrl: '/faq.html',
        controller: ''
      }).
      otherwise({
		redirectTo: '/'
      });
}]);
