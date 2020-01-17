const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const ZoneType = require("../types/zone_type");
const { Zone } = require("../../models/zone");

const zone = {
  type: ZoneType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parentValue, args) {
    return Zone.findById(args.id);
  }
};

module.exports = zone;
