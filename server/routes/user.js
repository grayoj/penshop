const router = require("express").Router();
const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

router.put("/:id", verifyToken, async (res, req, next) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req_body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// We used this to test our APIS
// router.get("/testuser", (req, res) => {
//     res.send("user test is sucessfull");
// });

// router.post("/userposttest", (req, res) => {
//     const username = req.body.username;
//     res.send(username);
// });

module.exports = router;
