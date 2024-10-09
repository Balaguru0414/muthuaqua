const express = require("express");
const cors = require("cors");
const mailRoute = require("./src/routes/mailRoute");

const app = express();

require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/mail", mailRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
