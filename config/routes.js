var controller = require('../server/controllers/server_controller');

module.exports = function(app){
	console.log('hi');
	app.get('/call', function(req, res){
		controller.get(req, res);
	});

	// app.get('/auth/uber/callback',
	// 	passport.authenticate('uber', { failureRedirect: '/login'}),
	// 	function(req, res){
	// 		res.redirect('http://localhost:8000/');
	// 	});
	
}