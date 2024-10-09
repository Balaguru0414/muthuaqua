// server.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "balatemp21@gmail.com",
    pass: "kjhkihjxsabqqcyk",
  },
});

const sendEmail = (to, subject, text) => {
  transporter.sendMail({
    to,
    subject,
    text,
  });
  console.log("Email sent successfully");
};

sendEmail("balag0414@gmail.com", "test subject 1", "test message 1");

// Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
