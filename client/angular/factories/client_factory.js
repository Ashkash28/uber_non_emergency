myApp.factory('mapFactory', function($http){
	var factory = {};

	factory.other = function(callback){
		$http.get('/call').success(function(data){
			// console.log('in factory', data);
			console.log("success");
		})
		// $cordovaOauth.uber("NvzG65eVVnZiVprITMGrUM8R3eqbqFky",["email"]).then(function(result){
		// 	console.log("Response Object -> " + JSON.stringify(result));
		// }, function(error) {
		// 	console.log("Error -> " + error);
		// });
	}
	return factory;
});