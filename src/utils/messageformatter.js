export const formatMessage = (name, phone, message) => {
  return `
New Enquiry Received 📩

Name: ${name}
Phone: ${phone}

Message:
${message}
  `;
};
