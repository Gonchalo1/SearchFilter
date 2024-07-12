const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});

const Producto = sequelize.define('producto', {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoria: Sequelize.STRING,
  precio: Sequelize.FLOAT,
  tela: Sequelize.STRING
});

module.exports = { sequelize, Producto };
