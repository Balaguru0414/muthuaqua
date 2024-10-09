const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "balatemp21@gmail.com",
    pass: "fyxoksauntwrcemt",
  },
});

const sendMail = (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `Message from ${name}`,
      html: `<table border="1" cellpadding="10" style="border-collapse: collapse;">
      <tr>
        <th>Name</th>
        <td>${name}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>${email}</td>
      </tr>
      <tr>
        <th>Phone no.</th>
        <td><a href="tel:${phone}">${phone} </a></td>
      </tr>
      <tr>
        <th>Message</th>
        <td><b>${message}</b></td>
      </tr>
    </table>`,
    });
    console.log("Email sent successfully");

    res.status(201).json({ msg: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Email not sent" });
  }
};

module.exports = sendMail;
