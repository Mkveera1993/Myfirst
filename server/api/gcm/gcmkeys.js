  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

   var GcmSchema = new Schema({
        key:{type:String,
			unique:true}      
    });
	module.exports = mongoose.model('Gcmkeys', GcmSchema);