  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

   var NotificationrequestSchema = new Schema({
       name:String,
		bloodgroup:String,
		gender:String,
		mobile:String,
		altermobile:String,
		address:String,
		date:String
    });
	module.exports = mongoose.model('Notificationrequest', NotificationrequestSchema);