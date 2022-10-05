// This will import the express module
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("API is Up and Running!");
});

app.listen(5000, console.log("Our Server is Up!"));

