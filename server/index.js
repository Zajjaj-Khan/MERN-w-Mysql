const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
const db = require("./config/db");
app.use(cors());
//Routers
const postRouter = require("./routes/Post");
app.use("/posts", postRouter);
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
