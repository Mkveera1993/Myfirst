
	var Feedback = require('./feedback');
	
	exports.create = function(req, res) {      
        Feedback.create(req.body, function(err, feeds) {
            if (err){
				
             return   res.send(err.errors);
			}		
            Feedback.find(function(err, feeds) {
                if (err)					
                 return   res.send(err)
             return   res.json('Thank you for sending successfully Posted Your Feedback');
            });
        });

    };