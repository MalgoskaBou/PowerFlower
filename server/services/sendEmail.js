const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (userEmail, link) => {
  const msg = {
    to: userEmail,
    from: "Power.Flower@example.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: `<strong>Klawiszuj w link ${link}</strong>`
  };
  await sgMail.send(msg);
};

module.exports = sendEmail;
