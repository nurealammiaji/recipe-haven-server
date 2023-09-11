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

app.get("/recipes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const specificRecipe = recipes.find(recipe => parseInt(recipe.id) === id);
    res.send(specificRecipe);
})

app.get("/recipes/cuisines/:cuisine", (req, res) => {
    const cuisine = req.params.cuisine;
    const specificCuisine = recipes.filter(recipe => recipe.cuisine === cuisine);
    res.send(specificCuisine);
})

app.get("/recipes/chefs/:chef", (req, res) => {
    const chef = req.params.chef;
    const specificChef = recipes.filter(recipe => recipe.chef === chef);
    res.send(specificChef);
})

app.listen(port, () => {
    console.log(`Recipe Haven Server is running on ${port}`);
})