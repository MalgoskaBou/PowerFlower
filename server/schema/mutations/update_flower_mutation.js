const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull, GraphQLString, GraphQLInt } = graphql;
const FlowerType = require("../types/flower_type");
const { Flower } = require("../../models/flower");
const { authorization } = require("../../services/auth");

const updateFlower = {
  type: FlowerType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    wateringFrequencyInDays: { type: GraphQLInt },
    lastWatering: { type: GraphQLString },
    avatarURL: { type: GraphQLString },
    zoneID: { type: GraphQLID },
    wateringUserID: { type: GraphQLID }
  },
  resolve: (parent, args, req) => {
    authorization(req);
    return Flower.findByIdAndUpdate(
      args.id,
      { ...args },
      { new: true, omitUndefined: true }
    );
  }
};

module.exports = updateFlower;
