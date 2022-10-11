const router = require("express").Router();
const User = require("../models/User");

// Sign Up
// Sets up an asyncronous function to return a promise
router.post("/signup", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

// Try and catch block for any errors in our request
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    console.log(savedUser);
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
