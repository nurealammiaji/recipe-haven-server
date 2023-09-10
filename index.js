const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Recipe Haven Server");
})

app.listen(port, () => {
    console.log(`Recipe Haven Server is running on ${port}`);
})