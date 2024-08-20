const express = require("express");
const router = express.Router();

const {
  getMenu,
  getMenus,
  getMenuByType,
} = require("../controller/menus-controller");

//get all menus http://localhost:4000/menus/all
router.get("/all", getMenus);

//get specific menu http://localhost:4000/menus/{menu_id}
router.get("/:menu_id", getMenu);

//get specific menu by type http://localhost:4000/menus/{menu_type}
router.get("/type/:menu_type", getMenuByType);

//Export all menu routers from here
module.exports = router;
