const graphql = require("graphql");
const { GraphQLString } = graphql;
const ZoneType = require("../types/zone_type");
const { Zone, validate } = require("../../models/zone");
const { authorization } = require("../../services/auth");

const addZone = {
  type: ZoneType,
  args: {
    name: { type: GraphQLString },
    avatarURL: { type: GraphQLString }
  },
  resolve(parentValue, args, req) {
    authorization(req);
    const { name, avatarURL } = args;
    const userID = req.user.id;

    const { error } = validate({ name, userID, avatarURL });
    if (error) throw new Error(error.details[0].message);

    let zone = new Zone({
      name,
      userIDs: [userID],
      avatarURL
    });
    return zone.save();
  }
};

module.exports = addZone;
