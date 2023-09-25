module.exports = check = (req, res, next) => {
  const {
    name,
    description,
    preparationTime,
    cookingTime,
    imageUrl,
    country,
    veg,
    id,
  } = req.body;

  if (
    !name ||
    !description ||
    !preparationTime ||
    !cookingTime ||
    !imageUrl ||
    !country ||
    !veg ||
    !id
  ) {
    res.status(404).send("All fields are required");
  } else {
    next();
  }
};
