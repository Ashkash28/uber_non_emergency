var myApp = angular.module('myApp', ['ngRoute', 'LocalStorageModule', 'ngCordovaOauth']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/map.html' //Add partials
	})
})