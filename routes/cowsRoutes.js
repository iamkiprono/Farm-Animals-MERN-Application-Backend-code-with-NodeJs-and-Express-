const express = require("express");
const {
  addCow,
  getCows,
  deleteCow,
  getCow,
} = require("../controllers/cowsController");
const router = express.Router();

// get all cows
router.get("/", getCows);

// get all cows
router.get("/:id", getCow);

// add a cow
router.post("/", addCow);

// delete a cow
router.delete("/:id", deleteCow);

module.exports = router;
