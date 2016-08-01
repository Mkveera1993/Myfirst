	var Bloodcamp = require('./bloodcampdetails');
	var Key=require('../gcm/gcmkeys');
	
	exports.show = function(req, res) {
        Bloodcamp.find(function(err, todos) {
            if (err){
			return	 res.send(err) 
			}
               if(!todos){
				 return  res.json('No Blood camps found');
			   }

			 return res.json(todos);
        });
    };
	
	
	exports.create = function(req, res) {
        Bloodcamp.create(req.body, function(err, todo) {
            if (err){
				
             return   res.send(err.errors);
			}				
				
            Bloodcamp.find(function(err, todos) {
                if (err){
					return   res.send(err)
				}					
                 sendpush();
				 
             return   res.json('Successfully Registered');
            });		

function sendpush(){
	var regTokens=[];
	if(req.body.mkey ){
	Key.find({"key":{ $ne: req.body.mkey }},function(err,keys){
		for(var i=0;i<keys.length;i++){
		
			regTokens.push(keys[i].key)
		}
			
			    var gcm = require('node-gcm');
				var message = new gcm.Message();
				message.addData( 'm','New BloodCamp Posted');
				var sender = new gcm.Sender('AIzaSyAHJt0weu1XrDQ81Ry2cD_wCF_M5-W1Ef0');
				sender.send(message, { registrationTokens: regTokens }, function (err, response) {
				if(err) console.error('Gcm Error: ' + err);
				else 	console.log(response);
				});
	});
	}else{
	Key.find(function(err,keys){		
		for(var i=0;i<keys.length;i++){		
			regTokens.push(keys[i].key)
		}
			
			    var gcm = require('node-gcm');
				var message = new gcm.Message();
				message.addData( 'm','New BloodCamp Posted');
				var sender = new gcm.Sender('AIzaSyAHJt0weu1XrDQ81Ry2cD_wCF_M5-W1Ef0');
				sender.send(message, { registrationTokens: regTokens }, function (err, response) {
				if(err) console.error('Gcm Error: ' + err);
				else 	console.log(response);
				});
	});
}

	}			
		
        });

    };
	
	