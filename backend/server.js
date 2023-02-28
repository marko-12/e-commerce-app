const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
