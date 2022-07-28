var nodemailer = require("nodemailer");

/*
	Here we are configuring our SMTP Server details.
	STMP is mail server which is responsible for sending and recieving email.
*/

let smtpTransport = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: process.env.LIBROBIN_MAIL, 
        pass: process.env.LIBROBIN_HELP_MAIL_PASS
    } 
});

/*------------------SMTP Over-----------------------------*/

module.exports = smtpTransport;
