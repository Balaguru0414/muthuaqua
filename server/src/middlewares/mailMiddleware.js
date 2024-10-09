const checkRequest = (req, res, next) => {
  const body = req.body;
  if (!body || !Object.keys(body).length) {
    return res.status(400).json({ msg: "request body is empty" });
  }
  next();
};

const checkReqFields = (req, res, next) => {
  const reqFields = ["name", "email", "phone", "message"];
  const keys = Object.keys(req.body);
  const exsits = reqFields.every((reqK) => keys.includes(reqK));
  if (!exsits) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  next();
};

const validateReqBody = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  if (!name) {
    return res.status(400).json({ msg: "Name is required" });
  }
  if (!email) {
    return res.status(400).json({ msg: "Email is required" });
  }
  if (!phone) {
    return res.status(400).json({ msg: "Phone no. is required" });
  }
  if (!message) {
    return res.status(400).json({ msg: "Message is required" });
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email, phone } = req.body;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ msg: "Invalid email address" });
  }
  const phonePattern = /^(?:\+1)?\s*\(?(\d{3})\)?[-.\s]*(\d{3})[-.\s]*(\d{4})$/;
  if (!phonePattern.test(phone)) {
    return res.status(400).json({ msg: "Invalid phone number" });
  }
  next();
};

module.exports = {
  checkRequest,
  checkReqFields,
  validateReqBody,
  validateEmail,
};
