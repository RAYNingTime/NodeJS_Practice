const nodemailer = require('nodemailer');

const SendEmail = async (options) => {
  // 1) Create a transporter

  /* GMAIL 
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
	 //Activate in gmail "less secure app" option
  });
  */

  /* mailtrap.io */

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    //Activate in gmail "less secure app" option
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Ivan Kosiakov <ivan0kosyakov@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = SendEmail;
