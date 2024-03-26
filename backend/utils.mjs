import { createTransport } from "nodemailer";

const sendEmail = async function (email, subject, text) {
  return new Promise((resolve, reject) => {
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure:
        process.env.EMAIL_SECURE === "true" || process.env.EMAIL_SECURE == "1",
      auth: {
        user: process.env.EMAIL_USER || "",
        pass: process.env.EMAIL_PASS || "",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || "test@test.com",
      to: email,
      subject: subject,
      text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
        return false;
      }

      resolve(true);
    });
  });
};

export { sendEmail };
