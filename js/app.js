'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'gmail.com',
    port: 587,
    secure: false, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'sonalee44@gmail.com',
        pass: 'Aiden0108'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'sonalee44@gmail.com', // sender address
    to: 'pancha.ravi@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("test");
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
