export const generateWhatsAppLink = (message) => {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${process.env.OWNER_WHATSAPP}?text=${encodedMsg}`;
};
