import { createTransport } from "nodemailer";

export function sendEmail(email, subject, text) {
  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure:
      process.env.EMAIL_SECURE === "true" || process.env.EMAIL_SECURE == "1",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return false;
    }

    console.log("Email sent: " + info.response);
    return true;
  });
}
