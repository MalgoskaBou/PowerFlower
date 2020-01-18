const { Flower } = require("../models/flower");

async function mutateFlowerValidation(flowerID, userID, zoneValidation) {
  const currentFlowerZone = await Flower.findById(flowerID, "zoneID");
  if (!currentFlowerZone)
    throw new Error("Flower with such ID does not exist in the database");
  return zoneValidation(userID, currentFlowerZone.zoneID);
}

module.exports = mutateFlowerValidation;
