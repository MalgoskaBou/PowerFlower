const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailWithSendgrid = async (userEmail, content) => {
  const msg = {
    to: userEmail,
    from: "Power.Flower@example.com",
    subject: "Confirm email",
    html: content
  };
  await sgMail.send(msg);
};

module.exports = sendEmailWithSendgrid;
