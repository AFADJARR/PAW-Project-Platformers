
let products = [
  {
    id: 1,
    name: "Akrilik Standar",
    category: "Mobil",
    price: 120000,
    status: "Tersedia",
  },
  {
    id: 2,
    name: "Akrilik LED",
    category: "Mobil",
    price: 250000,
    status: "Tersedia",
  },
  {
    id: 3,
    name: "Aluminium Standar",
    category: "Motor",
    price: 60000,
    status: "Tersedia",
  },
];

exports.getAllProducts = (req, res) => {
  res.json({ success: true, data: products });
};

exports.createProduct = (req, res) => {
  const { name, category, price, status } = req.body;
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    category,
    price: Number(price),
    status: status || "Tersedia",
  };
  products.push(newProduct);
  res.status(201).json({ success: true, data: newProduct });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, category, price, status } = req.body;
  const index = products.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Produk tidak ditemukan" });
  }

  products[index] = {
    ...products[index],
    name,
    category,
    price: Number(price),
    status,
  };
  res.json({ success: true, data: products[index] });
};
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  products = products.filter((p) => p.id !== parseInt(id));
  res.json({ success: true, message: "Produk berhasil dihapus" });
};
