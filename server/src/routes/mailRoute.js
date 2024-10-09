const express = require("express");
const {
  checkRequest,
  checkReqFields,
  validateReqBody,
  validateEmail,
} = require("../middlewares/mailMiddleware");
const sendMail = require("../controllers/mailController");
const router = express.Router();

router.post(
  "/send",
  checkRequest,
  checkReqFields,
  validateReqBody,
  validateEmail,
  sendMail
);

module.exports = router;
