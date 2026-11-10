const Produk = require("../models/produkModel");

const homeController = {
  renderIndex: async (req, res) => {
    try {
      res.render("index");
    } catch (err) {
      console.error("Gagal memuat halaman utama:", err);
      res.status(500).send("Terjadi kesalahan pada server.");
    }
  },
};

module.exports = homeController;
