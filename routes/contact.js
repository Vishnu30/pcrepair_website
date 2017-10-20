var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');


router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req,res){
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your mail id',
    pass: 'your password'
  }
});

var mailOptions = {
  from: 'Your Name <your mail id>',
  to: 'another mail id whom do you want to send this mail',
  subject: 'Website submission',
  text: 'You have submission with following details..Name :'+ req.body.name + 'Email :'+req.body.email+ 'Message :'+ req.body.message,
  html:'<p>You have submission with following details..</p><ul><li>Name :'+ req.body.name + '</li><li>Email :'+req.body.email+ '</li><li>Message :'+ req.body.message + '</li></ul>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.redirect('/');
  } else {
    console.log('Email sent: ' + info.response);
    res.redirect('/');
  }
});

});

module.exports = router;