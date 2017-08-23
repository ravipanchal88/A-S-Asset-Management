'use strict';


var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'pancha.ravi@gmail.com',
        clientId: '01362102202-rvejr08bts5ah6pll5mi5ducmc0snnfn.apps.googleusercontent.com',
        clientSecret: 'EJADmPB7xkINj9xGf5lGewQ8',
        refreshToken: 'https://mail.google.com//TKjRf2MC2IlTmFj2NnI9R99HTTS4aoT-VYQFnJpS5lQ',
        accessToken: 'ya29.GluvBBQ1bbb9lSHHVG4VLx3zZh8xPhlcTr5aWdrVDXTEnP0rHnPduQxM4NR7iRpw9Oucvvcp04l1atUrHByXp3Pv3jZstB1whs0YnX30IvqkZPq5MamFNsHOJ5P-'
    }
});

var mailOptions = {
  from: "pancha.ravi@gmail.com",
  to: "sonalee44@gmail.com",
  subject: "Client Inquiry",
  generateTextFromHTML: true,
  html: "<b>Hi</b>"
};

smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
  smtpTransport.close();
});
