const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('socailDB', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });
  module.exports = sequelize;