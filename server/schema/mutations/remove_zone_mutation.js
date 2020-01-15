const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const ZoneType = require("../types//zone_type");
const { Zone } = require("../../models/zone");

const removeZone = {
  type: ZoneType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: (parent, args) => {
    return Zone.findByIdAndRemove(args.id);
  }
};

module.exports = removeZone;
