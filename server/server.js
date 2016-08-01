// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var morgan 		   = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path		   = require('path');

// configuration ===========================================
	
// config files
var db = require('./../config/db');

var port = process.env.PORT || 3000; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(path.join(__dirname, './../client')));

// routes ==================================================
require('./routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('server is running port on localhost:' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app