  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

   var BloodgroupSchema = new Schema({
        name:String,
        bloodgroup:String,
        mobile:String,		
        email:String,
        address:String,
        currentaddress:String,
        altermobile:String,
		originaladdress:String,
		mkey:String,
		share:String,
    device:String

    });
	BloodgroupSchema
  .path('mobile')
  .validate(function (value, respond) {
    var self = this;
    this.constructor.findOne({ mobile: value }, function (err, user) {
      if (err) { throw err; }
      if (user) {
        if (self.id === user.id) { return respond(true); }
        return respond(false);
      }
     return respond(true);
    });
  }, 'Mobile Number already used');

	module.exports = mongoose.model('Bloodgroup', BloodgroupSchema);

 