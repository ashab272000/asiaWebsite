const express = require('express');
const app = express();
const server = require('http').Server(app);
"use strict";
const nodemailer = require("nodemailer");


server.listen(process.env.PORT || 80);
// WARNING: app.listen(80) will NOT work here!


//Sends the 'dist' folder to server
app.use('/', express.static(__dirname + '/dist'));

app.get('/', (req, res)=>  {
    res.sendFile(__dirname + '/dist/index.html');
});

app.get('/contacts', (req, res)=>  {
    res.redirect('index.html#contactUs');
});

app.post('/send', async (req, res) => {
    console.log(req.body);
    //await sendEmail(req.body.email, req.body.message);
});



const sendEmail = async (email, message)=> {
 
    // Generate test SMTP service account from ethereal.email
 // Only needed if you don't have a real mail account for testing

 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
   host: "smtp.ethereal.email",
   port: 587,
   secure: false, // true for 465, false for other ports
   auth: {
     user: 'madison47@ethereal.email', // generated ethereal user
     pass: 'WafUS6FVPaJUUxW6cG', // generated ethereal password
   },
 });


// let transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "e9472f6e10ca47",
//       pass: "2cf9bac2e9e905"
//     }
//   });


 // send mail with defined transport object
 let info = await transporter.sendMail({
   from: `Nodemailer Contact <>`, // sender address list of receivers
   to:`${email}`,
   subject: "Hello ✔", // Subject line
   text: message, // plain text body
   //html: "<b>Hello world?</b>", // html body
 });

 console.log(`Info: ${info}`);
 console.log("Message sent: %s", info.messageId);
 // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

 // Preview only available when sending through an Ethereal account
 console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendEmail("muhammedashab@gmail.com", "Test Test Test, Wait ......... Mayday Mayday Mayday, this is not a test. This is real. Mayday Waaaah");

