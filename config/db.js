const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
    logging: false, 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

module.exports = sequelize;
