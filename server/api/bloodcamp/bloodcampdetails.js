var mongoose=require ('mongoose');
var Schema=mongoose.Schema;

var BloodcampDetailsSchema= new Schema({
event_Name:String,
event_Venue:String,
organizer_Name1:String,
organizer_Name2:String,
mobile:String,
altermobile:String,
email:String,
event_Date:String,
mkey:String
});

	module.exports = mongoose.model('Bloodcampdetails', BloodcampDetailsSchema);
