import nodemailer from "nodemailer";

export const sendEmail = async (message) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
    to: process.env.OWNER_EMAIL,
    bcc: process.env.ADMIN_EMAIL,
    subject: `New Enquiry - ${process.env.BUSINESS_NAME}`,
    text: message,
  });
};
