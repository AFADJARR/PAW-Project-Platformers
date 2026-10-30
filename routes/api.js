const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/status", apiController.getStatus);
router.get("/produk", apiController.getProduk);

module.exports = router;
