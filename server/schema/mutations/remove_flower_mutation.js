const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const FlowerType = require("../types/flower_type");
const { Flower } = require("../../models/flower");
const { authorization } = require("../../services/auth");

const removeFlower = {
  type: FlowerType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: (parent, args, req) => {
    authorization(req);
    return Flower.findByIdAndRemove(args.id);
  }
};

module.exports = removeFlower;
