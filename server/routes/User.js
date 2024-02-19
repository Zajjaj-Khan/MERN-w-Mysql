const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({ username: username, password: hash });
  });
  res.json("Success");
});
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({where: {username: username}})
   if(!user){
    res.json('User not found');
   }
   bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    res.json("YOU LOGGED IN!!!");
  });


})

module.exports = router;
