const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const recipes = require("./data/recipes.json");
const chefs = require("./data/chefs.json");
const blog = require("./data/blog.json");

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

app.get("/recipes/chefs/:id", (req, res) => {
    const id = req.params.id;
    const specificChefRecepies = recipes.filter(recipe => recipe.chef_id === id);
    res.send(specificChefRecepies);
})

app.get("/chefs", (req, res) => {
    res.send(chefs);
})

app.get("/chefs/:id", (req, res) => {
    const id = req.params.id;
    const specificChef = chefs.find(chef => chef.id === id);
    res.send(specificChef);
})

app.listen(port, () => {
    console.log(`Recipe Haven Server is running on ${port}`);
})