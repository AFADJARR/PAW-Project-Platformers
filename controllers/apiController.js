const Product = require("../models/produkModel");
const config = require("../config/index");

const apiController = {
  getStatus: (req, res) => {
    res.json({
      app: config.appName,
      version: config.version,
      status: "Server is running smoothly (24/7)",
      timestamp: new Date(),
    });
  },

  getProduk: (req, res) => {
    const availableProducts = Product.getAvailable();
    res.json({
      success: true,
      count: availableProducts.length,
      data: availableProducts,
    });
  },
};

module.exports = apiController;
