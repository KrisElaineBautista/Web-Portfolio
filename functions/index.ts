const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kris.elainebautista@gmail.com",
    pass: "your-app-password-here",
  },
});

exports.sendEmailOnContact = functions.database
  .ref("/contacts/{pushId}")
  .onCreate((snapshot, context) => {
    const data = snapshot.val();

    const mailOptions = {
      from: data.email,
      to: "kris.elainebautista@gmail.com",
      subject: `New Contact from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
    };

    return transporter.sendMail(mailOptions)
      .then(() => console.log("Email sent"))
      .catch(error => console.error("Error sending email:", error));
  });
