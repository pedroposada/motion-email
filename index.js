'use strict'

var fs = require('fs');
var nodemailer = require('nodemailer');
var config = require('config');
var filepath = config.filepath;

var smtpConfig = {
    host: config.emailHost,
    secure: config.emailSecure, 					                // use SSL
    auth: {
        user: config.emailUser,
        pass: config.emailPass
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data
var mailOptions = {
    from: config.emailFrom,   // sender address
    to: config.emailTo, 				                    // list of receivers
    subject: config.emailSubject, 			                  // Subject line
    text: config.emailText, 				                      // plaintext body
    attachments: [
	{
	  path: filepath	
	}
    ]
};

fs.watchFile(filepath, { persistent: true, interval: 10000 }, function(curr, prev) {
  console.log('image was modified');
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });	
});

