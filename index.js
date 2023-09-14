const express = require("express");
const recipes = require("./data/recipes.json");
const chefs = require("./data/chefs.json");
const blog = require("./data/blog.json");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Recipe Haven Server");
})

app.get("/blog", (req, res) => {
    res.send(blog);
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

app.get("/chefs/:name", (req, res) => {
    const name = parseInt(req.params.id);
    const specificChef = chefs.find(chef => parseInt(chef.name) === name);
    res.send(specificChef);
})

app.listen(port, () => {
    console.log(`Recipe Haven Server is running on ${port}`);
})