var path = require('path');

var express = require('express');
var app = express();

var http = require('http');

var passport = require('passport');

var uberStrategy = require('passport-uber');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));
// app.use(passport.initialize());
// app.use(passport.session());
passport.use(new uberStrategy({
    clientID: 'NvzG65eVVnZiVprITMGrUM8R3eqbqFky',
    clientSecret: 'dWZGdg9kdY1aYNH0dMlKA4Q8QiEA0cqC4Tvgwt25',
    callbackURL: "http://127.0.0.1:3000/auth/uber/callback"
  },
  function(accessToken, refreshToken, profile, done) {
  	console.log("hi");
    // User.find({ uberid: profile.id }, function (err, user) {
    // 	console.log("profile id //////", profile.id);
    //   return done(err, user);
    // });
  }
));

// require('./config/mongoose');
// require('./config/routes')(app);

app.listen(8000, function()
{
	console.log('listening on port 8000');
});