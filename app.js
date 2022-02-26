require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./utils/errorHandler");
const hotelsRouter = require("./routers/hotelsRouter");
const connectDB = require("./utils/connectDb");
const app = express();
require("colors");
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());

app.use("/hotels", hotelsRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`SERVER STARTED SUCCESSFULLY IN PORT ${PORT}`.yellow.inverse);
});
