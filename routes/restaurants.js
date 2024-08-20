const express = require("express");
const router = express.Router();

const {
  getRestaurantMenu,
  getRestaurants,
} = require("../controller/restaurants-controller");

//get all restaurants http://localhost:4000/restaurants/all
router.get("/all", getRestaurants);

//get specific restaurants menu http://localhost:4000/restaurants/menu/{restaurant_id}
router.get("/menu/:restaurant_id", getRestaurantMenu);

//Export all restaurants routers from here
module.exports = router;
