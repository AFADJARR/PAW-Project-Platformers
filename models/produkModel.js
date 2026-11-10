const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Produk = sequelize.define(
  "Produk",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Tersedia",
    },
  },
  {
    tableName: "produk",
    timestamps: false,
  },
);

module.exports = Produk;
