  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

   var FeedbackSchema = new Schema({
        name:String,
        message:String,
		date:String
    });
	
	

	module.exports = mongoose.model('Feedback', FeedbackSchema);