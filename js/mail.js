const dotnv = require('dotenv');
dotnv.config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  services: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

const mailOptions = {
  from: 'pubghello@gmail.com',
  to : 'takrishtak2002@gmail.com',
  subject: 'Mail sent through Website',
  text: 'Hello',
}

transporter.sendMail(mailOptions,function(error,data){
  if(error){
    console.log('Error occured !');
  }
  else {
    console.log('Mail sent !');
  }
})