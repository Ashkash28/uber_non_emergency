var passport = require('passport-uber');

module.exports = function(app){
	app.get('/auth/uber', passport.authenticate('uber'));

	app.get('/auth/uber/callback',
		passport.authenticate('uber', { failureRedirect: '/login'}),
		function(req, res){
			res.redirect('/');
		});
}