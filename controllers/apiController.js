const Produk = require("../models/produkModel");


exports.getStatus = (req, res) => {
  res
    .status(200)
    .json({ status: "API is running smoothly", timestamp: new Date() });
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Produk.findAll();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/produk/:id (Read By ID) - Mengambil detail satu data berdasarkan ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Produk.findByPk(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Produk tidak ditemukan" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/produk (Create) - Menambahkan data baru ke dalam database
exports.createProduct = async (req, res) => {
  try {
    const { name, category, price, status } = req.body;

    const newProduct = await Produk.create({
      name,
      category,
      price: Number(price),
      status: status || "Tersedia",
    });

    res
      .status(201)
      .json({
        success: true,
        message: "Produk berhasil ditambahkan",
        data: newProduct,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, price, status } = req.body;

    const [updated] = await Produk.update(
      { name, category, price: Number(price), status },
      { where: { id: parseInt(id) } },
    );

    if (!updated) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Produk tidak ditemukan untuk diperbarui",
        });
    }

    const updatedProduct = await Produk.findByPk(id);
    res
      .status(200)
      .json({
        success: true,
        message: "Produk berhasil diperbarui",
        data: updatedProduct,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Produk.destroy({ where: { id: parseInt(id) } });

    if (!deleted) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Produk tidak ditemukan untuk dihapus",
        });
    }

    res.status(200).json({ success: true, message: "Produk berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
