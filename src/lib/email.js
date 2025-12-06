// Placeholder for server-side email utility (e.g., Nodemailer or Resend)
export const sendContactEmail = async ({ name, email, message }) => {
  console.log(`Sending email to admin: New message from ${name} (${email}): ${message}`);
  // Add email sending logic here
  return Promise.resolve();
};
