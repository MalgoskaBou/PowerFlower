const graphql = require("graphql");
const { GraphQLString } = graphql;
const ZoneType = require("../types/zone_type");
const Zone = require("../../models/zone");
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
    let zone = new Zone({
      name,
      avatarURL
    });
    return zone.save();
  }
};

module.exports = addZone;
