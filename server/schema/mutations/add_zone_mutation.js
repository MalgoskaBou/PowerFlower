const graphql = require("graphql");
const { GraphQLString } = graphql;
const ZoneType = require("../types/zone_type");
const Zone = require("../../models/zone");

const addZone = {
  type: ZoneType,
  args: {
    name: { type: GraphQLString },
    avatarURL: { type: GraphQLString }
  },
  resolve(parentValue, args) {
    const { name, flowersID, usersID, avatarURL } = args;
    let zone = new Zone({
      name,
      avatarURL
    });
    return zone.save();
  }
};

exports.addZone = addZone;
