const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull, GraphQLString } = graphql;
const ZoneType = require("../types//zone_type");
const { Zone } = require("../../models/zone");
const { authorization } = require("../../services/auth");
const mutateZoneValidation = require("../../services/mutateZoneValidation");

const updateZone = {
  type: ZoneType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    avatarURL: { type: GraphQLString }
  },
  resolve: async (parent, args, req) => {
    authorization(req);
    await mutateZoneValidation(req.user.id, args.id);

    return Zone.findByIdAndUpdate(
      args.id,
      { ...args },
      { new: true, omitUndefined: true }
    );
  }
};

module.exports = updateZone;
