myApp.controller('mapsController', function($scope, $location, mapFactory, $routeParams, localStorageService){
	
	$scope.something = function(){
		mapFactory.other(function(data){

		})
	}
});