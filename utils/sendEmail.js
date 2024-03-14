const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;
