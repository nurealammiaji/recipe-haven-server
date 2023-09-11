const express = require("express");
const recipes = require("./data/recipes.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Recipe Haven Server");
})

app.get("/recipes", (req, res) => {
    res.send(recipes);
})

app.listen(port, () => {
    console.log(`Recipe Haven Server is running on ${port}`);
})