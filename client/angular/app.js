var myApp = angular.module('myApp', ['ngRoute', 'LocalStorageModule']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/map.html' //Add partials
	})
})