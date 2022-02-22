require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("colors");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED SUCCESSFULLY IN PORT ${PORT}`);
});
