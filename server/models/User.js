const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = sequelize.define(
  "User",
  ({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  })
);

module.exports = User;
