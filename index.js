const express = require("express");
const recipes = require("./data/recipes.json");
const chefs = require("./data/chefs.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Recipe Haven Server");
})

app.get("/recipes", (req, res) => {
    res.send(recipes);
})

app.get("/recipes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const specificRecipe = recipes.find(recipe => parseInt(recipe.id) === id);
    res.send(specificRecipe);
})

app.get("/recipes/chefs/:chef", (req, res) => {
    const chef = req.params.chef;
    const specificChef = recipes.filter(recipe => recipe.chef === chef);
    res.send(specificChef);
})

app.get("/chefs", (req, res) => {
    res.send(chefs);
})

app.get("/chefs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const specificChef = chefs.find(chef => parseInt(chef.id) === id);
    res.send(specificChef);
})

app.listen(port, () => {
    console.log(`Recipe Haven Server is running on ${port}`);
})