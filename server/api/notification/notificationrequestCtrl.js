	var Notify=require('./notificationrequest');
	var Key=require('../gcm/gcmkeys');
	var nodemailer = require('nodemailer');
    var smtpTransport = require('nodemailer-smtp-transport');
	
	exports.create = function(req,res){
	Notify.create(req.body,function(err,notification){
		if(err){
			return err;
		}	
		sendpush();
		sendMaildata();
		return res.json('success posted you request');	
	});
	function sendpush(){
	var regTokens=[];
	Key.find({"key":{ $ne: req.body.mkey }},{key:1,_id:0},function(err,keys){
		for(var i=0;i<keys.length;i++){
		
			regTokens.push(keys[i].key)
		}
			
			    var gcm = require('node-gcm');
				var message = new gcm.Message();
				message.addData( 'm',req.body);
				var sender = new gcm.Sender('AIzaSyAHJt0weu1XrDQ81Ry2cD_wCF_M5-W1Ef0');
				sender.send(message, { registrationTokens: regTokens }, function (err, response) {
				if(err) console.error('Gcm Error: ' + err);
				else 	console.log(response);
				});
	});
	}
	
	function sendMaildata(data){
		
			/*  var transporter = nodemailer.createTransport(smtpTransport({
				 service:'Gmail',
				 auth:{
					 user:'aravinthvijay3@gmail.com',
					 pass:'vivek.vijay'
				 }
			 }));
			 
			 sendnewEmail = function(req,res){
				
				 var mailOptions = {
					 from : 'aravinthvijay3@gmail.com',
					 to:'aravinthvijay3@gmail.com',
					 subject :'Blood camp details',
					 text : data
				 }
				  transporter.sendMail(mailOptions,function(error,response){
				 if(err)console.log(error);
				 console.log(response);
			 }); 
			 }
			  */
			 var nodemailer = require("nodemailer");

            var smtpTransport = nodemailer.createTransport("SMTP",{
            service: "Gmail",
                auth: {
				user: "aravinthvijay3@gmail.com",
				pass: "vivek.vijay"
				}
				});

					smtpTransport.sendMail({
							from: "S Shivasurya <s.shivasurya@gmail.com>", // sender address
							to: "veeram28@gmail.com", // comma separated list of receivers
							subject: "Mail from Nodemailer", // Subject line
							text: "Hello world  - this mail is sent from nodemailer library" // plaintext body
							}, function(error, response){
							if(error){
									console.log(error);
									}else{
												console.log("Mail sent: " + response.message);
										 }
									});

								
			 
			
	};
		
	};
	
	//get all the setails from notification table
	exports.show = function(req,res){
	Notify.find(function(err,notification){
		if(err){
			return err;
		}	
	
		return res.json(notification);	
	});
	}