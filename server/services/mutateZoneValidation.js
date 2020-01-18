const { Zone } = require("../models/zone");

async function mutateZoneValidation(userID, zoneID) {
  const usersFromCurrentZone = await Zone.findById(zoneID, "userIDs");
  if (!usersFromCurrentZone)
    throw new Error("Zone with such ID does not exist in the database");
  const currentUser = usersFromCurrentZone.userIDs.some(id =>
    id.equals(userID)
  );
  if (!currentUser)
    throw new Error("You must belong to the zone to be able to mutate it");
}

module.exports = mutateZoneValidation;
