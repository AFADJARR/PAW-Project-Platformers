const Product = require("../models/produkModel");
const config = require("../config/index");

const homeController = {
  renderIndex: (req, res) => {
    const products = Product.getAll();
    res.render("index", {
      title: `${config.appName} - Layanan Pemesanan Plat Custom`,
      products: products,
      author: config.author,
    });
  },
};

module.exports = homeController;
