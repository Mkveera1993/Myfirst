
var Keys=require('./gcmkeys');
exports.create = function(req,res){
		console.log(req.body.key);
		if(req.body.key){
		Keys.create(req.body,function(err,result){
			if(err)console.log(err);
			return res.json('success');
		});
	}else{
		return res.json('null key');
	}
	
		
	};