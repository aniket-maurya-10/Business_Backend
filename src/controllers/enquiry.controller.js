import { sendEmail } from "../services/email.service.js";
import { generateWhatsAppLink } from "../services/whatsapp.service.js";
import { formatMessage } from "../utils/messageformatter.js";

export const sendEnquiry = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const formattedMessage = formatMessage(name, phone, message);

    await sendEmail(formattedMessage);

    const whatsappLink = generateWhatsAppLink(formattedMessage);

    res.status(200).json({
      success: true,
      whatsappLink
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
