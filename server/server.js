// This will import the express module
const express = require("express");
// This instansiates our express app
const app = express();
// This imports/requires the mongoose module
const mongoose = require("mongoose");
// This imports our enviroment variables
const dotenv = require("dotenv");
// Instantiates the dotenv config
dotenv.config();
// require routes from user
const userRoute = require("./routes/user");
// require routes for auth
const authRoute = require("./routes/auth");

// Instruct the ORM layer to connect to database instance WITH AN ENV
mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    console.log("The database connection was sucessfully established")
  )
  .catch((err) => {
    console.log(err);
  });

// To test apis
// app.get("/api/testing", (req, res) => {
//     res.send("API is working");
// })

// use apiRoute
app.use(express.json());
app.use("/api/user", userRoute);
// auth fir
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Our Server is Up!");
});
