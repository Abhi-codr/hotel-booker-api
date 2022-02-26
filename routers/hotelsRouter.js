const { getAllHotels } = require("../contollers/hotelController");

const hotelsRouter = require("express").Router();

hotelsRouter.route("/").get(getAllHotels);

module.exports = hotelsRouter;
