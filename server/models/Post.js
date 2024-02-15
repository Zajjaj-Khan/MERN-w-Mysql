const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define("Post", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postText: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Post;
