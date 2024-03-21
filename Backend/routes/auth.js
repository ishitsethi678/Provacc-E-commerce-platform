const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  try {
    if (!name || !email || !phone || !password || !cpassword) {
      return res.status(420).json({ error: "Some fields are Empty" });
    }
    //checking for password and cpassword
    if (password != cpassword) {
      return status(420).json({
        error: "password and confirmpassword should be the same",
      });
    }
    //checking for email and phone
    const existingUser = await User.find({ email: email, phone: phone });
    if (existingUser.length > 0) {
      return res.status(400).json({ error: "user already exists" });
    }
    let user = new User({ name, email, phone, password, cpassword });
    user.save();
    if (user) {
      res.send("user got saved");
    }
  } catch (err) {
    console.log(err);
    return res.status(422).json({ error: "there was an error" });
  }
});

module.exports = router;
