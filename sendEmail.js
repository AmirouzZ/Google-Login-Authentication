const nodemailer = require("nodemailer");

module.exports = async (emails, subject, htmlTemplate, attachments) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.APP_EMAIL_ADDRESS,
        pass: process.env.APP_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: emails,
      subject: subject,
      html: htmlTemplate,
      attachments: attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("E-Mail: " + info.response);
    console.log("accepted: " + info.accepted);
    console.log("rejected: " + info.rejected);
  } catch (error) {
    console.log(error);
  }
};
