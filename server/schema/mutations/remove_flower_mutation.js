const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const FlowerType = require("../types/flower_type");
const { Flower } = require("../../models/flower");
const { authorization } = require("../../services/auth");
const mutateFlowerValidation = require("../../services/mutateFlowerValidation");
const mutateZoneValidation = require("../../services/mutateZoneValidation");

const removeFlower = {
  type: FlowerType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: async (parent, args, req) => {
    authorization(req);
    await mutateFlowerValidation(args.id, req.user.id, mutateZoneValidation);
    return Flower.findByIdAndRemove(args.id);
  }
};

module.exports = removeFlower;
