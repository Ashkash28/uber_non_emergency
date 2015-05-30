myApp.controller('mapsController', function($scope, $location, mapFactory, $routeParams, localStorageService){

	$scope.something = function(){
		console.log('about to invoke factory function');
		mapFactory.other(function(data){

		})
	}
});