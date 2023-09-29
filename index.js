const express = require("express");
const server = express();
const cors = require("cors");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
const check = require("./middleware");

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
  res.status(200).send("welcome to the recipe api");
});

server.get("/recipe/all", (req, res) => {
  res.status(200).send(initialRecipe);
});

server.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/add", (req, res) => {
  res.sendFile(__dirname + "/recipe.html");
});

server.post("/recipe/add", check, (req, res) => {
  req.body.id = initialRecipe.length + 1;

  initialRecipe.push(req.body);
  res.status(200).send(initialRecipe);
});

server.patch("/recipe/update/:id", (req, res) => {
  const indexToUpdate = initialRecipe.findIndex(
    (recipe) => recipe.id == req.params.id
  );

  initialRecipe[indexToUpdate] = {
    ...initialRecipe[indexToUpdate],
    ...req.body,
  };

  res.status(200).send(initialRecipe);
});

server.delete("/recipe/delete/:id", (req, res) => {
  const deletedData = initialRecipe.filter((ele) => ele.id != req.params.id);

  initialRecipe = [...deletedData];

  res.status(200).send(initialRecipe);
});

server.get("/*", (req, res) => {
  res.status(200).send("<h1>Page not found 404</h1>");
});

server.listen(8090, () => {
  console.log("Listenint on port 8090");
});
