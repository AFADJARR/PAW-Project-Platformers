const products = [
  {
    id: 1,
    category: "Mobil",
    material: "Akrilik Standar",
    price: 120000,
    isAvailable: true,
  },
  {
    id: 2,
    category: "Mobil",
    material: "Akrilik LED",
    price: 250000,
    isAvailable: true,
  },
  {
    id: 3,
    category: "Motor",
    material: "Aluminium Standar",
    price: 60000,
    isAvailable: true,
  },
  {
    id: 4,
    category: "Motor",
    material: "Aluminium Pantul (Reflector)",
    price: 85000,
    isAvailable: false,
  },
];

const Product = {
  getAll: () => products,
  getAvailable: () => products.filter((p) => p.isAvailable),
};

module.exports = Product;
