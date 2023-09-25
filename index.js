const express = require("express");
const server = express();
const cors = require("cors");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

let initialRecipe = [
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    preparationTime: "15 minutes",
    cookingTime: "11",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    country: "America",
    veg: true,
    id: 1,
  },
  {
    name: "Manchurian",
    description: "A classic Italian pasta dish.",
    preparationTime: "15 minutes",
    cookingTime: "10",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    country: "China",
    veg: true,
    id: 2,
  },
  {
    name: "Chicken Soup",
    description: "A classic Italian pasta dish.",
    preparationTime: "15 minutes",
    cookingTime: "15",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    country: "India",
    veg: false,
    id: 3,
  },
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    preparationTime: "15 minutes",
    cookingTime: "14",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    country: "India",
    veg: true,
    id: 4,
  },
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    preparationTime: "15 minutes",
    cookingTime: "13",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    country: "India",
    veg: true,
    id: 5,
  },
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    preparationTime: "15 minutes",
    cookingTime: "12",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    country: "India",
    veg: true,
    id: 6,
  },
];

server.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the Recipe API.</h1>");
});

server.get("/recipe/all", (req, res) => {
  res.status(200).send(initialRecipe);
});

server.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/add", (req, res) => {
  res.sendFile(__dirname + "/recipie.html");
});

server.post("/recipie/post", (req, res) => {
  const productDetails = {
    name: req.body.name,
    description: req.body.description,
    preparationTime: req.body.preparationTime,
    cookingTime: req.body.cookingTime,
    imageUrl: req.body.imageUrl,
    country: req.body.country,
    veg: req.body.veg,
    id: req.body.id,
  };
  initialRecipe = [...initialRecipe, productDetails];
  res.status(200).send("Added successfully");
});

server.get("/*", (req, res) => {
  res.status(200).send("<h1>Page not found 404</h1>");
});

server.listen(8090, () => {
  console.log("Listenint on port 8090");
});
