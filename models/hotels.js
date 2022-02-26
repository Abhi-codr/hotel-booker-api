const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rooms: { type: [mongoose.Schema.Types.ObjectId] },
  address: { type: String, required: true },
  location: { type: String },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
