const Hotel = require("../models/hotels");
const catchAsync = require("../utils/catchAsync");

const getAllHotels = catchAsync(async (req, res, next) => {
  const hotels = await Hotel.find({});
  res.status(200).json({ message: "success", data: hotels });
});

module.exports = { getAllHotels };
