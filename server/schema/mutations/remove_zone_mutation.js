const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const mongoose = require("mongoose");
const ZoneType = require("../types/zone_type");
const { Zone } = require("../../models/zone");
const { Flower } = require("../../models/flower");
const { authorization } = require("../../services/auth");
const mutateZoneValidation = require("../../services/mutateZoneValidation");

const removeZone = {
  type: ZoneType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: async (parent, args, req) => {
    authorization(req);
    await mutateZoneValidation(req.user.id, args.id);

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      await Flower.remove(
        {
          zoneID: args.id
        },
        { session }
      );
      const zone = await Zone.findByIdAndRemove(args.id).session(session);

      await session.commitTransaction();
      session.endSession();
      return zone;
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      throw err;
    }
  }
};

module.exports = removeZone;
