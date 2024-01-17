const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.listen(3001, (req, res) => {
  console.log("running on 3000");
  console.log(process.env.test);
});
