const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const ZoneType = require("../types//zone_type");
const { Zone } = require("../../models/zone");
const { authorization } = require("../../services/auth");
const deleteZoneValidation = require("../../services/deleteZoneValidation");

const removeZone = {
  type: ZoneType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: async (parent, args, req) => {
    authorization(req);
    await deleteZoneValidation(req.user.id, args.id);
    return Zone.findByIdAndRemove(args.id);
  }
};

module.exports = removeZone;
