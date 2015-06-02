var controller = require('../server/controllers/server_controller');

module.exports = function(app, passport){
	console.log('hi');
	app.get('/call', passport.authenticate('uber'), function(req, res){
		console.log('routes authenticated');
	});

	// app.get('/auth/uber/callback',
	// 	passport.authenticate('uber', { failureRedirect: '/login'}),
	// 	function(req, res){
	// 		res.redirect('http://localhost:8000/');
	// 	});
	
}