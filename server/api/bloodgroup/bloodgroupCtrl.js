  'use strict';
  
  var BloodGroup = require('./bloodgroup');

    exports.show = function(req, res) {
      console.log(req.params.bloodgroup);
        BloodGroup.find({bloodgroup:req.params.bloodgroup},{ v:0 , _id:0 },function(err, todos) {
            if (err)
                res.send(err)
           return  res.status(200).json(todos); 
        });
    };
	 exports.create = function(req, res) {  
   
        BloodGroup.create(req.body, function(err, todo) {
            if (err){
             return   res.send(err.errors);
			}	
            BloodGroup.find(function(err, todos) {
                if (err)					
                 return   res.send(err)
             return   res.json('Successfully Registered');
            });
        });

    };
	exports.update= function(req, res) {	
        // use mongoose to get all todos in the database
        BloodGroup.findById(req.params.id,function(err, todos) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err){
				 res.send(err)
			}
               
          if(!todos){
			  return res.json('Mobile is not available')
		  }
		  
		  todos.name=req.body.name;
		  todos.bloodgroup=req.body.bloodgroup;
		  todos.mobile=req.body.mobile;
		  todos.email=req.body.email;
		   todos.address=req.body.address;
		  todos.currentaddress=req.body.currentaddress;
		  todos.altermobile=req.body.altermobile;
         
			todos.save(function(err) {

				if (err) {					
					return handleError(res, err);
				}		
              return res.json('Updated Successfully')				
			});
        });
		
    };
	
	 exports.mobileshow = function(req, res) {
        BloodGroup.findOne({mobile:req.params.mobile},function(err, todos) {

            if (err){
			return	 res.send(err) 
			}
               if(!todos){
				 return  res.json('Mobile Number Not registered');
			   }
			  res.json(todos);
        });
    };
	
	exports.currentaddressshow = function(req, res) {
        BloodGroup.find({currentaddress:req.params.currentaddress},function(err, todos) {
            if (err)
              return  res.send(err)
          
            res.json(todos); 
        });
    };
	
 exports.locationshow = function(req, res) {  
        BloodGroup.find({$or:[{"currentaddress": {'$regex' : '.*' + req.params.location + '.*'}},{"address": {'$regex' : '.*' + req.params.location + '.*'}}]},{ v:0 , _id:0 },function(err, todos) {
            if (err)
               return res.send(err)            
            return res.json(todos); // return all todos in JSON format
        });
    };	
	