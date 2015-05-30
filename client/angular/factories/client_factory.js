myApp.factory('mapFactory', function($http){
	var factory = {};

	factory.other = function(callback){
		$http.get('/auth/uber/').success(function(data){
			// console.log('in factory', data);
		})
	}
	return factory;
});