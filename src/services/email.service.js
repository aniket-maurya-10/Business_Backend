import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (message) => {
  try {
    const data = await resend.emails.send({
      from: "Website Enquiry <onboarding@resend.dev>",
      to: [process.env.OWNER_EMAIL],
      subject: "New Website Enquiry",
      text: message,
    });

    console.log("Email sent via Resend:", data.id);
  } catch (error) {
    console.error("Resend error:", error);
    throw error;
  }
};
