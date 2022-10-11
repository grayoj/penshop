const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// Sign Up
// Sets up an asyncronous function to return a promise
router.post("/signup", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_CODE
    ).toString(),
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

// Sign-in
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("You entered wrong info.");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_CODE
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("This are the wrong login details!");

    // define access token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.enc.JWT_CODE,
      { expiresIn: "4d" }
    );

    const { password, ...others } = user.doc;
    //user;

    res.status(200).json({ ...others, accessToken });
    // (others, accessToken)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
