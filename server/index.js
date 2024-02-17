const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const db = require("./config/db");
app.use(cors());
const Comment=require("./models/Comment");
const Post=require("./models/Post");
//Linking Tables
Post.hasMany(Comment,{
  onDelete: 'cascade'
});
Comment.belongsTo(Post);
//Routers
const postRouter = require("./routes/Post");
app.use("/posts", postRouter);
//comment Route
const commentRouter = require("./routes/Comments");
app.use("/comments",commentRouter);
db.sync()
  .then((res) => {
    //run server at 8080 port
    app.listen(3001, (req, res) => {
      console.log("Sever runnig on port3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
