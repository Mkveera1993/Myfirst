module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	var path		   = require('path');



	/* API */
	
	
	
	app.use('/api/bloodgroup',require('./api/bloodgroup'));
	app.use('/api/bloodcampdetails',require('./api/bloodcamp'));
	app.use('/api/feedback',require('./api/feedback'));
	app.use('/api/registerkey',require('./api/gcm')); 
	app.use('/api/sendnotification',require('./api/notification'));



	
	app.get('/*', function(req, res) {
		res.sendfile('client/index.html');
	});

};
