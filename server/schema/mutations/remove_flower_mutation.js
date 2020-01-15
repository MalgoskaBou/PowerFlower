const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const FlowerType = require("../types/flower_type");
const { Flower } = require("../../models/flower");

const removeFlower = {
  type: FlowerType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: (parent, args) => {
    return Flower.findByIdAndRemove(args.id);
  }
};

module.exports = removeFlower;
